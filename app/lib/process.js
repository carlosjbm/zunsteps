export const process = [
  {
    id: 1,
    month: "diciembre",
    title: "Crear un nuevo ejerciocio en la Contabilidad.",
    content:
      "Este proceso tiene como objetivo guiar al usuario a través de los pasos necesarios para crear un nuevo ejercicio en el módulo de Contabilidad.",
    steps: [
      {
        id: 1,
        label: "Definir un nuevo ejercicio.",
        image: "/process/nuevo-ejercicio-1.png",
        description:
          "Entrar a la Opción de Configuración-> Definición de Ejercicios. ",
      },
      {
        id: 2,
        label: "Definir parámetros.",
        image: "/process/nuevo-ejercicio-2.png",
        description:
          "Definir el nuevo ejercicio -> Marcar Copiar -> Definir ejercicio anterior.",
      },
      {
        id: 3,
        label: "Guardar el nuevo ejercicio.",
        description: "Dar clic en Aceptar para guardar el nuevo ejercicio.",
      },
      {
        id: 4,
        label: "Aclaraciones finales.",

        description:
          "Pese a que el sistema no notifica que se ha creado el nuevo ejercicio, este ya se encuentra disponible en el sistema para su uso.",
      },
    ],
  },
  {
    id: 2,
    month: "diciembre",
    title: "Cierre de Almacen",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    steps: [
      { id: 1, label: "Paso 1", description: "Descripción del paso 1" },
      { id: 2, label: "Paso 2", description: "Descripción del paso 2" },
    ],
  },
];
