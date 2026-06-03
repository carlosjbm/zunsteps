// app/zunsteps/premium/page.js
"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PremiumTabs from "@/app/components/ui/PremiumTaps";
import { useRouter } from "next/navigation";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { PremiumProtection } from "@/app/components/ui/PremiumProtection";
import { QuickNavigation } from "@/app/components/ui/QuickNavigation";
import { FacturProcess } from "@/app/components/ui/FacturProcess";
import ColaborateButton from "@/app/components/button-features/ColaborateButton";
import { ActiveSessionPanel } from "@/app/components/ui/ActiveSessionPanel";

function PremiumPageContent() {
  const router = useRouter();
  const { logout, user } = usePremiumAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/premium-access");
  };

  return (
    <>
      <QuickNavigation />
      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" } }}
          >
            Zona Premium
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ¡Bienvenido{user?.nombre ? `, ${user.nombre}` : ""}!
          </Typography>
        </Box>

        {/* Active Session Panel */}
        {user && <ActiveSessionPanel user={user} onLogout={handleLogout} />}

        {/* Benefits Section */}
        <Box mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, mb: 2 }}
          >
            Control de la Facturación
          </Typography>
          <FacturProcess />
        </Box>

        <Box mb={4}>
          <PremiumTabs />
          <ColaborateButton />
        </Box>
        <Box textAlign="center" color="text.secondary" mt={6}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Zunsteps Premium
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default function PremiumPage() {
  return (
    <PremiumProtection>
      <PremiumPageContent />
    </PremiumProtection>
  );
}
