// app/zunsteps/premium/page.js
"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PremiumTabs from "@/app/components/ui/PremiumTaps";
import VerifiedIcon from "@mui/icons-material/Verified";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useRouter } from "next/navigation";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { PremiumProtection } from "@/app/components/ui/PremiumProtection";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import SettingsIcon from "@mui/icons-material/Settings";
import { QuickNavigation } from "@/app/components/ui/QuickNavigation";
import { FacturProcess } from "@/app/components/ui/FacturProcess";
import { Person } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import ColaborateButton from "@/app/components/button-features/ColaborateButton";

function PremiumPageContent() {
  const router = useRouter();
  const { logout, user } = usePremiumAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/premium-access");
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
      <QuickNavigation premiun={false} />
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
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          ¡Bienvenido{user?.nombre ? `, ${user.nombre}` : ""}!
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Cerrar Sesión
        </Button>
      </Box>

      {/* User Info */}
      {user && (
        <Card
          sx={{ display: "flex", mb: 4, p: 2, backgroundColor: "info.lighter" }}
        >
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Person /> {user.nombre}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone /> {user.telefono}
            </Box>
          </Box>
        </Card>
      )}

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
        <Typography
          sx={{ display: "flex", gap: "1%" }}
          variant="h5"
          gutterBottom
        >
          Contenido Exclusivo
          <VerifiedIcon sx={{ color: "blue" }} />
        </Typography>
        <PremiumTabs />
        <ColaborateButton />
      </Box>
      <Box textAlign="center" color="text.secondary" mt={6}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Zunsteps Premium
        </Typography>
      </Box>
    </Container>
  );
}

export default function PremiumPage() {
  return (
    <PremiumProtection>
      <PremiumPageContent />
    </PremiumProtection>
  );
}
