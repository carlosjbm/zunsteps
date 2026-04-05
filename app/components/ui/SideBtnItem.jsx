"use Client";
import { Button, Box, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const SideBtnItem = ({
  title,
  icon,
  handleModulo,
  toMark,
  modulesStatus,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  let valueMark;

  modulesStatus.map((e) => {
    if (e.name === title) {
      valueMark = e.isMarked;
    } else return;
  });

  const handleClick = () => {
    handleModulo();
    toMark();
  };

  return (
    <Tooltip title={valueMark ? `${title}` : `Ver el :${title}`}>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        sx={{
          display: "flex",
          width: "100%",
          // maxWidth: "280px",
          padding: "12px 16px",
          gap: "12px",
          backgroundColor: valueMark ? "primary.main" : "background.antiflah",
          border: "1.5px solid",
          borderColor: isHovered
            ? "primary.main"
            : valueMark
              ? "primary.main"
              : "#f0f0f0",
          color: valueMark ? "white" : "primary.text",
          borderRadius: "8px",
          fontWeight: 600,
          textTransform: "none",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isHovered
            ? "0 6px 16px rgba(0, 0, 0, 0.12)"
            : "0 2px 8px rgba(0, 0, 0, 0.08)",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            backgroundColor: valueMark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.05)",
            transition: "left 300ms ease",
            zIndex: 0,
          },
          "&:hover::before": {
            left: "100%",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
          "& .MuiSvgIcon-root": {
            fontSize: { xs: "1.2rem", sm: "1.3rem" },
            transition: "all 250ms",
          },
          "&:hover .MuiSvgIcon-root": {
            transform: isHovered ? "scale(1.15)" : "scale(1)",
          },
        }}
      >
        {/* Contenedor del icono con animación */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {icon}
        </Box>

        {/* Contenedor del texto */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            position: "relative",
            zIndex: 1,
            gap: "2px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "inherit",
              color: "inherit",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Indicador de completado */}
        {valueMark && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <CheckCircleOutlineIcon
              sx={{
                fontSize: "1.2rem",
                color: "white",
                animation: "fadeIn 300ms ease-in",
                "@keyframes fadeIn": {
                  from: {
                    opacity: 0,
                    transform: "scale(0.8)",
                  },
                  to: {
                    opacity: 1,
                    transform: "scale(1)",
                  },
                },
              }}
            />
          </Box>
        )}
      </Button>
    </Tooltip>
  );
};
