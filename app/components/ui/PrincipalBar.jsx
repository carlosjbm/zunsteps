"use client";

import { MenuOpenOutlined } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ArrowUpward } from "@mui/icons-material";
import { LightbulbOutline } from "@mui/icons-material";

export const PrincipalBar = ({
  handleShowContents,
  isShown,
  handleShowTips,
  isShowTips,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        padding: 0.5,
        backgroundColor: "background.antiflash",
        borderRadius: 7,
        boxShadow: 1,
        color: "main",
      }}
    >
      <IconButton onClick={handleShowContents} sx={{ p: 0.2 }}>
        {isShown ? <ArrowUpward /> : <ArrowDownwardIcon />}
      </IconButton>
      <Box>🔍 Buscar ayuda ...</Box>
      <IconButton onClick={handleShowTips} sx={{ p: 0.2 }}>
        <LightbulbOutline />
      </IconButton>
    </Box>
  );
};
