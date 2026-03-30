"use client";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { dinamicColorChange } from "@/app/lib/myTheme";
export const MyCircularProgres = ({ value = 70, label = "Label" }) => {
  // //Control del cambio de color
  // let color = "background.green";
  // if (value <= 30) {
  //   color = "primary.red";
  // }
  // if (value <= 70 && value >= 40) {
  //   color = "primary.blue";
  // }
  // Asegurar que value es siempre un número válido
  const safeValue = typeof value === "number" && !isNaN(value) ? value : 0;
  const color = dinamicColorChange(safeValue);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={safeValue}
          size={60}
          sx={{ color: color }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography color={color}>{safeValue}%</Typography>
        </Box>
      </Box>
      <Typography color={color}>{label}</Typography>
    </Box>
  );
};
