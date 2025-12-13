// app/premium-access/page.js
"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Card,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation";
import { usePremiumAuth } from "@/app/lib/contexts/PremiumAuthContext";
import { useCopy } from "../lib/hooks/useCopy";

export default function PremiumAccessPage() {
  const [copied, copyToClipboard] = useCopy();
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = usePremiumAuth();

  const ADMIN_EMAIL = "carlosjbm11780@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validar la clave localmente
    if (login(key)) {
      // Redirigir a la página premium
      setTimeout(() => router.push("/zunsteps/premium"), 100);
    } else {
      setError("Clave incorrecta. Inténtalo de nuevo.");
      setLoading(false);
    }
  };

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
          Esta sección está protegida. Ingresa la clave para acceder.Si no
          tienes la clave, por favor contacta al administrador.
        </Typography>

        <Button
          onClick={() => copyToClipboard(ADMIN_EMAIL)}
          variant="outlined"
          sx={{ mb: 4 }}
        >
          {copied ? "¡Correo copiado!" : "Copiar correo del administrador"}
        </Button>

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
            label="Clave de Acceso"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            fullWidth
            variant="outlined"
            disabled={loading}
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading || !key}
            sx={{ mt: 2 }}
          >
            {loading ? "Verificando..." : "Acceder"}
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
