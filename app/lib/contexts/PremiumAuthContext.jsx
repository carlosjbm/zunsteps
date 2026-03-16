// app/lib/contexts/PremiumAuthContext.jsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const PremiumAuthContext = createContext();

export function PremiumAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Verificar autenticación al cargar
  useEffect(() => {
    verifySession();
  }, []);

  /**
   * Verifica si la sesión es válida consultando el servidor
   */
  const verifySession = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/verify", {
        method: "GET",
        credentials: "include", // Incluir cookies
      });

      if (response.ok) {
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          setUser(data.user);
          setError(null);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (err) {
      console.error("Error verificando sesión:", err);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Login con teléfono y token
   */
  const login = async (phone, token) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include", // Incluir cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, token }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Error en la autenticación");
        return { success: false, error: data.error };
      }

      // Actualizar estado
      setIsAuthenticated(true);
      setUser(data.user);
      setError(null);

      return { success: true, user: data.user };
    } catch (err) {
      const errorMessage = "Error conectando con el servidor";
      setError(errorMessage);
      console.error("Error en login:", err);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout
   */
  const logout = async () => {
    try {
      setIsLoading(true);

      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include", // Incluir cookies
      });

      setIsAuthenticated(false);
      setUser(null);
      setError(null);
    } catch (err) {
      console.error("Error en logout:", err);
      // Aún así limpiar el estado local
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    isAuthenticated,
    user,
    isLoading,
    error,
    login,
    logout,
    verifySession,
  };

  return (
    <PremiumAuthContext.Provider value={value}>
      {children}
    </PremiumAuthContext.Provider>
  );
}

/**
 * Hook para usar el contexto de autenticación premium
 */
export function usePremiumAuth() {
  const context = useContext(PremiumAuthContext);
  if (!context) {
    throw new Error(
      "usePremiumAuth debe ser usado dentro de PremiumAuthProvider",
    );
  }
  return context;
}

export default PremiumAuthContext;
