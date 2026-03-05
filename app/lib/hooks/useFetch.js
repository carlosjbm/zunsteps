import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, options = {}, immediate = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función que ejecuta la petición
  const fetchData = useCallback(
    async (customUrl = url, customOptions = options) => {
      try {
        const response = await fetch(customUrl, customOptions);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error desconocido");
      }
    },
    [url, options],
  );

  // Ejecutar automáticamente si immediate = true
  useEffect(() => {
    if (immediate && url) {
      fetchData();
    }
  }, [url, options, immediate, fetchData]);

  return { data, error, loading, refetch: fetchData };
};
