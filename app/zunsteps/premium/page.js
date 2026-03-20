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

function PremiumPageContent() {
  const router = useRouter();
  const { logout, user } = usePremiumAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/premium-access");
  };

  return (
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
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          ¡Bienvenido{user?.nombre ? `, ${user.nombre}` : ""}!
        </Typography>
        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* <Link href="/">
            <Button
              size="small"
              variant="outlined"
              startIcon={<HomeOutlinedIcon />}
            >
              Inicio
            </Button>
          </Link>
          <Link href="/zunsteps/dashboard">
            <Button size="small" variant="outlined">
              Dashboard
            </Button>
          </Link>
          <Link href="/admin">
            <Button
              size="small"
              variant="outlined"
              startIcon={<SettingsIcon />}
            >
              Gestión
            </Button>
          </Link> */}
          <QuickNavigation premiun={false} />
        </Box>
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
        <Card sx={{ mb: 4, p: 2, backgroundColor: "info.lighter" }}>
          <Typography variant="body2">
            <strong>Usuario:</strong> {user.nombre} • <strong>Teléfono:</strong>{" "}
            {user.telefono}
          </Typography>
        </Card>
      )}

      {/* Benefits Section */}
      <Box mb={4}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, mb: 2 }}
        >
          Beneficios Premium
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          {[
            "Acceso a contenido exclusivo",
            "Soporte prioritario",
            "Utilitarios exclusivos",
          ].map((benefit) => (
            <Card
              key={benefit}
              sx={{
                p: 2,
                background:
                  "linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(56,142,60,0.1) 100%)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body2" color="text.primary">
                ✓ {benefit}
              </Typography>
            </Card>
          ))}
        </Box>
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
