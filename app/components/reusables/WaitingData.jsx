import { Box, CircularProgress, Typography } from "@mui/material";

export function WaitingCircular({ text = "Cargando datos ..." }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", m: 2.5 }}>
      <CircularProgress />
      <Typography> {text}</Typography>
    </Box>
  );
}
