import fs from "fs/promises";
import path from "path";

/**
 * Genera un nombre único para el archivo usando timestamp, ID aleatorio y hash
 * Formato: error_[timestamp]_[uuid].jpg
 * @param {string} originalFileName - Nombre original del archivo
 * @returns {string} - Nombre único para el archivo
 */
function generateUniqueFileName(originalFileName) {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 8);
  const fileExtension = path.extname(originalFileName).toLowerCase();

  // Validar que sea una imagen
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
  if (!allowedExtensions.includes(fileExtension)) {
    throw new Error(`Tipo de archivo no permitido: ${fileExtension}`);
  }

  return `error_${timestamp}_${randomId}${fileExtension}`;
}

/**
 * POST /api/upload
 * Maneja la subida de imágenes de errores
 */
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    // Validar que exista el archivo
    if (!file) {
      return Response.json(
        { success: false, message: "No se proporcionó archivo" },
        { status: 400 },
      );
    }

    // Validar el tamaño del archivo (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return Response.json(
        {
          success: false,
          message: "El archivo es muy grande. Máximo 5MB",
        },
        { status: 400 },
      );
    }

    // Validar que sea una imagen
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];
    if (!validMimeTypes.includes(file.type)) {
      return Response.json(
        {
          success: false,
          message:
            "El archivo debe ser una imagen válida (JPG, PNG, GIF, WebP)",
        },
        { status: 400 },
      );
    }

    // Generar nombre único
    const uniqueFileName = generateUniqueFileName(file.name);

    // Crear directorio si no existe
    const uploadDir = path.join(process.cwd(), "public", "errors_images");
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error("Error creando directorio:", error);
    }

    // Guardar archivo
    const filePath = path.join(uploadDir, uniqueFileName);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filePath, buffer);

    // Retornar ruta relativa para acceder desde el navegador
    const relativePath = `/errors_images/${uniqueFileName}`;

    return Response.json(
      {
        success: true,
        message: "Imagen subida exitosamente",
        imagePath: relativePath,
        fileName: uniqueFileName,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error en POST /api/upload:", error);
    return Response.json(
      {
        success: false,
        message: "Error al subir la imagen",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/upload
 * Elimina una imagen subida
 */
export async function DELETE(request) {
  try {
    const body = await request.json();
    const { fileName } = body;

    if (!fileName) {
      return Response.json(
        { success: false, message: "No se proporcionó nombre de archivo" },
        { status: 400 },
      );
    }

    // Validar que el nombre sea seguro (evitar path traversal)
    if (fileName.includes("..") || fileName.includes("/")) {
      return Response.json(
        { success: false, message: "Nombre de archivo inválido" },
        { status: 400 },
      );
    }

    const filePath = path.join(
      process.cwd(),
      "public",
      "errors_images",
      fileName,
    );

    // Verificar que el archivo existe
    try {
      await fs.access(filePath);
    } catch {
      return Response.json(
        { success: false, message: "Archivo no encontrado" },
        { status: 404 },
      );
    }

    // Eliminar archivo
    await fs.unlink(filePath);

    return Response.json(
      {
        success: true,
        message: "Imagen eliminada exitosamente",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error en DELETE /api/upload:", error);
    return Response.json(
      {
        success: false,
        message: "Error al eliminar la imagen",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
