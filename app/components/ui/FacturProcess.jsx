"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Alert,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BlockIcon from "@mui/icons-material/Block";
import { MyCircularProgres } from "./MyCircularProgres";
import { useFetch } from "@/app/lib/hooks/useFetch";
import { useState, useEffect } from "react";
import { Searcher } from "./Searcher";
import { PaginatorDots } from "./PaginatorDots";
import { dinamicColorChange } from "@/app/lib/myTheme";

const PERCENTAGE_CHIP_COLORS = {
  red: { bg: "rgba(233, 83, 84, 0.12)", fg: "#e95354" },
  blue: { bg: "rgba(25, 118, 210, 0.12)", fg: "#1976d2" },
  green: { bg: "rgba(51, 210, 164, 0.12)", fg: "#33d2a4" },
};

const getPercentageChipColors = (value) => {
  const key = dinamicColorChange(value);
  if (key === "primary.red") return PERCENTAGE_CHIP_COLORS.red;
  if (key === "primary.blue") return PERCENTAGE_CHIP_COLORS.blue;
  return PERCENTAGE_CHIP_COLORS.green;
};

const FILTER_PALETTE = {
  neutral: {
    base: "primary.main",
    activeBg: "primary.main",
    activeHover: "#1a252f",
    idleHover: "#e8e8e8",
    activeShadow: "rgba(44, 62, 80, 0.20)",
  },
  success: {
    base: "background.green",
    activeBg: "background.green",
    activeHover: "#26b088",
    idleHover: "#e8f5f0",
    activeShadow: "rgba(51, 210, 164, 0.30)",
  },
  error: {
    base: "primary.red",
    activeBg: "primary.red",
    activeHover: "#d63f40",
    idleHover: "#fce8e8",
    activeShadow: "rgba(233, 83, 84, 0.30)",
  },
  primary: {
    base: "primary.blue",
    activeBg: "primary.blue",
    activeHover: "#135ba1",
    idleHover: "#e3f2fd",
    activeShadow: "rgba(25, 118, 210, 0.30)",
  },
};

function FilterChip({
  active = false,
  onClick,
  icon: Icon,
  label,
  tooltip,
  color = "neutral",
  fullWidthOnMobile = false,
}) {
  const palette = FILTER_PALETTE[color] || FILTER_PALETTE.neutral;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <Tooltip title={tooltip} arrow placement="top">
      <Box
        role="button"
        tabIndex={0}
        aria-pressed={active}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.5, sm: 0.75 },
          padding: {
            xs: "0.6rem 0.9rem",
            sm: "0.7rem 1.2rem",
            md: "0.8rem 1.4rem",
          },
          borderRadius: "2rem",
          backgroundColor: active ? palette.activeBg : "background.antiflash",
          color: active ? "#fff" : palette.base,
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          border: active
            ? `2px solid ${palette.activeBg}`
            : "2px solid transparent",
          fontWeight: 600,
          fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
          whiteSpace: "nowrap",
          flexShrink: 0,
          userSelect: "none",
          minWidth: fullWidthOnMobile ? { xs: "100%", sm: "auto" } : "auto",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: active ? palette.activeHover : palette.idleHover,
            transform: {
              xs: "translateY(-2px)",
              md: "translateY(-3px) scale(1.02)",
            },
            boxShadow: active
              ? `0 4px 12px ${palette.activeShadow}`
              : "0 2px 8px rgba(0, 0, 0, 0.10)",
          },
          "&:active": { transform: "translateY(0)" },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: palette.base,
            outlineOffset: 2,
          },
        }}
      >
        <Icon
          sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" } }}
        />
        <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
          {label}
        </Box>
      </Box>
    </Tooltip>
  );
}

