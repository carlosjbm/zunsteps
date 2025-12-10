"use client";
import BasicTabs from "@/app/components/ui/BasicTaps";
import { SideBtnItem } from "@/app/components/ui/SideBtnItem";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { DefaultButton } from "@/app/components/ui/DefaultButton";
import { ScienceOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

/*Modulos */
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";

export default function Dashboard(params) {
  const { modulo, setZunacc, setZunhr, setZunaft, setZunst, devModule } =
    useContext(ModuloContext);
  //Para desarrollo
  const [dev, setDev] = useState(false);
  const [acc, setAcc] = useState(true);
  const [hr, setHr] = useState(false);
  const [aft, setAft] = useState(false);
  const [st, setSt] = useState(false);

  //Menejo de si esta marcado un modulo en desarrollo
  const handleMarkupDev = () => {
    setDev(false);
  };

  //Manejo de si esta marcado o no para Acc
  const handleMarkupAcc = () => {
    setDev(false);
    setAcc(true);
    setHr(false);
    setAft(false);
    setSt(false);
  };
  //Manejo de si esta marcado o no para Hr
  const handleMarkupHr = () => {
    setDev(false);
    setHr(true);
    setAcc(false);
    setAft(false);
    setSt(false);
  };
  //Manejo de si esta marcado o no para AFT
  const handleMarkupAft = () => {
    setAft(true);
    setHr(false);
    setAcc(false);
    setSt(false);
  };
  const handleMarkupSt = () => {
    setDev(false);
    setSt(true);
    setAft(false);
    setHr(false);
    setAcc(false);
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
            <SideBtnItem
              title={"ZUNacc"}
              handleModulo={setZunacc}
              marked={acc}
              toMark={handleMarkupAcc}
              icon={<CurrencyExchangeOutlinedIcon />}
            />

            {/* In Dev */}
            <SideBtnItem
              title={"ZUNpms"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            />

            <SideBtnItem
              marked={st}
              toMark={handleMarkupSt}
              handleModulo={setZunst}
              title={"ZUNst"}
              icon={<Inventory2OutlinedIcon />}
            />
            <SideBtnItem
              title={"ZUNhr"}
              marked={hr}
              toMark={handleMarkupHr}
              handleModulo={setZunhr}
              icon={<Diversity3OutlinedIcon />}
            />

            {/* In Dev */}
            <SideBtnItem
              title={"ZUNpr"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            />

            {/* In Dev */}
            <SideBtnItem
              title={"ZUNcc"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            />

            <SideBtnItem
              title={"ZUNaft"}
              marked={aft}
              handleModulo={setZunaft}
              toMark={handleMarkupAft}
              icon={<ChairOutlinedIcon />}
            />

            {/* In Dev */}
            <SideBtnItem
              title={"ZUNut"}
              icon={<ScienceOutlined />}
              toMark={handleMarkupDev}
              handleModulo={devModule}
              marked={dev}
            />

            <Box>
              <DefaultButton text={"Frecuentes"} />
            </Box>
          </Box>
        </Card>
      </Box>
      <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
        <BasicTabs />
      </Box>
    </Box>
  );
}
