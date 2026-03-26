"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Share } from "@mui/icons-material";
import { QuickNavigation } from "@/app/components/ui/QuickNavigation";

export default function AdminUsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [openTokenDialog, setOpenTokenDialog] = useState(false);
  const [selectedToken, setSelectedToken] = useState("");
  const [copied, setCopied] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
  });

  // Cargar usuarios
  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/admin/usuarios");

      if (!response.ok) {
        throw new Error("Error cargando usuarios");
      }

      const data = await response.json();
      setUsuarios(data);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenDialog = (usuario = null) => {
    if (usuario) {
      setEditingId(usuario.id);
      setFormData({
        nombre: usuario.nombre,
        telefono: usuario.telefono,
      });
    } else {
      setEditingId(null);
      setFormData({ nombre: "", telefono: "" });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({ nombre: "", telefono: "" });
  };

  const handleSubmit = async () => {
    try {
      setError("");

      if (!formData.nombre || !formData.telefono) {
        setError("Todos los campos son requeridos");
        return;
      }

      const url = editingId
        ? `/api/admin/usuarios/${editingId}`
        : "/api/admin/usuarios";

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error guardando usuario");
      }

      setSuccess(data.message || "Usuario guardado");
      handleCloseDialog();
      loadUsuarios();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleActivate = async (id) => {
    try {
      setError("");
      const response = await fetch(`/api/admin/usuarios/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggle-status" }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error activando usuario");
      }
      setSuccess("Usuario activado");
      loadUsuarios();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Desactivar este usuario?")) return;

    try {
      setError("");
      const response = await fetch(`/api/admin/usuarios/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error eliminando usuario");
      }

      setSuccess("Usuario desactivado");
      loadUsuarios();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegenerateToken = async (id) => {
    if (!window.confirm("¿Regenerar token? El token anterior se invalidará."))
      return;

    try {
      setError("");
      const response = await fetch(`/api/admin/usuarios/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "regenerate-token" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error regenerando token");
      }

      setSelectedToken(data.token);
      setOpenTokenDialog(true);
      loadUsuarios();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopyToken = async () => {
    try {
      await navigator.clipboard.writeText(selectedToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Error copiando token");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, md: 0 },
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Administración de Usuarios
        </Typography>
      </Box>
      <QuickNavigation admin={false} />

      {/* Alerts */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {/* Toolbar */}
      <Card sx={{ mb: 3, p: { xs: 1.5, sm: 2 } }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            sx={{
              width: { xs: "100%", sm: "auto" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Nuevo Usuario
          </Button>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={loadUsuarios}
            disabled={loading}
            sx={{
              width: { xs: "100%", sm: "auto" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Actualizar
          </Button>
        </Box>
      </Card>

      {/* Users Table */}
      <TableContainer component={Card}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    display: { xs: "none", sm: "table-cell" },
                  }}
                >
                  ID
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Nombre
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    display: { xs: "none", md: "table-cell" },
                  }}
                >
                  Teléfono
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Estado
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No hay usuarios
                  </TableCell>
                </TableRow>
              ) : (
                usuarios.map((usuario) => (
                  <TableRow
                    key={usuario.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.02)",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        display: { xs: "none", sm: "table-cell" },
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      }}
                    >
                      {usuario.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.875rem" },
                        fontWeight: 500,
                      }}
                    >
                      {usuario.nombre}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: { xs: "none", md: "table-cell" },
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      }}
                    >
                      {usuario.telefono}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={usuario.is_active ? "Activo" : "Inactivo"}
                        color={usuario.is_active ? "success" : "default"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          gap: { xs: 0.5, sm: 0.5 },
                          flexWrap: "wrap",
                        }}
                      >
                        <Tooltip title="Ver Token">
                          <IconButton
                            size="small"
                            color="info"
                            onClick={() => {
                              setSelectedToken(usuario?.token);
                              setOpenTokenDialog(true);
                            }}
                          >
                            <VisibilityIcon
                              sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                            />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Regenerar">
                          <IconButton
                            size="small"
                            color="warning"
                            onClick={() => handleRegenerateToken(usuario.id)}
                          >
                            <RefreshIcon
                              sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                            />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Editar">
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleOpenDialog(usuario)}
                          >
                            <EditIcon
                              sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                            />
                          </IconButton>
                        </Tooltip>

                        {usuario.is_active ? (
                          <Tooltip title="Desactivar">
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => handleDelete(usuario.id)}
                            >
                              <DeleteIcon
                                sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                              />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip title="Activar">
                            <IconButton
                              size="small"
                              color="success"
                              onClick={() => handleActivate(usuario.id)}
                            >
                              <CheckCircleIcon
                                sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {/* Dialog: Crear/Editar Usuario */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { mx: { xs: 2, sm: 0 } },
        }}
      >
        <DialogTitle>
          {editingId ? "Editar Usuario" : "Crear Nuevo Usuario"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2, px: { xs: 2, sm: 3 } }}>
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleFormChange}
            margin="normal"
            placeholder="Ej: Carlos Borges"
            size="small"
          />
          <TextField
            fullWidth
            label="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleFormChange}
            margin="normal"
            placeholder="Ej: +53 5 1234567"
            helperText="Formato: +53 o 10-15 dígitos"
            size="small"
          />
        </DialogContent>
        <DialogActions sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
          <Button onClick={handleCloseDialog} size="small">
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={!formData.nombre || !formData.telefono}
            size="small"
          >
            {editingId ? "Actualizar" : "Crear"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog: Ver/Copiar Token */}
      <Dialog
        open={openTokenDialog}
        onClose={() => setOpenTokenDialog(false)}
        PaperProps={{
          sx: { mx: { xs: 2, sm: 0 } },
        }}
      >
        <DialogTitle sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
          Token del Usuario
        </DialogTitle>
        <DialogContent
          sx={{
            minWidth: { xs: "auto", sm: 400 },
            pt: 2,
            px: { xs: 2, sm: 3 },
          }}
        >
          <Alert
            severity="warning"
            sx={{ mb: 2, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            Guarda este token en un lugar seguro. No se puede recuperar después.
          </Alert>
          <Box
            sx={{
              p: 1.5,
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              wordBreak: "break-all",
              fontFamily: "monospace",
              fontSize: { xs: "0.7rem", sm: "0.85rem" },
              mb: 2,
              maxHeight: "150px",
              overflow: "auto",
            }}
          >
            {selectedToken}
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
          <Button
            variant="contained"
            startIcon={<FileCopyIcon />}
            onClick={handleCopyToken}
            size="small"
          >
            {copied ? "¡Copiado!" : "Copiar"}
          </Button>
          <Button onClick={() => setOpenTokenDialog(false)} size="small">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
