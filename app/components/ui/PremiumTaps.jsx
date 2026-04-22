"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { CircularProgress, Typography, Paper, Chip } from "@mui/material";
import "../../styles/premium.css";
import {
  PeopleAltOutlined,
  LinkOutlined,
  FlashOnOutlined,
  NewspaperOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";
import BasicAccordion from "./BasicAccordion";
import useCurrentMonth from "@/app/lib/hooks/useCurrentMonth";
import { useFetch } from "@/app/lib/hooks/useFetch";
import { ColaboratorStats } from "./ColaboratorStats";
import { ShowLinks } from "./ShowLinks";
import FastStep from "./FastStep";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`premium-tabpanel-${index}`}
      aria-labelledby={`premium-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            animation: "fadeIn 0.3s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(10px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {children}
        </Box>
      )}
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
    id: `premium-tab-${index}`,
    "aria-controls": `premium-tabpanel-${index}`,
  };
}

const TAB_CONFIG = [
  {
    id: 0,
    label: "",
    icon: <PeopleAltOutlined />,
    color: "rgb(255, 193, 7)",
    description: "Destacados de la comunidad",
    badge: null,
  },
  {
    id: 1,
    label: "",
    icon: <LinkOutlined />,
    color: "rgb(33, 150, 243)",
    description: "Links de ayuda y soporte",
    badge: null,
  },
  {
    id: 2,
    label: "",
    icon: <FlashOnOutlined />,
    color: "rgb(76, 175, 80)",
    description: "Búsqueda rápida de errores",
    badge: "QUICK",
  },
  {
    id: 3,
    label: "",
    icon: <NewspaperOutlined />,
    color: "rgb(233, 30, 99)",
    description: "Novedades e información",
    badge: null,
  },
];

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
  const { loading, error, data } = useFetch("/api/colaboracion/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const apiGenericStats = !loading ? data?.genericData : null;
  const currentTab = TAB_CONFIG[value];

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          background:
            "linear-gradient(135deg, rgba(51, 210, 164, 0.1) 0%, rgba(33, 150, 243, 0.1) 100%)",
          borderRadius: 2,
          padding: 2.5,
          marginBottom: 2.5,
          border: "1px solid rgba(51, 210, 164, 0.2)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: 2,
              backgroundColor: `${currentTab.color}20`,
            }}
          >
            <Box sx={{ color: currentTab.color, fontSize: 28 }}>
              {currentTab.icon}
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "primary.main", mb: 0.5 }}
            >
              {currentTab.label}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "primary.text", fontSize: "0.85rem" }}
            >
              {currentTab.description}
            </Typography>
          </Box>
          {currentTab.badge && (
            <Chip
              label={currentTab.badge}
              size="small"
              sx={{
                marginLeft: "auto",
                backgroundColor: currentTab.color,
                color: "white",
                fontWeight: 600,
                fontSize: "0.7rem",
              }}
            />
          )}
        </Box>
      </Paper>

      {/* Tabs Section */}
      <Paper
        elevation={0}
        sx={{ borderRadius: 2, border: "1px solid #e0e0e0" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="premium features tabs"
          variant="fullWidth"
          sx={{
            backgroundColor: "background.main",
            borderBottom: "2px solid #e0e0e0",
            "& .MuiTabs-indicator": {
              backgroundColor: currentTab.color,
              height: 3,
            },
          }}
        >
          {TAB_CONFIG.map((tab) => (
            <Tooltip key={tab.id} title={tab.description} arrow>
              <Tab
                icon={tab.icon}
                iconPosition="start"
                label={tab.label}
                {...a11yProps(tab.id)}
                sx={{
                  py: 1.5,
                  px: 2,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: value === tab.id ? tab.color : "primary.text",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.02)",
                    color: tab.color,
                  },
                  "& .MuiSvgIcon-root": {
                    marginRight: 0.8,
                    fontSize: 20,
                  },
                }}
              />
            </Tooltip>
          ))}
        </Tabs>

        {/* Tab Content */}
        <CustomTabPanel value={value} index={0}>
          {/* Colaboradores */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                p: 2,
                backgroundColor: "rgba(255, 193, 7, 0.08)",
                borderRadius: 1.5,
                borderLeft: "4px solid rgb(255, 193, 7)",
              }}
            >
              <EmojiEventsOutlined
                sx={{ color: "rgb(255, 193, 7)", fontSize: 28 }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Expertos de la Comunidad
                </Typography>
                <Typography variant="caption" sx={{ color: "primary.text" }}>
                  Usuarios con mayor contribución y confiabilidad
                </Typography>
              </Box>
            </Box>

            {apiGenericStats ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {apiGenericStats.map((collaborator) => (
                  <ColaboratorStats
                    key={collaborator.usuario_nombre}
                    userName={collaborator.usuario_nombre}
                    tipsNumber={collaborator.cant_c}
                    porcent={collaborator.porc_c}
                    likesNumber={collaborator.usuario_likes}
                  />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  py: 4,
                }}
              >
                <CircularProgress size={40} />
                <Typography variant="body2" color="primary.text">
                  Cargando colaboradores destacados...
                </Typography>
              </Box>
            )}
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          {/* Recursos */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                p: 2,
                backgroundColor: "rgba(33, 150, 243, 0.08)",
                borderRadius: 1.5,
                borderLeft: "4px solid rgb(33, 150, 243)",
              }}
            >
              <LinkOutlined sx={{ color: "rgb(33, 150, 243)", fontSize: 28 }} />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Centro de Recursos
                </Typography>
                <Typography variant="caption" sx={{ color: "primary.text" }}>
                  Links útiles, documentación y guías de la comunidad
                </Typography>
              </Box>
            </Box>
            <ShowLinks />
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          {/* Soluciones Rápidas */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                p: 2,
                backgroundColor: "rgba(76, 175, 80, 0.08)",
                borderRadius: 1.5,
                borderLeft: "4px solid rgb(76, 175, 80)",
              }}
            >
              <FlashOnOutlined
                sx={{ color: "rgb(76, 175, 80)", fontSize: 28 }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Soluciones Rápidas
                </Typography>
                <Typography variant="caption" sx={{ color: "primary.text" }}>
                  Encuentra respuestas a problemas comunes instantáneamente
                </Typography>
              </Box>
            </Box>
            <Box className="process-box">
              <FastStep />
            </Box>
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          {/* Noticias */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 3,
                p: 2,
                backgroundColor: "rgba(233, 30, 99, 0.08)",
                borderRadius: 1.5,
                borderLeft: "4px solid rgb(233, 30, 99)",
              }}
            >
              <NewspaperOutlined
                sx={{ color: "rgb(233, 30, 99)", fontSize: 28 }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Novedades de {currentMonth.monthName}
                </Typography>
                <Typography variant="caption" sx={{ color: "primary.text" }}>
                  Recomendaciones y noticias importantes del mes
                </Typography>
              </Box>
              <Chip
                label={currentMonth.monthName.slice(0, 3).toUpperCase()}
                size="small"
                sx={{
                  marginLeft: "auto",
                  backgroundColor: "rgb(233, 30, 99)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            </Box>
            <Box>
              <BasicAccordion items={filtredProcess} isLoading={isLoading} />
            </Box>
          </Box>
        </CustomTabPanel>
      </Paper>
    </Box>
  );
}
