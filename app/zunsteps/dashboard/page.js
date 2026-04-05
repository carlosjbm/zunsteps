"use client";
import BasicTabs from "@/app/components/ui/BasicTaps";
import { SideBtnItem } from "@/app/components/ui/SideBtnItem";
import { Box, Card, Divider, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { DefaultButton } from "@/app/components/ui/DefaultButton";
import { NavButtonGroup } from "@/app/components/ui/NavButtonGroup";
import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import Link from "next/link";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import StorageIcon from "@mui/icons-material/Storage";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuBookIcon from "@mui/icons-material/MenuBook";

/*Modulos */
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";
import useMark from "@/app/lib/hooks/useMark";
import { useFetch } from "@/app/lib/hooks/useFetch";
import { SideBtnListSkeleton } from "@/app/components/skeletons/SideBtnItemSkeleton";
import { BasicTabsSkeleton } from "@/app/components/skeletons/BasicTabsSkeleton";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import { QuickNavigation } from "../../components/ui/QuickNavigation";
import { InfiniteTips } from "@/app/components/ui/InfiniteTips";
import { ShowTips } from "@/app/components/button-features/ShowTips";
import { PrincipalBar } from "@/app/components/ui/PrincipalBar";

export default function Dashboard(params) {
  const {
    modulo,
    modulos,
    loading,
    error,
    setServer,
    setZunhr,
    setZunaft,
    setZunst,
    setZunpr,
    setModulo,
    devModule,
  } = useContext(ModuloContext);
  const { itemsMarked, handleMark } = useMark();
  const [showInfiniTips, setShowInfiniTips] = useState(false);
  const [showContents, setShowContents] = useState(false);

  // Mapear módulos a iconos y funciones basado en palabras clave mejoradas
  const moduloConfig = {
    server: {
      keywords: ["server"],
      icon: <StorageIcon />,
      handler: setServer,
      markName: "server",
    },
    suite: {
      keywords: ["suite", "zun"],
      icon: <WidgetsIcon />,
      handler: setZunaft,
      markName: "SUITE ZUN",
    },
    manuales: {
      keywords: ["manuales"],
      icon: <MenuBookIcon />,
      handler: setZunaft,
      markName: "Manuales",
    },
    zunst: {
      keywords: ["zunst", "stock", "almacén", "inventario"],
      icon: <Inventory2OutlinedIcon />,
      handler: setZunst,
      markName: "ZUNst",
    },
    zunhr: {
      keywords: ["zunhr", "recursos", "humanos"],
      icon: <Diversity3OutlinedIcon />,
      handler: setZunhr,
      markName: "ZUNhr",
    },
    zunpr: {
      keywords: ["zunpr", "procesos"],
      icon: <PaymentsOutlinedIcon />,
      handler: setZunpr,
      markName: "ZUNpr",
    },
  };

  //Funcion para el manejo de mostrar o nolos Tips
  const handleShowTips = () => {
    setShowInfiniTips(!showInfiniTips);
  };
  //Funcion pra el manejo de mostrar o no los contenidos
  const handleShowContents = () => {
    setShowContents(!showContents);
  };
  // Función para obtener configuración del módulo
  const getModuloConfig = (moduloName) => {
    if (!moduloName || typeof moduloName !== "string") {
      return null;
    }
    const lowerName = moduloName.toLowerCase();

    for (const key in moduloConfig) {
      const config = moduloConfig[key];
      // Buscar si alguna palabra clave coincide
      if (config.keywords.some((keyword) => lowerName.includes(keyword))) {
        return config;
      }
    }
    return null;
  };

  return (
    <>
      <QuickNavigation dashboard={false} />
      <Box sx={{ width: "400px", justifyItems: "center" }}>
        <PrincipalBar
          handleShowContents={handleShowContents}
          handleShowTips={handleShowTips}
          isShown={showContents}
          isShowTips={showInfiniTips}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, md: 3 },
          py: { xs: 2, md: 4 },
          px: { xs: 1, md: 2 },
        }}
      >
        {/* Sidebar Izquierdo - Contenidos + Tips */}
        {showContents && (
          <Box
            sx={{
              width: { xs: "100%", lg: "350px" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Card de Contenidos */}
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                // maxHeight: "500px",
                width: "100%",
                padding: "5%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  overflowY: "auto",
                  alignItems: "center",
                  p: 1,
                }}
              >
                {loading && <SideBtnListSkeleton />}

                {error && (
                  <Typography color="error" variant="body2">
                    Error al cargar módulos
                  </Typography>
                )}

                {!loading &&
                  modulos.map((el) => {
                    const config = getModuloConfig(el.mNombre);
                    return (
                      <SideBtnItem
                        key={el.id}
                        title={el.mNombre}
                        icon={config?.icon || <AppsOutlinedIcon />}
                        handleModulo={() => setModulo(el)}
                        modulesStatus={itemsMarked}
                        toMark={() =>
                          handleMark(config?.markName || el.mNombre)
                        }
                      />
                    );
                  })}
                <Divider sx={{ width: "100%", my: 0.5 }} />
                <NavButtonGroup />
              </Box>
            </Card>
          </Box>
        )}

        {/* Contenido Principal - Derecha */}
        <Box sx={{ flex: 1, width: { xs: "100%", lg: "auto" } }}>
          {loading ? <BasicTabsSkeleton /> : <BasicTabs />}
          {showInfiniTips && (
            <Box
              id="infinite-tips-section"
              sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <InfiniteTips />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
