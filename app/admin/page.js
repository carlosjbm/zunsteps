"use client";

import { Box, Card, Typography, Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import PeopleIcon from "@mui/icons-material/People";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import HelpIcon from "@mui/icons-material/Help";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState } from "react";
import { QuickNavigation } from "../components/ui/QuickNavigation";

const adminModules = [
  {
    id: "usuarios",
    title: "Gestionar Usuarios",
    description:
      "Crear, editar, eliminar usuarios y regenerar tokens de acceso",
    icon: PeopleIcon,
    href: "/admin/usuarios",
    color: "primary",
  },
  // Próximos módulos pueden agregarse aquí
];

export default function AdminPage() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, md: 0 },
          mb: 5,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            Panel de Administración
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Gestiona todos los aspectos de tu aplicación desde aquí
          </Typography>
        </Box>
      </Box>

      {/* Quick Navigation */}
      {/* <Card
        sx={{
          mb: 5,
          p: { xs: 1.5, sm: 2 },
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 1.5 },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<HomeOutlinedIcon />}
              variant="text"
              size="small"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Inicio
            </Button>
          </Link>
          <Link href="/zunsteps/dashboard" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<DashboardIcon />}
              variant="text"
              size="small"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/zunsteps/docs" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<SchoolIcon />}
              variant="text"
              size="small"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Documentación
            </Button>
          </Link>
          <Link href="/zunsteps/faqs" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<HelpIcon />}
              variant="text"
              size="small"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              FAQs
            </Button>
          </Link>
          <Link href="/zunsteps/premium" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<VerifiedIcon />}
              variant="text"
              size="small"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "primary.main",
                fontWeight: 600,
              }}
            >
              Premium
            </Button>
          </Link>
        </Box>
      </Card> */}
      <QuickNavigation />
      {/* Admin Modules Grid */}
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {adminModules.map((module) => {
          const IconComponent = module.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={module.id}>
              <Link href={module.href} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, sm: 3 },
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
                      borderColor: "primary.main",
                      backgroundColor: "action.hover",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                  }}
                  onMouseEnter={() => setHoveredId(module.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: { xs: 56, sm: 64, md: 72 },
                      height: { xs: 56, sm: 64, md: 72 },
                      borderRadius: "12px",
                      backgroundColor: `${module.color}.lighter`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      transform:
                        hoveredId === module.id
                          ? "scale(1.1) rotate(5deg)"
                          : "scale(1)",
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: { xs: 32, sm: 36, md: 40 },
                        color: `${module.color}.main`,
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.primary",
                    }}
                  >
                    {module.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.5,
                      minHeight: { xs: "auto", md: "48px" },
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    }}
                  >
                    {module.description}
                  </Typography>

                  {/* CTA Button (Hidden but space reserved) */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      mt: "auto",
                      width: "100%",
                      opacity: hoveredId === module.id ? 1 : 0.8,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    Acceder
                  </Button>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>

      {/* Info Card */}
      <Card
        sx={{
          mt: 5,
          p: { xs: 2, sm: 3 },
          backgroundColor: "info.lighter",
          border: "1px solid",
          borderColor: "info.light",
        }}
      >
        <Typography variant="body2" color="info.dark">
          <strong>💡 Tip:</strong> Puedes acceder al panel de administración
          desde la zona premium haciendo clic en el botón "Gestión" en la barra
          de navegación.
        </Typography>
      </Card>
    </Container>
  );
}
