"use client";

import { zunacc } from "../modulos/zunacc";
import { zunaft } from "../modulos/zunaft";
import { zunhr } from "../modulos/zunhr";
import { zunst } from "../modulos/zunst";
import { zunpr } from "../modulos/zunpr";
const { createContext, useState } = require("react");

export const ModuloContext = createContext();

export const ModuloProvider = ({ children }) => {
  const [modulo, setModulo] = useState(zunacc);

  //Funcion para cuando el modulo esta en desarrollo
  const devModule = () => {
    window.alert(
      "Ups! Módulo en desarrollo, no es posible acceder a el en estos momentos."
    );
  };

  //Funcion que activa el modulo zunacc
  const setZunacc = () => {
    setModulo(zunacc);
  };
  //funcion que activa zunhr
  const setZunhr = () => {
    setModulo(zunhr); //cambiar aqui
  };
  //funcion que activa zunaft
  const setZunaft = () => {
    setModulo(zunaft); //cambiar aqui
  };
  //funcion para activar zunst
  const setZunst = () => {
    setModulo(zunst); //cambiar aqui
  };
  //funcion para activar zunpr
  const setZunpr = () => {
    setModulo(zunpr);
  };

  const values = {
    modulo,
    setZunacc,
    setZunhr,
    setZunaft,
    setZunst,
    setZunpr,
    devModule,
  };
  return (
    <ModuloContext.Provider value={values}>{children}</ModuloContext.Provider>
  );
};
