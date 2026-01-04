import { useState, useEffect } from "react";

/**
 * Hook para efecto de escritura
 * @param {string} text - Texto completo que se quiere mostrar
 * @param {number} speed - Velocidad en ms entre cada carácter
 * @returns {string} displayedText - Texto que se va mostrando poco a poco
 */
export function useTypewriter(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // reinicia cuando cambia el texto
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}
