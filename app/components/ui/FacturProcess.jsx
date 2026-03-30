"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
  Chip,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import FiterListIcon from "@mui/icons-material/FilterList";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BlockIcon from "@mui/icons-material/Block";
import { MyCircularProgres } from "./MyCircularProgres";
import { useFetch } from "@/app/lib/hooks/useFetch";
import { useState, useEffect } from "react";
import { Searcher } from "./Searcher";
import { PaginatorDots } from "./PaginatorDots";
import { FormatListBulleted } from "@mui/icons-material";

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
  const [filterStatus, setFilterStatus] = useState("all"); // all, facturados, sin_facturar
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientesFacturacion: resetStatus,
        }),
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientesFacturacion,
        }),
      });

      if (response.ok) {
        setTipoMensaje("success");
        setMensaje("Cambios guardados correctamente");
        // Refrescar los datos después de guardar
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

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    setLeftValue(0);
    setRightValue(5);

    let results = data?.clients || [];

    // Aplicar filtro de búsqueda
    if (searchValue.trim()) {
      results = results.filter((client) =>
        client.nombre.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    // Aplicar filtro de estado
    if (filterStatus === "facturados") {
      results = results.filter((client) => client.facturado === 1);
    } else if (filterStatus === "sin_facturar") {
      results = results.filter((client) => client.facturado === 0);
    }

    setFilteredClients(results);
  };

  const handleFilterFacturados = () => {
    setFilterStatus("facturados");
    setSearchTerm("");
    setLeftValue(0);
    setRightValue(5);

    const results =
      data?.clients.filter((client) => client.facturado === 1) || [];
    setFilteredClients(results);
  };

  const handleFilterSinFacturar = () => {
    setFilterStatus("sin_facturar");
    setSearchTerm("");
    setLeftValue(0);
    setRightValue(5);

    const results =
      data?.clients.filter((client) => client.facturado === 0) || [];
    setFilteredClients(results);
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
      <Accordion
        sx={{
          boxShadow: { xs: 1, sm: 2, md: 3 },
          borderRadius: 2,
          marginBottom: { xs: 1.5, sm: 2, md: 2.5 },
          border: { sm: "1px solid #f0f0f0", md: "1px solid #e8e8e8" },
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: { xs: 2, sm: 3, md: 4 },
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .MuiAccordionSummary-content": {
              alignItems: "center",
              gap: 1,
            },
            padding: { xs: "0.75rem 1rem", sm: "1rem" },
          }}
        >
          <ReceiptIcon
            sx={{
              color: "main",
              marginRight: 1,
              fontSize: { xs: "1.5rem", sm: "1.75rem" },
            }}
          />
          <Typography
            component="span"
            sx={{
              color: "main",
              fontWeight: 600,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
            }}
          >
            Estado de la Facturación
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "5%", sm: "8%", md: "6%", lg: "5%" },
            justifyContent: "center",
            padding: { xs: "3%", sm: "2.5%", md: "3%", lg: "3.5%" },
            backgroundColor: { xs: "#f8f9fa", sm: "#fafbfc" },
            flexWrap: "wrap",
            minHeight: { sm: "180px", md: "200px" },
            transition: "background-color 0.2s ease",
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
      <Accordion
        sx={{
          boxShadow: { xs: 1, sm: 2, md: 3 },
          borderRadius: 2,
          border: { sm: "1px solid #f0f0f0", md: "1px solid #e8e8e8" },
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: { xs: 2, sm: 3, md: 4 },
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            padding: { xs: "0.75rem 1rem", sm: "1rem" },
            transition: "background-color 0.2s ease",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              fontWeight: 600,
            }}
          >
            Gestión de Clientes
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
            backgroundColor: { xs: "transparent", sm: "#fafbfc" },
            transition: "background-color 0.2s ease",
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
                {/* Filtros */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.5, md: 2 },
                    flexWrap: { xs: "nowrap", sm: "nowrap" },
                    overflow: { xs: "auto", sm: "visible" },
                    paddingBottom: { xs: "0.5rem", sm: 0 },
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": {
                      height: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#ccc",
                      borderRadius: "2px",
                    },
                  }}
                >
                  {/* Botón Todos */}
                  <Tooltip
                    title="Mostrar todos los clientes"
                    arrow
                    placement="top"
                  >
                    <Box
                      onClick={handleResetSearch}
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
                        backgroundColor:
                          filterStatus === "all"
                            ? "#2c3e50"
                            : "background.antiflash",
                        color: filterStatus === "all" ? "#fff" : "#2c3e50",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        border:
                          filterStatus === "all"
                            ? "2px solid #2c3e50"
                            : "2px solid transparent",
                        fontWeight: 600,
                        fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        userSelect: "none",
                        "&:hover": {
                          backgroundColor:
                            filterStatus === "all" ? "#1a252f" : "#e8e8e8",
                          transform: {
                            xs: "translateY(-2px)",
                            md: "translateY(-3px) scale(1.02)",
                          },
                          boxShadow:
                            filterStatus === "all"
                              ? "0 4px 12px rgba(44, 62, 80, 0.2)"
                              : "0 2px 8px rgba(0, 0, 0, 0.1)",
                        },
                        "&:active": {
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <FiterListIcon
                        sx={{
                          fontSize: {
                            xs: "1.1rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                          },
                        }}
                      />
                      <span style={{ display: { xs: "none", sm: "inline" } }}>
                        Todos
                      </span>
                    </Box>
                  </Tooltip>

                  {/* Botón Facturados */}
                  <Tooltip title="Solo facturados" arrow placement="top">
                    <Box
                      onClick={handleFilterFacturados}
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
                        backgroundColor:
                          filterStatus === "facturados"
                            ? "#33d2a4"
                            : "background.antiflash",
                        color:
                          filterStatus === "facturados" ? "#fff" : "#33d2a4",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        border:
                          filterStatus === "facturados"
                            ? "2px solid #33d2a4"
                            : "2px solid transparent",
                        fontWeight: 600,
                        fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        userSelect: "none",
                        "&:hover": {
                          backgroundColor:
                            filterStatus === "facturados"
                              ? "#26b088"
                              : "#e8f5f0",
                          transform: {
                            xs: "translateY(-2px)",
                            md: "translateY(-3px) scale(1.02)",
                          },
                          boxShadow:
                            filterStatus === "facturados"
                              ? "0 4px 12px rgba(51, 210, 164, 0.3)"
                              : "0 2px 8px rgba(51, 210, 164, 0.1)",
                        },
                        "&:active": {
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <DoneAllIcon
                        sx={{
                          fontSize: {
                            xs: "1.1rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                          },
                        }}
                      />
                      <span style={{ display: { xs: "none", sm: "inline" } }}>
                        Facturados
                      </span>
                    </Box>
                  </Tooltip>

                  {/* Botón Sin Facturar */}
                  <Tooltip title="Sin facturar" arrow placement="top">
                    <Box
                      onClick={handleFilterSinFacturar}
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
                        backgroundColor:
                          filterStatus === "sin_facturar"
                            ? "#e95354"
                            : "background.antiflash",
                        color:
                          filterStatus === "sin_facturar" ? "#fff" : "#e95354",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        border:
                          filterStatus === "sin_facturar"
                            ? "2px solid #e95354"
                            : "2px solid transparent",
                        fontWeight: 600,
                        fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        userSelect: "none",
                        "&:hover": {
                          backgroundColor:
                            filterStatus === "sin_facturar"
                              ? "#d63f40"
                              : "#fce8e8",
                          transform: {
                            xs: "translateY(-2px)",
                            md: "translateY(-3px) scale(1.02)",
                          },
                          boxShadow:
                            filterStatus === "sin_facturar"
                              ? "0 4px 12px rgba(233, 83, 84, 0.3)"
                              : "0 2px 8px rgba(233, 83, 84, 0.1)",
                        },
                        "&:active": {
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <BlockIcon
                        sx={{
                          fontSize: {
                            xs: "1.1rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                          },
                        }}
                      />
                      <span style={{ display: { xs: "none", sm: "inline" } }}>
                        Sin facturar
                      </span>
                    </Box>
                  </Tooltip>
                </Box>

                {/* Botón Buscador */}
                <Tooltip
                  title={showSearcher ? "Ocultar buscador" : "Mostrar buscador"}
                  arrow
                  placement="top"
                >
                  <Box
                    onClick={() => setShowSearcher(!showSearcher)}
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
                      backgroundColor: showSearcher
                        ? "#1976d2"
                        : "background.antiflash",
                      color: showSearcher ? "#fff" : "#1976d2",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: showSearcher
                        ? "2px solid #1976d2"
                        : "2px solid transparent",
                      fontWeight: 600,
                      fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minWidth: { xs: "100%", sm: "auto" },
                      userSelect: "none",
                      "&:hover": {
                        backgroundColor: showSearcher ? "#135ba1" : "#e3f2fd",
                        transform: {
                          xs: "translateY(-2px)",
                          md: "translateY(-3px) scale(1.02)",
                        },
                        boxShadow: showSearcher
                          ? "0 4px 12px rgba(25, 118, 210, 0.3)"
                          : "0 2px 8px rgba(25, 118, 210, 0.1)",
                      },
                      "&:active": {
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <SearchIcon
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      }}
                    />
                    <span style={{ display: { xs: "none", sm: "inline" } }}>
                      {showSearcher ? "Ocultar" : "Buscar"}
                    </span>
                  </Box>
                </Tooltip>
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
                                  size="small"
                                  sx={{
                                    "& .MuiSwitch-track": {
                                      height: { xs: "24px", md: "28px" },
                                    },
                                    "& .MuiSwitch-thumb": {
                                      width: { xs: "20px", md: "24px" },
                                      height: { xs: "20px", md: "24px" },
                                    },
                                  }}
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
                  gap: { xs: "1%", sm: "1.5%", md: "2%" },
                  flexWrap: { xs: "nowrap", sm: "wrap" },
                }}
              >
                <Tooltip
                  title="Reinicia el estado de facturación para todos los clientes"
                  placement="top"
                >
                  <Box
                    onClick={() => setOpenConfirmDialog(true)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: { xs: "1%", sm: 0 },
                      gap: { xs: 0.5, sm: 0.75 },
                      padding: {
                        xs: "0.6rem 1rem",
                        sm: "0.7rem 1.3rem",
                        md: "0.8rem 1.5rem",
                      },
                      borderRadius: "0.5rem",
                      backgroundColor: "#e95354",
                      color: "#fff",
                      cursor: guardando ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease",
                      border: "1px solid #e95354",
                      fontWeight: 600,
                      fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                      opacity: guardando ? 0.6 : 1,
                      pointerEvents: guardando ? "none" : "auto",
                      userSelect: "none",
                      "&:hover": guardando
                        ? {}
                        : {
                            backgroundColor: "#d63f40",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 12px rgba(233, 83, 84, 0.3)",
                          },
                      "&:active": guardando
                        ? {}
                        : {
                            transform: "translateY(0)",
                          },
                    }}
                  >
                    <RestartAltIcon
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
                      }}
                    />
                    <span>Reiniciar</span>
                  </Box>
                </Tooltip>

                <Box
                  onClick={!guardando ? handleGuardarFacturacion : undefined}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: { xs: "1%", sm: 0 },
                    gap: { xs: 0.5, sm: 0.75 },
                    padding: {
                      xs: "0.6rem 1rem",
                      sm: "0.7rem 1.3rem",
                      md: "0.8rem 1.5rem",
                    },
                    borderRadius: "0.5rem",
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                    cursor: guardando ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    border: "1px solid #2c3e50",
                    fontWeight: 600,
                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                    opacity: guardando ? 0.6 : 1,
                    userSelect: "none",
                    "&:hover": guardando
                      ? {}
                      : {
                          backgroundColor: "#1a252f",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(44, 62, 80, 0.3)",
                        },
                    "&:active": guardando
                      ? {}
                      : {
                          transform: "translateY(0)",
                        },
                  }}
                >
                  {guardando ? (
                    <CircularProgress size={20} sx={{ color: "#fff" }} />
                  ) : (
                    <SaveIcon
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
                      }}
                    />
                  )}
                  <span>{guardando ? "Guardando..." : "Guardar"}</span>
                </Box>
              </Box>

              <Dialog
                open={openConfirmDialog}
                onClose={() => setOpenConfirmDialog(false)}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                  sx: {
                    margin: { xs: 1, sm: 0 },
                  },
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
