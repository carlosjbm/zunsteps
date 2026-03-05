"use client";
import { Box, Skeleton, Button } from "@mui/material";

export const SideBtnItemSkeleton = () => {
  return (
    <Button
      disabled
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "280px",
        padding: "12px 16px",
        gap: "12px",
        backgroundColor: "background.antiflah",
        border: "1.5px solid #f0f0f0",
        borderRadius: "8px",
        fontWeight: 600,
        textTransform: "none",
        fontSize: { xs: "0.9rem", sm: "1rem" },
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Skeleton del icono */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Skeleton variant="circular" width={28} height={28} />
      </Box>

      {/* Skeleton del texto */}
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
        <Skeleton variant="text" width="60%" height={20} />
      </Box>

      {/* Skeleton del check de completado */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Skeleton variant="circular" width={20} height={20} />
      </Box>
    </Button>
  );
};
export const SideBtnListSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "280px",
      }}
    >
      {[...Array(5)].map((_, index) => (
        <SideBtnItemSkeleton key={index} />
      ))}
    </Box>
  );
};
