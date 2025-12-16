"use client";

import { Card, Typography, Box, Tooltip } from "@mui/material";
import ResponsiveDialog from "./ResponsiveDialog";
import VerticalLinearStepper from "./VerticalLinearStepper";
import { useState } from "react";

export const ConceptItem = ({ accion }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        gap: { xs: "12px", sm: "12px" },
        padding: { xs: "12px", sm: "12px 16px" },
        marginTop: "8px",
        marginBottom: "8px",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: isHovered ? "primary.main" : "divider",
        backgroundColor: isHovered ? "background.green" : "background.paper",
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        boxShadow: isHovered
          ? "0 4px 12px rgba(0, 0, 0, 0.08)"
          : "0 1px 3px rgba(0, 0, 0, 0.05)",
        "&:active": {
          transform: "scale(0.98)",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          minWidth: 0,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          color="primary.text"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            transition: "color 250ms",
            color: isHovered ? "primary.main" : "primary.text",
            wordBreak: "break-word",
          }}
        >
          {accion.aNombre}
        </Typography>
        {accion.aResumen && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.9rem" },
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: { xs: 2, sm: 1 },
              WebkitBoxOrient: "vertical",
              wordBreak: "break-word",
            }}
          >
            {accion.aResumen}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "flex-end", sm: "flex-end" },
        }}
      >
        <ResponsiveDialog
          rAccion={accion.aResumen}
          nAccion={accion.aNombre}
          importat={false}
          title={"Detalles"}
          content={<VerticalLinearStepper steps={accion.pasos} />}
        />
      </Box>
    </Card>
  );
};
