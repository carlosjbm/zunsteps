//identifica si es una operacion matematica
export const isMathOpp = (char) => {
  return (
    char.includes("+") ||
    char.includes("-") ||
    char.includes("*") ||
    char.includes("/") ||
    char.includes("dividido") ||
    char.includes("entre") ||
    char.includes("por")
  );
};

//Eliminar texto que no forma parte de la expresion matematica
const cleanMathExpression = (value) => {
  return value
    .replace(/¿/g, "")
    .replace(/\?/g, "")
    .replace(/!/g, "")
    .replace(/¡/g, "")
    .replace(/^[^\d]+(?=\d)/, "");
};

//Realizar la operacion que sugiere el usuario
export const mathOpsResolver = (char) => {
  if (isMathOpp(char)) {
    try {
      // Reemplazar palabras por operadores matemáticos
      let expression = cleanMathExpression(char)
        .replace(/dividido por/gi, "/")
        .replace(/entre/gi, "/")
        .replace(/por/gi, "*")
        .replace(/más/gi, "+")
        .replace(/menos/gi, "-");
      return eval(expression) + ` ` + `es el resultado.`;
    } catch (error) {
      return "Error al evaluar la expresión matemática.";
    }
  }
};
