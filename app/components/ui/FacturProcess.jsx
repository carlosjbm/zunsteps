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
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RefreshIcon from "@mui/icons-material/Refresh";
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
    setClientesFacturacion(resetStatus);
    setGuardando(true);
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
    <Box sx={{ marginBottom: "5%" }}>
      <Accordion
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          marginBottom: 2,
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
          }}
        >
          <ReceiptIcon sx={{ color: "main", marginRight: 1 }} />
          <Typography
            component="span"
            sx={{ color: "main", fontWeight: 600, fontSize: "1.1rem" }}
          >
            Estado de la Facturación
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10%",
            justifyContent: "center",
            padding: "2%",
            backgroundColor: "#f8f9fa",
            flexWrap: "wrap",
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Gestión de Clientes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {loading && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircularProgress size={24} />
              <Typography>Cargando Clientes...</Typography>
            </Box>
          )}
          {data?.clients && (
            <Box>
              <Box sx={{ marginBottom: "2%" }}>
                <Searcher
                  collection={data?.clients}
                  searchFunction={handleSearch}
                  resetFunction={handleResetSearch}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "1%",
                  marginBottom: "2%",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant={filterStatus === "all" ? "contained" : "outlined"}
                  color="primary"
                  onClick={handleResetSearch}
                >
                  <FormatListBulleted /> Todos
                </Button>
                <Button
                  variant={
                    filterStatus === "facturados" ? "contained" : "outlined"
                  }
                  color="success"
                  onClick={handleFilterFacturados}
                >
                  <CheckCircleIcon />
                </Button>
                <Button
                  variant={
                    filterStatus === "sin_facturar" ? "contained" : "outlined"
                  }
                  color="error"
                  onClick={handleFilterSinFacturar}
                >
                  <CancelIcon />
                </Button>
              </Box>

              {mensaje && (
                <Alert severity={tipoMensaje} sx={{ marginBottom: "2%" }}>
                  {mensaje}
                </Alert>
              )}

              {filteredClients.length === 0 ? (
                <Typography sx={{ textAlign: "center", padding: "2%" }}>
                  No se encontraron clientes
                </Typography>
              ) : (
                <>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                          <TableCell>Cliente</TableCell>
                          <TableCell>Cadena</TableCell>
                          <TableCell align="center">Facturado</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredClients
                          .slice(leftValue, rightValue)
                          .map((client) => (
                            <TableRow key={client.id}>
                              <TableCell>{client.nombre}</TableCell>
                              <TableCell>
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
                  marginTop: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  color="primary.red"
                  onClick={handleResetFacturatedStatus}
                  sx={{
                    border: "1px solid",
                    borderColor: "primary.red",
                    backgroundColor: "transparent",
                    marginRight: "1%",
                  }}
                >
                  Reeiniciar Facturacion
                </Button>
                <Button
                  color="primary"
                  onClick={handleGuardarFacturacion}
                  disabled={guardando}
                  sx={{
                    border: "1px solid",
                    borderColor: "primary.main",
                    backgroundColor: guardando
                      ? "primary.light"
                      : "transparent",
                  }}
                >
                  {guardando ? "Guardando..." : "Guardar Cambios"}
                </Button>
              </Box>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
