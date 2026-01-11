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
    answer: `
    Soy un chatbot✨ asistente creado y desarrollado por Carlos Borges 😉,
     estoy aqui para ayudarte con cualquier duda que tengas sobre la Suiete ZUN, ya que soy un modelo determinista entrenado para brindar ayuda a los especialistas del area de Software, asi que hazme una pregunta... `,
  },
  {
    source: "Problema con la auditiria ",
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
  {
    source: "Servidor pfSense",
    text: "como crear una regla en el pfsense",
    steps: true,
    answer: `1. Acceder a la interfaz web: - Abrir navegador y entrar a https://192.168.1.1 (o la IP configurada). - Usuario: admin / Contraseña: la que definiste en la instalación. 2. Ir al menú de reglas de firewall: - En el panel superior seleccionar Firewall → Rules. - Elegir la pestaña de la interfaz donde aplicarás la regla (ejemplo: LAN o WAN). 3. Crear nueva regla: - Hacer clic en "Add" (ícono de +). - Se abrirá el formulario de configuración de la regla. 4. Configurar parámetros principales: - Action: elegir Pass (permitir), Block (bloquear) o Reject (rechazar). - Interface: seleccionar LAN, WAN u otra interfaz. - Address Family: IPv4, IPv6 o ambos. - Protocol: TCP, UDP o Any. 5. Definir origen y destino: - Source: dirección IP o red de origen (ejemplo: LAN net). - Destination: dirección IP o red de destino (ejemplo: 8.8.8.8 para DNS). - Destination Port: puerto específico (ejemplo: 80 para HTTP, 443 para HTTPS). 6. Guardar y aplicar: - Hacer clic en "Save". - Luego en "Apply Changes" para activar la regla. 7. Verificar funcionamiento: - Probar conectividad desde un cliente de la red. - Revisar el log en Status → System Logs → Firewall para confirmar que la regla se aplica correctamente.`,
  },
  {
    source: "Servidor pfSense",
    text: "pasos para instalar pfsense",
    steps: true,
    answer: `
    Pasos para lainstalacion de pfsense:
    1. Descargar la imagen ISO:
       - Ir al sitio oficial https://www.pfsense.org/download/.
       - Seleccionar arquitectura (AMD64) y versión estable.
       - Descargar la ISO y grabarla en un USB con Rufus o Etcher.
       
    2. Iniciar instalación:
       - Conectar el USB al servidor/PC.
       - Configurar BIOS/UEFI para arrancar desde USB.
       - Seleccionar "Install pfSense" en el menú inicial.
       
    3. Configurar disco:
       - Elegir modo de instalación: Auto (UFS) recomendado.
       - Confirmar borrado del disco y particionado automático.
       
    4. Configurar interfaces de red:
       - El instalador detectará las tarjetas de red.
       - Asignar interfaz WAN (conexión a internet).
       - Asignar interfaz LAN (red interna).
       - Confirmar asignaciones.
       
    5. Finalizar instalación:
       - El sistema copiará archivos y configurará el entorno.
       - Retirar el USB y reiniciar el servidor.
       
    6. Acceder a la interfaz web:
       - Conectar un equipo a la red LAN.
       - Abrir navegador y entrar a https://192.168.1.1.
       - Usuario: admin / Contraseña: pfsense.
       
    7. Configuración inicial:
       - Cambiar contraseña del administrador.
       - Configurar dirección IP de la LAN si es necesario.
       - Ejecutar el asistente de configuración para definir DNS, gateway y reglas básicas.
       
    8. Verificar funcionamiento:
       - Probar acceso a internet desde un cliente LAN.
       - Revisar Dashboard de pfSense para confirmar estado de WAN/LAN.`,
  },
  {
    source: "Windows Server / Cliente",
    text: "como instalar netframework 3.5 desde la imagen de windows",
    steps: true,
    answer: `
    Pasos para instalar .NET Framework 3.5 desde la imagen de Windows:
    
    1. Montar la imagen ISO de Windows:
       - Inserta el DVD o monta la ISO del sistema operativo.
       - Verifica la letra de unidad asignada (ejemplo: D:).

    2. Abrir consola con privilegios:
       - Presiona Win + X → selecciona "Símbolo del sistema (Administrador)" o "PowerShell (Administrador)".

    3. Ejecutar el comando DISM:
       - Escribe el siguiente comando, reemplazando D: por la letra de tu unidad:
         dism /online /enable-feature /featurename:NetFx3 /All /Source:D:\\sources\\sxs /LimitAccess

    4. Esperar instalación:
       - El sistema buscará los archivos en la carpeta "sources\\sxs" de la imagen.
       - Se instalará .NET Framework 3.5 sin necesidad de internet.

    5. Verificar instalación:
       - Presiona Win + R → escribe "optionalfeatures".
       - Confirma que la casilla ".NET Framework 3.5 (incluye .NET 2.0 y 3.0)" esté marcada.

    6. Reiniciar si es necesario:
       - En algunos casos, Windows pedirá reiniciar para completar la instalación.`,
  },
  {
    source: "SQL Consultas",
    text: "como buscar un elemento cualquiera en una base de datos en sql",
    steps: true,
    answer: `
    Pasos para Buscar un elemento en una base de datos SQL 👌:
    
    1. Abrir el gestor de base de datos:
       - Inicia sesión en SQL Server Management Studio, MySQL Workbench o el cliente que uses.
       - Conéctate a la instancia de la base de datos.

    2. Seleccionar la base de datos:
       - Usa el comando: USE NombreBaseDeDatos;

    3. Buscar un elemento en una tabla específica:
       - Sintaxis básica:
         SELECT * FROM NombreTabla WHERE NombreColumna = 'ValorBuscado';
       - Ejemplo:
         SELECT * FROM Empleados WHERE Nombre = 'Carlos';

    4. Buscar un elemento con coincidencia parcial:
       - Usar operador LIKE:
         SELECT * FROM NombreTabla WHERE NombreColumna LIKE '%Valor%';
       - Ejemplo:
         SELECT * FROM Productos WHERE Descripcion LIKE '%Laptop%';

    5. Buscar en varias columnas:
       - Combinar condiciones con OR:
         SELECT * FROM Clientes WHERE Nombre LIKE '%Carlos%' OR Apellido LIKE '%Borges%';

    6. Limitar resultados:
       - En SQL Server: SELECT TOP 10 * FROM Tabla WHERE Columna LIKE '%dato%';
       - En MySQL: SELECT * FROM Tabla WHERE Columna LIKE '%dato%' LIMIT 10;

    7. Verificar resultados:
       - Revisar las filas devueltas.
       - Si no aparece nada, confirmar que el valor existe y que la columna es la correcta.`,
  },
  {
    source: "SQL Mantenimiento",
    text: "como reducir los logs de una bd en sql",
    steps: true,
    answer: `1. Verificar tamaño del log:
       - Ejecutar en la base de datos:
         DBCC SQLPERF(LOGSPACE);
       - Esto muestra el tamaño y porcentaje usado del archivo de log.

    2. Realizar backup del log (si la base está en modo FULL):
       - Ejecutar:
         BACKUP LOG NombreBD TO DISK = 'C:\\Backup\\NombreBD_Log.trn';
       - Esto libera espacio dentro del archivo de log.

    3. Cambiar temporalmente el modelo de recuperación (opcional):
       - Si no necesitas mantener transacciones completas:
         ALTER DATABASE NombreBD SET RECOVERY SIMPLE;
       - Esto permite truncar el log más fácilmente.

    4. Reducir el tamaño del archivo de log:
       - Ejecutar:
         DBCC SHRINKFILE(NombreBD_Log, TamañoDeseadoMB);
       - Ejemplo:
         DBCC SHRINKFILE(NombreBD_Log, 200);  // reduce a 200 MB

    5. Volver al modelo de recuperación original (si lo cambiaste):
       - ALTER DATABASE NombreBD SET RECOVERY FULL;

    6. Verificar resultado:
       - Ejecutar nuevamente:
         DBCC SQLPERF(LOGSPACE);
       - Confirmar que el tamaño del log se redujo.

    ⚠️ Recomendaciones:
       - No usar SHRINKFILE frecuentemente, puede fragmentar el log.
       - Lo ideal es programar backups de log regulares para evitar crecimiento excesivo.
       - Mantener espacio suficiente en disco para operaciones de log.`,
  },
  {
    source: "Windows Server / Cliente",
    text: "como agregar un pc al dominio en windows",
    steps: true,
    answer: `1. Verificar conectividad:
       - Asegúrate de que el PC tenga conexión a la red del dominio.
       - Comprueba que puede resolver el nombre del controlador de dominio (ping NombreDominio.local).

    2. Abrir configuración del sistema:
       - Presiona Win + R → escribe sysdm.cpl → Enter.
       - Se abrirá la ventana de Propiedades del sistema.

    3. Cambiar configuración de nombre y dominio:
       - En la pestaña "Nombre de equipo", haz clic en "Cambiar".
       - Selecciona "Dominio" e introduce el nombre del dominio (ejemplo: ZUN.local).

    4. Autenticarse en el dominio:
       - Ingresa credenciales de un usuario con permisos para unir equipos al dominio (ejemplo: Administrador del dominio).
       - Si las credenciales son correctas, aparecerá un mensaje de bienvenida al dominio.

    5. Reiniciar el equipo:
       - Windows solicitará reiniciar para aplicar los cambios.
       - Haz clic en "Aceptar" y reinicia el PC.

    6. Verificar pertenencia al dominio:
       - Inicia sesión en el PC con una cuenta del dominio (ejemplo: DOMINIO\\usuario).
       - Confirma que el equipo aparece en Active Directory en la OU correspondiente.

    ⚠️ Recomendaciones:
       - Antes de unir el PC, asegúrate de que la hora esté sincronizada con el controlador de dominio.
       - Verifica que el DNS del PC apunte al servidor DNS del dominio.
       - Si falla la unión, revisa logs en el visor de eventos (Event Viewer → System).`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "como preparar la base de datos para crear una UEB autorizada",
    steps: true,
    answer: `1. Salvar la base de datos de ZUNacc tal y como está.
    2. Revisar que el periodo Junio esté cerrado.
    3. Crear una base de datos limpia manteniendo plan de cuentas y centros de costos.
    4. Ejecutar el script que limpia la BD pero conserva plan de cuentas y centros de costos.
    5. Ir a la tabla CONTPERI y buscar el id del periodo Julio 2021, anotarlo.
    6. Abrir la tabla CONTNASI, localizar ese id de periodo y poner num_comp = 1 para reiniciar consecutivo.
    7. Entrar por la aplicación y establecer en Configuración → Definición de Empresa el periodo activo Julio 2021.`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "como crear la base de datos liquidadora",
    steps: true,
    answer: `1. Crear en SQL una nueva base de datos ZUNacc que será la BD liquidadora.
    2. Restaurar esa BD con la salva de la contabilidad existente.
    3. Agregar en ZUNsa la BD liquidadora en el juego de datos definido por la entidad.
    4. Dar acceso a los operadores que van a trabajar en ella.`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "como exportar comprobantes del mes de Julio desde la bd liquidadora",
    steps: true,
    answer: `1. Ir a Registro → Comprobantes.
       - Desmarcar "Mostrar solo mis comprobantes".
       - Verificar número de consecutivo y anotarlo.
       - Marcar comprobantes pendientes e integrarlos.
    2. Ir a Otras Operaciones → Exportar.
       - Escoger periodo Julio.
       - Seleccionar opción DBF.
       - Indicar rango de comprobantes (del 1 al número anotado).
       - Escoger ruta destino (ejemplo: D:\\exportación\\COMPROBANTES.dbf).
       - Aceptar y verificar que se creó el fichero.`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "como borrar comprobantes de Julio en la bd liquidadora",
    steps: true,
    answer: `1. Ejecutar el script para borrar datos del mes de Julio.
       - Pasar como parámetro el id de periodo Julio 2021 (tabla CONTPERI).
    2. Reiniciar consecutivo de comprobantes en tabla CONTNASI a 1.`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "como ejecutar la herramienta de cierre y apertura de cuentas",
    steps: true,
    answer: `1. Crear carpetas Origen y Destino en el directorio de trabajo.
    2. Crear un ODBC apuntando a la contabilidad liquidadora (BD Origen).
    3. Ejecutar tranctasreal.exe.
    4. Completar datos en la ventana, incluyendo cuenta puente definida por la entidad.
    5. Verificar mensaje de "Generación de comprobantes Finalizado".
    6. Revisar que se crearon ficheros Importac.dbf en carpetas Origen y Destino.`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "como importar comprobantes generados por la herramienta",
    steps: true,
    answer: `1. En ZUNacc ir a Otras Operaciones → Importación.
       - Marcar ZUNdbf.
       - Escoger ruta del fichero dbf generado.
       - Aceptar.
    2. Ir a Registro → Comprobantes.
       - Verificar que se importaron correctamente.
       - Integrar comprobantes.
    3. Repetir el proceso en la BD nueva usando el fichero de la carpeta Destino.`,
  },
  {
    source: "ZUNcc - Consolidador Contable",
    text: "como actualizar entidades en el consolidador contable",
    steps: true,
    answer: `1. Entrar al sistema ZUNcc.
    2. Modificar la entidad existente para que referencie la contabilidad liquidadora.
    3. Crear una nueva entidad que apunte a la contabilidad UEB autorizada.
    4. En las Casas Matrices:
       - Crear nuevamente cada UEB autorizada como entidad nueva.
       - Crear un nuevo consolidado que incluya UEB autorizadas y las que no lo sean.
    5. Usar ese nuevo consolidado para generar los modelos vigentes del Decreto Ley 34.`,
  },
  {
    source: "ZUNacc - UEB Autorizadas",
    text: "pasos principales para crear una UEB autorizada,como crear una liquidadora",
    steps: true,
    answer: `
    Pasos para Crear una UEB autorizada (Liqudadora):
    
    1 Salvar la base de datos de ZUNacc y verificar que el periodo Junio esté cerrado.
    2 Crear una base de datos limpia con plan de cuentas y centros de costos.
    3 Configurar el periodo Julio 2021 en tablas y aplicación.
    4 Crear la base de datos liquidadora y restaurarla con la salva.
    5 Agregar la BD liquidadora en ZUNsa y dar acceso a operadores.
    6 Exportar comprobantes de Julio desde la BD liquidadora.
    7 Borrar comprobantes de Julio en la BD liquidadora con script.
    8 Ejecutar la herramienta de cierre y apertura de cuentas.
    9 Importar comprobantes generados por la herramienta en ambas BD.
    10 Verificar cierre y apertura de cuentas en balances de comprobación.
    11 Actualizar datos de empresa en la BD nueva (tabla CONTEMPR).
    12 Importar comprobantes de Julio en la contabilidad nueva.
    13 Actualizar entidades en ZUNcc y crear nuevo consolidado.`,
  },
];