function ActionButton({
  onClick,
  disabled = false,
  loading = false,
  color = "primary",
  icon: Icon,
  label,
  loadingLabel = "Guardando...",
  tooltip,
}) {
  const palette = FILTER_PALETTE[color] || FILTER_PALETTE.primary;

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <Tooltip title={tooltip} placement="top" arrow>
      <Box
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 0.5, sm: 0.75 },
          padding: {
            xs: "0.6rem 1rem",
            sm: "0.7rem 1.3rem",
            md: "0.8rem 1.5rem",
          },
          borderRadius: "0.5rem",
          backgroundColor: palette.activeBg,
          color: "#fff",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          border: `1px solid ${palette.activeBg}`,
          fontWeight: 600,
          fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
          opacity: disabled ? 0.6 : 1,
          userSelect: "none",
          pointerEvents: disabled ? "none" : "auto",
          "&:hover": disabled
            ? {}
            : {
                backgroundColor: palette.activeHover,
                transform: "translateY(-2px)",
                boxShadow: `0 4px 12px ${palette.activeShadow}`,
              },
          "&:active": disabled ? {} : { transform: "translateY(0)" },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: palette.base,
            outlineOffset: 2,
          },
        }}
      >
        {loading ? (
          <CircularProgress size={20} sx={{ color: "#fff" }} />
        ) : (
          <Icon
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" } }}
          />
        )}
        <span>{loading ? loadingLabel : label}</span>
      </Box>
    </Tooltip>
  );
}

const accordionSx = {
  boxShadow: { xs: 1, sm: 2, md: 3 },
  borderRadius: 2,
  marginBottom: { xs: 1.5, sm: 2, md: 2.5 },
  border: { sm: "1px solid #f0f0f0", md: "1px solid #e8e8e8" },
  overflow: "hidden",
  transition: "all 0.2s ease",
  "&:hover": {
    boxShadow: { xs: 2, sm: 3, md: 4 },
  },
  "&:before": { display: "none" },
};

const summarySx = {
  disableGutters: true,
  padding: { xs: "0.75rem 1rem", sm: "0.85rem 1.25rem" },
  minHeight: { xs: 56, sm: 64 },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    gap: { xs: 1, sm: 1.5 },
    my: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "text.secondary",
    transition: "transform 200ms ease, color 200ms ease",
  },
  "&:hover .MuiAccordionSummary-expandIconWrapper": {
    color: "primary.main",
  },
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(25, 118, 210, 0.04)",
  },
  "&.Mui-focused": {
    backgroundColor: "rgba(25, 118, 210, 0.06)",
  },
};

const titleTypographySx = {
  color: "primary.main",
  fontWeight: 600,
  fontSize: { xs: "0.95rem", sm: "1.1rem" },
  lineHeight: 1.2,
};

const summaryIconSx = {
  color: "primary.main",
  fontSize: { xs: "1.4rem", sm: "1.55rem" },
  flexShrink: 0,
};

const detailsSx = {
  backgroundColor: "#fafbfc",
  borderTop: "1px solid #e8e8e8",
  transition: "background-color 0.2s ease",
};

