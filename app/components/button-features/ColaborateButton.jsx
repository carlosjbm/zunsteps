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
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { useFetch } from "@/app/lib/hooks/useFetch";

const actions = [
  {
    icon: <AttachFileIcon />,
    name: "Compartir link",
    title: "Compartir link",
    rAccion: "Aquí puedes compartir el link de tu proceso con otros usuarios.",
    type: "link",
  },
  {
    icon: <TipsAndUpdatesOutlinedIcon />,
    name: "Tips",
    title: "Crear un nuevo tip",
    rAccion: "Comparte tus conocimientos y tips con la comunidad.",
    type: "tip",
  },
];

export default function ColaborateButton() {
  const [selectedAction, setSelectedAction] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tema_id: "",
    clase_id: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = usePremiumAuth();
  const { data, error, refetch } = useFetch("/api/temas");

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setFormData({ nombre: "", descripcion: "", tema_id: "", clase_id: "" });
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

  const handleSubmit = async () => {
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
            <DialogContentText sx={{ marginBottom: "20px" }}>
              {selectedAction.rAccion}
            </DialogContentText>

            {message && (
              <Box sx={{ marginBottom: "15px" }}>
                <Alert severity={message.type}>{message.text}</Alert>
              </Box>
            )}

            {selectedAction.type === "tip" ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Título del Tip */}
                <Box>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: 500,
                      color: "#2c3e50",
                      fontSize: "0.9rem",
                    }}
                  >
                    Título del Tip
                  </label>
                  <Box
                    component="input"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    placeholder="Ej: Cómo optimizar tu flujo de trabajo"
                    sx={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                      "&:focus": {
                        outline: "none",
                        borderColor: "primary.blue",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  />
                </Box>

                {/* Tema */}
                <Box>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: 500,
                      color: "#2c3e50",
                      fontSize: "0.9rem",
                    }}
                  >
                    Tema
                  </label>
                  <Box
                    component="select"
                    name="tema_id"
                    value={formData.tema_id}
                    onChange={handleFormChange}
                    sx={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                      backgroundColor: "white",
                      cursor: "pointer",
                      "&:focus": {
                        outline: "none",
                        borderColor: "primary.blue",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  >
                    //Tema
                    <option value="">Selecciona un tema</option>
                    {data ? (
                      data.map((tema) => (
                        <option key={tema.id} value={tema.id}>
                          {tema.nombre}
                        </option>
                      ))
                    ) : (
                      <option value="">Cargando temas...</option>
                    )}
                  </Box>
                </Box>

                {/* Clase */}
                {/* <Box>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: 500,
                      color: "#2c3e50",
                      fontSize: "0.9rem",
                    }}
                  >
                    Clase
                  </label>
                  <Box
                    component="select"
                    name="clase_id"
                    value={formData.clase_id}
                    onChange={handleFormChange}
                    sx={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                      backgroundColor: "white",
                      cursor: "pointer",
                      "&:focus": {
                        outline: "none",
                        borderColor: "primary.blue",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  >
                    //clase
                    <option value="">Selecciona una clase</option>
                  </Box>
                </Box> */}
                {/* Descripción */}
                <Box>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: 500,
                      color: "#2c3e50",
                      fontSize: "0.9rem",
                    }}
                  >
                    Descripción del Tip
                  </label>
                  <Box
                    component="textarea"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleFormChange}
                    placeholder="Describe tu tip en detalle..."
                    rows={5}
                    sx={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      resize: "vertical",
                      boxSizing: "border-box",
                      "&:focus": {
                        outline: "none",
                        borderColor: "primary.blue",
                        boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  />
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box
                  component="input"
                  type="text"
                  placeholder="Pega el link que deseas compartir"
                  sx={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    "&:focus": {
                      outline: "none",
                      borderColor: "primary.blue",
                      boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
                    },
                  }}
                />
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} disabled={loading}>
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "background.green",
                "&:hover": {
                  backgroundColor: "background.green",
                  opacity: 0.9,
                },
              }}
            >
              {loading ? (
                <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
              ) : null}
              {loading ? "Guardando..." : "Enviar"}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
