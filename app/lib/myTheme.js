import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50",
      text: "#7a7a7a",
      blue: "#1976d2",
      red: "#e95354",
      // gold: "#e6c27a",
      gold: "#d4af37",
    },
    background: {
      green: "#33d2a4",
      antiflash: "#f0f0f0",
      main: "#fffefe",
    },
  },
  typography: {
    fontFamily: "monospace",
  },
});
export const dinamicColorChange = (value = 100) => {
  //Control del cambio de color
  let color = "background.green";
  if (value <= 30) {
    color = "primary.red";
  }
  if (value <= 70 && value >= 40) {
    color = "primary.blue";
  }
  return color;
};
