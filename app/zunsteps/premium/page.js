// app/zunsteps/premium/page.js
"use client";
import React from "react";
import { Box, Container, Typography, Button, Card } from "@mui/material";
import PremiumTabs from "@/app/components/ui/PremiumTaps";
import VerifiedIcon from "@mui/icons-material/Verified";
import { DefaultButton } from "@/app/components/ui/DefaultButton";
import Link from "next/link";
import { WhiteMiddButton } from "@/app/components/ui/WhiteMiddButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { PremiumProtection } from "@/app/components/ui/PremiumProtection";

function PremiumPageContent() {
  const router = useRouter();
  const { logout } = usePremiumAuth();

  const handleLogout = () => {
    logout();
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
          ¡Bienvenido a tu área exclusiva!
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
          <Link href="/">
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
      </Box>

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
            "Agente de ayuda 24/7",
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
