"use client";

import { useFetch } from "@/app/lib/hooks/useFetch";
import { dinamicColorChange } from "@/app/lib/myTheme";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

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
          alignItems: "center",
          gap: 1,
          padding: { xs: "1rem", sm: "1.5rem" },
        }}
      >
        <CircularProgress size={28} />
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 500,
            color: "#7a7a7a",
          }}
        >
          Cargando estado de Facturación...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: { xs: "1.2rem 1rem", sm: "1.5rem 1.5rem" },
        borderRadius: "0.75rem",
        background: "linear-gradient(135deg, #f5f7fa 0%, #fff 100%)",
        border: "1px solid #e8e8e8",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
          <TrendingUpIcon
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
              color: "#2c3e50",
              opacity: 0.8,
            }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              color: "#2c3e50",
              letterSpacing: "-0.5px",
            }}
          >
            Facturación
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            gap: 0.5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
              color: color,
              transition: "color 0.3s ease",
              lineHeight: 1,
            }}
          >
            {porcentage}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "0.85rem", sm: "1rem" },
              color: "#7a7a7a",
              opacity: 0.7,
            }}
          >
            %
          </Typography>
        </Box>
      </Box>

      {/* Progress Bar */}
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={porcentage}
          sx={{
            height: { xs: "6px", sm: "8px" },
            borderRadius: "1rem",
            backgroundColor: "#e8e8e8",
            "& .MuiLinearProgress-bar": {
              borderRadius: "1rem",
              background: `linear-gradient(90deg, ${color} 0%, ${color}CC 100%)`,
              transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            },
          }}
        />
      </Box>

      {/* Footer Info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.75rem",
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
          color: "#7a7a7a",
          opacity: 0.6,
        }}
      >
        <Typography sx={{ fontSize: "inherit" }}>Softur</Typography>
        <Typography sx={{ fontSize: "inherit" }}>
          {porcentage >= 100 ? "Completado" : "En progreso"}
        </Typography>
      </Box>
    </Box>
  );
};
