"use client";
import BasicTabs from "@/app/components/ui/BasicTaps";
import { SideBtnItem } from "@/app/components/ui/SideBtnItem";
import { Box, Card, Divider, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { DefaultButton } from "@/app/components/ui/DefaultButton";
import { NavButtonGroup } from "@/app/components/ui/NavButtonGroup";
import React, { useContext } from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import Link from "next/link";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

/*Modulos */
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";
import useMark from "@/app/lib/hooks/useMark";
import { useFetch } from "@/app/lib/hooks/useFetch";
import { SideBtnListSkeleton } from "@/app/components/skeletons/SideBtnItemSkeleton";
import { BasicTabsSkeleton } from "@/app/components/skeletons/BasicTabsSkeleton";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";

export default function Dashboard(params) {
  const {
    modulo,
    modulos,
    loading,
    error,
    setZunacc,
    setZunhr,
    setZunaft,
    setZunst,
    setZunpr,
    setModulo,
    devModule,
  } = useContext(ModuloContext);
  const { itemsMarked, handleMark } = useMark();

  // Mapear módulos a iconos y funciones
  const moduloConfig = {
    contabilidad: {
      icon: <CurrencyExchangeOutlinedIcon />,
      handler: setZunacc,
      markName: "ZUNacc",
    },
    activos: {
      icon: <ChairOutlinedIcon />,
      handler: setZunaft,
      markName: "ZUNaft",
    },
    almacén: {
      icon: <Inventory2OutlinedIcon />,
      handler: setZunst,
      markName: "ZUNst",
    },
    recursos: {
      icon: <Diversity3OutlinedIcon />,
      handler: setZunhr,
      markName: "ZUNhr",
    },
    procesos: {
      icon: <PaymentsOutlinedIcon />,
      handler: setZunpr,
      markName: "ZUNpr",
    },
  };

  // Función para obtener configuración del módulo
  const getModuloConfig = (moduloName) => {
    if (!moduloName || typeof moduloName !== "string") {
      return null;
    }
    const lowerName = moduloName.toLowerCase();
    for (const key in moduloConfig) {
      if (lowerName.includes(key)) {
        return moduloConfig[key];
      }
    }
    return null;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 3 },
        py: { xs: 2, md: 4 },
        px: { xs: 1, md: 2 },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "auto" } }}>
        <Card
          sx={{
            minWidth: { xs: "100%", md: "300px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              p: 2,
            }}
          >
            <AppsOutlinedIcon />
            <Typography
              variant="h6"
              color="primary.main"
              fontFamily="monospace"
            >
              Módulos
            </Typography>
          </Box>
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
                    toMark={() => handleMark(config?.markName || el.mNombre)}
                  />
                );
              })}

            <Box>
              <Link href={"/zunsteps/faqs"}>
                <DefaultButton text={"Preguntas"} icon={<HelpOutlineIcon />} />
              </Link>
            </Box>
            <Divider sx={{ width: "100%", my: 1 }} />
            <NavButtonGroup />
          </Box>
        </Card>
      </Box>
      <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
        {loading ? <BasicTabsSkeleton /> : <BasicTabs />}
      </Box>
    </Box>
  );
}
