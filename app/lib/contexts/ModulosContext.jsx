"use client";

import { createContext, useState, useEffect } from "react";

export const ModuloContext = createContext();

export const ModuloProvider = ({ children }) => {
  const [modulo, setModulo] = useState(null);
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar todos los módulos desde la API
  useEffect(() => {
    const fetchModulos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/modulos");

        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        const data = await response.json();
        setModulos(data);

        // Establecer el primer módulo como default
        if (data.length > 0) {
          setModulo(data[0]);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error al cargar módulos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchModulos();
  }, []);

  // Función para cuando el módulo está en desarrollo
  const devModule = () => {
    window.alert(
      "Ups! Módulo en desarrollo, no es posible acceder a el en estos momentos.",
    );
  };

  // Función genérica para establecer módulo por nombre
  const setModuleByName = (moduleName) => {
    const foundModulo = modulos.find((m) =>
      m.mNombre.toLowerCase().includes(moduleName.toLowerCase()),
    );
    if (foundModulo) {
      setModulo(foundModulo);
    }
  };

  // Funciones específicas para cada módulo
  const setServer = () => setModuleByName("server");
  const setSuite = () => setModuleByName("suite");
  const setZunaft = () => setModuleByName("activos");
  const setZunst = () => setModuleByName("almacén");
  const setZunpr = () => setModuleByName("procesos");

  const values = {
    modulo,
    modulos,
    loading,
    error,
    setServer,
    setSuite,
    setZunaft,
    setZunst,
    setZunpr,
    devModule,
    setModulo,
  };

  return (
    <ModuloContext.Provider value={values}>{children}</ModuloContext.Provider>
  );
};
