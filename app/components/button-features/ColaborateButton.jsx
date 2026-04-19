"use client";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { useFetch } from "@/app/lib/hooks/useFetch";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import {
  ErrorOutlineOutlined,
  ShareOutlined,
  CloudUploadOutlined,
} from "@mui/icons-material";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import { HeaderMotivator } from "../reusables/HederMotivador";

const actions = [
  {
    icon: <LinkOutlinedIcon />,
    name: "Compartir link",
    title: "Compartir link",
    rAccion:
      "Aquí puedes compartir links a recursos de interés para la comunidad.",
    type: "link",
  },
  {
    icon: <TipsAndUpdatesOutlinedIcon />,
    name: "Tips",
    title: "Crear un nuevo tip",
    rAccion: "Comparte tus conocimientos y tips con la comunidad.",
    type: "tip",
  },
  {
    icon: <ErrorOutlineOutlined />,
    name: "Errores",
    title: "Comparte un error y su solución",
    rAccion: "Comparte la solución a un error al que te hayas enfrentado.",
    type: "error",
  },
];

export default function ColaborateButton() {
  const [selectedAction, setSelectedAction] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tema_id: "",
    clase_id: "",
    url: "",
    descriptionLink: "",
    errorTitle: "",
    problemDescription: "",
    solution: "",
    nivel_acc: "1",
    errorImage: null,
    errorImagePath: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = usePremiumAuth();
  const { data, error, refetch } = useFetch("/api/temas");

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setFormData({
      nombre: "",
      descripcion: "",
      tema_id: "",
      clase_id: "",
      url: "",
      descriptionLink: "",
      errorTitle: "",
      problemDescription: "",
      solution: "",
      nivel_acc: "1",
      errorImage: null,
      errorImagePath: "",
    });
    setMessage(null);
  };

  const handleCloseDialog = () => {
    setSelectedAction(null);
    setMessage(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tamaño
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setMessage({
        type: "error",
        text: "La imagen no puede pesar más de 5MB",
      });
      return;
    }

    // Validar tipo
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setMessage({
        type: "error",
        text: "Solo se aceptan imágenes (JPG, PNG, GIF, WebP)",
      });
      return;
    }

    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({
          ...prev,
          errorImage: file,
          errorImagePath: data.imagePath,
        }));
        setMessage({
          type: "success",
          text: "✓ Imagen subida exitosamente",
        });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Error al subir la imagen",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        type: "error",
        text: "Error al conectar con el servidor",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      errorImage: null,
      errorImagePath: "",
    }));
    setMessage(null);
  };

  const handleSubmit = async () => {
    if (selectedAction.type === "error") {
      if (
        !formData.errorTitle.trim() ||
        !formData.errorImagePath ||
        !formData.solution.trim()
      ) {
        setMessage({
          type: "error",
          text: "Por favor completa todos los campos requeridos (error, imagen y solución)",
        });
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/errors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            error: formData.errorTitle,
            solucion: formData.solution,
            imagen: formData.errorImagePath,
            nivel_acc: parseInt(formData.nivel_acc) || 1,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage({
            type: "success",
            text: "¡Error y solución compartidos exitosamente! 🎉 Gracias por ayudar a la comunidad.",
          });
          setFormData({
            errorTitle: "",
            problemDescription: "",
            solution: "",
            nivel_acc: "1",
            errorImage: null,
            errorImagePath: "",
            nombre: "",
            descripcion: "",
            tema_id: "",
            clase_id: "",
            url: "",
            descriptionLink: "",
          });
          setTimeout(() => {
            handleCloseDialog();
          }, 2500);
        } else {
          setMessage({
            type: "error",
            text: data.message || "Error al compartir el error",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage({
          type: "error",
          text: "Error al conectar con el servidor",
        });
      } finally {
        setLoading(false);
      }
      return;
    }

    if (selectedAction.type === "tip") {
      if (!formData.nombre.trim() || !formData.descripcion.trim()) {
        setMessage({
          type: "error",
          text: "Por favor completa todos los campos",
        });
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/tips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            descripcion: formData.descripcion,
            usuario_id: user?.id,
            tema_id: parseInt(formData.tema_id) || 3,
            clase_id: parseInt(formData.clase_id) || 1,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage({
            type: "success",
            text: "¡Tip creado exitosamente! Gracias por compartir tu conocimiento.",
          });
          setFormData({ nombre: "", descripcion: "" });
          setTimeout(() => {
            handleCloseDialog();
          }, 2000);
        } else {
          setMessage({
            type: "error",
            text: data.error || "Error al crear el tip",
          });
        }
      } catch (error) {
        setMessage({
          type: "error",
          text: "Error al conectar con el servidor",
        });
      } finally {
        setLoading(false);
      }
    }

    if (selectedAction.type === "link") {
      if (!formData.url) {
        setMessage({
          type: "error",
          text: "Por favor completa todos los campos",
        });
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch("/api/links", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: formData.url,
            descriptionLink: formData.descriptionLink,
            userId: user?.id,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage({
            type: "success",
            text: "¡Link compartido exitosamente! Gracias por compartir .",
          });
          setFormData({ url: "", descripcionLink: "" });
          setTimeout(() => {
            handleCloseDialog();
          }, 2000);
        } else {
          setMessage({
            type: "error",
            text: data.error || "Error al crear el link",
          });
        }
      } catch (error) {
        setMessage({
          type: "error",
          text: "Error al conectar con el servidor",
        });
      }
    } else {
      handleCloseDialog();
    }
  };

  return (
    <>
      <Box
        sx={{
          height: 100,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              onClick={() => handleActionClick(action)}
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>

      {selectedAction && (
        <Dialog
          fullScreen={fullScreen}
          open={!!selectedAction}
          onClose={handleCloseDialog}
          aria-labelledby="dialog-title"
        >
          <DialogTitle id="dialog-title">{selectedAction.title}</DialogTitle>
          <DialogContent>
            {selectedAction.type === "error" ? (
              <>
                <HeaderMotivator />
                {message && (
                  <Box sx={{ marginBottom: "20px" }}>
                    <Alert
                      severity={message.type}
                      icon={
                        message.type === "success" ? (
                          <CheckCircleOutlineIcon />
                        ) : undefined
                      }
                    >
                      {message.text}
                    </Alert>
                  </Box>
                )}

                {/* Presentación motivadora */}
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "rgba(51, 210, 164, 0.08)",
                    borderRadius: 1.5,
                    marginBottom: 2.5,
                    borderLeft: "4px solid",
                    borderColor: "background.green",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "primary.text",
                      lineHeight: 1.6,
                    }}
                  >
                    Sabemos que como asistente técnico de ZUN enfrentas desafíos
                    diarios.
                    <strong> Tu experiencia es invaluable.</strong> Comparte los
                    errores que has resuelto y ayuda a otros técnicos a trabajar
                    más eficientemente.
                  </Typography>
                </Box>

                {/* Formulario con mejor UX */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* Campo: Nombre del Error */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <ErrorOutlineOutlined
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        ¿Cuál es el error?
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "primary.text", display: "block", mb: 1 }}
                    >
                      Ej: "Error 500 en módulo de facturación", "Base de datos
                      conectada"
                    </Typography>
                    <TextField
                      fullWidth
                      name="errorTitle"
                      value={formData.errorTitle}
                      onChange={handleFormChange}
                      placeholder="Nombre o código del error..."
                      variant="outlined"
                      size="small"
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.blue",
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Campo: Imagen del Error */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <CloudUploadOutlined
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        Captura del Error
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "primary.text", display: "block", mb: 1.5 }}
                    >
                      Sube una captura de pantalla del error (JPG, PNG, GIF o
                      WebP - máx 5MB)
                    </Typography>

                    {/* Preview de la imagen */}
                    {formData.errorImagePath ? (
                      <Box
                        sx={{
                          position: "relative",
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          border: "2px solid",
                          borderColor: "background.green",
                          padding: 1,
                          marginBottom: 1.5,
                        }}
                      >
                        <Box
                          component="img"
                          src={formData.errorImagePath}
                          alt="Preview"
                          sx={{
                            width: "100%",
                            maxHeight: 200,
                            borderRadius: 1,
                            objectFit: "cover",
                          }}
                        />
                        <Button
                          onClick={handleRemoveImage}
                          disabled={loading}
                          size="small"
                          variant="outlined"
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "white",
                            borderColor: "#d32f2f",
                            color: "#d32f2f",
                            "&:hover": {
                              backgroundColor: "#ffebee",
                              borderColor: "#d32f2f",
                            },
                          }}
                        >
                          Eliminar
                        </Button>
                      </Box>
                    ) : (
                      <Box
                        component="label"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          gap: 1.5,
                          padding: 3,
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          border: "2px dashed #e0e0e0",
                          cursor: loading ? "not-allowed" : "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "primary.blue",
                            backgroundColor: "rgba(51, 210, 164, 0.05)",
                          },
                          opacity: loading ? 0.6 : 1,
                        }}
                      >
                        <CloudUploadOutlined
                          sx={{
                            fontSize: 40,
                            color: "primary.blue",
                            opacity: 0.6,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "primary.text",
                            fontWeight: 500,
                            textAlign: "center",
                          }}
                        >
                          Haz clic o arrastra la imagen aquí
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "primary.text", opacity: 0.7 }}
                        >
                          JPG, PNG, GIF o WebP
                        </Typography>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={loading}
                          hidden
                          aria-label="Subir imagen del error"
                        />
                      </Box>
                    )}
                  </Box>

                  {/* Campo: Solución */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{ color: "background.green", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        ¿Cuál fue la solución?
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "primary.text", display: "block", mb: 1 }}
                    >
                      Explica paso a paso cómo lo resolviste. Sé detallado y
                      claro.
                    </Typography>
                    <TextField
                      fullWidth
                      name="solution"
                      value={formData.solution}
                      onChange={handleFormChange}
                      placeholder="Ej: 
