"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccordionExpandIcon from "./AccordionExpandIcon";
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const { modulo, loading } = React.useContext(ModuloContext);

  // Mientras carga, mostrar loading
  if (loading || !modulo) {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          mx: "auto",
          px: { xs: 0.5, sm: 2 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
        }}
      >
        <p>Cargando módulo...</p>
      </Box>
    );
  }

  const { mSecciones, mNombre, mResumen } = modulo;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //************************************************************** */

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        mx: "auto",
        px: { xs: 0.5, sm: 2 },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            minHeight: 40,
            "& .MuiTab-root": {
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              minWidth: 80,
              px: { xs: 1, sm: 2 },
              py: { xs: 0.5, sm: 1 },
            },
          }}
        >
          {mSecciones.map((el) => (
            <Tab
              key={el.id}
              label={el.sNombre}
              {...a11yProps(mSecciones.indexOf(el))}
            />
          ))}
        </Tabs>
      </Box>
      {mSecciones.map((el) => (
        <CustomTabPanel
          key={el.sNombre}
          value={value}
          index={mSecciones.indexOf(el)}
        >
          <AccordionExpandIcon key={el.id} seccion={el} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
