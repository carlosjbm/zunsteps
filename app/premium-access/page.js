// app/premium-access/page.js
"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Card,
  CircularProgress,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function PremiumAccessPage() {
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();
  const { login, isAuthenticated, isLoading: authLoading } = usePremiumAuth();

  // Si ya está autenticado, redirigir
  useEffect(() => {
    if (!authLoading) {
      if (isAuthenticated) {
        router.push("/zunsteps/premium");
      }
      setIsCheckingAuth(false);
    }
  }, [isAuthenticated, authLoading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validar campos
    if (!phone.trim() || !token.trim()) {
      setError("Teléfono y token son requeridos");
      setLoading(false);
      return;
    }

    // Intentar login
    const result = await login(phone, token);

    if (result.success) {
      // Redirigir a la página premium
      setTimeout(() => router.push("/zunsteps/premium"), 500);
    } else {
      setError(result.error || "Error en la autenticación");
      setLoading(false);
    }
  };

  if (isCheckingAuth) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          py: { xs: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 6 } }}>
      <Card
        sx={{
          p: { xs: 3, md: 4 },
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <LockIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Acceso Premium
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Esta sección está protegida. Ingresa tus credenciales para acceder.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Teléfono"
            type="tel"
            placeholder="Ej: +53 5 1234567 o 5331234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            variant="outlined"
            disabled={loading}
            autoFocus
            helperText="Ingresa tu número de teléfono registrado"
          />

          <TextField
            label="Token"
            type="password"
            placeholder="Ingresa tu token de acceso"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            fullWidth
            variant="outlined"
            disabled={loading}
            helperText="Token de acceso de 6-100 caracteres"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading || !phone.trim() || !token.trim()}
            sx={{ mt: 2 }}
          >
            {loading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Verificando...
              </>
            ) : (
              "Acceder"
            )}
          </Button>

          <Button
            component={Link}
            href="/"
            variant="outlined"
            startIcon={<HomeOutlinedIcon />}
          >
            Ir a Inicio
          </Button>
        </Box>

        <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
          Si no tienes credenciales, por favor contacta al administrador.
        </Typography>
      </Card>
    </Container>
  );
}
