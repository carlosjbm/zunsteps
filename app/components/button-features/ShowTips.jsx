import { ScienceOutlined } from "@mui/icons-material";
import { VisibilityOffOutlined } from "@mui/icons-material";
import { LightbulbOutline } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

/**Colores definidos para cada accion del boton */
const showColor = `#1976d2`;
const noShowColor = `#e95354`;

export const ShowTips = ({ isShow, manageFunction }) => {
  return (
    <Button
      onClick={manageFunction}
      sx={{
        display: "flex",
        height: "50px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "background.antiflash",
      }}
    >
      {isShow ? (
        <LightbulbOutline
          sx={{ color: isShow ? showColor : noShowColor, height: "100%" }}
        />
      ) : (
        <VisibilityOffOutlined
          sx={{ color: isShow ? showColor : noShowColor, height: "100%" }}
        />
      )}

      <Typography
        sx={{ color: isShow ? showColor : noShowColor, marginLeft: "2%" }}
      >
        {isShow ? "Explorar Tips" : "Ocultar Tips"}
      </Typography>
    </Button>
  );
};
