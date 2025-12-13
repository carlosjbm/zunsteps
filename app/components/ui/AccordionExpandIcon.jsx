import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Searcher } from "./Searcher";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { ConceptItem } from "./ConceptItem";
import VerticalLinearStepper from "./VerticalLinearStepper";
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";
import { NoResults } from "./NoResults";
import { PaginatorDots } from "./PaginatorDots";

export default function AccordionExpandIcon({ seccion }) {
  const { modulo } = React.useContext(ModuloContext);
  const { mNombre, mResumen } = modulo;
  const [resultSearch, setResultSearch] = React.useState();

  //Cantidad de puntos por pintar
  let countDots = (seccion.acciones.length / 5).toFixed(0);
  //Mostrar en grupos de 5 los contenidos
  const [leftValue, setLeftValue] = React.useState(0);
  const [rightValue, setRightValue] = React.useState(5);
  const [showPaginButton, setShowPaginButton] = React.useState(true);

  //Mostrar los 5 siguientes
  const handlePaging = () => {
    //Condicion para mostrar o no el boton para paginar
    if (seccion.acciones.length - rightValue <= 5) {
      setShowPaginButton(false);
    }
    //Aunmemtando de 5 en 5 la dimencion de la muestra de paginado
    setLeftValue(leftValue + 5);
    setRightValue(rightValue + 5);
  };

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

          <Searcher
            collection={seccion.acciones}
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
            Contenidos:
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {
              /***Con eto me aseguro de que no existan resultados de la busqueda */
              resultSearch && resultSearch.length === 0 && <NoResults />
            }
            {resultSearch
              ? resultSearch.map((el) => (
                  <ConceptItem key={el.id} accion={el} />
                ))
              : seccion.acciones
                  .slice(leftValue, rightValue)
                  .map((el) => <ConceptItem key={el.id} accion={el} />)}
          </Box>

          {
            //Asegurandome que el existan mas de 5 contenidos para mostrar el boton de paginacion quintuple
            showPaginButton && seccion.acciones.length > 5 && (
              <Box sx={{ marginTop: "8px" }}>
                <PaginatorDots
                  handlePaging={handlePaging}
                  dots={countDots}
                  showNext={showPaginButton}
                />
              </Box>
            )
          }
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
