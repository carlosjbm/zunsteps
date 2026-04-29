"use client";
import {
  Box,
  Card,
  Typography,
  CircularProgress,
  Avatar,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import { useEffect, useState, useCallback, useRef } from "react";
import { useInfiniteScroll } from "@/app/lib/hooks/useInfiniteScroll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const InfiniteTips = () => {
  const [tips, setTips] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [liked, setLiked] = useState({});
  const hasInitialized = useRef(false);
  const loadedPages = useRef(new Set());

  const toggleLike = (tipId) => {
    setLiked((prev) => ({
      ...prev,
      [tipId]: !prev[tipId],
    }));
  };

  const fetchTips = useCallback(async (pageNum) => {
    // Evitar duplicados si ya se cargó esta página
    if (loadedPages.current.has(pageNum)) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/tips?page=${pageNum}&limit=8`);
      const data = await response.json();

      if (data.tips && data.tips.length > 0) {
        loadedPages.current.add(pageNum);
        setTips((prev) => [...prev, ...data.tips]);
        setPage(() => pageNum + 1);
        setHasMore(data.hasMore !== false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error al cargar tips:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const observerTarget = useInfiniteScroll(() => {
    if (!loading && hasMore) {
      fetchTips(page);
    }
  });

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      fetchTips(0);
    }
  }, [fetchTips]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `hace ${diffMins}m`;
    if (diffHours < 24) return `hace ${diffHours}h`;
    if (diffDays < 7) return `hace ${diffDays}d`;
    return date.toLocaleDateString("es-ES");
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      {tips.length === 0 && !loading && (
        <Card sx={{ p: 3, textAlign: "center" }}>
          <Typography color="textSecondary">No hay tips disponibles</Typography>
        </Card>
      )}

      {tips.map((tip, index) => (
        <Card
          key={`${tip.tip_nombre}-${index}`}
          sx={{
            overflow: "hidden",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: 4,
              transform: "translateY(-2px)",
            },
          }}
        >
          {/* Header del Post */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              backgroundColor: "background.antiflash",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "background.green",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              >
                {tip.usuarip_nombre?.charAt(0).toUpperCase() || "U"}
              </Avatar>
              <Box>
                <Typography
                  variant="body2"
                  fontWeight="600"
                  sx={{ lineHeight: 1.2 }}
                >
                  {tip.usuarip_nombre || "Usuario"}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <AccessTimeIcon
                    sx={{ fontSize: 12, color: "textSecondary" }}
                  />
                  <Typography variant="caption" color="textSecondary">
                    {formatDate(tip.tip_fecha)}
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* <IconButton size="small" sx={{ color: "textSecondary" }}>
              <MoreVertIcon fontSize="small" />
            </IconButton> */}
          </Box>

          <Divider />

          {/* Contenido Principal */}
          <Box sx={{ p: 2.5 }}>
            <Chip
              label={tip.tip_tema}
              size="small"
              sx={{
                mb: 1.5,
                backgroundColor: "rgba(63, 81, 181, 0.15)",
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.75rem",
              }}
            />
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ mb: 1, fontSize: "1.1rem" }}
            >
              {tip.tip_nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              {tip.tip_descripcion}
            </Typography>
          </Box>

          {/* Footer con acciones */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              p: 1.5,
              borderTop: "1px solid",
              borderColor: "divider",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  color: "error.main",
                },
              }}
              onClick={() => toggleLike(tip.tip_nombre)}
            >
              {liked[tip.tip_nombre] ? (
                <FavoriteIcon sx={{ color: "error.main", fontSize: 20 }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 20 }} />
              )}
              <Typography variant="caption" fontWeight="500">
                Me gusta
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <ShareIcon sx={{ fontSize: 20 }} />
              <Typography variant="caption" fontWeight="500">
                Compartir
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}

      <Box ref={observerTarget} sx={{ py: 2, textAlign: "center" }}>
        {loading && <CircularProgress size={40} />}
        {!hasMore && tips.length > 0 && (
          <Typography color="textSecondary">
            No hay más tips disponibles
          </Typography>
        )}
      </Box>
    </Box>
  );
};
