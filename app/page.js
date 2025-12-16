"use client";
import { Box, Card, Divider, Typography, useTheme } from "@mui/material";
import "./styles/front.css";
import Link from "next/link";
import {
  FacebookOutlined,
  GitHub,
  LinkedIn,
  WhatsApp,
  X,
} from "@mui/icons-material";
import { DefaultButton } from "./components/ui/DefaultButton";
import { WhiteMiddButton } from "./components/ui/WhiteMiddButton";
import Image from "next/image";
import { KeyOutlined } from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(56,142,60,0.05) 100%)",
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: { xs: "100%", sm: 720, md: 900 }, mx: "auto" }}>
        <Card sx={{ p: { xs: 2, md: 4 }, boxShadow: { xs: 1, md: 3 } }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              color="primary"
              variant="h2"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1 }}
            >
              ZUNSteps
            </Typography>
            <Typography variant="caption" color="primary.text">
              v1.3.1
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="h6"
              color="primary.text"
              sx={{ mb: 1.5, fontSize: { xs: "0.95rem", md: "1.1rem" } }}
            >
              La herramienta que facilita el trabajo con la Suite ZUN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aprende haciendo. Accede a tutoriales, scripts y agente de ayuda.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: "inherit" }}
            >
              <FacebookOutlined
                sx={{ fontSize: { xs: 28, sm: 24 }, color: "primary.main" }}
              />
            </a>
            <a
              href="https://github.com/carlosjbm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "inherit" }}
            >
              <GitHub
                sx={{ fontSize: { xs: 28, sm: 24 }, color: "primary.main" }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{ color: "inherit" }}
            >
              <X sx={{ fontSize: { xs: 28, sm: 24 }, color: "primary.main" }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "inherit" }}
            >
              <LinkedIn
                sx={{ fontSize: { xs: 28, sm: 24 }, color: "primary.main" }}
              />
            </a>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1.5, sm: 2 },
              mb: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href="/premium-access"
              aria-label="Ir a Premium"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <WhiteMiddButton text="Premium" icon={<VerifiedIcon />} />
            </Link>
            <Link
              href="/zunsteps/dashboard"
              aria-label="Ir al Dashboard"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <DefaultButton text="Iniciar" />
            </Link>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Powered by Carlinhos
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
                color: "primary.main",
              }}
            >
              <a
                href="tel:+5363907157"
                aria-label="Llamar a Carlinhos"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <WhatsApp sx={{ fontSize: { xs: 18, sm: 20 }, mr: 0.5 }} />
                <Typography variant="body2">+53 63907157</Typography>
              </a>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
