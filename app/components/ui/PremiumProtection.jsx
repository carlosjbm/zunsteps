// app/components/ui/PremiumProtection.jsx
"use client";
import React from "react";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { useRouter } from "next/navigation";
import { Box, CircularProgress, Typography } from "@mui/material";

export function PremiumProtection({ children }) {
  const { isAuthenticated, isLoading } = usePremiumAuth();
  const router = useRouter();

  React.useEffect(() => {
    // Solo redirigir después de que se cargue el estado
    if (!isLoading && !isAuthenticated) {
      router.push("/premium-access");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
        gap={2}
      >
        <CircularProgress />
        <Typography>Verificando autenticación...</Typography>
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
}