1. Verifica la versión de la base de datos...
2. Ejecuta el siguiente comando SQL: UPDATE...
3. Reinicia el servicio
4. Prueba creando nuevamente la factura

Resultado esperado: La factura se procesa correctamente..."
                      variant="outlined"
                      multiline
                      rows={6}
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.blue",
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Campo: Nivel de Acceso */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <PeopleOutlineIcon
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        ¿Quién puede verlo?
                      </Typography>
                    </Box>
                    <FormControl fullWidth size="small" disabled={loading}>
                      <Select
                        name="nivel_acc"
                        value={formData.nivel_acc}
                        onChange={handleFormChange}
                        sx={{
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.blue",
                          },
                        }}
                      >
                        <MenuItem value="1">
                          Público - Toda la comunidad
                        </MenuItem>
                        <MenuItem value="2">Asistentes Técnicos</MenuItem>
                        <MenuItem value="3">Administradores</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  {/* Footer con motivación */}
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      padding: 2,
                      backgroundColor: "rgba(51, 210, 164, 0.05)",
                      borderRadius: 1.5,
                    }}
                  >
                    <LocalFireDepartmentIcon
                      sx={{ color: "background.green", fontSize: 24, mt: 0.5 }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "primary.text",
                          fontWeight: 600,
                          marginBottom: 0.5,
                        }}
                      >
                        🚀 ¡Tu conocimiento salva tiempo!
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "primary.text",
                          display: "block",
                          lineHeight: 1.5,
                        }}
                      >
                        Cada error que compartes evita que otros técnicos
                        pierdan horas buscando soluciones. Eres parte del
                        crecimiento de la comunidad ZUN.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : selectedAction.type === "tip" ? (
              <>
                <HeaderMotivator />
                {message && (
                  <Box sx={{ marginBottom: "20px" }}>
                    <Alert
                      severity={message.type}
                      icon={
                        message.type === "success" ? (
                          <CheckCircleOutlineIcon />
                        ) : undefined
                      }
                    >
                      {message.text}
                    </Alert>
                  </Box>
                )}

                {/* Formulario con mejor UX */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* Campo Título */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <LightbulbOutlinedIcon
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        Título del Tip
                      </Typography>
                    </Box>
                    <TextField
                      fullWidth
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleFormChange}
                      placeholder="Ej: Siempre usa el usuario Administrador"
                      variant="outlined"
                      size="small"
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.blue",
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Campo Tema */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <SchoolIcon
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        Tema
                      </Typography>
                    </Box>
                    <FormControl fullWidth size="small" disabled={loading}>
                      <InputLabel>Selecciona un tema</InputLabel>
                      <Select
                        name="tema_id"
                        value={formData.tema_id}
                        onChange={handleFormChange}
                        label="Selecciona un tema"
                        sx={{
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.blue",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>Selecciona un tema</em>
                        </MenuItem>
                        {data ? (
                          data.map((tema) => (
                            <MenuItem key={tema.id} value={tema.id}>
                              {tema.nombre}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>
                            <em>Cargando temas...</em>
                          </MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  </Box>

                  {/* Campo Descripción */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <DescriptionIcon
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        Descripción
                      </Typography>
                    </Box>
                    <TextField
                      fullWidth
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleFormChange}
                      placeholder="Comparte los detalles de tu tip. Sé específico y práctico para que otros puedan aplicarlo fácilmente..."
                      variant="outlined"
                      multiline
                      rows={6}
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.blue",
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Footer con motivación */}
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      padding: 2,
                      backgroundColor: "rgba(51, 210, 164, 0.05)",
                      borderRadius: 1.5,
                    }}
                  >
                    <LocalFireDepartmentIcon
                      sx={{ color: "background.green", fontSize: 24 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "primary.text",
                        fontStyle: "italic",
                        fontSize: "0.9rem",
                      }}
                    >
                      Cada tip que publicas ayuda a la comunidad a crecer.
                      ¡Gracias por contribuir!
                    </Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <HeaderMotivator />
                {message && (
                  <Box sx={{ marginBottom: "20px" }}>
                    <Alert
                      severity={message.type}
                      icon={
                        message.type === "success" ? (
                          <CheckCircleOutlineIcon />
                        ) : undefined
                      }
                    >
                      {message.text}
                    </Alert>
                  </Box>
                )}
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1.5,
                    }}
                  >
                    <LinkOutlinedIcon
                      sx={{ color: "primary.blue", fontSize: 22 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      URL del recurso a compartir
                    </Typography>
                  </Box>
                  <TextField
                    sx={{
                      mb: 1.5,
                    }}
                    fullWidth
                    name="url"
                    value={formData.url}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Pega el link que deseas compartir"
                    variant="outlined"
                    size="small"
                    disabled={loading}
                  />
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <DescriptionIcon
                        sx={{ color: "primary.blue", fontSize: 22 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        Descripción (Opcional)
                      </Typography>
                    </Box>
                    <TextField
                      fullWidth
                      name="descriptionLink"
                      value={formData.descriptionLink}
                      onChange={handleFormChange}
                      placeholder="Comparte los detalles del Link que estas compartiendo. Sé específico y práctico para que otros puedan utilizarlo fácilmente..."
                      variant="outlined"
                      multiline
                      rows={6}
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "background.main",
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "primary.blue",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.blue",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions
            sx={{
              padding: 2,
              gap: 1,
              backgroundColor: "background.antiflash",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <Button
              onClick={handleCloseDialog}
              disabled={loading}
              sx={{
                color: "primary.text",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={loading}
              startIcon={
                loading ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  <ShareOutlined />
                )
              }
              sx={{
                backgroundColor: "background.green",
                color: "white",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                paddingX: 3,
                "&:hover": {
                  backgroundColor: "background.green",
                  opacity: 0.85,
                },
                "&:disabled": {
                  backgroundColor: "background.green",
                  opacity: 0.6,
                },
              }}
            >
              {loading ? "Compartiendo..." : "Compartir"}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
