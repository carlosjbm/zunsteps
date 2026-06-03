"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import LogoutIcon from "@mui/icons-material/Logout";

const SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatRemaining(ms) {
  if (ms <= 0) return "Sesión expirada";
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  if (days > 1) return `Expira en ${days} días`;
  if (days === 1) return "Expira en 1 día";
  const hours = Math.floor(ms / (60 * 60 * 1000));
  if (hours > 1) return `Expira en ${hours} horas`;
  const minutes = Math.max(1, Math.floor(ms / (60 * 1000)));
  return `Expira en ${minutes} min`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function ActiveSessionPanel({ user, loginAt, onLogout }) {
  const [copied, setCopied] = useState(false);
  const [expiryLabel, setExpiryLabel] = useState("");

  useEffect(() => {
    const start = typeof loginAt === "number" ? loginAt : Date.now();
    const update = () => {
      const expiresAt = new Date(start + SESSION_MAX_AGE_MS);
      const remaining = expiresAt.getTime() - Date.now();
      setExpiryLabel(`${formatRemaining(remaining)} · ${formatDate(expiresAt)}`);
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [loginAt]);

  if (!user) return null;

  const handleCopy = async () => {
    if (!user.telefono) return;
    try {
      await navigator.clipboard.writeText(user.telefono);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const initials = getInitials(user.nombre);

  return (
    <Card
      role="region"
      aria-label="Información de la sesión activa"
      sx={{
        mb: 4,
        p: { xs: 2, sm: 3 },
        backgroundColor: "background.main",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        boxShadow: "0 2px 8px rgba(44, 62, 80, 0.06)",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 200ms ease, transform 200ms ease",
        "&:hover": {
          boxShadow: "0 6px 18px rgba(44, 62, 80, 0.10)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "linear-gradient(90deg, #2c3e50 0%, #1976d2 50%, #d4af37 100%)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1.5, sm: 2 },
          alignItems: "center",
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        <Avatar
          aria-hidden="true"
          sx={{
            width: { xs: 52, sm: 64 },
            height: { xs: 52, sm: 64 },
            bgcolor: "primary.main",
            color: "background.antiflash",
            fontSize: { xs: "1.15rem", sm: "1.4rem" },
            fontWeight: 700,
            fontFamily: "monospace",
            boxShadow: "0 2px 6px rgba(44, 62, 80, 0.18)",
          }}
        >
          {initials}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              fontWeight: 600,
              color: "primary.main",
              lineHeight: 1.2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {user.nombre || "Usuario sin nombre"}
          </Typography>
          <Tooltip
            title={
              user.telefono
                ? copied
                  ? "¡Copiado!"
                  : "Copiar al portapapeles"
                : "Sin teléfono"
            }
            arrow
          >
            <span>
              <IconButton
                onClick={handleCopy}
                size="small"
                disabled={!user.telefono}
                aria-label={
                  user.telefono
                    ? `Copiar teléfono ${user.telefono} al portapapeles`
                    : "Teléfono no disponible"
                }
                sx={{
                  mt: 0.25,
                  px: 1,
                  py: 0.25,
                  borderRadius: 1.5,
                  color: "text.secondary",
                  fontFamily: "monospace",
                  transition: "background-color 150ms ease",
                  "&:hover": {
                    bgcolor: "rgba(25, 118, 210, 0.10)",
                  },
                  "&.Mui-disabled": {
                    opacity: 0.6,
                  },
                }}
              >
                {copied ? (
                  <CheckIcon fontSize="small" color="success" />
                ) : (
                  <PhoneOutlinedIcon fontSize="small" />
                )}
                <Typography
                  component="span"
                  sx={{
                    ml: 0.5,
                    fontSize: "0.85rem",
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {user.telefono || "Sin teléfono"}
                </Typography>
                {user.telefono && !copied && (
                  <ContentCopyIcon
                    sx={{ ml: 0.75, fontSize: "0.8rem", opacity: 0.6 }}
                  />
                )}
              </IconButton>
            </span>
          </Tooltip>
        </Box>
        <Chip
          icon={
            <VerifiedIcon
              sx={{ fontSize: "1rem !important", color: "primary.main !important" }}
            />
          }
          label="Premium"
          aria-label="Membresía Premium verificada"
          sx={{
            bgcolor: "primary.gold",
            color: "primary.main",
            fontWeight: 700,
            fontSize: "0.72rem",
            height: 28,
            borderRadius: 1.5,
            letterSpacing: "0.04em",
            px: 0.5,
            boxShadow: "0 1px 3px rgba(212, 175, 55, 0.35)",
          }}
        />
        {onLogout && (
          <Tooltip title="Cerrar sesión" arrow>
            <IconButton
              onClick={onLogout}
              size="small"
              aria-label="Cerrar sesión"
              sx={{
                color: "text.secondary",
                transition: "background-color 150ms ease, color 150ms ease",
                "&:hover": {
                  bgcolor: "rgba(229, 83, 84, 0.10)",
                  color: "primary.red",
                },
                "&:focus-visible": {
                  outline: "2px solid",
                  outlineColor: "primary.red",
                  outlineOffset: 2,
                },
              }}
            >
              <LogoutIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1.25, sm: 2.5 },
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            px: 1,
            py: 0.5,
            borderRadius: 1.5,
            bgcolor: "rgba(51, 210, 164, 0.10)",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "background.green",
              boxShadow: "0 0 0 3px rgba(51, 210, 164, 0.25)",
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "background.green", fontWeight: 600 }}
          >
            Sesión activa
          </Typography>
        </Box>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <ScheduleOutlinedIcon
            fontSize="small"
            sx={{ color: "text.secondary", fontSize: "1.05rem" }}
            aria-hidden="true"
          />
          <Typography
            variant="body2"
            color="text.secondary"
            aria-live="polite"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.85rem" } }}
          >
            {expiryLabel || "Calculando expiración…"}
          </Typography>
        </Box>
        {user.id != null && (
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
            <FingerprintIcon
              fontSize="small"
              sx={{ color: "text.secondary", fontSize: "1.05rem" }}
              aria-hidden="true"
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}
            >
              ID #{user.id}
            </Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
}
