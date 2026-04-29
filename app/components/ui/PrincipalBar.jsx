"use client";

import { SearchRounded, HelpOutlineRounded } from "@mui/icons-material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Box, IconButton, Tooltip } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ArrowUpward } from "@mui/icons-material";
import { useEffect } from "react";

export const PrincipalBar = ({
  handleShowContents,
  isShown,
  handleShowTips,
  isShowTips,
}) => {
  useEffect(() => {
    if (isShowTips) {
      const tipsElement = document.getElementById("infinite-tips-section");
      if (tipsElement) {
        setTimeout(() => {
          tipsElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [isShowTips]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: "8px 12px",
        backgroundColor: "background.antiflash",
        borderRadius: 3,
        boxShadow: "0px 2px 8px rgba(44, 62, 80, 0.08)",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(44, 62, 80, 0.12)",
        },
      }}
    >
      <Tooltip
        title={isShown ? "Ocultar contenidos" : "Mostrar contenidos"}
        arrow
      >
        <IconButton
          onClick={handleShowContents}
          size="small"
          sx={{
            p: 1,
            color: isShown ? "primary.blue" : "primary.text",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(25, 118, 210, 0.08)",
            },
          }}
        >
          {isShown ? (
            <ArrowUpward fontSize="medium" />
          ) : (
            <ArrowDownwardIcon fontSize="medium" />
          )}
        </IconButton>
      </Tooltip>

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "primary.text",
          fontSize: "0.9rem",
          flex: 1,
        }}
      >
        <SearchRounded fontSize="small" sx={{ opacity: 0.6 }} />
        <span>Buscar ayuda...</span>
      </Box> */}

      <Tooltip
        title={isShowTips ? "Ocultar consejos" : "Mostrar consejos"}
        arrow
      >
        <IconButton
          onClick={handleShowTips}
          size="small"
          sx={{
            p: 1,
            color: isShowTips ? "background.green" : "primary.text",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(51, 210, 164, 0.08)",
            },
          }}
        >
          <LocalFireDepartmentIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
