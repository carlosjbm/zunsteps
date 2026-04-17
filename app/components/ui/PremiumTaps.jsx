"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TerminalIcon from "@mui/icons-material/Terminal";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { CircularProgress, Typography } from "@mui/material";
import "../../styles/premium.css";
import Utilinks from "./Utilinks";
import { links } from "@/app/lib/links";
import BasicAccordion from "./BasicAccordion";
import useCurrentMonth from "@/app/lib/hooks/useCurrentMonth";
import { useFetch } from "@/app/lib/hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";
import { InfiniteTips } from "./InfiniteTips";
import { ColaboratorStats } from "./ColaboratorStats";
import { ShowLinks } from "./ShowLinks";
import FastStep from "./FastStep";
import { FlashOn, Light } from "@mui/icons-material";

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

export default function PremiumTabs() {
  const [value, setValue] = React.useState(0);
  const [
    currentMonth,
    allProcess,
    filtredProcess,
    isLoading,
    setFiltredProcess,
    toFiltre,
  ] = useCurrentMonth("es-ES");
  const { loading, error, data } = useFetch(
    "http://localhost:3000/api/colaboracion/",
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const apiGenericStats = !loading ? data?.genericData : null;
  console.log(loading, data);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tooltip title="Colaboradores" arrow>
            <Tab
              label={
                <WorkspacePremiumOutlinedIcon sx={{ color: "primary.gold" }} />
              }
              {...a11yProps(0)}
            />
          </Tooltip>
          <Tooltip title="Links Útiles" arrow>
            <Tab
              label={<LinkOutlinedIcon sx={{ color: "primary.blue" }} />}
              {...a11yProps(1)}
            />
          </Tooltip>
          <Tooltip title="Fast Steps" arrow>
            <Tab
              label={<FlashOn sx={{ color: "primary.blue" }} />}
              {...a11yProps(2)}
            />
          </Tooltip>
          <Tooltip title="Sugerencias del Mes" arrow>
            <Tab
              label={
                <Badge
                  badgeContent={currentMonth.monthName.slice(0, 3)}
                  color="primary"
                >
                  <NotificationsActiveOutlinedIcon color="action" />
                </Badge>
              }
              {...a11yProps(3)}
            />
          </Tooltip>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "20%",
            backgroundColor: "background.antiflash",
            marginBottom: "3%",
            color: "primary.main",
          }}
        >
          <Typography
            color="primary.blue"
            variant="h6"
            sx={{ margin: "2%" }}
            gutterBottom
          >
            Colaboradores destacados
          </Typography>
        </Box>
        {apiGenericStats ? (
          apiGenericStats.map((e) => {
            return (
              <ColaboratorStats
                key={e.usuario_nombre}
                userName={e.usuario_nombre}
                tipsNumber={e.cant_c}
                porcent={e.porc_c}
                likesNumber={e.usuario_likes}
              />
            );
          })
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CircularProgress /> Cargando datos ...
          </Box>
        )}

        {/* <InfiniteTips /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6" sx={{ margin: "2%" }} gutterBottom>
          Links Utilitarios
        </Typography>
        <ShowLinks />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box className="process-box">
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Light sx={{ color: "background.green" }} />
            <Typography
              variant="h6"
              sx={{ margin: "2%", color: "primary.text" }}
              gutterBottom
            >
              Con la funcionalidad FASTSTEPS pudes encontrar respuestas a
              errores comunes.
            </Typography>
          </Box>
          <FastStep />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6" sx={{ margin: "2%" }} gutterBottom>
          Sugerencias para el mes de {currentMonth.monthName}
          {`(${currentMonth.monthName.slice(0, 3)})`}
        </Typography>
        <Box>
          <BasicAccordion items={filtredProcess} isLoading={isLoading} />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