export const FacturProcess = () => {
  const { data, loading, error, refetch } = useFetch(
    "/api/facturation/clientes/",
  );
  const [clientesFacturacion, setClientesFacturacion] = useState({});
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(5);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [showSearcher, setShowSearcher] = useState(false);

  useEffect(() => {
    if (data?.clients) {
      const facturados = {};
      data.clients.forEach((client) => {
        facturados[client.id] = client.facturado === 1;
      });
      setClientesFacturacion(facturados);
      setFilteredClients(data.clients);
      setLeftValue(0);
      setRightValue(5);
    }
  }, [data]);

  const handleClientToggle = (clientId) => {
    setClientesFacturacion((prev) => ({
      ...prev,
      [clientId]: !prev[clientId],
    }));
  };

  const handleResetFacturatedStatus = async () => {
    const resetStatus = {};
    data?.clients.forEach((client) => {
      resetStatus[client.id] = false;
    });

    setGuardando(true);
    setMensaje(null);
    setOpenConfirmDialog(false);

    try {
      const response = await fetch("/api/facturation/clientes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientesFacturacion: resetStatus }),
      });

      if (response.ok) {
        setClientesFacturacion(resetStatus);
        setTipoMensaje("success");
        setMensaje("Facturación reiniciada correctamente");
        await refetch();
        setTimeout(() => setMensaje(null), 3000);
      } else {
        setTipoMensaje("error");
        setMensaje("Error al reiniciar la facturación");
      }
    } catch (error) {
      console.error("Error al reiniciar:", error);
      setTipoMensaje("error");
      setMensaje("Error al reiniciar la facturación");
    } finally {
      setGuardando(false);
    }
  };

  const handleGuardarFacturacion = async () => {
    setGuardando(true);
    setMensaje(null);
    try {
      const response = await fetch("/api/facturation/clientes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientesFacturacion }),
      });

      if (response.ok) {
        setTipoMensaje("success");
        setMensaje("Cambios guardados correctamente");
        await refetch();
        setTimeout(() => setMensaje(null), 3000);
      } else {
        setTipoMensaje("error");
        setMensaje("Error al guardar los cambios");
      }
    } catch (error) {
      console.error("Error al guardar:", error);
      setTipoMensaje("error");
      setMensaje("Error al guardar los cambios");
    } finally {
      setGuardando(false);
    }
  };

  const applyClientFilter = (searchValue, status) => {
    let results = data?.clients || [];
    if (searchValue.trim()) {
      const term = searchValue.toLowerCase();
      results = results.filter((c) => c.nombre.toLowerCase().includes(term));
    }
    if (status === "facturados") {
      results = results.filter((c) => c.facturado === 1);
    } else if (status === "sin_facturar") {
      results = results.filter((c) => c.facturado === 0);
    }
    setFilteredClients(results);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    setLeftValue(0);
    setRightValue(5);
    applyClientFilter(searchValue, filterStatus);
  };

  const handleFilterFacturados = () => {
    setFilterStatus("facturados");
    setSearchTerm("");
    setLeftValue(0);
    setRightValue(5);
    applyClientFilter("", "facturados");
  };

  const handleFilterSinFacturar = () => {
    setFilterStatus("sin_facturar");
    setSearchTerm("");
    setLeftValue(0);
    setRightValue(5);
    applyClientFilter("", "sin_facturar");
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setFilterStatus("all");
    setLeftValue(0);
    setRightValue(5);
    setFilteredClients(data?.clients || []);
  };

  return (
    <Box
      sx={{
        marginBottom: { xs: "10%", sm: "5%" },
        maxWidth: { sm: "100%", md: "1400px", lg: "1600px" },
        marginX: "auto",
        paddingX: { sm: 0, md: 2, lg: 3 },
      }}
    >
      <Accordion defaultExpanded sx={accordionSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="small" />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={summarySx}
        >
          <ReceiptIcon sx={summaryIconSx} />
          <Typography component="span" sx={titleTypographySx}>
            Estado de la Facturación
          </Typography>
          {typeof data?.generalPorcentage === "number" && (
            <Chip
              size="small"
              label={`${Math.round(data.generalPorcentage)}%`}
              aria-label={`${Math.round(data.generalPorcentage)} por ciento completado`}
              sx={{
                ml: "auto",
                mr: 1,
                bgcolor: getPercentageChipColors(data.generalPorcentage).bg,
                color: getPercentageChipColors(data.generalPorcentage).fg,
                fontWeight: 700,
                fontSize: "0.72rem",
                height: 24,
                borderRadius: 1.5,
                letterSpacing: "0.02em",
              }}
            />
          )}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            ...detailsSx,
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, sm: 3, md: 4, lg: 5 },
            justifyContent: "center",
            padding: { xs: "1.5rem 1rem", sm: "2rem 1.5rem", md: "2.5rem 2rem" },
            flexWrap: "wrap",
            minHeight: { sm: 180, md: 200 },
          }}
        >
          {loading && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircularProgress size={24} />
              <Typography>Cargando Estado...</Typography>
            </Box>
          )}
          {data && (
            <>
              <MyCircularProgres
                label="General"
                value={data?.generalPorcentage}
              />
              <MyCircularProgres
                label="Gaviota"
                value={data?.gaviotaData?.gaviotaPorcentage}
              />
              <MyCircularProgres
                label="Islazul"
                value={data?.islazulData?.islazulPorcentage}
              />
              <MyCircularProgres
                label="Otros"
                value={data?.otrosData?.otrosPorcentage}
              />
            </>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={accordionSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="small" />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={summarySx}
        >
          <FactCheckIcon sx={summaryIconSx} />
          <Typography component="span" sx={titleTypographySx}>
            Gestión de Facturación
          </Typography>
          {data?.clients?.length > 0 && (
            <Chip
              size="small"
              label={`${data.clients.length} cliente${data.clients.length === 1 ? "" : "s"}`}
              aria-label={`${data.clients.length} clientes en total`}
              sx={{
                ml: "auto",
                mr: 1,
                bgcolor: "rgba(25, 118, 210, 0.10)",
                color: "primary.blue",
                fontWeight: 700,
                fontSize: "0.72rem",
                height: 24,
                borderRadius: 1.5,
                letterSpacing: "0.02em",
              }}
            />
          )}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            ...detailsSx,
            padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
          }}
        >
          {loading && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircularProgress size={24} />
              <Typography>Cargando Clientes...</Typography>
            </Box>
          )}
          {data?.clients && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1.5, sm: 2, md: 2.5 },
                  marginBottom: { xs: "3%", sm: "2.5%", md: "2%" },
                  alignItems: { xs: "stretch", sm: "center" },
                  justifyContent: {
                    xs: "space-between",
                    sm: "space-between",
                    md: "flex-start",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.5, md: 2 },
                    flexWrap: { xs: "nowrap", sm: "nowrap" },
                    overflow: { xs: "auto", sm: "visible" },
                    paddingBottom: { xs: "0.5rem", sm: 0 },
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": { height: "4px" },
                    "&::-webkit-scrollbar-track": { background: "transparent" },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#ccc",
                      borderRadius: "2px",
                    },
                  }}
                >
                  <FilterChip
                    active={filterStatus === "all"}
                    onClick={handleResetSearch}
                    icon={FilterListIcon}
                    label="Todos"
                    tooltip="Mostrar todos los clientes"
                    color="neutral"
                  />
                  <FilterChip
                    active={filterStatus === "facturados"}
                    onClick={handleFilterFacturados}
                    icon={DoneAllIcon}
                    label="Facturados"
                    tooltip="Solo facturados"
                    color="success"
                  />
                  <FilterChip
                    active={filterStatus === "sin_facturar"}
                    onClick={handleFilterSinFacturar}
                    icon={BlockIcon}
                    label="Sin facturar"
                    tooltip="Sin facturar"
                    color="error"
                  />
                </Box>

                <FilterChip
                  active={showSearcher}
                  onClick={() => setShowSearcher(!showSearcher)}
                  icon={SearchIcon}
                  label={showSearcher ? "Ocultar" : "Buscar"}
                  tooltip={showSearcher ? "Ocultar buscador" : "Mostrar buscador"}
                  color="primary"
                  fullWidthOnMobile
                />
              </Box>

              {showSearcher && (
                <Box sx={{ marginBottom: "2%" }}>
                  <Searcher
                    collection={data?.clients}
                    searchFunction={handleSearch}
                    resetFunction={handleResetSearch}
                  />
                </Box>
              )}

              {mensaje && tipoMensaje && (
                <Alert
                  severity={tipoMensaje || "info"}
                  sx={{
                    marginBottom: { xs: "2%", md: "1.5%" },
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.05rem" },
                    borderRadius: "0.5rem",
                  }}
                >
                  {mensaje}
                </Alert>
              )}

              {filteredClients.length === 0 ? (
                <Typography
                  sx={{
                    textAlign: "center",
                    padding: { xs: "1.5%", sm: "2%" },
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  No se encontraron clientes
                </Typography>
              ) : (
                <>
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowX: "auto",
                      marginBottom: { xs: "2%", md: "1.5%" },
                      borderRadius: "0.5rem",
                      boxShadow: { xs: 1, sm: 2, md: 3 },
                    }}
                  >
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                          <TableCell
                            sx={{
                              fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem",
                              },
                              fontWeight: 600,
                            }}
                          >
                            Cliente
                          </TableCell>
                          <TableCell
                            sx={{
                              fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem",
                              },
                              fontWeight: 600,
                            }}
                          >
                            Cadena
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem",
                              },
                              fontWeight: 600,
                            }}
                          >
                            Facturado
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredClients
                          .slice(leftValue, rightValue)
                          .map((client) => (
                            <TableRow
                              key={client.id}
                              sx={{
                                transition: "background-color 0.2s ease",
                                "&:hover": {
                                  backgroundColor: "#f9f9f9",
                                },
                              }}
                            >
                              <TableCell
                                sx={{
                                  fontSize: {
                                    xs: "0.75rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                  },
                                }}
                              >
                                {client.nombre}
                              </TableCell>
                              <TableCell
                                sx={{
                                  fontSize: {
                                    xs: "0.75rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                  },
                                }}
                              >
                                {client.id_cadena === 1
                                  ? "Gaviota"
                                  : client.id_cadena === 2
                                    ? "Islazul"
                                    : "Otros"}
                              </TableCell>
                              <TableCell align="center">
                                <Switch
                                  checked={
                                    clientesFacturacion[client.id] || false
                                  }
                                  onChange={() => handleClientToggle(client.id)}
                                  color="primary"
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <PaginatorDots
                    dots={Math.ceil(filteredClients.length / 5)}
                    leftValue={leftValue}
                    rightValue={rightValue}
                    setLeftValue={setLeftValue}
                    setRightValue={setRightValue}
                    isVisiblePaginator={filteredClients.length > 5}
                  />
                </>
              )}

              <Box
                sx={{
                  marginTop: { xs: "2%", sm: "3%", md: "2.5%" },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "stretch", sm: "flex-end" },
                  // gap: { xs: "1%", sm: "1.5%", md: "2%" },
                  flexWrap: { xs: "nowrap", sm: "wrap" },
                }}
              >
                <Box sx={{marginBottom:"3%"}}>
              <ActionButton 
                  onClick={() => setOpenConfirmDialog(true)}
                  disabled={guardando}
                  color="error"
                  icon={RestartAltIcon}
                  label="Reiniciar"
                  tooltip="Reinicia el estado de facturación para todos los clientes"
                />
                </Box>
                
                <ActionButton
                  onClick={handleGuardarFacturacion}
                  disabled={guardando}
                  loading={guardando}
                  color="primary"
                  icon={SaveIcon}
                  label="Guardar"
                  loadingLabel="Guardando..."
                  tooltip="Guardar cambios de facturación"
                />
              </Box>

              <Dialog
                open={openConfirmDialog}
                onClose={() => setOpenConfirmDialog(false)}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                  sx: { margin: { xs: 1, sm: 0 } },
                }}
              >
                <DialogTitle
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" },
                  }}
                >
                  ¿Reiniciar facturación?
                </DialogTitle>
                <DialogContent>
                  <Typography
                    sx={{
                      marginTop: 1,
                      fontSize: { xs: "0.875rem", sm: "1rem", md: "1.05rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    Esta acción marcará todos los clientes como no facturados.
                    Esta acción no se puede deshacer.
                  </Typography>
                </DialogContent>
                <DialogActions
                  sx={{
                    padding: { xs: 1.5, sm: 2, md: 2.5 },
                    gap: { xs: 1, md: 1.5 },
                  }}
                >
                  <Button
                    onClick={() => setOpenConfirmDialog(false)}
                    variant="outlined"
                    fullWidth
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      fontSize: { xs: "0.875rem", sm: "1rem", md: "1.05rem" },
                      padding: { md: "0.7rem 1.5rem" },
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleResetFacturatedStatus}
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      fontSize: { xs: "0.875rem", sm: "1rem", md: "1.05rem" },
                      padding: { md: "0.7rem 1.5rem" },
                    }}
                  >
                    Reiniciar
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
