export const tips = [
  {
    source: "ZUNpms",
    text: "No cierra el front,problemas con cierre de auditoria",
    answer: `Problema asociado a los campos procesa_llamada y cerrando de la tabla HOTETABL.
    La solucion es simple:Invierte los valores de estos campos. (ej:cerrando:true->false)`,
  },
  {
    source: "SQLServerInstalacion",
    text:
      "servicios sql server" ||
      "que servicios debo instalar" ||
      "instalacion sql server servicios" ||
      "componentes sql server",
    answer: `Durante la instalación de SQL Server se recomienda incluir:
    Database Engine Services,
     Integration Services,
    SQL Server Books Online,
    Management Tools Complete`,
  },
  {
    source: "SQLServerInstalacion",
    text:
      "usuario sa" ||
      "configurar usuario sa" ||
      "sql server sa" ||
      "carpetas base datos sa",
    answer: `Cuando especifiques el usuario 'sa' en la instalación,
    también debes indicar las carpetas de base de datos y de backups
    para asegurar una correcta configuración.`,
  },
];
