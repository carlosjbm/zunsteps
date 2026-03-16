import pool from "@/app/lib/db";
import { sanitizeInput, validatePhoneNumber } from "@/app/lib/utils/security";
import { v4 as uuidv4 } from "uuid";

/**
 * Obtiene todos los usuarios (sin tokens por seguridad)
 */
export async function getAllUsers() {
  try {
    const query = `
      SELECT id, nombre, telefono, is_active
      FROM usuarios
      ORDER BY id DESC
    `;
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    throw error;
  }
}

/**
 * Obtiene un usuario específico por ID
 */
export async function getUserById(id) {
  try {
    const query = `
      SELECT id, nombre, telefono, is_active
      FROM usuarios
      WHERE id = ? LIMIT 1
    `;
    const [rows] = await pool.query(query, [id]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    throw error;
  }
}

/**
 * Crea un nuevo usuario con token UUID
 */
export async function createUser(nombre, telefono) {
  try {
    // Validar inputs
    const sanitizedNombre = sanitizeInput(nombre);
    const sanitizedTelefono = sanitizeInput(telefono);

    if (!sanitizedNombre || sanitizedNombre.length < 2) {
      throw new Error("Nombre inválido");
    }

    if (!validatePhoneNumber(sanitizedTelefono)) {
      throw new Error("Teléfono inválido");
    }

    // Generar token UUID v4
    const token = uuidv4();

    // Insertar usuario
    const query = `
      INSERT INTO usuarios (nombre, telefono, token, is_active)
      VALUES (?, ?, ?, 1)
    `;
    const [result] = await pool.query(query, [
      sanitizedNombre,
      sanitizedTelefono,
      token,
    ]);

    return {
      id: result.insertId,
      nombre: sanitizedNombre,
      telefono: sanitizedTelefono,
      token: token,
      is_active: 1,
    };
  } catch (error) {
    console.error("Error creando usuario:", error);
    throw error;
  }
}

/**
 * Actualiza un usuario
 */
export async function updateUser(id, nombre, telefono) {
  try {
    // Validar inputs
    const sanitizedNombre = sanitizeInput(nombre);
    const sanitizedTelefono = sanitizeInput(telefono);

    if (!sanitizedNombre || sanitizedNombre.length < 2) {
      throw new Error("Nombre inválido");
    }

    if (!validatePhoneNumber(sanitizedTelefono)) {
      throw new Error("Teléfono inválido");
    }

    // Actualizar usuario
    const query = `
      UPDATE usuarios
      SET nombre = ?, telefono = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [
      sanitizedNombre,
      sanitizedTelefono,
      id,
    ]);

    if (result.affectedRows === 0) {
      throw new Error("Usuario no encontrado");
    }

    return {
      id,
      nombre: sanitizedNombre,
      telefono: sanitizedTelefono,
    };
  } catch (error) {
    console.error("Error actualizando usuario:", error);
    throw error;
  }
}

/**
 * Regenera el token de un usuario
 */
export async function regenerateUserToken(id) {
  try {
    const newToken = uuidv4();

    const query = `
      UPDATE usuarios
      SET token = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [newToken, id]);

    if (result.affectedRows === 0) {
      throw new Error("Usuario no encontrado");
    }

    return {
      id,
      token: newToken,
    };
  } catch (error) {
    console.error("Error regenerando token:", error);
    throw error;
  }
}

/**
 * Activa o desactiva un usuario (toggle)
 */
export async function toggleUserStatus(id) {
  try {
    // Obtener estado actual
    const getUserQuery = `
      SELECT is_active
      FROM usuarios
      WHERE id = ?
    `;
    const [userRows] = await pool.query(getUserQuery, [id]);

    if (userRows.length === 0) {
      throw new Error("Usuario no encontrado");
    }

    // Invertir estado
    const newStatus = userRows[0].is_active === 1 ? 0 : 1;

    // Actualizar
    const updateQuery = `
      UPDATE usuarios
      SET is_active = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(updateQuery, [newStatus, id]);

    return {
      id,
      is_active: newStatus === 1,
    };
  } catch (error) {
    console.error("Error actualizando estado:", error);
    throw error;
  }
}

/**
 * Elimina un usuario
 */
export async function deleteUser(id) {
  try {
    // No eliminar, solo desactivar
    const query = `
      UPDATE usuarios
      SET is_active = 0
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [id]);

    if (result.affectedRows === 0) {
      throw new Error("Usuario no encontrado");
    }

    return { success: true, id };
  } catch (error) {
    console.error("Error eliminando usuario:", error);
    throw error;
  }
}

/**
 * Verifica si un teléfono ya está registrado
 */
export async function phoneExists(telefono) {
  try {
    const query = `
      SELECT id FROM usuarios
      WHERE telefono = ? LIMIT 1
    `;
    const [rows] = await pool.query(query, [sanitizeInput(telefono)]);
    return rows.length > 0;
  } catch (error) {
    console.error("Error verificando teléfono:", error);
    throw error;
  }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  regenerateUserToken,
  toggleUserStatus,
  deleteUser,
  phoneExists,
};
