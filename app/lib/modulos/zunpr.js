export const zunpr = {
  mNombre: "ZUNpr -Nómina",
  mImage: "/acc",
  mResumen:
    "Este sistema gestiona todos los aspectos relacionados con la nómina y compensaciones de los empleados dentro de una organización.",
  mSecciones: [
    {
      id: 2,
      sNombre: "Parámetros generales",
      acciones: [
        {
          id: 1,
          aNombre: "Parámetros Generales",
          aResumen: `Este módulo establece la configuración inicial del sistema ZUNpr, definiendo reglas y valores que afectan a todos los procesos posteriores. Sirve para:

Configurar datos básicos de la empresa y entorno de trabajo.

Definir políticas de operación (moneda, idioma, formatos).

Establecer parámetros de control para usuarios y módulos.

Garantizar coherencia y trazabilidad en todo el sistema.`,
          pasos: [
            {
              label: "Acceder al módulo Parámetros Generales",
              description:
                "Desde el menú Configuración, selecciona la opción Parámetros Generales.",
            },
            {
              label: "Registrar datos de la empresa",
              description:
                "Introduce nombre, identificación fiscal, dirección y otros datos corporativos.",
            },
            {
              label: "Definir moneda y formato",
              description:
                "Selecciona la moneda principal, idioma, formato de fecha y numeración de documentos.",
            },
            {
              label: "Configurar políticas de operación",
              description:
                "Establece reglas de cálculo, tolerancias, impuestos y condiciones generales de uso.",
            },
            {
              label: "Asignar parámetros de usuarios",
              description:
                "Define permisos, roles y accesos básicos para los usuarios del sistema.",
            },
            {
              label: "Guardar configuración",
              description:
                "Haz clic en Aceptar. El sistema registra los parámetros y los aplica a todos los módulos.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Nomencladores",
      acciones: [
        {
          id: 1,
          aNombre: "Categoría Ocupacional",
          aResumen: `Este nomenclador clasifica a los trabajadores según su ocupación, nivel y condiciones laborales. Sirve para:

Estandarizar categorías en contratos y nómina.

Facilitar cálculos de salarios, beneficios y retenciones.

Garantizar coherencia en reportes de RRHH y contabilidad.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Desde Configuración → Nomencladores, selecciona Categoría Ocupacional.",
            },
            {
              label: "Registrar nueva categoría",
              description:
                "Introduce código único, nombre de la categoría (ej.: Obrero, Técnico, Administrativo, Directivo) y atributos asociados.",
            },
            {
              label: "Definir condiciones",
              description:
                "Configura nivel, grupo salarial, beneficios aplicables y estado (activo/inactivo).",
            },
            {
              label: "Editar categorías existentes",
              description:
                "Actualiza nombre, condiciones o grupo salarial según cambios organizativos.",
            },
            {
              label: "Depurar registros",
              description:
                "Marca como inactiva cualquier categoría que ya no se utilice, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Haz clic en Aceptar. El sistema registra las modificaciones y las aplica en RRHH y nómina.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Escala Salarial",
          aResumen: `Este nomenclador establece los niveles de salario que se aplican a las distintas categorías ocupacionales. Sirve para:

Definir bandas salariales según nivel, categoría o puesto.

Facilitar cálculos automáticos de nómina y beneficios.

Garantizar coherencia y transparencia en la política salarial de la empresa.`,
          pasos: [
            {
              label: "Acceder al catálogo Escala Salarial",
              description:
                "Desde Configuración → Nomencladores, selecciona Escala Salarial.",
            },
            {
              label: "Registrar nueva escala",
              description:
                "Introduce código único, nombre de la escala (ej.: Nivel I, Nivel II, Nivel III) y monto base.",
            },
            {
              label: "Definir parámetros",
              description:
                "Configura salario mínimo, salario máximo, grupo ocupacional asociado y condiciones adicionales (ej.: bonificaciones, retenciones).",
            },
            {
              label: "Editar escalas existentes",
              description:
                "Actualiza valores salariales o condiciones según cambios en la política de remuneración.",
            },
            {
              label: "Depurar escalas obsoletas",
              description:
                "Marca como inactiva cualquier escala que ya no se utilice, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Haz clic en Aceptar. El sistema registra las modificaciones y las aplica en RRHH y nómina.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Unidades Organizativas",
          aResumen: `Este nomenclador define la estructura interna de la empresa (direcciones, departamentos, áreas y secciones) para ordenar responsabilidades, permisos y reportes. Sirve para:

Mapear la jerarquía organizacional y sus niveles.

Vincular usuarios, centros de costo, almacenes y procesos a su unidad.

Filtrar reportes y controlar accesos por ámbito organizativo.`,
          campos: [
            "Código único",
            "Nombre oficial",
            "Nivel jerárquico (Dirección/Departamento/Área/Sección)",
            "Unidad padre (para estructura jerárquica)",
            "Empresa",
            "Centro de costo vinculado",
            "Responsable (usuario/persona)",
            "Estado (activo/inactivo)",
          ],
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Unidades Organizativas.",
            },
            {
              label: "Crear unidad",
              description:
                "Captura código, nombre, nivel jerárquico y empresa; vincula la unidad padre para mantener la estructura.",
            },
            {
              label: "Vincular referencias",
              description:
                "Asocia centro de costo, responsable y (si aplica) almacenes/secciones operativas.",
            },
            {
              label: "Definir estado",
              description:
                "Establece activo/inactivo; evita borrado si existen registros dependientes.",
            },
            {
              label: "Guardar",
              description:
                "Confirma y registra cambios; queda disponible para permisos y reportes.",
            },
            {
              label: "Editar y reubicar",
              description:
                "Actualiza nombre, responsable o reubica la unidad en la jerarquía; valida impacto en accesos y reportes.",
            },
            {
              label: "Depurar",
              description:
                "Inactiva unidades obsoletas manteniendo trazabilidad histórica.",
            },
          ],
          buenasPracticas: [
            "Usa códigos estables; no reutilices códigos dados de alta.",
            "Mantén una jerarquía clara: una unidad padre por nivel para evitar ciclos.",
            "Alinea cada unidad con su centro de costo para coherencia contable.",
            "Documenta motivo y vigencia al reubicar o inactivar unidades.",
          ],
        },
        {
          id: 4,
          aNombre: "Cargos",
          aResumen: `Este nomenclador establece los puestos de trabajo de la organización, vinculando cada cargo con su categoría ocupacional, escala salarial y unidad organizativa. Sirve para:

Definir la estructura de puestos y responsabilidades.

Facilitar la asignación de empleados a cargos específicos.

Garantizar coherencia en cálculos de nómina, permisos y reportes.`,
          campos: [
            "Código único del cargo",
            "Nombre oficial del cargo",
            "Categoría ocupacional asociada",
            "Escala salarial vinculada",
            "Unidad organizativa",
            "Descripción de funciones",
            "Estado (activo/inactivo)",
          ],
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Cargos.",
            },
            {
              label: "Crear nuevo cargo",
              description:
                "Introduce código, nombre, categoría ocupacional, escala salarial y unidad organizativa.",
            },
            {
              label: "Definir funciones",
              description:
                "Agrega descripción de responsabilidades y requisitos del cargo.",
            },
            {
              label: "Editar cargos existentes",
              description:
                "Actualiza nombre, categoría, escala o funciones según cambios organizativos.",
            },
            {
              label: "Depurar cargos obsoletos",
              description:
                "Marca como inactivos los cargos que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el cargo queda disponible para asignación en RRHH y nómina.",
            },
          ],
          buenasPracticas: [
            "Mantén códigos estables para cada cargo; no reutilices.",
            "Vincula siempre categoría ocupacional y escala salarial para coherencia en nómina.",
            "Documenta funciones y responsabilidades para claridad organizativa.",
            "Usa estado inactivo en lugar de eliminar para preservar historial.",
          ],
        },
        {
          id: 5,
          aNombre: "Fondos de Tiempo",
          aResumen: `Este nomenclador define los períodos de tiempo disponibles para la gestión de jornada laboral, control de asistencia y cálculo de nómina. Sirve para:

Establecer horarios estándar y especiales.

Facilitar la planificación de turnos y asignación de trabajadores.

Garantizar coherencia en reportes de tiempo, productividad y pagos.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Fondos de Tiempo.",
            },
            {
              label: "Crear nuevo fondo de tiempo",
              description:
                "Introduce código, nombre y define el rango horario (ej.: 8:00–16:00, 16:00–00:00).",
            },
            {
              label: "Definir tipo de jornada",
              description:
                "Selecciona si es jornada regular, turno nocturno, tiempo parcial u horario especial.",
            },
            {
              label: "Asignar a unidades o cargos",
              description:
                "Vincula el fondo de tiempo a unidades organizativas, cargos o trabajadores específicos.",
            },
            {
              label: "Editar fondos existentes",
              description:
                "Actualiza horarios o tipos de jornada según cambios en la política laboral.",
            },
            {
              label: "Depurar registros",
              description:
                "Marca como inactivos los fondos que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el fondo de tiempo queda disponible para planificación y nómina.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Provincia",
          aResumen: `Este nomenclador define las provincias o divisiones territoriales utilizadas en el sistema ZUNpr. Sirve para:

Estandarizar direcciones de clientes, proveedores y trabajadores.

Facilitar la clasificación geográfica en reportes y análisis.

Garantizar coherencia en operaciones administrativas y contables.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Provincia.",
            },
            {
              label: "Registrar nueva provincia",
              description:
                "Introduce código único y nombre oficial de la provincia.",
            },
            {
              label: "Vincular a entidades",
              description:
                "Asocia la provincia a clientes, proveedores, trabajadores o unidades organizativas según corresponda.",
            },
            {
              label: "Editar provincias existentes",
              description:
                "Actualiza nombre o código si hay cambios administrativos.",
            },
            {
              label: "Depurar registros",
              description:
                "Marca como inactiva cualquier provincia que ya no se utilice, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; la provincia queda disponible para todos los módulos relacionados.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Municipio",
          aResumen: `Este nomenclador define los municipios dentro de cada provincia, permitiendo una clasificación territorial más precisa. Sirve para:

Estandarizar direcciones de clientes, proveedores y trabajadores.

Facilitar reportes y análisis por municipio dentro de cada provincia.

Garantizar coherencia en operaciones administrativas, comerciales y contables.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Municipio.",
            },
            {
              label: "Registrar nuevo municipio",
              description:
                "Introduce código único, nombre oficial y selecciona la provincia a la que pertenece.",
            },
            {
              label: "Vincular a entidades",
              description:
                "Asocia el municipio a clientes, proveedores, trabajadores o unidades organizativas según corresponda.",
            },
            {
              label: "Editar municipios existentes",
              description:
                "Actualiza nombre, código o provincia vinculada si hay cambios administrativos.",
            },
            {
              label: "Depurar registros",
              description:
                "Marca como inactivos los municipios que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el municipio queda disponible para todos los módulos relacionados.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Grupos de Nómina",
          aResumen: `Este nomenclador permite agrupar trabajadores según criterios comunes para la gestión de la nómina. Sirve para:

Clasificar empleados por área, tipo de contrato o condiciones laborales.

Facilitar cálculos masivos de salarios, beneficios y retenciones.

Generar reportes y análisis por grupo de nómina.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Grupos de Nómina.",
            },
            {
              label: "Registrar nuevo grupo",
              description:
                "Introduce código único, nombre del grupo y criterios de clasificación (ej.: administrativos, técnicos, obreros, directivos).",
            },
            {
              label: "Asignar trabajadores",
              description:
                "Vincula empleados al grupo de nómina según su cargo, categoría ocupacional o unidad organizativa.",
            },
            {
              label: "Editar grupos existentes",
              description:
                "Actualiza nombre, criterios o composición del grupo según cambios organizativos.",
            },
            {
              label: "Depurar grupos obsoletos",
              description:
                "Marca como inactivos los grupos que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el grupo queda disponible para cálculos y reportes de nómina.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Pago por Resultado",
          aResumen: `Este nomenclador define las reglas de remuneración basadas en el rendimiento de los trabajadores. Sirve para:

Establecer indicadores de productividad vinculados al salario.

Facilitar cálculos automáticos de pagos adicionales según resultados.

Garantizar transparencia y coherencia en la política de incentivos.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Pago por Resultado.",
            },
            {
              label: "Registrar nueva regla",
              description:
                "Introduce código único, nombre de la regla y el indicador de resultado asociado (ej.: unidades producidas, ventas alcanzadas, horas efectivas).",
            },
            {
              label: "Definir parámetros de cálculo",
              description:
                "Configura fórmula de pago (ej.: monto fijo por unidad, porcentaje sobre ventas, coeficiente de productividad).",
            },
            {
              label: "Asignar a grupos o cargos",
              description:
                "Vincula la regla de pago por resultado a grupos de nómina, cargos o trabajadores específicos.",
            },
            {
              label: "Editar reglas existentes",
              description:
                "Actualiza indicadores, fórmulas o vínculos según cambios en la política de incentivos.",
            },
            {
              label: "Depurar reglas obsoletas",
              description:
                "Marca como inactivas las reglas que ya no se aplican, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; la regla queda disponible para cálculos de nómina.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Conceptos de Incidencias",
          aResumen: `Este nomenclador define los distintos tipos de incidencias que pueden afectar la nómina de los trabajadores. Sirve para:

Clasificar ausencias, permisos, horas extras, descuentos y bonificaciones.

Facilitar el cálculo automático de la nómina según las incidencias registradas.

Garantizar coherencia y trazabilidad en la gestión de RRHH.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Conceptos de Incidencias.",
            },
            {
              label: "Registrar nuevo concepto",
              description:
                "Introduce código único, nombre del concepto (ej.: Ausencia justificada, Horas extras, Permiso sin sueldo, Bonificación especial) y tipo de incidencia.",
            },
            {
              label: "Definir parámetros de impacto",
              description:
                "Configura si el concepto afecta salario base, bonificaciones, descuentos o retenciones.",
            },
            {
              label: "Asignar a grupos o cargos",
              description:
                "Vincula el concepto a grupos de nómina, cargos o trabajadores específicos según la política laboral.",
            },
            {
              label: "Editar conceptos existentes",
              description:
                "Actualiza nombre, tipo o parámetros de cálculo según cambios en la normativa.",
            },
            {
              label: "Depurar conceptos obsoletos",
              description:
                "Marca como inactivos los conceptos que ya no se aplican, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el concepto queda disponible para cálculos de nómina.",
            },
          ],
        },
        {
          id: 11,
          aNombre: "Períodos de Pagos",
          aResumen: `Este nomenclador define la periodicidad con la que se realizan los pagos de nómina. Sirve para:

Estandarizar los ciclos de pago (semanal, quincenal, mensual, especial).

Facilitar cálculos automáticos de salarios y beneficios según el período definido.

Garantizar coherencia en reportes financieros y de RRHH.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Períodos de Pagos.",
            },
            {
              label: "Registrar nuevo período",
              description:
                "Introduce código único, nombre del período (ej.: Semanal, Quincenal, Mensual) y fechas de inicio/fin.",
            },
            {
              label: "Definir frecuencia",
              description:
                "Configura la periodicidad (ej.: cada 7 días, cada 15 días, cada mes) y reglas de cierre.",
            },
            {
              label: "Asignar a grupos de nómina",
              description:
                "Vincula el período de pago a grupos de nómina o trabajadores específicos.",
            },
            {
              label: "Editar períodos existentes",
              description:
                "Actualiza fechas, frecuencia o vínculos según cambios en la política laboral.",
            },
            {
              label: "Depurar períodos obsoletos",
              description:
                "Marca como inactivos los períodos que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el período queda disponible para cálculos de nómina.",
            },
          ],
        },
        {
          id: 12,
          aNombre: "Pagos Aprobados por la Entidad",
          aResumen: `Este nomenclador define los pagos adicionales que la entidad aprueba de manera oficial, fuera del cálculo estándar de la nómina. Sirve para:

Registrar bonificaciones, estímulos o compensaciones autorizadas por la dirección.

Facilitar la trazabilidad de pagos extraordinarios en RRHH y contabilidad.

Garantizar transparencia y coherencia en la política de remuneración.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Pagos Aprobados por la Entidad.",
            },
            {
              label: "Registrar nuevo pago aprobado",
              description:
                "Introduce código único, nombre del pago (ej.: Bono por desempeño, Estímulo especial, Compensación extraordinaria) y monto o fórmula de cálculo.",
            },
            {
              label: "Definir condiciones",
              description:
                "Configura criterios de aplicación (ej.: grupo de nómina, cargo, período específico).",
            },
            {
              label: "Asignar a trabajadores o grupos",
              description:
                "Vincula el pago aprobado a empleados, cargos o grupos de nómina según corresponda.",
            },
            {
              label: "Editar pagos existentes",
              description:
                "Actualiza nombre, monto o condiciones según cambios en la política de la entidad.",
            },
            {
              label: "Depurar registros obsoletos",
              description:
                "Marca como inactivos los pagos que ya no se aplican, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el pago aprobado queda disponible para cálculos de nómina.",
            },
          ],
        },
        {
          id: 13,
          aNombre: "Conceptos Especiales",
          aResumen: `Este nomenclador define los conceptos extraordinarios que afectan la nómina o la gestión de RRHH, fuera de los parámetros habituales. Sirve para:

Registrar pagos, descuentos o beneficios excepcionales.

Facilitar cálculos automáticos de nómina en situaciones especiales.

Garantizar transparencia y trazabilidad en la política laboral.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Conceptos Especiales.",
            },
            {
              label: "Registrar nuevo concepto especial",
              description:
                "Introduce código único, nombre del concepto (ej.: Prima por riesgo, Estímulo extraordinario, Descuento disciplinario) y tipo de impacto.",
            },
            {
              label: "Definir parámetros de cálculo",
              description:
                "Configura si el concepto afecta salario base, bonificaciones, descuentos o retenciones.",
            },
            {
              label: "Asignar a grupos o trabajadores",
              description:
                "Vincula el concepto especial a empleados, cargos o grupos de nómina según corresponda.",
            },
            {
              label: "Editar conceptos existentes",
              description:
                "Actualiza nombre, tipo o parámetros de cálculo según cambios en la normativa o política laboral.",
            },
            {
              label: "Depurar conceptos obsoletos",
              description:
                "Marca como inactivos los conceptos que ya no se aplican, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el concepto queda disponible para cálculos de nómina.",
            },
          ],
        },
        {
          id: 14,
          aNombre: "Contabilidad",
          aResumen: `Este nomenclador organiza los elementos contables básicos del sistema ZUNpr. Sirve para:

Definir el plan de cuentas y su estructura jerárquica.

Vincular cuentas contables a operaciones de nómina, inventarios, compras y ventas.

Garantizar coherencia en reportes financieros y estados contables.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Contabilidad.",
            },
            {
              label: "Registrar nueva cuenta contable",
              description:
                "Introduce código único, nombre de la cuenta, naturaleza (activo, pasivo, ingreso, gasto) y nivel jerárquico.",
            },
            {
              label: "Definir relaciones",
              description:
                "Configura vínculos con centros de costo, unidades organizativas y operaciones específicas (ej.: nómina, impuestos, inventarios).",
            },
            {
              label: "Editar cuentas existentes",
              description:
                "Actualiza nombre, naturaleza o vínculos según cambios en la política contable.",
            },
            {
              label: "Depurar cuentas obsoletas",
              description:
                "Marca como inactivas las cuentas que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; las cuentas quedan disponibles para todos los módulos relacionados.",
            },
          ],
        },
        {
          id: 15,
          aNombre: "Grupos de Centros de Costos",
          aResumen: `Este nomenclador permite agrupar varios centros de costo bajo una misma categoría o grupo. Sirve para:

Organizar la estructura contable y financiera en niveles superiores.

Facilitar reportes consolidados por área, proyecto o unidad.

Garantizar coherencia en la asignación de gastos y análisis de resultados.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Grupos de Centros de Costos.",
            },
            {
              label: "Registrar nuevo grupo",
              description:
                "Introduce código único y nombre del grupo (ej.: Producción, Administración, Comercialización).",
            },
            {
              label: "Vincular centros de costo",
              description:
                "Asocia los centros de costo existentes al grupo creado para consolidar información.",
            },
            {
              label: "Editar grupos existentes",
              description:
                "Actualiza nombre o composición del grupo según cambios organizativos o contables.",
            },
            {
              label: "Depurar grupos obsoletos",
              description:
                "Marca como inactivos los grupos que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el grupo queda disponible para reportes y análisis contables.",
            },
          ],
        },
        {
          id: 16,
          aNombre: "Apuntes Contables",
          aResumen: `Este nomenclador define los tipos de apuntes contables que se utilizan para registrar operaciones financieras en el sistema ZUNpr. Sirve para:

Estandarizar la forma en que se registran ingresos, gastos, provisiones y ajustes.

Facilitar la integración automática entre módulos operativos y contabilidad.

Garantizar coherencia y trazabilidad en los estados financieros.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description: "Configuración → Nomencladores → Apuntes Contables.",
            },
            {
              label: "Registrar nuevo apunte",
              description:
                "Introduce código único, nombre del apunte (ej.: Ingreso por ventas, Gasto administrativo, Ajuste por depreciación) y naturaleza (debe/haber).",
            },
            {
              label: "Definir cuentas vinculadas",
              description:
                "Configura las cuentas contables asociadas al apunte, indicando las relaciones de débito y crédito.",
            },
            {
              label: "Asignar a operaciones",
              description:
                "Vincula el apunte contable a procesos específicos (ej.: nómina, inventarios, compras, ventas).",
            },
            {
              label: "Editar apuntes existentes",
              description:
                "Actualiza nombre, cuentas vinculadas o naturaleza según cambios en la política contable.",
            },
            {
              label: "Depurar apuntes obsoletos",
              description:
                "Marca como inactivos los apuntes que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; el apunte queda disponible para integración contable.",
            },
          ],
        },
        {
          id: 17,
          aNombre: "Plantillas de Comprobantes",
          aResumen: `Este nomenclador define las plantillas utilizadas para generar comprobantes contables de manera uniforme. Sirve para:

Estandarizar la estructura de los comprobantes en todas las operaciones.

Facilitar la integración automática entre módulos administrativos y contables.

Garantizar coherencia y trazabilidad en los registros financieros.`,
          pasos: [
            {
              label: "Acceder al catálogo",
              description:
                "Configuración → Nomencladores → Plantillas de Comprobantes.",
            },
            {
              label: "Registrar nueva plantilla",
              description:
                "Introduce código único, nombre de la plantilla y tipo de comprobante (ej.: ingreso, gasto, ajuste, transferencia).",
            },
            {
              label: "Definir estructura",
              description:
                "Configura los campos obligatorios (fecha, número, cuentas contables, descripción, monto) y reglas de validación.",
            },
            {
              label: "Vincular cuentas contables",
              description:
                "Asocia las cuentas de debe y haber que se aplicarán automáticamente al usar la plantilla.",
            },
            {
              label: "Asignar a operaciones",
              description:
                "Vincula la plantilla a procesos específicos (ej.: nómina, inventarios, compras, ventas).",
            },
            {
              label: "Editar plantillas existentes",
              description:
                "Actualiza nombre, estructura o cuentas vinculadas según cambios en la política contable.",
            },
            {
              label: "Depurar plantillas obsoletas",
              description:
                "Marca como inactivas las plantillas que ya no se utilizan, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; la plantilla queda disponible para generar comprobantes contables.",
            },
          ],
        },
        {
          id: 67,
          aNombre: "Tempus",
          aResumen: `Este módulo centraliza la administración del tiempo laboral en ZUNpr. Sirve para:

Controlar asistencia y puntualidad de los trabajadores.

Gestionar turnos, fondos de tiempo y períodos de trabajo.

Integrar incidencias y pagos por resultado en la nómina.

Generar reportes de productividad y cumplimiento.`,
          pasos: [
            {
              label: "Acceder al módulo Tempus",
              description:
                "Desde el menú principal, selecciona Tempus para entrar a la gestión de tiempo.",
            },
            {
              label: "Configurar nomencladores base",
              description:
                "Asegúrate de tener definidos Fondos de Tiempo, Turnos de Trabajo, Conceptos de Incidencias y Períodos de Pago.",
            },
            {
              label: "Registrar asistencia",
              description:
                "Introduce o importa registros de entrada/salida de los trabajadores, vinculados a sus cargos y unidades organizativas.",
            },
            {
              label: "Aplicar incidencias",
              description:
                "Asocia ausencias, permisos, horas extras o bonificaciones según los conceptos definidos.",
            },
            {
              label: "Calcular tiempo efectivo",
              description:
                "El sistema consolida horas trabajadas, incidencias y productividad para cada trabajador.",
            },
            {
              label: "Integrar con nómina",
              description:
                "Los resultados de Tempus se envían automáticamente al módulo de nómina para el cálculo salarial.",
            },
            {
              label: "Generar reportes",
              description:
                "Obtén informes de asistencia, cumplimiento de turnos, productividad y costos asociados al tiempo laboral.",
            },
          ],
        },
        {
          id: 67.1,
          aNombre: "Configurar Camino",
          aResumen: `Este sub‑módulo permite definir la ruta de integración entre los registros de tiempo, las incidencias y la nómina. Sirve para:

Establecer el flujo de datos desde asistencia hasta cálculo salarial.

Configurar qué nomencladores participan en cada camino (fondos de tiempo, turnos, incidencias, períodos de pago).

Garantizar coherencia y trazabilidad en la gestión del tiempo.`,
          pasos: [
            {
              label: "Acceder a Configurar Camino",
              description:
                "Dentro de Tempus, selecciona la opción Configurar Camino.",
            },
            {
              label: "Definir origen",
              description:
                "Selecciona el punto de partida del camino (ej.: registro de asistencia, turnos de trabajo).",
            },
            {
              label: "Configurar nodos intermedios",
              description:
                "Agrega los módulos que intervienen en el flujo (ej.: incidencias, fondos de tiempo, períodos de pago).",
            },
            {
              label: "Definir destino",
              description:
                "Selecciona el módulo final donde se consolidará la información (ej.: nómina, reportes de productividad).",
            },
            {
              label: "Validar coherencia",
              description:
                "El sistema verifica que los nomencladores vinculados estén activos y correctamente configurados.",
            },
            {
              label: "Guardar camino",
              description:
                "Confirma y registra la ruta; queda disponible para cálculos automáticos y reportes.",
            },
          ],
        },
        {
          id: 67.2,
          aNombre: "Enlace de Ausencias",
          aResumen: `Este sub‑módulo vincula las ausencias registradas en asistencia con los conceptos de incidencias definidos en el sistema. Sirve para:

Automatizar el impacto de ausencias en la nómina.

Garantizar coherencia entre control de asistencia y cálculo salarial.

Facilitar reportes de ausentismo y productividad.`,
          pasos: [
            {
              label: "Acceder al sub‑módulo",
              description:
                "Dentro de Tempus, selecciona la opción Enlace de Ausencias.",
            },
            {
              label: "Definir tipos de ausencia",
              description:
                "Configura si la ausencia es justificada, injustificada, permiso especial o suspensión.",
            },
            {
              label: "Vincular con conceptos de incidencias",
              description:
                "Asocia cada tipo de ausencia con un concepto de incidencia (ej.: descuento proporcional, descuento total, permiso sin sueldo).",
            },
            {
              label: "Asignar reglas de cálculo",
              description:
                "Establece cómo se reflejará la ausencia en la nómina (ej.: días descontados, pago parcial, bonificación anulada).",
            },
            {
              label: "Validar registros",
              description:
                "El sistema verifica que las ausencias registradas estén correctamente enlazadas con incidencias activas.",
            },
            {
              label: "Guardar configuración",
              description:
                "Confirma y registra los enlaces; las ausencias quedan integradas en nómina y reportes.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      sNombre: "Personal",
      acciones: [
        {
          id: 80.1,
          aNombre: "Registrar Nuevo Trabajador",
          aResumen: `Este proceso permite dar de alta a un trabajador en el sistema ZUNpr. Sirve para:

Crear la ficha personal y laboral del empleado.

Vincularlo con cargos, unidades organizativas y grupos de nómina.

Configurar contrato, incidencias y condiciones de pago.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description:
                "Menú principal → Personal → Registrar nuevo trabajador.",
            },
            {
              label: "Introducir datos personales",
              description:
                "Nombre, apellidos, fecha de nacimiento, dirección, número de identificación y datos de contacto.",
            },
            {
              label: "Configurar datos laborales",
              description:
                "Selecciona cargo, unidad organizativa, grupo de nómina y período de pago.",
            },
            {
              label: "Definir contrato",
              description:
                "Asocia tipo de contrato (indefinido, temporal, por obra), fecha de inicio y condiciones específicas.",
            },
            {
              label: "Vincular nomencladores",
              description:
                "Relaciona al trabajador con turnos de trabajo, fondos de tiempo, incidencias y conceptos especiales.",
            },
            {
              label: "Registrar incidencias iniciales",
              description:
                "Si aplica, introduce permisos, bonificaciones o condiciones especiales desde el inicio.",
            },
            {
              label: "Guardar ficha del trabajador",
              description:
                "Confirma y registra la información; el trabajador queda disponible para nómina y reportes de RRHH.",
            },
          ],
        },
        {
          id: 80.2,
          aNombre: "Configurar Contrato",
          aResumen: `Este proceso permite establecer las condiciones contractuales de un trabajador en ZUNpr. Sirve para:

Registrar tipo de contrato y sus características.

Definir fechas de inicio, vencimiento y períodos de pago.

Vincular el contrato con grupos de nómina, turnos y nomencladores.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description: "Menú principal → Personal → Configurar contrato.",
            },
            {
              label: "Seleccionar trabajador",
              description:
                "Elige al empleado previamente registrado para asociarle un contrato.",
            },
            {
              label: "Definir tipo de contrato",
              description:
                "Selecciona entre indefinido, temporal, por obra, pasantía u otro según la política laboral.",
            },
            {
              label: "Registrar fechas",
              description:
                "Introduce fecha de inicio, fecha de vencimiento (si aplica) y período de pago (semanal, quincenal, mensual).",
            },
            {
              label: "Configurar condiciones",
              description:
                "Establece salario base, beneficios, bonificaciones y cláusulas especiales.",
            },
            {
              label: "Vincular nomencladores",
              description:
                "Relaciona el contrato con grupos de nómina, turnos de trabajo, fondos de tiempo y conceptos de incidencias.",
            },
            {
              label: "Guardar contrato",
              description:
                "Confirma y registra la información; el contrato queda disponible para nómina y reportes de RRHH.",
            },
          ],
        },
        {
          id: 80.3,
          aNombre: "Vincular a Nomencladores",
          aResumen: `Este proceso permite asociar al trabajador con los nomencladores definidos en el sistema. Sirve para:

Garantizar que cada empleado tenga asignados turnos, fondos de tiempo y grupos de nómina.

Facilitar la aplicación automática de incidencias y conceptos especiales.

Asegurar coherencia en cálculos de nómina y reportes de RRHH.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description:
                "Menú principal → Personal → Vincular a nomencladores.",
            },
            {
              label: "Seleccionar trabajador",
              description:
                "Elige al empleado previamente registrado para configurar sus vínculos.",
            },
            {
              label: "Asignar grupo de nómina",
              description:
                "Relaciona al trabajador con el grupo de nómina correspondiente (ej.: administrativos, técnicos, obreros).",
            },
            {
              label: "Vincular turnos de trabajo",
              description:
                "Asocia el trabajador a un turno definido en Tempus (ej.: jornada diurna, nocturna, rotativa).",
            },
            {
              label: "Configurar fondos de tiempo",
              description:
                "Define el fondo de tiempo que regula la jornada laboral del trabajador (ej.: 44 horas semanales).",
            },
            {
              label: "Relacionar incidencias",
              description:
                "Habilita los conceptos de incidencias aplicables (ausencias, permisos, horas extras, bonificaciones).",
            },
            {
              label: "Asignar conceptos especiales",
              description:
                "Si aplica, vincula al trabajador con estímulos, descuentos o pagos aprobados por la entidad.",
            },
            {
              label: "Guardar vínculos",
              description:
                "Confirma y registra la configuración; el trabajador queda integrado con todos los nomencladores relevantes.",
            },
          ],
        },
        {
          id: 80.4,
          aNombre: "Gestionar Incidencias",
          aResumen: `Este proceso permite registrar, editar y controlar las incidencias laborales de los trabajadores. Sirve para:

Aplicar ausencias, permisos, horas extras y bonificaciones.

Automatizar el impacto de incidencias en la nómina.

Generar reportes de ausentismo y productividad.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description: "Menú principal → Personal → Gestionar incidencias.",
            },
            {
              label: "Seleccionar trabajador",
              description:
                "Elige al empleado al que se le registrará la incidencia.",
            },
            {
              label: "Registrar nueva incidencia",
              description:
                "Introduce tipo de incidencia (ej.: ausencia justificada, ausencia injustificada, horas extras, permiso especial, bonificación).",
            },
            {
              label: "Definir parámetros",
              description:
                "Configura fecha, duración, impacto en salario y vínculo con conceptos de incidencias.",
            },
            {
              label: "Validar coherencia",
              description:
                "El sistema verifica que la incidencia esté correctamente enlazada con los nomencladores activos.",
            },
            {
              label: "Editar incidencias existentes",
              description:
                "Actualiza tipo, duración o impacto según cambios en la política laboral.",
            },
            {
              label: "Depurar incidencias obsoletas",
              description:
                "Marca como inactivas las incidencias que ya no se aplican, manteniendo trazabilidad histórica.",
            },
            {
              label: "Guardar incidencia",
              description:
                "Confirma y registra la información; la incidencia queda disponible para cálculos de nómina y reportes.",
            },
          ],
        },
        {
          id: 80.5,
          aNombre: "Integrar con Nómina",
          aResumen: `Este proceso permite enlazar la información del trabajador con el módulo de nómina. Sirve para:

Automatizar el cálculo salarial a partir de contratos, incidencias y tiempo trabajado.

Garantizar coherencia entre RRHH y contabilidad.

Generar reportes de pagos, descuentos y beneficios.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description: "Menú principal → Personal → Integrar con nómina.",
            },
            {
              label: "Seleccionar trabajador",
              description:
                "Elige al empleado previamente registrado para vincularlo con nómina.",
            },
            {
              label: "Verificar contrato",
              description:
                "Confirma que el contrato esté activo y correctamente configurado (tipo, fechas, período de pago).",
            },
            {
              label: "Revisar vínculos con nomencladores",
              description:
                "Asegúrate de que el trabajador tenga asignados grupo de nómina, turnos, fondos de tiempo e incidencias.",
            },
            {
              label: "Configurar reglas de integración",
              description:
                "Define cómo se aplicarán incidencias, bonificaciones y descuentos en el cálculo salarial.",
            },
            {
              label: "Validar coherencia",
              description:
                "El sistema verifica que todos los datos estén completos y consistentes antes de enviar a nómina.",
            },
            {
              label: "Guardar integración",
              description:
                "Confirma y registra la vinculación; el trabajador queda disponible para cálculos automáticos de nómina.",
            },
          ],
        },
        {
          id: 80.6,
          aNombre: "Generar Reportes",
          aResumen: `Este proceso permite obtener informes de recursos humanos y nómina a partir de la información registrada en el sistema. Sirve para:

Analizar plantilla, rotación y ausentismo.

Evaluar costos de personal y productividad.

Facilitar la toma de decisiones en RRHH y dirección.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description: "Menú principal → Personal → Generar reportes.",
            },
            {
              label: "Seleccionar tipo de reporte",
              description:
                "Elige entre plantilla, ausentismo, rotación, nómina, productividad o costos de personal.",
            },
            {
              label: "Definir parámetros de filtro",
              description:
                "Configura período de tiempo, unidad organizativa, cargo, grupo de nómina u otros criterios.",
            },
            {
              label: "Generar reporte",
              description:
                "El sistema procesa la información y presenta el informe en pantalla.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el reporte a formatos estándar (PDF, Excel) o imprime directamente.",
            },
            {
              label: "Guardar configuración",
              description:
                "Registra los parámetros usados para reutilizar la misma plantilla de reporte en el futuro.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sNombre: "Nómina",
      acciones: [
        {
          id: 1,
          aNombre: "Apertura del Período",
          aResumen: `Este proceso permite iniciar un nuevo período de gestión en el módulo de Personal. Sirve para:

Definir el rango de fechas en que se registrarán incidencias y cálculos de nómina.

Garantizar que todos los trabajadores estén vinculados al período activo.

Facilitar reportes y cierres contables coherentes.`,
          pasos: [
            {
              label: "Acceder al módulo Personal",
              description: "Menú principal → Personal → Apertura del período.",
            },
            {
              label: "Definir rango de fechas",
              description:
                "Introduce fecha de inicio y fecha de cierre del período (ej.: 01/01/2026 – 31/01/2026).",
            },
            {
              label: "Seleccionar grupo de nómina",
              description:
                "Elige los grupos de nómina que estarán activos en este período.",
            },
            {
              label: "Verificar contratos vigentes",
              description:
                "El sistema valida que los trabajadores tengan contratos activos dentro del rango definido.",
            },
            {
              label: "Configurar incidencias iniciales",
              description:
                "Si aplica, registra incidencias que comienzan junto con el período (ej.: permisos especiales).",
            },
            {
              label: "Confirmar apertura",
              description:
                "Guarda y activa el período; queda disponible para cálculos de nómina y reportes.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Incidencias por Empleados",
          aResumen: `Este proceso permite consultar y administrar las incidencias laborales de cada trabajador en el sistema. Sirve para:

Visualizar ausencias, permisos, horas extras y bonificaciones por empleado.

Facilitar el control individual de incidencias y su impacto en nómina.

Generar reportes personalizados de ausentismo y productividad.`,
          pasos: [
            {
              label: "Acceder al sub‑módulo",
              description:
                "Menú principal → Personal → Incidencias por empleados.",
            },
            {
              label: "Seleccionar trabajador",
              description:
                "Elige al empleado para consultar o registrar sus incidencias.",
            },
            {
              label: "Visualizar incidencias existentes",
              description:
                "El sistema muestra las incidencias registradas con fecha, tipo y efecto en nómina.",
            },
            {
              label: "Registrar nueva incidencia",
              description:
                "Introduce tipo de incidencia (ausencia, permiso, horas extras, bonificación) y parámetros de cálculo.",
            },
            {
              label: "Editar o eliminar incidencias",
              description:
                "Actualiza datos de incidencias existentes o marca como inactivas las que ya no aplican.",
            },
            {
              label: "Generar reporte individual",
              description:
                "Obtén un informe detallado de las incidencias del trabajador en el período seleccionado.",
            },
            {
              label: "Guardar cambios",
              description:
                "Confirma y registra la información; las incidencias quedan integradas con nómina y reportes.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Incidencias Masivas",
          aResumen: `Este proceso permite registrar incidencias de manera colectiva en Tempus. Sirve para:

Aplicar ausencias, permisos, horas extras o bonificaciones a grupos de trabajadores.

Optimizar la gestión de incidencias en períodos de alta rotación o eventos colectivos.

Garantizar coherencia y trazabilidad en la nómina.`,
          pasos: [
            {
              label: "Acceder al sub‑módulo",
              description: "Menú principal → Tempus → Incidencias masivas.",
            },
            {
              label: "Seleccionar grupo de aplicación",
              description:
                "Elige si aplicar la incidencia a un grupo de nómina, unidad organizativa o lista de trabajadores.",
            },
            {
              label: "Definir tipo de incidencia",
              description:
                "Selecciona ausencia, permiso, horas extras, bonificación u otro concepto definido en nomencladores.",
            },
            {
              label: "Configurar parámetros",
              description:
                "Introduce fecha, duración, coeficiente de cálculo y reglas de impacto en nómina.",
            },
            {
              label: "Validar coherencia",
              description:
                "El sistema verifica que todos los trabajadores seleccionados tengan contratos y vínculos activos.",
            },
            {
              label: "Aplicar incidencia",
              description:
                "Confirma la acción; la incidencia se registra automáticamente en cada ficha de trabajador.",
            },
            {
              label: "Generar reporte masivo",
              description:
                "Obtén un informe consolidado de las incidencias aplicadas, con detalle por trabajador y grupo.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Cargar Incidencias del HR",
          aResumen: `Este proceso permite importar incidencias registradas en el sistema de Recursos Humanos hacia Tempus. Sirve para:

Unificar la información de ausencias, permisos y horas extras.

Evitar la duplicidad de registros entre HR y Tempus.

Garantizar que las incidencias impacten automáticamente en la nómina.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tempus → Procesos → Cargar incidencias del HR.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período de tiempo previamente abierto en Tempus para recibir las incidencias.",
            },
            {
              label: "Definir fuente de datos",
              description:
                "Selecciona el sistema HR como origen de las incidencias a importar.",
            },
            {
              label: "Configurar parámetros de importación",
              description:
                "Indica rango de fechas, grupos de nómina o unidades organizativas que se incluirán.",
            },
            {
              label: "Ejecutar carga",
              description:
                "El sistema importa las incidencias y las vincula automáticamente con los trabajadores correspondientes.",
            },
            {
              label: "Validar coherencia",
              description:
                "Verifica que las incidencias se enlacen con contratos y nomencladores activos.",
            },
            {
              label: "Generar reporte de importación",
              description:
                "Obtén un informe con el detalle de incidencias cargadas, trabajadores afectados y posibles inconsistencias.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Cargar Incidencias de Tempus",
          aResumen: `Este proceso permite consolidar las incidencias registradas en Tempus y transferirlas al cálculo de nómina. Sirve para:

Unificar ausencias, permisos, horas extras y bonificaciones en el período activo.

Garantizar que las incidencias impacten automáticamente en los salarios.

Facilitar reportes de productividad y costos laborales.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tempus → Procesos → Cargar incidencias de Tempus.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período previamente abierto en Tempus para consolidar las incidencias.",
            },
            {
              label: "Definir alcance",
              description:
                "Configura si la carga será por grupo de nómina, unidad organizativa o todos los trabajadores.",
            },
            {
              label: "Ejecutar carga",
              description:
                "El sistema procesa las incidencias registradas y las transfiere al módulo de nómina.",
            },
            {
              label: "Validar coherencia",
              description:
                "Verifica que las incidencias estén correctamente enlazadas con contratos y nomencladores activos.",
            },
            {
              label: "Generar reporte de carga",
              description:
                "Obtén un informe con el detalle de incidencias consolidadas, trabajadores afectados y posibles inconsistencias.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Cálculo e Impresión de Nómina",
          aResumen: `Este proceso permite consolidar los datos de tiempo, incidencias y contratos para generar la nómina oficial. Sirve para:

Ejecutar el cálculo automático de salarios, descuentos y bonificaciones.

Generar la nómina en formato imprimible o exportable.

Garantizar trazabilidad y coherencia entre Tempus y contabilidad.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tempus → Procesos → Cálculo e impresión de nómina.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período previamente abierto y cargado con incidencias.",
            },
            {
              label: "Definir alcance",
              description:
                "Configura si el cálculo será por grupo de nómina, unidad organizativa o todos los trabajadores.",
            },
            {
              label: "Ejecutar cálculo",
              description:
                "El sistema procesa contratos, incidencias y fondos de tiempo para obtener el salario neto de cada trabajador.",
            },
            {
              label: "Generar vista previa",
              description:
                "Revisa el listado de trabajadores con sus pagos, descuentos y bonificaciones antes de imprimir.",
            },
            {
              label: "Imprimir nómina",
              description:
                "Obtén el documento oficial en formato estándar, listo para distribución o archivo.",
            },
            {
              label: "Exportar nómina",
              description:
                "Si aplica, exporta la nómina a formatos como PDF o Excel para respaldo y análisis.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Aportes e Impuestos",
          aResumen: `Este proceso permite calcular y aplicar las contribuciones legales asociadas a la nómina. Sirve para:

Registrar aportes patronales obligatorios (seguridad social, fondos especiales).

Aplicar retenciones al trabajador (impuestos sobre salarios, contribuciones personales).

Generar reportes de obligaciones fiscales y contables.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tempus → Procesos → Aportes e impuestos.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período previamente calculado de nómina para aplicar aportes e impuestos.",
            },
            {
              label: "Definir reglas de cálculo",
              description:
                "Configura porcentajes y bases imponibles según normativa vigente (ej.: % de seguridad social, % de impuesto sobre salarios).",
            },
            {
              label: "Ejecutar cálculo automático",
              description:
                "El sistema procesa cada trabajador y aplica las retenciones y aportes correspondientes.",
            },
            {
              label: "Validar resultados",
              description:
                "Revisa los montos calculados por trabajador y por grupo de nómina, asegurando coherencia con contratos y incidencias.",
            },
            {
              label: "Generar reporte fiscal",
              description:
                "Obtén un informe consolidado con aportes patronales y retenciones individuales, listo para contabilidad y auditoría.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el reporte a PDF o Excel, o imprime para archivo oficial.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Visualizar Comprobantes",
          aResumen: `Este proceso permite consultar los comprobantes generados en Tempus tras el cálculo de nómina y aportes. Sirve para:

Revisar los documentos oficiales de pago por trabajador o grupo de nómina.

Validar descuentos, bonificaciones y aportes aplicados.

Facilitar la impresión o exportación de comprobantes para archivo y entrega.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tempus → Procesos → Visualizar comprobantes.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período de nómina previamente calculado para consultar sus comprobantes.",
            },
            {
              label: "Definir alcance",
              description:
                "Configura si deseas visualizar comprobantes individuales por trabajador o consolidados por grupo de nómina.",
            },
            {
              label: "Revisar comprobante",
              description:
                "El sistema muestra el detalle: salario base, incidencias aplicadas, aportes e impuestos, y salario neto.",
            },
            {
              label: "Validar coherencia",
              description:
                "Verifica que los montos coincidan con contratos, incidencias y reglas de cálculo definidas.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el comprobante a PDF o Excel, o imprime para entrega oficial.",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      sNombre: "Nominilla",
      acciones: [
        {
          id: 1,
          aNombre: "Nominilla",
          aResumen: `Este módulo permite gestionar la nómina de forma simplificada. Sirve para:

Registrar y calcular salarios de manera directa.

Aplicar incidencias, aportes e impuestos sin pasar por procesos extensos.

Generar comprobantes y reportes de nómina listos para impresión o exportación.`,
          pasos: [
            {
              label: "Acceder al módulo Nominilla",
              description: "Menú principal → Nominilla.",
            },
            {
              label: "Definir período de nómina",
              description:
                "Selecciona fechas de inicio y cierre para el cálculo simplificado.",
            },
            {
              label: "Registrar trabajadores",
              description:
                "Elige los empleados que estarán incluidos en la nómina del período.",
            },
            {
              label: "Aplicar incidencias",
              description:
                "Introduce ausencias, permisos, horas extras o bonificaciones directamente en la nómina.",
            },
            {
              label: "Calcular aportes e impuestos",
              description:
                "El sistema aplica automáticamente las reglas fiscales y patronales configuradas.",
            },
            {
              label: "Generar comprobantes",
              description:
                "Obtén los documentos individuales o consolidados de pago.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta la nómina a PDF/Excel o imprime para archivo oficial.",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      sNombre: "Tarjetas Magn",
      acciones: [
        {
          id: 1,
          aNombre: "Tarjetas Magnéticas",
          aResumen: `Este módulo permite gestionar la vinculación de trabajadores con cuentas bancarias y la emisión de pagos por tarjeta. Sirve para:

Registrar y actualizar datos de tarjetas magnéticas de cada empleado.

Automatizar la transferencia de nómina hacia cuentas bancarias.

Generar comprobantes de pago y reportes de transferencias.`,
          pasos: [
            {
              label: "Acceder al módulo Tarjetas Magnéticas",
              description: "Menú principal → Tarjetas Magnéticas.",
            },
            {
              label: "Registrar tarjeta de trabajador",
              description:
                "Introduce número de tarjeta, banco emisor y datos de vinculación con el empleado.",
            },
            {
              label: "Validar datos bancarios",
              description:
                "El sistema verifica que la tarjeta esté activa y correctamente asociada al trabajador.",
            },
            {
              label: "Configurar nómina por tarjeta",
              description:
                "Selecciona si el pago del trabajador se realizará vía tarjeta magnética.",
            },
            {
              label: "Generar archivo de transferencias",
              description:
                "El sistema crea el archivo con los pagos consolidados para enviar al banco.",
            },
            {
              label: "Emitir comprobantes",
              description:
                "Obtén comprobantes individuales de pago por tarjeta para cada trabajador.",
            },
            {
              label: "Exportar o imprimir reportes",
              description:
                "Si aplica, exporta el listado de transferencias a PDF/Excel o imprime para archivo oficial.",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      sNombre: "Desglose de Efect",
      acciones: [
        {
          id: 2,
          aNombre: "Desglose de Efectivo",
          aResumen: `Este proceso permite calcular y organizar el efectivo necesario para cubrir pagos de nómina. Sirve para:

Generar el detalle de billetes y monedas por trabajador o grupo de nómina.

Facilitar la entrega física de salarios en efectivo.

Garantizar trazabilidad y control en la distribución de dinero.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tarjetas Magnéticas → Procesos → Desglose de efectivo.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período de nómina previamente calculado para realizar el desglose.",
            },
            {
              label: "Definir alcance",
              description:
                "Configura si el desglose será por trabajador, grupo de nómina o toda la entidad.",
            },
            {
              label: "Ejecutar cálculo",
              description:
                "El sistema procesa los montos netos y genera el detalle de billetes y monedas requeridos.",
            },
            {
              label: "Revisar desglose",
              description:
                "Verifica que el efectivo calculado coincida con los pagos netos de cada trabajador.",
            },
            {
              label: "Generar reporte",
              description:
                "Obtén un informe con el desglose por denominación y por trabajador, listo para tesorería.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el desglose a PDF/Excel o imprime para archivo oficial.",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      sNombre: "Cierre de Períod.",
      acciones: [
        {
          id: 9,
          aNombre: "Cierre del Período",
          aResumen: `Este proceso permite finalizar oficialmente un período de gestión en Tempus. Sirve para:

Consolidar incidencias, aportes e impuestos aplicados.

Bloquear modificaciones posteriores en el período cerrado.

Generar reportes finales para nómina y contabilidad.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tempus → Procesos → Cierre del período.",
            },
            {
              label: "Seleccionar período activo",
              description:
                "Elige el período previamente abierto y cargado con incidencias y cálculos de nómina.",
            },
            {
              label: "Validar datos",
              description:
                "Revisa que todas las incidencias, aportes e impuestos estén correctamente aplicados y consolidados.",
            },
            {
              label: "Ejecutar cierre",
              description:
                "El sistema bloquea el período, impidiendo nuevas modificaciones en incidencias o cálculos.",
            },
            {
              label: "Generar reporte de cierre",
              description:
                "Obtén un informe consolidado con nómina, incidencias y aportes del período cerrado.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el reporte a PDF/Excel o imprime para archivo oficial y auditoría.",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      sNombre: "Salario no Reclamado",
      acciones: [
        {
          id: 3,
          aNombre: "Salario No Reclamado",
          aResumen: `Este proceso permite controlar los pagos de nómina que no fueron retirados por los trabajadores. Sirve para:

Registrar los salarios que permanecen sin reclamar en el banco o en tesorería.

Generar reportes de trabajadores con pagos pendientes.

Facilitar la reprogramación o devolución de fondos.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tarjetas Magnéticas → Procesos → Salario no reclamado.",
            },
            {
              label: "Seleccionar período de nómina",
              description:
                "Elige el período previamente cerrado para verificar pagos pendientes.",
            },
            {
              label: "Consultar listado de trabajadores",
              description:
                "El sistema muestra los empleados cuyos salarios no fueron retirados en el banco o en efectivo.",
            },
            {
              label: "Validar montos pendientes",
              description:
                "Revisa los valores de cada trabajador y confirma que corresponden al neto calculado.",
            },
            {
              label: "Generar reporte de no reclamados",
              description:
                "Obtén un informe consolidado con detalle de trabajadores, montos y causas del no retiro.",
            },
            {
              label: "Definir acción correctiva",
              description:
                "Configura si el salario será reprogramado para el próximo período o devuelto a tesorería.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el reporte a PDF/Excel o imprime para archivo oficial y auditoría.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Aportar Reintegros al Presupuesto",
          aResumen: `Este proceso permite devolver al presupuesto institucional los fondos de nómina no reclamados o sobrantes. Sirve para:

Registrar reintegros de salarios no retirados o pagos anulados.

Garantizar la devolución transparente de fondos a la entidad.

Generar reportes de reintegros para auditoría y contabilidad.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "Menú principal → Tarjetas Magnéticas → Procesos → Aportar reintegros al presupuesto.",
            },
            {
              label: "Seleccionar período de nómina",
              description:
                "Elige el período previamente cerrado en el que se identificaron salarios no reclamados.",
            },
            {
              label: "Consultar listado de reintegros",
              description:
                "El sistema muestra los trabajadores y montos que deben devolverse al presupuesto.",
            },
            {
              label: "Validar montos",
              description:
                "Revisa que los valores correspondan a salarios netos no retirados o anulados.",
            },
            {
              label: "Ejecutar aporte",
              description:
                "Confirma la acción; los fondos se registran como reintegro al presupuesto institucional.",
            },
            {
              label: "Generar reporte de reintegros",
              description:
                "Obtén un informe consolidado con detalle de trabajadores, montos y fecha de reintegro.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Si aplica, exporta el reporte a PDF/Excel o imprime para archivo oficial y auditoría.",
            },
          ],
        },
      ],
    },
  ],
};
