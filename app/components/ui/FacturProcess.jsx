"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { MyCircularProgres } from "./MyCircularProgres";
import { useFetch } from "@/app/lib/hooks/useFetch";
export const FacturProcess = () => {
  const { data, loading, error } = useFetch("/api/facturation/clientes/");

  return (
    <Box sx={{ marginBottom: "5%" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Estado de la Facturacion</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10%",
            justifyContent: "center",
          }}
        >
          {loading && <Typography>Cargando...</Typography>}
          {data && (
            <>
              <MyCircularProgres
                label="General"
                value={data?.generalPorcentage}
              />
              <MyCircularProgres
                label="Gaviota"
                value={data?.gaviotaPorcentage}
              />
              <MyCircularProgres
                label="Islazul"
                value={data?.islazulPorcentage}
              />
              <MyCircularProgres label="Otros" value={data?.otrosPorcentage} />
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
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
