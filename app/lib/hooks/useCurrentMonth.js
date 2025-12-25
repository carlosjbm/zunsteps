import { useState, useEffect } from "react";
import { process } from "../process";

/**
 * Hook personalizado para obtener el mes actual (nombre y número).
 * @param {string} [locale='default'] - El código de idioma (ej. 'es-ES', 'en-US'). 'default' usa la configuración del navegador.
 * @returns {{ monthName: string, monthNumber: number }}
 */
const useCurrentMonth = (locale = "default") => {
  const [currentMonth, setCurrentMonth] = useState({
    monthName: "",
    monthNumber: 0,
  });
  const [allProcess, setAllProcess] = useState(process);
  const [filtredProcess, setFiltredProcess] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let value;

  useEffect(() => {
    const date = new Date();
    // getMonth() devuelve un índice de 0 a 11, por lo que sumamos 1 para el número de mes estándar (1 a 12).
    const monthNumber = date.getMonth() + 1;
    // toLocaleString() formatea el nombre del mes según el idioma especificado.
    const monthName = date.toLocaleString(locale, { month: "long" });

    setCurrentMonth({ monthName, monthNumber });
    const filtered = process.filter(
      (item) => item.month.toLocaleLowerCase() === monthName.toLowerCase()
    );
    setFiltredProcess(filtered);

    setIsLoading(false);
  }, [locale]); // Se ejecuta de nuevo si cambia el locale

  return [
    currentMonth,
    allProcess,
    filtredProcess,
    isLoading,
    setFiltredProcess,
  ];
};

export default useCurrentMonth;
