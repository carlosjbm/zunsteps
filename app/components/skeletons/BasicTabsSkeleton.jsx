"use client";
import { Box, Skeleton } from "@mui/material";

export function BasicTabsSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        mx: "auto",
        px: { xs: 0.5, sm: 2 },
        boxSizing: "border-box",
      }}
    >
      {/* Skeleton para los tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={120}
              height={40}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>
      </Box>

      {/* Skeleton para el contenido */}
      <Box sx={{ p: 3 }}>
        <Skeleton variant="text" width="60%" height={30} sx={{ mb: 2 }} />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={20}
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="95%"
          height={20}
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="90%"
          height={20}
          sx={{ mb: 2 }}
        />

        <Box sx={{ mt: 4 }}>
          <Skeleton variant="text" width="40%" height={25} sx={{ mb: 2 }} />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={60}
            sx={{ mb: 1 }}
          />
          <Skeleton variant="rectangular" width="100%" height={60} />
        </Box>
      </Box>
    </Box>
  );
}
