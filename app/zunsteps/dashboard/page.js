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

export default function Dashboard(params) {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/modulos/",
  );
  const {
    modulo,
    setZunacc,
    setZunhr,
    setZunaft,
    setZunst,
    setZunpr,
    devModule,
  } = useContext(ModuloContext);
  const { itemsMarked, handleMark } = useMark();
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
            {data?.map((el) => {
              return (
                <SideBtnItem
                  title={el.nombre}
                  icon={<CurrencyExchangeOutlinedIcon />}
                  handleModulo={setZunacc}
                  modulesStatus={itemsMarked}
                  toMark={() => handleMark("ZUNacc")}
                />
              );
            })}
            {/* In Dev */}
            {/* <SideBtnItem
              title={"ZUNpms"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            /> */}
            {/* <SideBtnItem
              title={"ZUNst"}
              icon={<Inventory2OutlinedIcon />}
              handleModulo={setZunst}
              modulesStatus={itemsMarked}
              toMark={() => handleMark("ZUNst")}
            /> */}
            {/* <SideBtnItem
              title={"ZUNhr"}
              icon={<Diversity3OutlinedIcon />}
              handleModulo={setZunhr}
              modulesStatus={itemsMarked}
              toMark={() => handleMark("ZUNhr")}
            /> */}
            {/* <SideBtnItem
              title={"ZUNpr"}
              icon={<PaymentsOutlinedIcon />}
              handleModulo={setZunpr}
              modulesStatus={itemsMarked}
              toMark={() => handleMark("ZUNpr")}
            /> */}
            {/* In Dev */}
            {/* <SideBtnItem
              title={"ZUNcc"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            /> */}
            {/* <SideBtnItem
              title={"ZUNaft"}
              icon={<ChairOutlinedIcon />}
              handleModulo={setZunaft}
              modulesStatus={itemsMarked}
              toMark={() => handleMark("ZUNaft")}
            /> */}
            {/* In Dev */}
            {/* <SideBtnItem
              title={"ZUNut"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            /> */}
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
        <BasicTabs />
      </Box>
    </Box>
  );
}
