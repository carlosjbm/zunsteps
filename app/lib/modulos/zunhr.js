import { addCargosToModule } from "../helpers/cargoHelper";

export const zunhrBase = {
  mNombre: "ZUNHr Recursos Humanos",
  mImage: "/acc",
  mResumen: `ZUNhr es un sistema integral de gestión de recursos humanos que permite registrar, 
  controlar y auditar todos los procesos laborales de una entidad: altas, bajas, reubicaciones, horarios, 
  incidencias, jornadas, cargos, plantilla, usuarios y reportes. Su enfoque modular y trazable garantiza precisión 
  operativa, seguridad de acceso y eficiencia administrativa.`,
  mSecciones: [
    {
      id: 1,
      sNombre: "Nomencladores",
      acciones: [
        {
          id: 1,
          aNombre: "Cargos",
          aResumen: `El módulo de Cargos permite definir y mantener actualizada la estructura de puestos de trabajo de la entidad. Sirve para:

Establecer la base organizativa sobre la cual se asignan empleados, salarios y categorías.

Relacionar cada cargo con su escala salarial y categoría ocupacional, garantizando coherencia en la nómina.

Facilitar la gestión de personal, ya que cada empleado debe estar vinculado a un cargo activo.

Mantener trazabilidad y control sobre los cambios en la estructura de cargos de la entidad.`,
          pasos: [
            {
              label: "Acceder al módulo de Cargos",
              description:
                "Desde el menú Configuración, selecciona la opción Cargos para gestionar los puestos de trabajo.",
            },
            {
              label: "Visualizar listado de cargos",
              description:
                "Se muestra una tabla con el código, descripción, categoría ocupacional, escala salarial y estado activo de cada cargo.",
            },
            {
              label: "Añadir un nuevo cargo",
              description:
                "Haz clic en el botón Añadir para activar el formulario inferior y registrar un nuevo cargo.",
            },
            {
              label: "Completar datos del nuevo cargo",
              description:
                "Introduce el código, descripción, categoría ocupacional y escala salarial correspondiente. Marca si está activo.",
            },
            {
              label: "Modificar un cargo existente",
              description:
                "Selecciona un cargo del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un cargo",
              description:
                "Selecciona el cargo y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del cargo, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Turnos",
          aResumen: `El módulo de Turnos permite definir y administrar los horarios laborales que se asignan a los empleados. Sirve para:

Establecer jornadas laborales claras con tiempos definidos de entrada, salida y descanso.

Organizar el trabajo por áreas o funciones, como oficina, supervisión, seguridad, etc.

Facilitar la planificación de horarios y secuencias, esenciales para el control de asistencia.

Vincular turnos a empleados, asegurando que cada trabajador tenga un horario asignado correctamente.

Evitar errores en la nómina y reportes, al tener una estructura de turnos bien definida.`,
          pasos: [
            {
              label: "Acceder al módulo de Turnos",
              description:
                "Desde el menú Configuración, selecciona la opción Turnos para gestionar los horarios laborales.",
            },
            {
              label: "Visualizar listado de turnos",
              description:
                "Se muestra una tabla con código, descripción, hora de entrada, hora de salida, tiempo de descanso, tiempo de trabajo y estado activo.",
            },
            {
              label: "Añadir un nuevo turno",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo turno.",
            },
            {
              label: "Completar datos del turno",
              description:
                "Introduce el código, descripción, hora de entrada, hora de salida, tiempo de descanso y tiempo de trabajo. Marca si está activo.",
            },
            {
              label: "Modificar un turno existente",
              description:
                "Selecciona un turno del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un turno",
              description:
                "Selecciona el turno y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del turno, o en Cancelar para descartar.",
            },
            {
              label: "Crear horarios y secuencias de trabajo",
              description:
                "Dirígete a Personal/Horarios de Empleados para definir las secuencias laborales asociadas a los turnos.",
            },
            {
              label: "Asignar horarios a empleados",
              description:
                "En Personal/Empleados/Otros Datos Principales, asigna el horario correspondiente a cada trabajador.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Idiomas",
          aResumen: `El módulo de Idiomas permite registrar y mantener actualizada la información sobre los idiomas que dominan los trabajadores. Sirve para:

Identificar competencias lingüísticas dentro de la entidad, útiles para asignaciones específicas o atención al cliente.

Facilitar la planificación de capacitaciones o asignación de personal según necesidades idiomáticas.

Mantener un registro estructurado que puede ser utilizado en reportes, contratos o procesos de selección.

Evitar duplicaciones o errores al tener un nomenclador centralizado y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Idiomas",
              description:
                "Desde el menú Configuración, selecciona la opción Idiomas para gestionar los idiomas que dominan los trabajadores.",
            },
            {
              label: "Visualizar listado de idiomas",
              description:
                "Se muestra una tabla con el código y la descripción de cada idioma registrado en el sistema.",
            },
            {
              label: "Añadir un nuevo idioma",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo idioma.",
            },
            {
              label: "Completar datos del idioma",
              description:
                "Introduce el código alfanumérico y la descripción del idioma. Verifica que los datos sean correctos.",
            },
            {
              label: "Modificar un idioma existente",
              description:
                "Selecciona un idioma del listado y haz clic en Modificar para editar su código o descripción.",
            },
            {
              label: "Eliminar un idioma",
              description:
                "Selecciona el idioma y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del idioma, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Brigadas",
          aResumen: `El módulo de Brigadas permite organizar a los trabajadores en grupos funcionales según turnos, áreas o tareas. Sirve para:

Distribuir el personal de forma estructurada, facilitando la planificación operativa.

Asignar turnos y horarios grupales, optimizando la gestión de asistencia y carga laboral.

Controlar la composición de cada brigada, permitiendo ajustes rápidos ante cambios operativos.

Facilitar reportes y análisis por grupo, mejorando la trazabilidad y el rendimiento por unidad.`,
          pasos: [
            {
              label: "Acceder al módulo de Brigadas",
              description:
                "Desde el menú Configuración, selecciona la opción Brigadas para gestionar los grupos de trabajo.",
            },
            {
              label: "Visualizar listado de brigadas",
              description:
                "Se muestra una tabla con el código, descripción, turno asignado y estado activo de cada brigada.",
            },
            {
              label: "Añadir una nueva brigada",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva brigada.",
            },
            {
              label: "Completar datos de la brigada",
              description:
                "Introduce el código, descripción, turno correspondiente y marca si está activa.",
            },
            {
              label: "Modificar una brigada existente",
              description:
                "Selecciona una brigada del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una brigada",
              description:
                "Selecciona la brigada y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la brigada, o en Cancelar para descartar.",
            },
            {
              label: "Asignar empleados a brigadas",
              description:
                "Ubica a cada trabajador en su brigada correspondiente, ya sea de forma individual o mediante selección múltiple.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Sanciones",
          aResumen: `El módulo de Sanciones permite registrar, modificar y controlar las penalizaciones aplicadas a los trabajadores por motivos disciplinarios. Sirve para:

Mantener un historial formal de sanciones, con duración y descripción detallada.

Facilitar el seguimiento de medidas disciplinarias, asegurando que se cumplan los plazos establecidos.

Evitar errores administrativos, al tener un registro centralizado y estructurado.

Generar reportes confiables para auditorías internas o decisiones de recursos humanos.`,
          pasos: [
            {
              label: "Acceder al módulo de Sanciones",
              description:
                "Desde el menú Configuración, selecciona la opción Sanciones para gestionar las penalizaciones aplicadas a los empleados.",
            },
            {
              label: "Visualizar listado de sanciones",
              description:
                "Se muestra una tabla con el código, descripción y tiempo de duración de cada sanción registrada.",
            },
            {
              label: "Añadir una nueva sanción",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva sanción.",
            },
            {
              label: "Completar datos de la sanción",
              description:
                "Introduce el código, la descripción y el tiempo de duración de la sanción. Verifica que los datos estén correctos.",
            },
            {
              label: "Modificar una sanción existente",
              description:
                "Selecciona una sanción del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una sanción",
              description:
                "Selecciona la sanción y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la sanción, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Provincias",
          aResumen: `El módulo de Provincias permite registrar y mantener actualizada la información territorial de la entidad. Sirve para:

Establecer la ubicación geográfica de cada unidad organizativa o empleado.

Facilitar la clasificación y filtrado de datos por región en reportes y procesos administrativos.

Evitar inconsistencias al tener un nomenclador centralizado y editable.

Vincular correctamente municipios y entidades, asegurando coherencia en la estructura territorial.`,
          pasos: [
            {
              label: "Acceder al módulo de Provincias",
              description:
                "Desde el menú Configuración, selecciona la opción Provincias para gestionar las divisiones territoriales.",
            },
            {
              label: "Visualizar listado de provincias",
              description:
                "Se muestra una tabla con el código, nombre de la provincia y estado activo de cada registro.",
            },
            {
              label: "Añadir una nueva provincia",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva provincia.",
            },
            {
              label: "Completar datos de la provincia",
              description:
                "Introduce el código alfanumérico y la descripción de la provincia. Marca si está activa.",
            },
            {
              label: "Modificar una provincia existente",
              description:
                "Selecciona una provincia del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una provincia",
              description:
                "Selecciona la provincia y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la provincia, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Balance General",
          aResumen: `El módulo de Municipios permite registrar y mantener actualizada la información territorial detallada de cada entidad. Sirve para:

Vincular correctamente empleados y unidades organizativas con su ubicación geográfica específica.

Facilitar la clasificación de datos por región, útil en reportes, análisis y procesos administrativos.

Evitar errores de asignación territorial, al tener un nomenclador estructurado y validado.

Mantener coherencia con las provincias registradas, asegurando integridad en la estructura territorial.`,
          pasos: [
            {
              label: "Acceder al módulo de Municipios",
              description:
                "Desde el menú Configuración, selecciona la opción Municipios para gestionar las divisiones territoriales locales.",
            },
            {
              label: "Visualizar listado de municipios",
              description:
                "Se muestra una tabla con el código, nombre del municipio, provincia asociada y estado activo.",
            },
            {
              label: "Añadir un nuevo municipio",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo municipio.",
            },
            {
              label: "Completar datos del municipio",
              description:
                "Introduce el código, la descripción del municipio y selecciona la provincia correspondiente. Marca si está activo.",
            },
            {
              label: "Modificar un municipio existente",
              description:
                "Selecciona un municipio del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un municipio",
              description:
                "Selecciona el municipio y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del municipio, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Profesiones",
          aResumen: `El módulo de Profesiones permite registrar y mantener actualizada la formación académica y técnica del personal. Sirve para:

Identificar el perfil profesional de cada trabajador, útil para asignaciones, promociones y análisis de capacidades.

Vincular correctamente títulos y especialidades con los cargos y funciones dentro de la entidad.

Facilitar la planificación de desarrollo profesional, capacitaciones y cumplimiento de requisitos institucionales.

Evitar duplicaciones o inconsistencias, al tener un nomenclador centralizado y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Profesiones",
              description:
                "Desde el menú Configuración, selecciona la opción Profesiones para gestionar los títulos y especialidades del personal.",
            },
            {
              label: "Visualizar listado de profesiones",
              description:
                "Se muestra una tabla con el código, descripción y código de correlación de cada profesión registrada.",
            },
            {
              label: "Añadir una nueva profesión",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva profesión.",
            },
            {
              label: "Completar datos de la profesión",
              description:
                "Introduce el código, la descripción y el código de correlación correspondiente. Verifica que los datos estén correctos.",
            },
            {
              label: "Modificar una profesión existente",
              description:
                "Selecciona una profesión del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una profesión",
              description:
                "Selecciona la profesión y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la profesión, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Modalidades",
          aResumen: `El módulo de Modalidades permite definir los distintos tipos de relación laboral que puede tener un trabajador con la entidad. Sirve para:

Clasificar contratos según su naturaleza, como adiestramiento, período a prueba o sustitución.

Facilitar la asignación de contratos en el módulo de empleados, asegurando coherencia legal y administrativa.

Evitar errores en la nómina y reportes, al tener un nomenclador claro y estructurado.

Adaptarse a las políticas laborales vigentes, manteniendo flexibilidad en la gestión de personal.`,
          pasos: [
            {
              label: "Acceder al módulo de Modalidades",
              description:
                "Desde el menú Configuración, selecciona la opción Modalidades para gestionar los tipos de vínculo laboral.",
            },
            {
              label: "Visualizar listado de modalidades",
              description:
                "Se muestra una tabla con el código, descripción y tipo de contrato (determinado o indeterminado).",
            },
            {
              label: "Añadir una nueva modalidad",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva modalidad.",
            },
            {
              label: "Completar datos de la modalidad",
              description:
                "Introduce el código, la descripción y selecciona el tipo de contrato correspondiente.",
            },
            {
              label: "Modificar una modalidad existente",
              description:
                "Selecciona una modalidad del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una modalidad",
              description:
                "Selecciona la modalidad y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la modalidad, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Escalas Salariales",
          aResume: `El módulo de Escalas Salariales permite definir los grupos de salario que se asignan a los cargos dentro de la entidad. Sirve para:

Establecer niveles salariales claros y estructurados, según categoría ocupacional y normativa vigente.

Vincular cada cargo con su escala correspondiente, asegurando coherencia en la nómina.

Facilitar ajustes salariales y análisis de equidad, al tener un nomenclador centralizado.

Evitar errores en la asignación de sueldos, manteniendo control sobre los valores registrados.`,
          pasos: [
            {
              label: "Acceder al módulo de Escalas Salariales",
              description:
                "Desde el menú Configuración, selecciona la opción Escalas Salariales para gestionar los grupos de salario.",
            },
            {
              label: "Visualizar listado de escalas",
              description:
                "Se muestra una tabla con el código del grupo, descripción y valores asociados a cada escala salarial.",
            },
            {
              label: "Añadir una nueva escala salarial",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva escala.",
            },
            {
              label: "Completar datos de la escala",
              description:
                "Introduce el código, la descripción y los valores salariales correspondientes. Verifica que estén alineados con la normativa vigente.",
            },
            {
              label: "Modificar una escala existente",
              description:
                "Selecciona una escala del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una escala salarial",
              description:
                "Selecciona la escala y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la escala, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 11,
          aNombre: "Jornadas Laborales",
          aResume: `El módulo de Jornadas Laborales permite definir los esquemas de tiempo que rigen el trabajo en la entidad. Sirve para:

Establecer la duración oficial de la jornada según el tipo de contrato o función.

Vincular jornadas a empleados y turnos, asegurando coherencia en la planificación y control de asistencia.

Facilitar el cálculo de horas trabajadas y pagos, especialmente en nómina y reportes.

Evitar errores administrativos, al tener un nomenclador claro y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Jornadas Laborales",
              description:
                "Desde el menú Configuración, selecciona la opción Jornadas Laborales para definir los tipos de jornada que aplican en la entidad.",
            },
            {
              label: "Visualizar listado de jornadas",
              description:
                "Se muestra una tabla con el código, descripción, duración y estado activo de cada jornada registrada.",
            },
            {
              label: "Añadir una nueva jornada laboral",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva jornada.",
            },
            {
              label: "Completar datos de la jornada",
              description:
                "Introduce el código, la descripción, duración en horas y marca si está activa.",
            },
            {
              label: "Modificar una jornada existente",
              description:
                "Selecciona una jornada del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una jornada laboral",
              description:
                "Selecciona la jornada y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la jornada, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 12,
          aNombre: "Grupos de Nómina",
          aResume: `El módulo de Grupos de Nómina permite clasificar a los empleados en conjuntos operativos para facilitar el procesamiento de pagos. Sirve para:

Organizar el personal por unidad de pago, como departamentos, áreas o proyectos.

Facilitar la generación de nóminas, aplicando reglas comunes a cada grupo.

Optimizar el control administrativo, permitiendo segmentar reportes y procesos por grupo.

Evitar errores en la asignación de pagos, al tener una estructura clara y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Grupos de Nómina",
              description:
                "Desde el menú Configuración, selecciona la opción Grupos de Nómina para organizar a los empleados según criterios de pago.",
            },
            {
              label: "Visualizar listado de grupos",
              description:
                "Se muestra una tabla con el código, nombre del grupo y estado activo de cada registro.",
            },
            {
              label: "Añadir un nuevo grupo de nómina",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo grupo.",
            },
            {
              label: "Completar datos del grupo",
              description:
                "Introduce el código y la descripción del grupo. Marca si está activo.",
            },
            {
              label: "Modificar un grupo existente",
              description:
                "Selecciona un grupo del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un grupo de nómina",
              description:
                "Selecciona el grupo y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del grupo, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 13,
          aNombre: "Tipos de Contrato",
          aResume: `El módulo de Tipos de Contrato permite definir las distintas formas legales bajo las cuales se vinculan los trabajadores a la entidad. Sirve para:

Clasificar correctamente la relación laboral, como contrato por tiempo determinado, indefinido, a prueba, etc.

Facilitar la generación automática de proformas, con los datos legales y personales del empleado.

Evitar errores legales o administrativos, al tener un nomenclador claro y editable.

Asegurar coherencia con las modalidades y políticas internas, manteniendo trazabilidad en la gestión de personal.`,
          pasos: [
            {
              label: "Acceder al módulo de Tipos de Contrato",
              description:
                "Desde el menú Configuración, selecciona la opción Tipos de Contrato para gestionar las formas legales de vinculación laboral.",
            },
            {
              label: "Visualizar listado de tipos de contrato",
              description:
                "Se muestra una tabla con el código, descripción y estado activo de cada tipo de contrato registrado.",
            },
            {
              label: "Añadir un nuevo tipo de contrato",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo tipo de contrato.",
            },
            {
              label: "Completar datos del contrato",
              description:
                "Introduce el código y la descripción del contrato. Marca si está activo.",
            },
            {
              label: "Modificar un tipo de contrato existente",
              description:
                "Selecciona un contrato del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un tipo de contrato",
              description:
                "Selecciona el contrato y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del contrato, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 14,
          aNombre: "Motivos de Altas/Bajas",
          aResume: `El módulo de Motivos de Altas/Bajas permite registrar y controlar las razones por las cuales un trabajador se incorpora o se desvincula de la entidad. Sirve para:

Clasificar los movimientos de personal de forma estructurada y trazable.

Facilitar reportes y estadísticas de rotación, ausentismo o crecimiento de plantilla.

Cumplir con normativas laborales, al documentar adecuadamente cada ingreso o salida.

Evitar ambigüedades administrativas, al tener un nomenclador claro y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Motivos de Altas/Bajas",
              description:
                "Desde el menú Configuración, selecciona la opción Motivos de Altas/Bajas para gestionar las causas de ingreso o salida de empleados.",
            },
            {
              label: "Visualizar listado de motivos",
              description:
                "Se muestra una tabla con el código, descripción y tipo de movimiento (alta o baja) de cada motivo registrado.",
            },
            {
              label: "Añadir un nuevo motivo",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo motivo de alta o baja.",
            },
            {
              label: "Completar datos del motivo",
              description:
                "Introduce el código, la descripción y selecciona si corresponde a una alta o una baja. Marca si está activo.",
            },
            {
              label: "Modificar un motivo existente",
              description:
                "Selecciona un motivo del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un motivo",
              description:
                "Selecciona el motivo y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del motivo, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 15,
          aNombre: "Pago por Resultados",
          aResume: `El módulo de Pago por Resultados permite definir incentivos económicos vinculados al rendimiento laboral. Sirve para:

Reconocer el desempeño individual o grupal, mediante pagos adicionales por productividad.

Establecer criterios claros de incentivo, alineados con los objetivos de la entidad.

Facilitar el cálculo automático de bonificaciones, integrando los valores en la nómina.

Evitar inconsistencias o duplicaciones, al tener un nomenclador estructurado y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Pago por Resultados",
              description:
                "Desde el menú Configuración, selecciona la opción Pago por Resultados para gestionar incentivos asociados al rendimiento.",
            },
            {
              label: "Visualizar listado de conceptos",
              description:
                "Se muestra una tabla con el código, descripción, importe y porcentaje aplicado a cada concepto de pago por resultados.",
            },
            {
              label: "Añadir un nuevo concepto",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo concepto de incentivo.",
            },
            {
              label: "Completar datos del concepto",
              description:
                "Introduce el código, la descripción, el importe fijo y el porcentaje correspondiente. Verifica que los datos estén alineados con la política de la entidad.",
            },
            {
              label: "Modificar un concepto existente",
              description:
                "Selecciona un concepto del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un concepto",
              description:
                "Selecciona el concepto y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del concepto, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 16,
          aNombre: "Niveles Educacionales",
          aResume: `El módulo de Niveles Educacionales permite registrar el grado de instrucción alcanzado por cada trabajador. Sirve para:

Clasificar el personal según su formación académica, útil para asignaciones, promociones y análisis de capacidades.

Facilitar reportes institucionales, como estadísticas de escolaridad o cumplimiento de requisitos.

Evitar errores en la ficha del empleado, al tener un nomenclador claro y editable.

Vincular correctamente la educación con cargos y profesiones, asegurando coherencia en la estructura organizativa.`,
          pasos: [
            {
              label: "Acceder al módulo de Niveles Educacionales",
              description:
                "Desde el menú Configuración, selecciona la opción Niveles Educacionales para gestionar el grado de instrucción de los empleados.",
            },
            {
              label: "Visualizar listado de niveles",
              description:
                "Se muestra una tabla con el código, descripción y estado activo de cada nivel educacional registrado.",
            },
            {
              label: "Añadir un nuevo nivel educacional",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo nivel de instrucción.",
            },
            {
              label: "Completar datos del nivel",
              description:
                "Introduce el código y la descripción del nivel educacional. Marca si está activo.",
            },
            {
              label: "Modificar un nivel existente",
              description:
                "Selecciona un nivel del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un nivel educacional",
              description:
                "Selecciona el nivel y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del nivel, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 17,
          aNombre: "Unidades Organizativas",
          aResume: `El módulo de Unidades Organizativas permite definir la estructura jerárquica y funcional de la entidad. Sirve para:

Organizar el personal por áreas, departamentos o secciones, facilitando la gestión operativa.

Establecer niveles jerárquicos claros, útiles para reportes, permisos y asignaciones.

Vincular empleados a sus respectivas unidades, asegurando coherencia en la administración.

Evitar duplicaciones o errores estructurales, al tener un nomenclador editable y centralizado.`,
          pasos: [
            {
              label: "Acceder al módulo de Unidades Organizativas",
              description:
                "Desde el menú Configuración, selecciona la opción Unidades Organizativas para gestionar la estructura interna de la entidad.",
            },
            {
              label: "Visualizar listado de unidades",
              description:
                "Se muestra una tabla con el código, nombre de la unidad, nivel jerárquico y estado activo de cada registro.",
            },
            {
              label: "Añadir una nueva unidad organizativa",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva unidad.",
            },
            {
              label: "Completar datos de la unidad",
              description:
                "Introduce el código, la descripción, el nivel jerárquico y marca si está activa.",
            },
            {
              label: "Modificar una unidad existente",
              description:
                "Selecciona una unidad del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una unidad organizativa",
              description:
                "Selecciona la unidad y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la unidad, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 18,
          aNombre: "Organizaciones de Masa",
          aResume: `El módulo de Organizaciones de Masa permite registrar la afiliación de los trabajadores a organizaciones sociales o sindicales. Sirve para:

Identificar la participación institucional de cada empleado en estructuras organizativas.

Facilitar reportes y estadísticas de membresía por tipo de organización.

Vincular correctamente la afiliación con beneficios, cuotas o actividades internas.

Evitar duplicaciones o inconsistencias, al tener un nomenclador editable y estructurado.`,
          pasos: [
            {
              label: "Acceder al módulo de Organizaciones de Masa",
              description:
                "Desde el menú Configuración, selecciona la opción Organizaciones de Masa para gestionar la afiliación institucional de los empleados.",
            },
            {
              label: "Visualizar listado de organizaciones",
              description:
                "Se muestra una tabla con el código, nombre de la organización y estado activo de cada registro.",
            },
            {
              label: "Añadir una nueva organización",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva organización.",
            },
            {
              label: "Completar datos de la organización",
              description:
                "Introduce el código y la descripción de la organización. Marca si está activa.",
            },
            {
              label: "Modificar una organización existente",
              description:
                "Selecciona una organización del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una organización",
              description:
                "Selecciona la organización y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la organización, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 19,
          aNombre: "Licencias de Conducción",
          aResume: `El módulo de Licencias de Conducción permite registrar los permisos de conducción que poseen los trabajadores. Sirve para:

Identificar qué empleados están autorizados para operar vehículos según tipo de licencia.

Facilitar la asignación de tareas que requieren movilidad o transporte.

Mantener actualizada la información legal y operativa sobre licencias vigentes.

Evitar errores administrativos al tener un nomenclador claro y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Licencias de Conducción",
              description:
                "Desde el menú Configuración, selecciona la opción Licencias de Conducción para gestionar los permisos de manejo de los empleados.",
            },
            {
              label: "Visualizar listado de licencias",
              description:
                "Se muestra una tabla con el código, tipo de licencia y estado activo de cada registro.",
            },
            {
              label: "Añadir una nueva licencia",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva licencia.",
            },
            {
              label: "Completar datos de la licencia",
              description:
                "Introduce el código y la descripción del tipo de licencia. Marca si está activa.",
            },
            {
              label: "Modificar una licencia existente",
              description:
                "Selecciona una licencia del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una licencia",
              description:
                "Selecciona la licencia y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la licencia, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 20,
          aNombre: "Categorías Ocupacionales",
          aResume: `El módulo de Categorías Ocupacionales permite clasificar los cargos según su naturaleza funcional dentro de la entidad. Sirve para:

Establecer distinciones entre cuadros, técnicos, operarios y otros perfiles laborales.

Vincular cada cargo con su categoría correspondiente, lo cual impacta en escalas salariales y beneficios.

Facilitar reportes y análisis por tipo de ocupación, útiles para planificación y control de recursos humanos.

Evitar inconsistencias en la estructura organizativa, al tener un nomenclador claro y centralizado.`,
          pasos: [
            {
              label: "Acceder al módulo de Categorías Ocupacionales",
              description:
                "Desde el menú Configuración, selecciona la opción Categorías Ocupacionales para gestionar la clasificación funcional de los cargos.",
            },
            {
              label: "Visualizar listado de categorías",
              description:
                "Se muestra una tabla con el código, descripción y estado activo de cada categoría registrada.",
            },
            {
              label: "Añadir una nueva categoría",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva categoría ocupacional.",
            },
            {
              label: "Completar datos de la categoría",
              description:
                "Introduce el código y la descripción de la categoría. Marca si está activa.",
            },
            {
              label: "Modificar una categoría existente",
              description:
                "Selecciona una categoría del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar una categoría ocupacional",
              description:
                "Selecciona la categoría y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarla.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la categoría, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 21,
          aNombre: "Conceptos de Incidencias",
          aResume: `El módulo de Conceptos de Incidencias permite registrar los eventos que afectan la jornada laboral o el cálculo de la nómina. Sirve para:

Clasificar ausencias, licencias, interrupciones y otros eventos que impactan el trabajo del empleado.

Vincular cada incidencia con reglas de cálculo, afectación salarial o justificación administrativa.

Facilitar reportes y análisis de comportamiento laboral, como ausentismo o licencias recurrentes.

Evitar errores en la nómina y control de asistencia, al tener un nomenclador claro y editable.`,
          pasos: [
            {
              label: "Acceder al módulo de Conceptos de Incidencias",
              description:
                "Desde el menú Configuración, selecciona la opción Conceptos de Incidencias para gestionar los eventos que afectan la jornada laboral.",
            },
            {
              label: "Visualizar listado de conceptos",
              description:
                "Se muestra una tabla con el código, descripción, tipo de incidencia y estado activo de cada registro.",
            },
            {
              label: "Añadir un nuevo concepto de incidencia",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo concepto.",
            },
            {
              label: "Completar datos del concepto",
              description:
                "Introduce el código, la descripción, el tipo de incidencia (ausencia, licencia, interrupción, etc.) y marca si está activo.",
            },
            {
              label: "Modificar un concepto existente",
              description:
                "Selecciona un concepto del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un concepto de incidencia",
              description:
                "Selecciona el concepto y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del concepto, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 22,
          aNombre: "Empresa",
          aResume: `El módulo de Empresa permite registrar los datos generales de la entidad que utiliza el sistema. Sirve para:

Definir la información institucional como nombre, dirección, código y datos de contacto.

Establecer parámetros base que se reflejan en reportes, formularios y documentos oficiales.

Facilitar la identificación de la entidad en procesos internos y externos.

Evitar inconsistencias administrativas, al tener un registro centralizado y editable de la empresa.`,
          pasos: [
            {
              label: "Acceder al módulo de Empresa",
              description:
                "Desde el menú Configuración, selecciona la opción Empresa para gestionar los datos generales de la entidad.",
            },
            {
              label: "Visualizar datos de la empresa",
              description:
                "Se muestra un formulario con campos como nombre, dirección, código, teléfono, correo electrónico y otros datos institucionales.",
            },
            {
              label: "Editar información de la empresa",
              description:
                "Haz clic en Modificar para habilitar los campos y actualizar la información registrada.",
            },
            {
              label: "Completar o corregir los datos",
              description:
                "Introduce o ajusta los datos institucionales según corresponda. Verifica que estén actualizados y correctos.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la modificación, o en Cancelar para descartar los cambios.",
            },
          ],
        },
        {
          id: 23,
          aNombre: "Eventos del Comedor",
          aResume: `El módulo de Eventos del Comedor permite registrar y controlar las actividades relacionadas con el servicio alimentario ofrecido a los empleados. Sirve para:

Registrar la asistencia diaria al comedor por trabajador o grupo.

Controlar el consumo de alimentos y la planificación de menús.

Facilitar reportes sobre uso del comedor, costos asociados y frecuencia de participación.

Evitar inconsistencias en la gestión alimentaria, al tener un registro estructurado y editable de los eventos.`,
          pasos: [
            {
              label: "Acceder al módulo de Eventos del Comedor",
              description:
                "Desde el menú Configuración, selecciona la opción Eventos del Comedor para gestionar la asistencia y consumo alimentario de los empleados.",
            },
            {
              label: "Visualizar listado de eventos",
              description:
                "Se muestra una tabla con fecha, tipo de evento, cantidad de comensales y estado activo.",
            },
            {
              label: "Añadir un nuevo evento",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo evento del comedor.",
            },
            {
              label: "Completar datos del evento",
              description:
                "Introduce la fecha, tipo de evento (almuerzo, cena, especial), cantidad de comensales y observaciones si aplica.",
            },
            {
              label: "Modificar un evento existente",
              description:
                "Selecciona un evento del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un evento del comedor",
              description:
                "Selecciona el evento y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del evento, o en Cancelar para descartar.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      sNombre: "Conceptos Esp",
      acciones: [
        {
          id: 1,
          aNombre: "Pagos Aprobados",
          aResume: `El módulo de Pagos Aprobados permite visualizar y gestionar los pagos que han sido autorizados dentro del sistema. Sirve para:

Consultar el estado de aprobación de pagos asociados a facturas de proveedores.

Verificar los datos relevantes de cada factura antes de ejecutar el pago.

Facilitar el control financiero y la trazabilidad de las operaciones de egreso.

Evitar duplicaciones o errores contables, al tener un registro claro y validado de pagos aprobados.`,
          pasos: [
            {
              label: "Acceder al módulo de Pagos Aprobados",
              description:
                "Desde el menú principal, selecciona Seguimiento de Pagos y luego el submenú Pagos Aprobados para visualizar los pagos autorizados.",
            },
            {
              label: "Visualizar listado de pagos aprobados",
              description:
                "Se muestra una vista con todas las facturas que han sido aprobadas para pago, incluyendo proveedor, importe, fecha y estado.",
            },
            {
              label: "Consultar detalles de cada pago",
              description:
                "Haz clic sobre un registro para ver la información completa de la factura, incluyendo condiciones de pago y documentos asociados.",
            },
            {
              label: "Filtrar pagos por proveedor o fecha",
              description:
                "Utiliza los filtros disponibles para buscar pagos aprobados por proveedor, rango de fechas u otros criterios.",
            },
            {
              label: "Exportar listado de pagos",
              description:
                "Haz clic en Exportar para generar un archivo con los pagos aprobados, útil para conciliación o reportes externos.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Días No Laborables",
          aResume: `El módulo de Días No Laborables permite registrar fechas en las que no se realiza actividad laboral dentro de la entidad. Sirve para:

Definir feriados, celebraciones nacionales o locales, y días de descanso institucional.

Evitar que se generen incidencias o cálculos erróneos en la nómina durante días no laborables.

Facilitar la planificación de jornadas, turnos y eventos, considerando las fechas de inactividad.

Mantener un calendario institucional claro y actualizado, alineado con la normativa vigente.`,
          pasos: [
            {
              label: "Acceder al módulo de Días No Laborables",
              description:
                "Desde el menú Configuración, selecciona la opción Días No Laborables para gestionar las fechas de inactividad laboral.",
            },
            {
              label: "Visualizar listado de días no laborables",
              description:
                "Se muestra una tabla con la fecha, descripción del motivo y estado activo de cada día registrado.",
            },
            {
              label: "Añadir un nuevo día no laborable",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar una nueva fecha de inactividad.",
            },
            {
              label: "Completar datos del día",
              description:
                "Introduce la fecha, la descripción del motivo (feriado, celebración, descanso) y marca si está activo.",
            },
            {
              label: "Modificar un día existente",
              description:
                "Selecciona un día del listado y haz clic en Modificar para editar sus atributos.",
            },
            {
              label: "Eliminar un día no laborable",
              description:
                "Selecciona el día y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del día, o en Cancelar para descartar.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Plant de Cargos",
      acciones: [
        {
          id: 1,
          aNombre: "Plantilla de Cargos",
          aResume: `El módulo de Plantilla de Cargos permite definir y gestionar los cargos oficiales autorizados dentro de la estructura organizativa. Sirve para:

Establecer cuántas plazas existen por cargo, unidad organizativa y categoría ocupacional.

Controlar la disponibilidad de plazas para asignación de personal.

Facilitar reportes de cobertura, vacantes y distribución de cargos por áreas.

Evitar sobreasignaciones o vacíos estructurales, al tener una plantilla oficial editable y trazable.`,
          pasos: [
            {
              label: "Acceder al módulo de Plantilla de Cargos",
              description:
                "Desde el menú Plantilla, selecciona la opción Plantilla de Cargos para gestionar la estructura de cargos autorizados.",
            },
            {
              label: "Visualizar la plantilla registrada",
              description:
                "Se muestra una tabla con los cargos existentes, cantidad de plazas, ocupadas, vacantes, unidad organizativa y categoría.",
            },
            {
              label: "Añadir un nuevo cargo a la plantilla",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo cargo en la plantilla.",
            },
            {
              label: "Completar datos del cargo",
              description:
                "Selecciona la unidad organizativa, el cargo, la categoría ocupacional y define la cantidad de plazas autorizadas.",
            },
            {
              label: "Modificar un registro existente",
              description:
                "Selecciona un cargo del listado y haz clic en Modificar para ajustar la cantidad de plazas u otros datos.",
            },
            {
              label: "Eliminar un cargo de la plantilla",
              description:
                "Selecciona el registro y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del cargo, o en Cancelar para descartar.",
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
          id: 1,
          aNombre: "Alta de Empleado",
          aResume: `El proceso de Alta de Empleado permite registrar oficialmente a un trabajador dentro del sistema ZUNhr. Sirve para:

Capturar toda la información personal, laboral y administrativa necesaria para incorporar al empleado.

Vincular al trabajador con su unidad organizativa, cargo, contrato, jornada y beneficios.

Facilitar la trazabilidad de movimientos de personal desde su ingreso.

Evitar omisiones o errores en la ficha del empleado, al seguir un flujo estructurado y validado.`,
          pasos: [
            {
              label: "Acceder al módulo de Empleados",
              description:
                "Desde el menú principal, selecciona la opción Empleados para gestionar el registro de personal en la entidad.",
            },
            {
              label: "Seleccionar la opción 'Alta de empleado'",
              description:
                "Haz clic en el botón Alta para iniciar el proceso de incorporación de un nuevo trabajador.",
            },
            {
              label: "Completar datos personales",
              description:
                "Introduce la información básica del empleado: nombre completo, sexo, fecha de nacimiento, número de identidad, estado civil y nacionalidad.",
            },
            {
              label: "Registrar datos laborales",
              description:
                "Selecciona la unidad organizativa, el cargo, la categoría ocupacional, tipo de contrato, jornada laboral y grupo de nómina correspondiente.",
            },
            {
              label: "Asignar datos administrativos",
              description:
                "Define la fecha de alta, motivo de alta, número de expediente, nivel educacional, organización de masa y licencia de conducción si aplica.",
            },
            {
              label: "Vincular al comedor y otros servicios",
              description:
                "Indica si el empleado utilizará el comedor institucional y otros beneficios disponibles.",
            },
            {
              label: "Guardar el registro del empleado",
              description:
                "Haz clic en Aceptar para confirmar el alta del empleado en el sistema, o en Cancelar para descartar los datos ingresados.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Modificar/Consultar Empleado",
          aResume: `El proceso de Modificar/Consultar Empleado permite acceder y actualizar la información registrada de un trabajador en el sistema ZUNhr. Sirve para:

Visualizar la ficha completa del empleado, incluyendo datos personales, laborales y administrativos.

Realizar ajustes en la información registrada, como cambios de cargo, unidad, contrato o beneficios.

Facilitar la trazabilidad de modificaciones en la historia laboral del trabajador.

Evitar inconsistencias o duplicaciones, al mantener la información actualizada y validada.`,
          pasos: [
            {
              label: "Acceder al módulo de Empleados",
              description:
                "Desde el menú principal, selecciona la opción Empleados para gestionar el registro de personal en la entidad.",
            },
            {
              label: "Buscar al empleado",
              description:
                "Utiliza los filtros disponibles (nombre, número de identidad, unidad organizativa, etc.) para localizar al trabajador.",
            },
            {
              label: "Seleccionar el empleado",
              description:
                "Haz clic sobre el registro del empleado para acceder a su ficha completa.",
            },
            {
              label: "Consultar la información registrada",
              description:
                "Revisa los datos personales, laborales, administrativos y de beneficios asociados al trabajador.",
            },
            {
              label: "Modificar los datos necesarios",
              description:
                "Haz clic en Modificar para habilitar los campos editables. Realiza los ajustes requeridos en la ficha del empleado.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la modificación, o en Cancelar para descartar los cambios realizados.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Baja de Empleado",
          aResume: `El proceso de Baja de Empleado permite registrar la desvinculación oficial de un trabajador en el sistema ZUNhr. Sirve para:

Documentar la salida del empleado por motivos administrativos, contractuales o personales.

Actualizar el estado del trabajador y liberar su plaza en la plantilla de cargos.

Facilitar reportes de rotación, egresos y análisis de causas de salida.

Evitar inconsistencias en la nómina y estructura organizativa, al mantener trazabilidad en los movimientos de personal.`,
          pasos: [
            {
              label: "Acceder al módulo de Empleados",
              description:
                "Desde el menú principal, selecciona la opción Empleados para gestionar el registro de personal en la entidad.",
            },
            {
              label: "Buscar al empleado que causará baja",
              description:
                "Utiliza los filtros disponibles para localizar al trabajador que será dado de baja.",
            },
            {
              label: "Seleccionar el empleado",
              description:
                "Haz clic sobre el registro del empleado para acceder a su ficha completa.",
            },
            {
              label: "Iniciar el proceso de baja",
              description:
                "Haz clic en el botón Baja para activar el formulario de desvinculación.",
            },
            {
              label: "Completar datos de la baja",
              description:
                "Introduce la fecha de baja, el motivo correspondiente (renuncia, jubilación, traslado, etc.) y observaciones si aplica.",
            },
            {
              label: "Confirmar la desvinculación",
              description:
                "Haz clic en Aceptar para registrar la baja del empleado, o en Cancelar para descartar el proceso.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Reubicación de Empleado",
          aResume: `El proceso de Reubicación de Empleado permite registrar el traslado de un trabajador de una unidad organizativa, cargo o categoría a otra dentro de la entidad. Sirve para:

Actualizar la ubicación funcional del empleado sin necesidad de darlo de baja y alta nuevamente.

Mantener la trazabilidad de los movimientos internos del personal.

Facilitar la gestión de promociones, rotaciones o ajustes organizativos.

Evitar inconsistencias en la plantilla y en la historia laboral, al registrar correctamente los cambios de ubicación.`,
          pasos: [
            {
              label: "Acceder al módulo de Empleados",
              description:
                "Desde el menú principal, selecciona la opción Empleados para gestionar el registro de personal.",
            },
            {
              label: "Buscar al empleado a reubicar",
              description:
                "Utiliza los filtros disponibles para localizar al trabajador que será trasladado.",
            },
            {
              label: "Seleccionar el empleado",
              description:
                "Haz clic sobre el registro del empleado para acceder a su ficha completa.",
            },
            {
              label: "Iniciar el proceso de reubicación",
              description:
                "Haz clic en el botón Reubicación para activar el formulario de traslado interno.",
            },
            {
              label: "Completar datos de la reubicación",
              description:
                "Selecciona la nueva unidad organizativa, cargo, categoría ocupacional y fecha de reubicación. Agrega observaciones si es necesario.",
            },
            {
              label: "Confirmar la reubicación",
              description:
                "Haz clic en Aceptar para registrar el cambio de ubicación del empleado, o en Cancelar para descartar el proceso.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Suspensión Temporal de Empleado",
          aResume: `El proceso de Suspensión Temporal permite registrar interrupciones justificadas en la relación laboral del trabajador sin que implique una baja definitiva. Sirve para:

Documentar ausencias prolongadas por causas como licencias sin sueldo, medidas disciplinarias o situaciones administrativas.

Preservar la relación laboral mientras se interrumpe temporalmente la actividad del empleado.

Facilitar el control de reincorporaciones y el seguimiento de períodos de suspensión.

Evitar errores en la nómina y en la plantilla activa, al reflejar correctamente el estatus temporal del trabajador.`,
          pasos: [
            {
              label: "Acceder al módulo de Empleados",
              description:
                "Desde el menú principal, selecciona la opción Empleados para gestionar el registro de personal.",
            },
            {
              label: "Buscar al empleado a suspender",
              description:
                "Utiliza los filtros disponibles para localizar al trabajador que será suspendido temporalmente.",
            },
            {
              label: "Seleccionar el empleado",
              description:
                "Haz clic sobre el registro del empleado para acceder a su ficha completa.",
            },
            {
              label: "Iniciar el proceso de suspensión",
              description:
                "Haz clic en el botón Suspensión para activar el formulario correspondiente.",
            },
            {
              label: "Completar datos de la suspensión",
              description:
                "Introduce la fecha de inicio, fecha de reincorporación estimada, motivo de la suspensión y observaciones si aplica.",
            },
            {
              label: "Confirmar la suspensión temporal",
              description:
                "Haz clic en Aceptar para registrar la suspensión, o en Cancelar para descartar el proceso.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Horas Reales de Trabajadores Jornaleros",
          aResume: `El módulo de Horas Reales de Trabajadores Jornaleros permite registrar las horas efectivamente trabajadas por personal contratado bajo modalidad jornalera. Sirve para:

Controlar con precisión la jornada laboral de empleados que no tienen horario fijo ni mensualidad establecida.

Facilitar el cálculo de pagos por horas trabajadas, según tarifa y condiciones contractuales.

Generar reportes de productividad, asistencia y cumplimiento por jornada.

Evitar errores en la nómina y en el control de tiempo, al tener un registro detallado y validado de las horas reales.`,
          pasos: [
            {
              label: "Acceder al módulo de Horas Reales",
              description:
                "Desde el menú Jornaleros, selecciona la opción Horas Reales para gestionar el registro de tiempo trabajado.",
            },
            {
              label: "Seleccionar el trabajador jornalero",
              description:
                "Utiliza los filtros disponibles para localizar al empleado por nombre, número de identidad o unidad organizativa.",
            },
            {
              label: "Registrar las horas trabajadas",
              description:
                "Introduce la fecha, cantidad de horas reales trabajadas y observaciones si aplica.",
            },
            {
              label: "Validar los datos ingresados",
              description:
                "Verifica que la información registrada sea coherente con el contrato y condiciones del trabajador.",
            },
            {
              label: "Guardar el registro de horas",
              description:
                "Haz clic en Aceptar para confirmar el registro de horas reales, o en Cancelar para descartar los datos ingresados.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Horarios de Empleados",
          aResume: `El módulo de Horarios de Empleados permite asignar y gestionar los turnos laborales de cada trabajador según su jornada. Sirve para:

Definir el horario específico de entrada y salida por empleado, incluyendo días de la semana y tipo de jornada.

Controlar la asistencia y cumplimiento de horarios en función de lo asignado.

Facilitar el cálculo de incidencias, horas trabajadas y validación de nómina.

Evitar conflictos operativos y errores administrativos, al tener un registro claro y personalizado de los horarios.`,
          pasos: [
            {
              label: "Acceder al módulo de Horarios de Empleados",
              description:
                "Desde el menú Jornales o Configuración, selecciona la opción Horarios de Empleados para gestionar los turnos asignados.",
            },
            {
              label: "Seleccionar el empleado",
              description:
                "Utiliza los filtros disponibles para localizar al trabajador por nombre, número de identidad o unidad organizativa.",
            },
            {
              label: "Asignar nuevo horario",
              description:
                "Haz clic en Añadir para definir un nuevo horario de trabajo para el empleado seleccionado.",
            },
            {
              label: "Completar datos del horario",
              description:
                "Selecciona los días de la semana, hora de entrada, hora de salida, tipo de jornada (completa, parcial, nocturna, etc.) y fecha de inicio.",
            },
            {
              label: "Modificar horario existente",
              description:
                "Selecciona un horario previamente asignado y haz clic en Modificar para ajustar los parámetros.",
            },
            {
              label: "Eliminar un horario",
              description:
                "Selecciona el horario y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la asignación o modificación del horario, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Tarjetas de Incidencias",
          aResume: `El módulo de Tarjetas de Incidencias permite registrar y visualizar las incidencias laborales que afectan la jornada de los empleados. Sirve para:

Documentar ausencias, licencias, interrupciones y otros eventos que impactan el tiempo trabajado.

Controlar la afectación de cada incidencia en el cálculo de la nómina y en el historial del trabajador.

Facilitar reportes por tipo de incidencia, frecuencia y distribución por unidad organizativa.

Evitar errores administrativos, al tener un registro estructurado y validado de cada evento laboral.`,
          pasos: [
            {
              label: "Acceder al módulo de Tarjetas de Incidencias",
              description:
                "Desde el menú Incidencias, selecciona la opción Tarjetas de Incidencias para gestionar los eventos laborales registrados.",
            },
            {
              label: "Seleccionar el empleado",
              description:
                "Utiliza los filtros disponibles para localizar al trabajador por nombre, número de identidad o unidad organizativa.",
            },
            {
              label: "Visualizar tarjeta de incidencias",
              description:
                "Se muestra una tabla con las incidencias registradas, incluyendo fecha, tipo, duración y observaciones.",
            },
            {
              label: "Añadir una nueva incidencia",
              description:
                "Haz clic en Añadir para registrar un nuevo evento laboral que afecte la jornada del empleado.",
            },
            {
              label: "Completar datos de la incidencia",
              description:
                "Selecciona el tipo de incidencia, fecha de inicio, fecha de fin, cantidad de días u horas afectadas y observaciones si aplica.",
            },
            {
              label: "Modificar una incidencia existente",
              description:
                "Selecciona una incidencia del listado y haz clic en Modificar para ajustar los datos registrados.",
            },
            {
              label: "Eliminar una incidencia",
              description:
                "Selecciona el evento y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación de la incidencia, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Cargar Incidencias del Reloj",
          aResume: `El módulo Cargar Incidencias del Reloj permite importar automáticamente las incidencias registradas por el sistema de control horario. Sirve para:

Integrar los datos capturados por relojes biométricos o digitales en el sistema ZUNhr.

Registrar ausencias, retardos, entradas y salidas según la lectura del reloj.

Facilitar el procesamiento de nómina y validación de asistencia sin intervención manual.

Evitar errores de digitación y omisiones, al automatizar la carga de eventos laborales.`,
          pasos: [
            {
              label: "Acceder al módulo Cargar Incidencias del Reloj",
              description:
                "Desde el menú Incidencias, selecciona la opción Cargar Incidencias del Reloj para iniciar el proceso de importación.",
            },
            {
              label: "Seleccionar el archivo de lectura del reloj",
              description:
                "Haz clic en Examinar para localizar el archivo generado por el sistema de control horario (formato compatible).",
            },
            {
              label: "Verificar la estructura del archivo",
              description:
                "Confirma que el archivo contiene los campos requeridos: número de identidad, fecha, hora, tipo de evento.",
            },
            {
              label: "Ejecutar la carga de incidencias",
              description:
                "Haz clic en Cargar para importar los eventos al sistema. Se mostrará un resumen de registros procesados.",
            },
            {
              label: "Revisar y validar las incidencias importadas",
              description:
                "Accede a Tarjetas de Incidencias para verificar que los eventos se hayan registrado correctamente.",
            },
            {
              label: "Resolver errores o inconsistencias",
              description:
                "Si se detectan errores en la carga, revisa el archivo fuente o ajusta los parámetros antes de volver a importar.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sNombre: "Reloj",
      acciones: [
        {
          id: 1,
          aNombre: "Gestionar Usuarios",
          aResume: `El módulo Gestionar Usuarios permite administrar los accesos al sistema ZUNhr, asignando roles, credenciales y permisos a cada usuario. Sirve para:

Registrar nuevos usuarios con sus datos de identificación y perfil de acceso.

Modificar roles, contraseñas y permisos según la función que desempeñan en la organización.

Controlar el acceso a módulos específicos, garantizando seguridad y trazabilidad en el uso del sistema.

Evitar accesos no autorizados o inconsistencias operativas, al mantener una estructura clara y validada de usuarios.`,
          pasos: [
            {
              label: "Acceder al módulo Gestionar Usuarios",
              description:
                "Desde el menú Configuración, selecciona la opción Usuarios para administrar los accesos al sistema.",
            },
            {
              label: "Visualizar listado de usuarios registrados",
              description:
                "Se muestra una tabla con nombre de usuario, rol asignado, estado activo/inactivo y fecha de creación.",
            },
            {
              label: "Añadir un nuevo usuario",
              description:
                "Haz clic en Añadir para activar el formulario inferior y registrar un nuevo usuario en el sistema.",
            },
            {
              label: "Completar datos del usuario",
              description:
                "Introduce el nombre de usuario, contraseña, nombre completo, correo electrónico y rol de acceso (administrador, operador, consulta, etc.).",
            },
            {
              label: "Asignar permisos específicos",
              description:
                "Define los módulos o funcionalidades a los que tendrá acceso el usuario, según su rol.",
            },
            {
              label: "Modificar un usuario existente",
              description:
                "Selecciona un usuario del listado y haz clic en Modificar para ajustar sus datos o permisos.",
            },
            {
              label: "Eliminar un usuario",
              description:
                "Selecciona el usuario y haz clic en Eliminar. El sistema pedirá confirmación antes de borrarlo.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para confirmar la adición o modificación del usuario, o en Cancelar para descartar.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Actualizar Datos del Reloj",
          aResume: `El módulo Actualizar Datos del Reloj permite sincronizar la información de empleados con el sistema de control horario. Sirve para:

Actualizar los datos de identificación y parámetros de marcación en los relojes biométricos o digitales.

Garantizar que los trabajadores puedan registrar correctamente sus entradas y salidas.

Facilitar la integración entre el sistema ZUNhr y los dispositivos de control de asistencia.

Evitar errores de lectura, duplicaciones o bloqueos por datos desactualizados.`,
          pasos: [
            {
              label: "Acceder al módulo Actualizar Datos del Reloj",
              description:
                "Desde el menú Incidencias o Configuración, selecciona la opción Actualizar Datos del Reloj para iniciar el proceso.",
            },
            {
              label: "Seleccionar los empleados a actualizar",
              description:
                "Utiliza los filtros disponibles para localizar a los trabajadores por unidad organizativa, cargo o número de identidad.",
            },
            {
              label: "Verificar datos de marcación",
              description:
                "Confirma que cada empleado tenga asignado un código de marcación, nombre correcto y estado activo.",
            },
            {
              label: "Ejecutar la actualización",
              description:
                "Haz clic en Actualizar para enviar los datos al sistema de relojes. Se mostrará un resumen de registros procesados.",
            },
            {
              label: "Confirmar sincronización",
              description:
                "Verifica que los datos hayan sido transmitidos correctamente al dispositivo de control horario.",
            },
            {
              label: "Resolver errores si aplica",
              description:
                "Si se detectan inconsistencias, revisa los datos del empleado o la configuración del reloj antes de repetir el proceso.",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      sNombre: "Reportes",
      acciones: [
        {
          id: 12,
          aNombre: "Reportes",
          aResume: `El módulo Reportes permite generar, visualizar e imprimir informes relacionados con la gestión de recursos humanos y nómina. Sirve para:

Obtener listados detallados de empleados, cargos, incidencias, jornadas, movimientos y estructura organizativa.

Filtrar y ordenar la información según parámetros específicos como unidad organizativa, fechas, tipo de evento o estado laboral.

Facilitar auditorías internas, análisis de cobertura, control de asistencia y planificación estratégica.

Evitar errores en la toma de decisiones, al contar con reportes confiables y actualizados.`,
          pasos: [
            {
              label: "Acceder al módulo Reportes",
              description:
                "Desde el menú principal, selecciona la opción Reportes para ingresar al generador de informes.",
            },
            {
              label: "Seleccionar el tipo de reporte",
              description:
                "Elige entre las categorías disponibles: empleados, cargos, incidencias, jornadas, estructura organizativa, entre otros.",
            },
            {
              label: "Definir los parámetros del reporte",
              description:
                "Establece filtros como unidad organizativa, fechas, estado del empleado, tipo de incidencia o jornada.",
            },
            {
              label: "Visualizar el reporte en pantalla",
              description:
                "Haz clic en Visualizar para generar el informe según los criterios seleccionados.",
            },
            {
              label: "Imprimir o exportar el reporte",
              description:
                "Utiliza las opciones disponibles para imprimir el reporte o exportarlo en formato PDF o Excel.",
            },
            {
              label: "Guardar configuración de reporte (opcional)",
              description:
                "Puedes guardar los parámetros utilizados para reutilizarlos en futuras consultas.",
            },
          ],
        },
      ],
    },
  ],
};

// Aplicar cargos a todas las acciones
export const zunhr = addCargosToModule(zunhrBase);
