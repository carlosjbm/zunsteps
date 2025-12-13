// app/components/ui/PremiumProtection.jsx
"use client";
import React from "react";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { useRouter } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";

export function PremiumProtection({ children }) {
  const { isPremium, isLoading } = usePremiumAuth();
  const router = useRouter();

  React.useEffect(() => {
    // Solo redirigir después de que se cargue el estado
    if (!isLoading && !isPremium) {
      router.push("/premium-access");
    }
  }, [isLoading, isPremium, router]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isPremium) {
    return null;
  }

  return children;
}
