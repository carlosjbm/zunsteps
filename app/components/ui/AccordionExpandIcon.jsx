import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  formLabelClasses,
} from "@mui/material";
import { Searcher } from "./Searcher";
import { ConceptItem } from "./ConceptItem";
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";
import { NoResults } from "./NoResults";
import { PaginatorDots } from "./PaginatorDots";
import { cargos } from "@/app/lib/cargos";

export default function AccordionExpandIcon({ seccion }) {
  const { modulo } = React.useContext(ModuloContext);
  const { mNombre, mResumen } = modulo;
  const [resultSearch, setResultSearch] = React.useState();
  const [selectedCargo, setSelectedCargo] = React.useState("");
  const [filteredActions, setFilteredActions] = React.useState(
    seccion.acciones
  );

  const orderActionBycargos = (cargo) => {
    if (seccion && cargo) {
      const filtered = seccion.acciones.filter((accion) =>
        accion.cargos?.includes(cargo)
      );
      setFilteredActions(filtered);
      setLeftValue(0);
      setRightValue(5);
      setShowPaginButton(true);
    } else {
      setFilteredActions(seccion.acciones);
      setLeftValue(0);
      setRightValue(5);
      setShowPaginButton(true);
    }
  };

  const handleCargoChange = (item) => {
    const cargo = item;
    setSelectedCargo(cargo);
    orderActionBycargos(cargo);
  };

  //Cantidad de puntos por pintar
  let countDots = (filteredActions.length / 5).toFixed(0);
  //Mostrar en grupos de 5 los contenidos
  const [leftValue, setLeftValue] = React.useState(0);
  const [rightValue, setRightValue] = React.useState(5);
  const [showPaginButton, setShowPaginButton] = React.useState(() => {
    return filteredActions.length > 5;
  });
  const searchAccion = (goal, list) => {
    let lowerGoal = goal.toLowerCase();
    let result = list.filter((el) =>
      el.aNombre.toLowerCase().includes(lowerGoal)
    );
    setResultSearch(result);
  };
  const restSearch = () => {
    setResultSearch();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Accordion - Módulo */}
      <Accordion
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
          },
          transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            padding: "16px 20px",
            backgroundColor: "background.paper",
            "&:hover": {
              backgroundColor: "background.green",
            },
            transition: "background-color 250ms",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: "12px",
            }}
          >
            <Typography
              variant="h5"
              color="primary.main"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
              }}
            >
              {mNombre}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "16px 20px",
            backgroundColor: "background.paper",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography color="primary.text" sx={{ lineHeight: 1.6 }}>
            {mResumen}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion - Sección y Contenidos */}
      <Accordion
        defaultExpanded="true"
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
          },
          transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            padding: "16px 20px",
            backgroundColor: "background.paper",
            "&:hover": {
              backgroundColor: "background.green",
            },
            transition: "background-color 250ms",
          }}
        >
          <Typography
            variant="h6"
            color="primary.text"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            {seccion.sNombre}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "20px",
            backgroundColor: "background.paper",
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography color="primary.text" sx={{ lineHeight: 1.6 }}>
            A continuación te mostramos las acciones que consideramos más
            importantes en esta sección, pero puedes buscar la que desees desde
            la barra de búsqueda.
          </Typography>

          {/* Filtro por Cargo */}
          <FormControl
            sx={{ minWidth: { xs: "100%", sm: "250px" } }}
            size="small"
          >
            <InputLabel id="cargo-select-label" sx={{ color: "primary.text" }}>
              Filtrar por Cargo
            </InputLabel>
            <Select
              labelId="cargo-select-label"
              id="cargo-select"
              value={selectedCargo}
              label="Filtrar por Cargo"
              onChange={(event) => handleCargoChange(event.target.value)}
              sx={{
                backgroundColor: "background.green",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: "background.main",
                },
                transition: "all 250ms",
              }}
            >
              <MenuItem value="">
                <em>Mostrar todas las acciones</em>
              </MenuItem>
              {cargos.map((cargo) => (
                <MenuItem key={cargo.id} value={cargo.name}>
                  {cargo.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Searcher
            collection={filteredActions}
            searchFunction={searchAccion}
            resetFunction={restSearch}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginTop: "8px",
              color: "primary.main",
            }}
          >
            Contenidos: {filteredActions.length} acciones
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {
              /***Con eto me aseguro de que no existan resultados de la busqueda */
              resultSearch && resultSearch.length === 0 && <NoResults />
            }
            {resultSearch && resultSearch.length > 0 ? (
              resultSearch.map((el) => <ConceptItem key={el.id} accion={el} />)
            ) : filteredActions.length > 0 ? (
              filteredActions
                .slice(leftValue, rightValue)
                .map((el) => <ConceptItem key={el.id} accion={el} />)
            ) : (
              <NoResults />
            )}
          </Box>

          {
            //Asegurandome que el existan mas de 5 contenidos para mostrar el boton de paginacion quintuple
            showPaginButton && (
              <Box sx={{ marginTop: "8px" }}>
                <PaginatorDots
                  dots={countDots}
                  isVisiblePaginator={showPaginButton}
                  leftValue={leftValue}
                  rightValue={rightValue}
                  setLeftValue={setLeftValue}
                  setRightValue={setRightValue}
                />
              </Box>
            )
          }
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
