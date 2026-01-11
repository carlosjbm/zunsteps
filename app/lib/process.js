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
    month: "enero",
    title: "Cierre de Almacen",
    content:
      "El objetivo de este proceso es guiar al ususario durante la realización de un cierre de año en el módulo ZUNstock.",
    steps: [
      {
        id: 0,
        label: "Salvar BD",
        description:
          "Realizar una salva de la BD, que quedara posteriormente como historico.",
      },
      {
        id: 1,
        label: "Precondición del valorado",
        description:
          "Realizar un cuadre de almacén contra la Contabilidad, el valorado debe estar cuadrado.",
      },
      {
        id: 2,
        label: "Coerencia de fechas",
        description:
          "Todos los almacenes activos tienen que tener como fecha de último movimiento 31-12-2025.(Revizar la tabla ALMNALMA)",
      },
      {
        id: 3,
        label: "Ejecutar Trunk de la BD",
        description:
          "Buscar en los procedimientos almacenados el procedimiento (dbo.sp_V_Ejecutar_Truncate) y ejecutarlo",
      },
      {
        id: 4,
        label: "Montar el Historico",
        description: `Despues de haber realizado el Trunk, montaremos la BD Hitorica que no es mas que agregar una 
        nueva BD a nuestro SQL con el nombre ZUNstHistorico2025`,
      },
      {
        id: 5,
        label: "Activar Historico",
        description:
          "Una vez ya montada la BD Historico, entonces agregarla al juego de datos de la entidad y dar los permisos correspondientes a los operadores que designe el cliente",
      },
      {
        id: 6,
        label: "Revisar Submayores",
        description:
          "En caso de que existan diferencias ajustar submayores(Estadisticas->Ajustar Submayor), es importante ajustar cada una de las secciones",
      },
      {
        id: 7,
        label: "Evitar errores futuros",
        description:
          "Se recomienda una vez hecho el cierre restaurar el la BD Historico la salva antes del cierre para evitar errores futuro",
      },
      {
        id: 8,
        label: "Errores Comunes",
        description:
          "Esimportante tener en cuenta que no se puede haber realizado el cierre de ZUNacc porque esto puede dar problemas de fechas. Tambien tener en cuenta que los errores relacionados con enlaces son meramente problemas del cliente, debe solucionarlos para garantizar un correcto cierre.",
      },
    ],
  },
];
