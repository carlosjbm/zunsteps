"use client";

import { useFetch } from "@/app/lib/hooks/useFetch";
import { dinamicColorChange } from "@/app/lib/myTheme";
import {
  Box,
  Card,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";

export const GenericFactState = () => {
  const { data, error, loading, refetch } = useFetch(
    "/api/facturation/clientes/",
  );
  const porcentage = data?.generalPorcentage ? data?.generalPorcentage : 100;
  const color = dinamicColorChange(porcentage);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          gap: "2%",
        }}
      >
        <CircularProgress size={30} /> Cargando estado de Facturacion...
      </Box>
    );
  }
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "45px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {" "}
        Facturación de Softur :{" "}
        <Typography color={color}>{porcentage}%</Typography>
      </Box>
      <LinearProgress
        sx={{ width: "90%", height: "15%" }}
        variant="determinate"
        value={porcentage}
      />
    </Card>
  );
};
