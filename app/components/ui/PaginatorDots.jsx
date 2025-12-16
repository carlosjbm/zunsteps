"use client";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useState } from "react";

export const PaginatorDots = ({ handlePaging, dots, showNext }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = parseInt(dots);

  const handleNextPage = () => {
    handlePaging();
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePaging();
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        marginTop: "24px",
        padding: "16px",
        backgroundColor: "background.green",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "divider",
        width: "100%",
      }}
    >
      {/* Botón Anterior */}
      <Tooltip title="Página anterior">
        <span>
          <IconButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            sx={{
              color: currentPage === 1 ? "text.disabled" : "primary.main",
              transition: "all 250ms",
              "&:hover:not(:disabled)": {
                backgroundColor: "background.paper",
                transform: "scale(1.1)",
              },
              "&:disabled": {
                opacity: 0.5,
              },
            }}
          >
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>
        </span>
      </Tooltip>

      {/* Indicador de Página */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: "8px 16px",
          backgroundColor: "background.paper",
          borderRadius: "6px",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="body2"
          color="primary.text"
          sx={{ fontWeight: 600 }}
        >
          {currentPage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          /
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {totalPages}
        </Typography>
      </Box>

      {/* Indicadores Visuales (Dots) */}
      <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Box
            key={page}
            sx={{
              width: currentPage === page ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor:
                currentPage === page ? "primary.main" : "divider",
              transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>

      {/* Botón Siguiente */}
      <Tooltip title="Página siguiente">
        <span>
          <IconButton
            onClick={handleNextPage}
            disabled={!showNext}
            sx={{
              color: !showNext ? "text.disabled" : "primary.main",
              transition: "all 250ms",
              "&:hover:not(:disabled)": {
                backgroundColor: "background.paper",
                transform: "scale(1.1)",
              },
              "&:disabled": {
                opacity: 0.5,
              },
            }}
          >
            <ArrowForwardIosOutlinedIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};
