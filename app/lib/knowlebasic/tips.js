export const tips = [
  {
    source: "Desentendimiento con el usuario",
    text: "estas equivocado,no me refiero a eso, no me entendistes,eso no es lo que te estoy preguntando,piensa mejor",
    answer: `🤔 Disculpa, 
    creo que no te entendi bien, por favor re-formula la pregunta entonces para
    tratar de buscar una respuesta mas acertada.
    `,
  },
  {
    source: "Cultura General Integral",
    text: "que es sql",
    answer: `SQL significa Structured Query Lenguaje(Lenguaje de Consulta Estructurado), es un lenguaje
    que se usa para crear,consultar,modificar y administrar bases de datos relacionales.`,
  },
  {
    source: "Interaccion extraprofesional",
    text: "cuentame de ti, dame detalles de que puedes hacer, para que sirves,quien eres,en que me puedes ayudar",
    answer: `Soy un chatbot asistente creado y desarrollado por Carlos Borges, estoy aqui para 
     ayudarte con cualquier duda que tengas sobre la Suiete ZUN, ya que soy un modelo determinista 
     entrenado para brindar ayuda a los especialistas del area de Software, asi que hazme una pregunta... `,
  },
  {
    source: "Problema con el cierre de auditiria ",
    text: "A que se puede deber el problema de que el zunpms no permite hacer el cierre de auditoria, el error que lanza es que se encuentra cerrando ",
    answer: `Es muy comun que este problema este asociado a los campos procesa_llamada y cerrando de la tabla HOTETABL.
    Te sugiero que los revises personalmente, te pongo un ejemplo de lo que puede estar pasando. ej:cerrando:true(como esta)->false(como debe estar).`,
  },
  {
    source: "SQLServerInstalacion",
    text: "Que servicios tengo que tener en cuenta cuando instalo SQL server",
    steps: true,
    answer: `Durante la instalación de SQL Server
    🚩 MUY IMPORTANTE  incluir:
    🧩 Database Engine Services
    ✨ Integration Services
    📘 SQL Server Books Online
    🧰 Management Tools Complete`,
  },
  {
    source: "SQLServerInstalacion",
    text: "Que consideraciones importantes debo tener con las carpetas para almacenar la data y salvas o backups",
    answer: `Cuando especifiques el usuario 'sa' en la instalación,
    también debes indicar las carpetas de base de datos y de backups
    para asegurar una correcta configuración.`,
  },
  {
    souce: "Manejo de Trazas en SQLServer",
    text: "poner una traza en sqlserver,como pongo una traza,explicame como poner una traza",
    answer: `En SQL Server 2008 las trazas se crean usando 
    la herramienta integrada llamada SQL Server Profiler. 
    Desde ahí puedes capturar y analizar la actividad de tu servidor paso a paso.
    
    Pasos para crear una traza en SQL Server 2008
1. Abrir SQL Server Profiler
Inicia SQL Server Management Studio (SSMS).

En el menú superior selecciona Tools → SQL Server Profiler.

Se abrirá la ventana del Profiler, que es la herramienta para configurar y visualizar trazas.

2. Crear una nueva traza
En Profiler, ve a File → New Trace.

Conéctate a la instancia de SQL Server que quieras monitorear.

Aparecerá el cuadro de diálogo Trace Properties.

3. Configurar propiedades de la traza
Nombre de la traza: escribe un nombre descriptivo (ejemplo: “Monitoreo_Consultas”).

Plantilla: puedes elegir una plantilla predefinida (ej. “TSQL_Replay” o “Standard”) 
o personalizar los eventos.

Guardar resultados: selecciona si quieres guardar la traza en un archivo .trc o
 en una tabla de la base de datos. Esto es útil para análisis posteriores.

4. Seleccionar eventos y columnas
En la pestaña Events Selection, marca los eventos que quieres capturar:

RPC:Completed y SQL:BatchCompleted para consultas ejecutadas.

Errors and Warnings para detectar problemas.

Locks si quieres analizar bloqueos.

En Columns, selecciona qué datos mostrar (ej. nombre de usuario, base de datos, duración, CPU, etc.).

5. Iniciar la traza
Haz clic en Run.

El Profiler empezará a mostrar en tiempo real la actividad del servidor.

6. Detener y guardar
Cuando hayas capturado suficiente información, haz clic en Stop.

Guarda la traza en archivo o tabla para analizarla después.

Consejos prácticos
No dejes trazas activas mucho tiempo: pueden afectar el rendimiento del servidor.

Usa filtros: en la pestaña Events Selection puedes filtrar por base de datos, aplicación o
 usuario para reducir ruido.

Analiza offline: guarda la traza y luego examínala con calma para encontrar consultas lentas o 
errores.
    `,
  },
];
