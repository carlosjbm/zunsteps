import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import ResponsiveDialog from "../ui/ResponsiveDialog";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const actions = [
  {
    icon: <AttachFileIcon />,
    name: "Compartir link",
    title: "Compartir link",
    rAccion: "Aquí puedes compartir el link de tu proceso con otros usuarios.",
  },
  {
    icon: <TipsAndUpdatesOutlinedIcon />,
    name: "Tips",
    title: "Tips",
    rAccion: "Aquí puedes encontrar consejos y actualizaciones.",
  },
  //   {
  //     icon: <ShareIcon />,
  //     name: "Share",
  //     title: "Share",
  //     rAccion: "Aquí puedes compartir tu proceso con otros usuarios.",
  //   },
];

export default function ColaborateButton() {
  const [selectedAction, setSelectedAction] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleActionClick = (action) => {
    setSelectedAction(action);
  };

  const handleCloseDialog = () => {
    setSelectedAction(null);
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                component="input"
                type="text"
                placeholder="Ingresa tu información"
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
              <Box
                component="textarea"
                placeholder="Escribe tu mensaje o comentario aquí..."
                rows={4}
                sx={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  resize: "vertical",
                  "&:focus": {
                    outline: "none",
                    borderColor: "primary.blue",
                    boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
                  },
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button
              onClick={handleCloseDialog}
              variant="contained"
              sx={{
                backgroundColor: "background.green",
                "&:hover": {
                  backgroundColor: "background.green",
                  opacity: 0.9,
                },
              }}
            >
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
