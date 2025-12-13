// app/lib/contexts/PremiumAuthContext.jsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const PremiumAuthContext = createContext();
const ADMIN_KEY = "Master*25";

export function PremiumAuthProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar autenticación al cargar
  useEffect(() => {
    const savedKey =
      typeof window !== "undefined"
        ? localStorage.getItem("premium_key")
        : null;

    if (savedKey === ADMIN_KEY) {
      setIsPremium(true);
    }
    setIsLoading(false);
  }, []);

  const login = (key) => {
    if (key === "Master*25") {
      localStorage.setItem("premium_key", key);
      setIsPremium(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("premium_key");
    setIsPremium(false);
  };

  return (
    <PremiumAuthContext.Provider
      value={{ isPremium, isLoading, login, logout }}
    >
      {children}
    </PremiumAuthContext.Provider>
  );
}

export function usePremiumAuth() {
  const context = useContext(PremiumAuthContext);
  if (!context) {
    throw new Error(
      "usePremiumAuth debe ser usado dentro de PremiumAuthProvider"
    );
  }
  return context;
}
