"use client";

import {
  CancelOutlined,
  ChatBubbleOutline,
  ErrorOutlineOutlined,
  SearchOutlined,
  TipsAndUpdatesOutlined,
  LightbulbOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
  Chip,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { useFetch } from "@/app/lib/hooks/useFetch";

const SEARCH_TIPS = [
  "💡 Intenta escribir palabras clave del error",
  "🔍 Usa términos técnicos para mejores resultados",
  "⚡ La búsqueda es en tiempo real",
  "📌 Presiona Enter o haz clic en el icono de búsqueda",
];

export default function FastStep(params) {
  const [errorToInput, setErrorToInput] = useState("");
  const [warning, setWarning] = useState(false);
  const [searchTip, setSearchTip] = useState(SEARCH_TIPS[0]);
  const [expandedErrorId, setExpandedErrorId] = useState(null);
  const [debounceTimer, setDebounceTimer] = useState(null);
  const { data, loading, error, refetch } = useFetch("/api/errors?limit=100");

  // Obtener tips de búsqueda aleatorios
  const getRandomTip = useCallback(() => {
    const randomTip =
      SEARCH_TIPS[Math.floor(Math.random() * SEARCH_TIPS.length)];
    setSearchTip(randomTip);
  }, []);

  // Algoritmo de búsqueda mejorado con debounce
  const searchResults = useMemo(() => {
    if (!errorToInput.trim() || !data?.data) return [];

    const lowerTarget = errorToInput.toLowerCase();

    // Filtrar y puntuar resultados basado en relevancia
    const results = data.data
      .map((error) => {
        const errorLower = error.error.toLowerCase();
        const solutionLower = error.solucion.toLowerCase();

        let relevanceScore = 0;

        // Si el error empieza con el término de búsqueda
        if (errorLower.startsWith(lowerTarget)) {
          relevanceScore += 100;
        }
        // Si contiene exactamente la palabra
        if (errorLower.includes(lowerTarget)) {
          relevanceScore += 50;
        }
        // Si contiene en la solución
        if (solutionLower.includes(lowerTarget)) {
          relevanceScore += 25;
        }
        // Coincidencias de palabras individuales
        const words = lowerTarget.split(" ");
        const matchedWords = words.filter(
          (word) => errorLower.includes(word) || solutionLower.includes(word),
        ).length;
        relevanceScore += matchedWords * 10;

        return { ...error, relevanceScore };
      })
      .filter((result) => result.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 10); // Mostrar máximo 10 resultados

    return results;
  }, [errorToInput, data]);

  const handleChange = (e) => {
    const value = e.target.value;
    setErrorToInput(value);
    setWarning(false);

    // Cambiar tip cada vez que se escribe
    if (Math.random() > 0.7) {
      getRandomTip();
    }
  };

  const handleSearch = () => {
    if (!errorToInput.trim()) {
      setWarning(true);
      return;
    }
    setWarning(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setErrorToInput("");
    setWarning(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {warning && (
        <Alert
          color="warning"
          sx={{ mb: 2 }}
          icon={<CancelOutlined />}
          onClose={() => setWarning(false)}
        >
          ⚠️ Por favor, introduce un término de búsqueda para encontrar
          soluciones
        </Alert>
      )}

      {/* Sección de Búsqueda Mejorada */}
      <Box sx={{ mb: 3 }}>
        {/* Encabezado */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}
        ></Box>

        {/* Campo de Búsqueda */}
        <TextField
          fullWidth
          value={errorToInput}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Escribe el nombre del error o problema técnico..."
          variant="outlined"
          disabled={loading}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined sx={{ color: "primary.blue" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <CircularProgress size={20} sx={{ color: "primary.blue" }} />
                ) : (
                  errorToInput && (
                    <IconButton
                      size="small"
                      onClick={clearSearch}
                      sx={{
                        color: "primary.text",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                      }}
                    >
                      <CancelOutlined fontSize="small" />
                    </IconButton>
                  )
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: loading
              ? "background.antiflash"
              : "background.main",
            "& .MuiOutlinedInput-root": {
              borderColor: loading ? "primary.text" : "primary.blue",
              "&:hover fieldset": {
                borderColor: "primary.blue",
              },
              "&.Mui-focused fieldset": {
                borderColor: "background.green",
                borderWidth: 2,
              },
            },
            "& .MuiOutlinedInput-input::placeholder": {
              opacity: 0.7,
              color: "primary.text",
            },
          }}
        />

        {/* Tip de Búsqueda */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 1.5,
            padding: 1.5,
            backgroundColor: "rgba(51, 210, 164, 0.08)",
            borderRadius: 1,
            borderLeft: "3px solid",
            borderLeftColor: "background.green",
          }}
        >
          <LightbulbOutlined
            sx={{ color: "background.green", fontSize: 20, flexShrink: 0 }}
          />
          <Typography variant="caption" sx={{ color: "primary.text" }}>
            {searchTip}
          </Typography>
        </Box>
      </Box>

      {/* Resultados de Búsqueda */}
      {errorToInput.trim() && (
        <Box sx={{ mb: 2 }}>
          {/* Información de Resultados */}
          {searchResults.length > 0 ? (
            <Typography
              variant="body2"
              sx={{
                color: "primary.text",
                mb: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <CheckCircleOutline
                sx={{ fontSize: 18, color: "background.green" }}
              />
              Se encontraron <strong>{searchResults.length}</strong>{" "}
              solucione(s)
            </Typography>
          ) : (
            <Alert
              severity="info"
              sx={{ mb: 2 }}
              icon={<TipsAndUpdatesOutlined />}
            >
              No encontramos soluciones para "{errorToInput}". Intenta con otros
              términos o considera compartir tu error con la comunidad.
            </Alert>
          )}

          {/* Lista de Resultados */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {searchResults.map((result) => (
              <Accordion
                key={result.id}
                expanded={expandedErrorId === result.id}
                onChange={() =>
                  setExpandedErrorId(
                    expandedErrorId === result.id ? null : result.id,
                  )
                }
                sx={{
                  backgroundColor: "background.main",
                  border: "1px solid #e0e0e0",
                  "&:hover": {
                    borderColor: "primary.blue",
                    boxShadow: "0 2px 8px rgba(51, 210, 164, 0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <AccordionSummary
                  sx={{
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <ErrorOutlineOutlined
                    sx={{ color: "primary.red", fontSize: 22 }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                      }}
                    >
                      {result.error}
                    </Typography>
                  </Box>
                  <Chip
                    label="Ver Solución"
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "primary.blue",
                      color: "primary.blue",
                      fontSize: "0.75rem",
                    }}
                  />
                </AccordionSummary>

                <AccordionDetails sx={{ paddingTop: 0 }}>
                  <Divider sx={{ marginBottom: 2 }} />

                  {/* Imagen del Error */}
                  {result.imagen && (
                    <Box
                      sx={{
                        padding: 1.5,
                        border: "1px solid #e0e0e0",
                        marginBottom: 2,
                        borderRadius: 1.5,
                        backgroundColor: "background.antiflash",
                        textAlign: "center",
                      }}
                    >
                      <Image
                        src={result.imagen}
                        alt={result.error}
                        width={300}
                        height={200}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: 8,
                        }}
                      />
                    </Box>
                  )}

                  {/* Solución */}
                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <ChatBubbleOutline
                      sx={{
                        color: "background.green",
                        fontSize: 20,
                        flexShrink: 0,
                        marginTop: 0.5,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: "primary.main",
                          marginBottom: 1,
                        }}
                      >
                        Solución:
                      </Typography>
                      <Typography
                        sx={{
                          color: "primary.text",
                          lineHeight: 1.8,
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                        }}
                      >
                        {result.solucion}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Nivel de Acceso */}
                  <Box sx={{ mt: 2 }}>
                    <Chip
                      label={
                        result.nivel_acc === 1
                          ? "Público"
                          : result.nivel_acc === 2
                            ? "Asistentes Técnicos"
                            : "Administradores"
                      }
                      size="small"
                      variant="filled"
                      sx={{
                        backgroundColor: "rgba(51, 210, 164, 0.15)",
                        color: "background.green",
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      )}

      {/* Estado Inicial - Sin Búsqueda */}
      {!errorToInput.trim() && (
        <Box
          sx={{
            padding: 3,
            backgroundColor: "background.antiflash",
            borderRadius: 2,
            textAlign: "center",
            border: "1px dashed #e0e0e0",
          }}
        >
          <TipsAndUpdatesOutlined
            sx={{
              fontSize: 48,
              color: "primary.blue",
              marginBottom: 1,
              opacity: 0.6,
            }}
          />
          <Typography variant="h6" sx={{ color: "primary.main", mb: 1 }}>
            ¿Necesitas ayuda?
          </Typography>
          <Typography variant="body2" sx={{ color: "primary.text", mb: 2 }}>
            Escribe el nombre o descripción del error que enfrentaste y
            encontraremos soluciones que otros técnicos ya han compartido.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" sx={{ color: "primary.text" }}>
              Ejemplos: "Error 500", "Base de datos", "módulo facturación"
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
