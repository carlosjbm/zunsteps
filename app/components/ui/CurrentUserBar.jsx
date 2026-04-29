"use client";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { VerifiedUserOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";

export function CurrentUserBar({ useName, tipsCount, likeCount }) {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
        <VerifiedUserOutlined sx={{ color: "primary.blue" }} />
        <Typography color="primary.blue">
          {useName || "Administrador"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.8 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocalFireDepartmentIcon sx={{ color: "background.green" }} />
          <Typography color="background.green">{tipsCount || 1}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FavoriteOutlined sx={{ color: "primary.red" }} />
          <Typography color="primary.red">{likeCount || 5}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
