import { addCargosToModule } from "../helpers/cargoHelper";

export const zunaftBase = {
  mNombre: "ZUNAft Activos Fijos",
  mImage: "/acc",
  mResumen: `ZUNaft es una herramienta especializada para la gestión integral de activos fijos tangibles (AFT)
   dentro de instituciones públicas. Su propósito principal es garantizar que cada activo —desde computadoras
    hasta vehículos— esté correctamente registrado, valorado, trazado y controlado tanto técnica como contablemente.`,
  mSecciones: [
    {
      id: 2,
      sNombre: "Botones",
      acciones: [
        {
          id: 1,
          aNombre: "Botones de la Aplicación",
          aResumen: `Esta sección describe la funcionalidad de los botones comunes en las pantallas del sistema ZUNaft. Sirve para:

Facilitar la interacción del usuario con los formularios y registros del sistema.

Estandarizar las acciones básicas como agregar, modificar, eliminar, imprimir o cancelar movimientos.

Evitar errores operativos al comprender el propósito de cada botón en la interfaz.`,
          pasos: [
            {
              label: "Adicionar",
              description:
                "Permite agregar un nuevo registro en la pantalla activa.",
            },
            {
              label: "Eliminar",
              description: "Borra el registro seleccionado de la lista.",
            },
            {
              label: "Refrescar",
              description:
                "Actualiza los controles que dependen de otras pantallas sin necesidad de cerrarlas.",
            },
            {
              label: "Modificar",
              description:
                "Permite editar el registro seleccionado si no tiene movimientos asociados.",
            },
            {
              label: "Aceptar",
              description:
                "Confirma la operación realizada y guarda los cambios.",
            },
            {
              label: "Cancelar Mov",
              description:
                "Cancela un movimiento en curso y revierte los cambios.",
            },
            {
              label: "Imprimir",
              description: `Permite imprimir un listado seleccionado. Para hacerlo:
1. Selecciona una o varias filas (usando Shift o Ctrl).
2. Haz clic en Aceptar o Imprimir.
3. Selecciona la impresora.
4. Confirma la impresión.
5. Cierra el reporte al finalizar.`,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Clasificadores",
      acciones: [
        {
          id: 2,
          aNombre: "Centros de costo",
          aResumen: `Este módulo permite definir los centros de costo de la entidad,
           asociarles cuentas contables específicas y establecer el tipo de control de inventario
            (modular, manual o automático). Es clave para organizar la estructura contable y operativa
             de los activos fijos tangibles, y para garantizar que cada medio esté correctamente
              vinculado a su centro de responsabilidad.`,
          pasos: [
            {
              label: "Acceder al clasificador de centros de costo",
              description:
                "Desde el menú Clasificadores, selecciona la opción Centro de Costo para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Visualizar centros de costo existentes",
              description:
                "En la pestaña General se muestran los códigos, descripciones y tipo de control de inventario de cada centro.",
            },
            {
              label: "Adicionar un nuevo centro de costo",
              description:
                "Haz clic en Adicionar, introduce el código, descripción, cuentas asociadas y selecciona el tipo de control de inventario. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un centro de costo existente",
              description:
                "Selecciona el centro desde la pantalla general, haz clic en Modificar y ajusta los campos permitidos. No se puede cambiar el tipo de control si ya tiene medios asociados.",
            },
            {
              label: "Eliminar un centro de costo",
              description:
                "Selecciona el registro y haz clic en Eliminar. Solo se podrá eliminar si no tiene medios vinculados.",
            },
            {
              label: "Imprimir listado de centros de costo",
              description:
                "Haz clic en Imprimir para generar un reporte con los centros visibles en pantalla.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Cuentas",
          aResumen: `Este módulo permite registrar y administrar las cuentas contables
           que se utilizarán en los movimientos de activos fijos tangibles. Cada cuenta 
           se define con su número, descripción, moneda, tipo y departamento asociado. 
           Es esencial para garantizar la correcta imputación contable de operaciones y 
           mantener una estructura financiera organizada y trazable.`,
          pasos: [
            {
              label: "Acceder al clasificador de cuentas",
              description:
                "Desde el menú Clasificadores, selecciona la opción Cuentas para visualizar y gestionar las cuentas registradas.",
            },
            {
              label: "Visualizar cuentas existentes",
              description:
                "En la pestaña General se muestran todas las cuentas con su número, descripción, moneda, tipo de cuenta y departamento asociado.",
            },
            {
              label: "Adicionar una nueva cuenta",
              description:
                "Haz clic en Adicionar, introduce el número de cuenta, descripción, moneda, tipo de cuenta y departamento si aplica. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar una cuenta existente",
              description:
                "Selecciona una cuenta sin movimientos asociados, haz clic en Modificar y ajusta los campos permitidos. Guarda los cambios con Aceptar.",
            },
            {
              label: "Eliminar una cuenta",
              description:
                "Selecciona la cuenta y haz clic en Eliminar. Solo se podrán eliminar cuentas sin movimientos relacionados.",
            },
            {
              label: "Imprimir listado de cuentas",
              description:
                "Haz clic en Imprimir para generar un reporte con las cuentas visibles en la pantalla.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Clasificador de Centro de Costo",
          aResumen: `Este módulo permite definir los centros de costo de la entidad, asociarles cuentas contables específicas y establecer el tipo de control de inventario. Sirve para:

Organizar la estructura contable y operativa de los activos fijos tangibles (AFT).

Asignar cuentas de gasto de depreciación y valor residual por centro de costo.

Determinar el método de control de inventario: modular, introducción manual o generación automática.

Evitar errores en la asignación de medios, garantizando trazabilidad y consistencia contable.`,
          pasos: [
            {
              label: "Acceder al clasificador de centros de costo",
              description:
                "Desde el menú Clasificadores, selecciona la opción Centro de Costo para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Visualizar centros de costo existentes",
              description:
                "En la pestaña General se muestran los códigos, descripciones y tipo de control de inventario de cada centro.",
            },
            {
              label: "Adicionar un nuevo centro de costo",
              description:
                "Haz clic en Adicionar, introduce el código, descripción, cuentas asociadas y selecciona el tipo de control de inventario. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un centro de costo existente",
              description:
                "Selecciona el centro desde la pantalla general, haz clic en Modificar y ajusta los campos permitidos. No se puede cambiar el tipo de control si ya tiene medios asociados.",
            },
            {
              label: "Eliminar un centro de costo",
              description:
                "Selecciona el registro y haz clic en Eliminar. Solo se podrá eliminar si no tiene medios vinculados.",
            },
            {
              label: "Imprimir listado de centros de costo",
              description:
                "Haz clic en Imprimir para generar un reporte con los centros visibles en pantalla.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Genérico/Descripción del AFT",
          aResumen: `Este módulo permite definir los genéricos de activos fijos tangibles (AFT), asociarles cuentas contables y tasas de depreciación, y generar automáticamente los submayores vinculados. Sirve para:

Establecer la clasificación base de los medios por tipo genérico.

Asociar cuentas en moneda nacional (MN) y divisa (DIV), así como tasas de depreciación correspondientes.

Generar submayores consecutivos para cada medio, facilitando su trazabilidad contable y operativa.

Evitar errores en la asignación de medios al mantener una estructura jerárquica clara y automatizada.`,
          pasos: [
            {
              label: "Acceder al clasificador de genéricos",
              description:
                "Desde el menú Clasificadores, selecciona la opción Genérico/Descripción del AFT para visualizar y gestionar los registros.",
            },
            {
              label: "Visualizar genéricos existentes",
              description:
                "En la pestaña General se muestran los códigos de genérico, descripción, cuentas en MN y DIV, y tasas asociadas.",
            },
            {
              label: "Adicionar un nuevo genérico",
              description:
                "Haz clic en Adicionar, introduce el código, descripción, cuentas en MN y DIV, tasas de depreciación en MN y DIV. Luego haz clic en Aceptar.",
            },
            {
              label: "Generar submayores automáticamente",
              description:
                "Al registrar un medio, el sistema asigna un número de submayor consecutivo basado en el código del genérico.",
            },
            {
              label: "Modificar un genérico existente",
              description:
                "Selecciona el genérico, haz clic en Modificar y ajusta los campos permitidos. Puedes eliminar submayores con la tecla Delete.",
            },
            {
              label: "Configurar depreciación por kilómetros recorridos",
              description:
                "Para medios de transporte, marca la opción correspondiente si aplica. Solo algunas entidades utilizan esta variante.",
            },
            {
              label: "Actualizar datos del submayor",
              description:
                "Haz clic en Actualizar Datos para asociar el CNMB y otros atributos requeridos por modelos oficiales.",
            },
            {
              label: "Imprimir listado de genéricos",
              description:
                "Haz clic en Imprimir para generar un reporte con los genéricos y submayores visibles en pantalla.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Clasificador de Áreas y Subáreas",
          aResumen: `Este módulo permite definir las áreas y subáreas de cada centro de costo, incluyendo sus responsables. Sirve para:

Organizar la estructura operativa de la entidad por zonas funcionales.

Asignar responsables a cada área o subárea, facilitando el control y la trazabilidad de los activos.

Vincular cada área a su centro de costo correspondiente, asegurando coherencia en la gestión contable y operativa.

Evitar ambigüedades en la asignación de medios al mantener una jerarquía clara de ubicación y responsabilidad.`,
          pasos: [
            {
              label: "Acceder al clasificador de áreas y subáreas",
              description:
                "Desde el menú Clasificadores, selecciona la opción Áreas y Subáreas para visualizar y gestionar los registros.",
            },
            {
              label: "Visualizar áreas existentes",
              description:
                "En la pestaña General se muestran las áreas con su nombre, responsable y centro de costo asociado.",
            },
            {
              label: "Adicionar una nueva área",
              description:
                "Haz clic en Adicionar, selecciona el centro de costo, introduce el nombre del área y el responsable. Luego haz clic en Aceptar.",
            },
            {
              label: "Adicionar subáreas",
              description:
                "Si el área tiene subáreas, introduce el nombre y responsable de cada una en la sección correspondiente.",
            },
            {
              label: "Modificar un área o subárea existente",
              description:
                "Selecciona el área o subárea, haz clic en Modificar y ajusta los campos permitidos. Confirma con Aceptar.",
            },
            {
              label: "Eliminar una subárea",
              description:
                "Selecciona el área, haz clic en Modificar, selecciona la subárea y elimínala con la tecla Delete.",
            },
            {
              label: "Imprimir listado de áreas y subáreas",
              description:
                "Haz clic en Imprimir para generar un reporte con las áreas y subáreas visibles en pantalla.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Datos Generales de la Entidad",
          aResumen: `Este módulo permite definir y visualizar la información institucional básica de la entidad que opera el sistema. Sirve para:

Registrar el código, nombre, dirección, provincia, corporación y compañía de la entidad.

Configurar las cuentas contables que se utilizarán por centro de costo para cada tipo de movimiento.

Establecer las plantillas predeterminadas para los comprobantes contables según el tipo de operación.

Evitar inconsistencias contables al mantener una configuración centralizada y validada de los datos institucionales.`,
          pasos: [
            {
              label: "Acceder a Datos Generales de la Entidad",
              description:
                "Desde el menú principal, selecciona la opción Datos Generales para visualizar y configurar la información institucional.",
            },
            {
              label: "Visualizar datos existentes",
              description:
                "Se muestran el código, nombre, dirección, provincia, corporación y compañía. El nombre no puede modificarse.",
            },
            {
              label: "Configurar cuentas por centro de costo",
              description:
                "Marca las cuentas que se utilizarán por centro de costo: AFT, depreciación, gasto, valor residual, sobrante y faltante.",
            },
            {
              label: "Asignar plantillas de comprobantes",
              description:
                "Para cada tipo de movimiento (altas, bajas, ajustes, etc.), selecciona la plantilla contable predeterminada que se aplicará.",
            },
            {
              label: "Modificar datos permitidos",
              description:
                "Haz clic en Modificar para ajustar campos editables como dirección, provincia, corporación o compañía. Confirma con Aceptar.",
            },
            {
              label: "Cerrar la configuración",
              description:
                "Haz clic en Cerrar para salir del módulo una vez completada la configuración.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Inventario (Apertura y Cierre)",
          aResumen: `Este módulo permite gestionar el inventario físico de los activos fijos tangibles (AFT), incluyendo su apertura inicial y cierre. Sirve para:

Registrar el estado físico inicial de los activos en la entidad, como punto de partida para su control.

Cerrar el inventario una vez completado, consolidando la información registrada y bloqueando modificaciones.

Garantizar la trazabilidad y consistencia entre el inventario físico y los registros contables.

Evitar desajustes operativos al establecer un ciclo claro de apertura y cierre del inventario.`,
          pasos: [
            {
              label: "Acceder al módulo de Inventario",
              description:
                "Desde el menú Clasificadores, selecciona la opción Inventario para gestionar la apertura y cierre del inventario físico.",
            },
            {
              label: "Apertura del Inventario Físico Inicial",
              description:
                "Haz clic en Apertura, registra los medios físicos existentes, valida sus datos y confirma para establecer el inventario base.",
            },
            {
              label: "Verificar medios registrados",
              description:
                "Revisa que todos los activos estén correctamente ingresados con sus datos completos antes de cerrar el inventario.",
            },
            {
              label: "Cierre de Inventario",
              description:
                "Haz clic en Cierre, confirma que no hay inconsistencias y bloquea el inventario para evitar modificaciones posteriores.",
            },
            {
              label: "Imprimir reporte de inventario",
              description:
                "Haz clic en Imprimir para generar un listado de los activos registrados durante el proceso de inventario.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Subgrupos y CNMB",
          aResumen: `Este módulo permite clasificar los activos fijos tangibles (AFT) en subgrupos y asociarlos con códigos del CNMB (Clasificador Nacional de Bienes). Sirve para:

Organizar los activos en subconjuntos más específicos dentro de cada genérico.

Asociar cada subgrupo con su correspondiente código CNMB, cumpliendo con las normativas nacionales.

Facilitar la generación de reportes y modelos oficiales exigidos por el Ministerio de Finanzas y Precios.

Evitar errores de clasificación y asegurar la trazabilidad normativa de los activos.`,
          pasos: [
            {
              label: "Acceder al módulo de Subgrupos y CNMB",
              description:
                "Desde el menú Clasificadores, selecciona la opción Subgrupos y CNMB para gestionar la clasificación detallada de los activos.",
            },
            {
              label: "Visualizar subgrupos existentes",
              description:
                "En la pantalla principal se muestran los subgrupos definidos con sus descripciones y códigos CNMB asociados.",
            },
            {
              label: "Adicionar un nuevo subgrupo",
              description:
                "Haz clic en Adicionar, introduce el código del subgrupo, su descripción y el código CNMB correspondiente. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un subgrupo existente",
              description:
                "Selecciona el subgrupo desde la lista, haz clic en Modificar y ajusta los campos permitidos. Guarda los cambios con Aceptar.",
            },
            {
              label: "Eliminar un subgrupo",
              description:
                "Selecciona el subgrupo y haz clic en Eliminar. Solo se podrá eliminar si no está asociado a medios registrados.",
            },
            {
              label: "Imprimir listado de subgrupos",
              description:
                "Haz clic en Imprimir para generar un reporte con los subgrupos y sus códigos CNMB.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Parametrización de Comprobantes",
          aResumen: `Este módulo permite definir las plantillas contables predeterminadas que se aplicarán a cada tipo de movimiento de activos fijos tangibles (AFT). Sirve para:

Establecer reglas contables automatizadas para operaciones como altas, bajas, ajustes y traspasos.

Asignar cuentas específicas según el tipo de movimiento, garantizando coherencia contable y cumplimiento normativo.

Facilitar la generación automática de comprobantes contables en el sistema.

Evitar errores de imputación al mantener una configuración clara y centralizada de las plantillas contables.`,
          pasos: [
            {
              label: "Acceder a la parametrización de comprobantes",
              description:
                "Desde el menú Clasificadores, selecciona la opción Parametrización de Comprobantes para visualizar y configurar las plantillas contables.",
            },
            {
              label: "Visualizar plantillas existentes",
              description:
                "Se muestran los tipos de movimiento junto con la plantilla contable predeterminada asignada a cada uno.",
            },
            {
              label: "Asignar plantilla a tipo de movimiento",
              description:
                "Selecciona el tipo de movimiento (ej. Alta por Compra, Baja por Retiro) y elige la plantilla contable que se aplicará automáticamente.",
            },
            {
              label: "Modificar plantilla asignada",
              description:
                "Haz clic en Modificar para cambiar la plantilla contable de un tipo de movimiento. Confirma los cambios con Aceptar.",
            },
            {
              label: "Validar configuración contable",
              description:
                "Revisa que cada tipo de movimiento tenga una plantilla asignada coherente con las cuentas definidas en la entidad.",
            },
            {
              label: "Cerrar la configuración",
              description:
                "Haz clic en Cerrar para salir del módulo una vez completada la parametrización.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      sNombre: "Acceso",
      acciones: [
        {
          id: 10,
          aNombre: "Gestión de Usuarios",
          aResumen: `Este módulo permite administrar los usuarios que acceden al sistema ZUNaft, asignarles roles y controlar sus permisos. Sirve para:

Registrar nuevos usuarios con credenciales y roles específicos según sus funciones.

Asignar niveles de acceso a cada módulo del sistema, garantizando seguridad y control operativo.

Modificar o eliminar usuarios según cambios organizativos o de personal.

Evitar accesos no autorizados y mantener la trazabilidad de las acciones realizadas en el sistema.`,
          pasos: [
            {
              label: "Acceder al módulo de Usuarios",
              description:
                "Desde el menú principal, selecciona la opción Usuarios para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Visualizar usuarios registrados",
              description:
                "En la pantalla principal se muestran los nombres de usuario, roles asignados y estado de acceso.",
            },
            {
              label: "Adicionar un nuevo usuario",
              description:
                "Haz clic en Adicionar, introduce el nombre de usuario, contraseña, rol y módulos a los que tendrá acceso. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un usuario existente",
              description:
                "Selecciona el usuario, haz clic en Modificar y ajusta los campos permitidos como contraseña, rol o permisos. Confirma con Aceptar.",
            },
            {
              label: "Eliminar un usuario",
              description:
                "Selecciona el usuario y haz clic en Eliminar. Solo se podrá eliminar si no tiene operaciones pendientes o bloqueos activos.",
            },
            {
              label: "Imprimir listado de usuarios",
              description:
                "Haz clic en Imprimir para generar un reporte con los usuarios visibles en pantalla.",
            },
          ],
        },
        {
          id: 1,
          aNombre: "Reinicio del Sistema",
          aResumen: `Este módulo permite reiniciar la base de datos del sistema ZUNaft, eliminando todos los registros operativos y dejando únicamente la estructura contable y clasificadores. Sirve para:

Realizar una limpieza total del sistema en caso de errores graves, cambios institucionales o reconfiguración completa.

Eliminar todos los medios, movimientos, comprobantes y registros asociados a operaciones previas.

Conservar los clasificadores contables, genéricos, tasas, centros de costo y usuarios para facilitar la reconfiguración.

Evitar inconsistencias futuras al garantizar un punto de partida limpio y estructurado.`,
          pasos: [
            {
              label: "Acceder al módulo de Reinicio",
              description:
                "Desde el menú principal, selecciona la opción Reinicio del Sistema para iniciar el proceso de limpieza.",
            },
            {
              label: "Confirmar intención de reinicio",
              description:
                "Lee cuidadosamente la advertencia. El sistema eliminará todos los datos operativos y no podrá revertirse.",
            },
            {
              label: "Ejecutar el reinicio",
              description:
                "Haz clic en Aceptar para confirmar. El sistema eliminará medios, movimientos, comprobantes y registros operativos.",
            },
            {
              label: "Verificar estructura preservada",
              description:
                "Una vez reiniciado, revisa que los clasificadores y estructura contable permanezcan intactos para comenzar la reconfiguración.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sNombre: "Altas",
      acciones: [
        {
          id: 2,
          aNombre: "Alta por Compra",
          aResumen: `Este módulo permite registrar la incorporación de activos fijos tangibles (AFT) adquiridos mediante compra. Sirve para:

Registrar medios adquiridos por la entidad, incluyendo datos contables, físicos y administrativos.

Asignar el medio a su centro de costo, área, subárea y responsable correspondiente.

Generar automáticamente el comprobante contable asociado a la operación de alta.

Evitar omisiones en el inventario y garantizar la trazabilidad contable de los activos comprados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Compra",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Compra para iniciar el registro de nuevos medios.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor, fecha de alta, proveedor y número de factura.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de compra.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Alta por Donación",
          aResumen: `Este módulo permite registrar la incorporación de activos fijos tangibles (AFT) recibidos mediante donación. Sirve para:

Registrar medios donados por otras entidades, incluyendo sus datos físicos, contables y administrativos.

Asignar el medio a su centro de costo, área, subárea y responsable correspondiente.

Generar automáticamente el comprobante contable asociado a la operación de alta por donación.

Evitar omisiones en el inventario y garantizar la trazabilidad contable de los activos donados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Donación",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Donación para iniciar el registro de medios recibidos.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y entidad donante.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de donación.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Alta por Transferencia",
          aResumen: `Este módulo permite registrar la incorporación de activos fijos tangibles (AFT) recibidos mediante transferencia desde otra entidad. Sirve para:

Registrar medios transferidos con sus datos físicos, contables y administrativos, incluyendo origen y destino.

Asignar el medio a su centro de costo, área, subárea y responsable correspondiente.

Generar automáticamente el comprobante contable asociado a la operación de alta por transferencia.

Evitar inconsistencias en el inventario y garantizar la trazabilidad contable de los activos recibidos.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Transferencia",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Transferencia para iniciar el registro de medios recibidos.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor, fecha de alta, entidad origen y número de documento de transferencia.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de transferencia.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Alta por Ajuste",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que no estaban previamente en el sistema y se incorporan por ajuste contable. Sirve para:

Regularizar medios que existen físicamente pero no están registrados en el sistema.

Asignarles datos contables, físicos y administrativos para integrarlos al inventario oficial.

Generar el comprobante contable correspondiente a la operación de ajuste.

Evitar omisiones en el control patrimonial y garantizar la coherencia entre inventario físico y contable.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Ajuste",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Ajuste para iniciar el registro de medios omitidos.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y motivo del ajuste.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de ajuste.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Alta por Producción Propia",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que han sido producidos por la propia entidad, ya sea mediante fabricación interna o transformación de otros bienes. Sirve para:

Incorporar medios generados por la entidad sin necesidad de compra o donación externa.

Registrar los datos físicos, contables y administrativos del medio producido.

Generar el comprobante contable correspondiente a la operación de alta por producción propia.

Evitar omisiones en el inventario y garantizar la trazabilidad de los activos generados internamente.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Producción Propia",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Producción Propia para iniciar el registro del medio generado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y descripción del proceso productivo.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de producción propia.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Alta por Revalorización",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que han sido revalorizados y deben incorporarse al sistema con su nuevo valor. Sirve para:

Incorporar medios que han sido objeto de una revalorización contable, ya sea por actualización de precios o ajustes técnicos.

Registrar el nuevo valor del activo, manteniendo su trazabilidad y estructura contable.

Generar el comprobante contable correspondiente a la operación de revalorización.

Evitar inconsistencias entre el valor contable y el valor real de los activos.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Revalorización",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Revalorización para iniciar el registro del medio revalorizado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor actualizado, fecha de alta y motivo de la revalorización.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de revalorización.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Alta por Sobrante",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que aparecen como sobrantes durante procesos de verificación o inventario. Sirve para:

Incorporar medios que no estaban registrados pero se detectan físicamente en la entidad.

Registrar sus datos contables, físicos y administrativos para integrarlos al sistema.

Generar el comprobante contable correspondiente a la operación de alta por sobrante.

Evitar pérdidas de control patrimonial y asegurar la trazabilidad de los activos detectados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Sobrante",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Sobrante para iniciar el registro del medio detectado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y observaciones del hallazgo.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de sobrante.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Alta por Cambio de Estado",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que cambian de condición operativa y deben ser incorporados nuevamente al sistema. Sirve para:

Registrar medios que estaban dados de baja, en reparación o fuera de servicio y ahora se reincorporan como activos operativos.

Actualizar sus datos físicos, contables y administrativos según el nuevo estado.

Generar el comprobante contable correspondiente a la operación de alta por cambio de estado.

Evitar inconsistencias en el inventario y garantizar la trazabilidad de los activos reincorporados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Cambio de Estado",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Cambio de Estado para iniciar el registro del medio reincorporado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor actualizado, fecha de alta y motivo del cambio de estado.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación por cambio de estado.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Préstamo Recibido",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que son recibidos en calidad de préstamo desde otra entidad. Sirve para:

Controlar medios que no pertenecen a la entidad pero están bajo su responsabilidad operativa.

Registrar los datos físicos, administrativos y contables del medio prestado, sin afectar la propiedad.

Generar el comprobante contable correspondiente a la operación de préstamo recibido.

Evitar confusiones patrimoniales y garantizar la trazabilidad de los activos prestados.`,
          pasos: [
            {
              label: "Acceder al módulo Préstamo Recibido",
              description:
                "Desde el menú Operaciones, selecciona la opción Préstamo Recibido para iniciar el registro del medio recibido.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor referencial, fecha de recepción y entidad prestadora.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas estén correctamente asignadas para reflejar el uso sin alterar la propiedad.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de préstamo",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de préstamo recibido.",
            },
          ],
        },
        {
          id: 11,
          aNombre: "Alquiler Recibido",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que son recibidos en calidad de alquiler desde otra entidad o proveedor externo. Sirve para:

Controlar medios alquilados que están bajo uso temporal de la entidad sin implicar propiedad.

Registrar los datos físicos, administrativos y contables del medio alquilado, incluyendo condiciones del contrato.

Generar el comprobante contable correspondiente a la operación de alquiler recibido.

Evitar confusiones patrimoniales y garantizar la trazabilidad de los activos alquilados.`,
          pasos: [
            {
              label: "Acceder al módulo Alquiler Recibido",
              description:
                "Desde el menú Operaciones, selecciona la opción Alquiler Recibido para iniciar el registro del medio alquilado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación (si aplica), centro de costo, área, subárea, responsable, valor referencial, fecha de recepción, proveedor y número de contrato.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas estén correctamente asignadas para reflejar el uso temporal sin alterar la propiedad.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alquiler",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de alquiler recibido.",
            },
          ],
        },
        {
          id: 12,
          aNombre: "Reposición de AFT",
          aResumen: `Este módulo permite registrar la reposición de activos fijos tangibles (AFT) que han sido sustituidos por otros de igual función, ya sea por deterioro, obsolescencia o renovación operativa. Sirve para:

Registrar el nuevo medio que reemplaza a uno anterior, manteniendo la continuidad funcional en el sistema.

Vincular el medio repuesto con el original, preservando la trazabilidad operativa y contable.

Generar el comprobante contable correspondiente a la operación de reposición.

Evitar duplicidades o pérdidas de control patrimonial al formalizar el reemplazo de activos.`,
          pasos: [
            {
              label: "Acceder al módulo Reposición de AFT",
              description:
                "Desde el menú Operaciones, selecciona la opción Reposición para iniciar el registro del medio que sustituye a otro.",
            },
            {
              label: "Seleccionar el medio a reponer",
              description:
                "Busca y selecciona el activo original que será reemplazado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del medio nuevo",
              description:
                "Completa los campos requeridos del medio que lo reemplaza: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor, fecha de alta y motivo de reposición.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas estén correctamente asignadas para reflejar la baja del medio anterior y el alta del nuevo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio repuesto. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de reposición",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de reposición.",
            },
          ],
        },
        {
          id: 13,
          aNombre: "Altas Masivas desde Excel",
          aResumen: `Este módulo permite importar múltiples activos fijos tangibles (AFT) desde una hoja de cálculo Excel, agilizando el proceso de registro inicial. Sirve para:

Cargar grandes volúmenes de medios en una sola operación, evitando el registro manual uno a uno.

Estandarizar la estructura de datos mediante una plantilla predefinida que garantiza consistencia y validación.

Generar automáticamente los comprobantes contables de cada medio importado.

Evitar errores de digitación y acelerar la incorporación de activos al sistema.`,
          pasos: [
            {
              label: "Acceder al módulo de Altas Masivas",
              description:
                "Desde el menú Operaciones, selecciona la opción Altas Masivas desde Excel para iniciar el proceso de importación.",
            },
            {
              label: "Descargar plantilla de Excel",
              description:
                "Haz clic en Plantilla para obtener el archivo con los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa, centro de costo, área, subárea, responsable, valor, fecha, proveedor, etc.",
            },
            {
              label: "Completar la plantilla",
              description:
                "Llena la hoja de Excel respetando el formato y validaciones indicadas. No modifiques los encabezados ni el orden de las columnas.",
            },
            {
              label: "Importar archivo Excel",
              description:
                "Haz clic en Importar, selecciona el archivo completado y espera la validación automática del sistema.",
            },
            {
              label: "Revisar medios cargados",
              description:
                "Verifica que los medios hayan sido registrados correctamente. El sistema mostrará errores si hay campos inválidos.",
            },
            {
              label: "Confirmar y generar comprobantes",
              description:
                "Haz clic en Aceptar para confirmar la carga. Se generarán automáticamente los comprobantes contables de cada medio.",
            },
            {
              label: "Imprimir resumen de importación",
              description:
                "Haz clic en Imprimir para obtener un listado de los medios importados y sus comprobantes asociados.",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      sNombre: "Bajas",
      acciones: [
        {
          id: 14,
          aNombre: "Baja por Transferencia",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que son transferidos a otra entidad. Sirve para:

Formalizar la baja de medios que dejan de pertenecer a la entidad por transferencia institucional.

Registrar los datos del medio, la entidad receptora y el comprobante contable correspondiente.

Actualizar el inventario y reflejar la salida patrimonial de forma trazable y documentada.

Evitar inconsistencias contables y garantizar el cierre correcto de la operación de transferencia.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Transferencia",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Transferencia para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio a transferir",
              description:
                "Busca y selecciona el activo que será transferido. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la transferencia",
              description:
                "Completa los campos requeridos: entidad receptora, número de documento, fecha de transferencia y motivo.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de transferencia",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por transferencia.",
            },
          ],
        },
        {
          id: 15,
          aNombre: "Baja por Donación",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que son donados a otra entidad. Sirve para:

Formalizar la baja de medios entregados como donación, reflejando correctamente la salida patrimonial.

Registrar los datos del medio, la entidad beneficiaria y el comprobante contable correspondiente.

Actualizar el inventario y garantizar la trazabilidad de los activos donados.

Evitar inconsistencias contables y asegurar el cierre documentado de la operación de donación.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Donación",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Donación para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio a donar",
              description:
                "Busca y selecciona el activo que será donado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la donación",
              description:
                "Completa los campos requeridos: entidad beneficiaria, número de documento, fecha de donación y motivo.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de donación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por donación.",
            },
          ],
        },
        {
          id: 16,
          aNombre: "Baja por Ajuste",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que se eliminan del sistema por ajustes contables, errores de registro o regularización patrimonial. Sirve para:

Eliminar medios que fueron registrados incorrectamente o que no corresponden a la realidad operativa.

Registrar el motivo del ajuste y generar el comprobante contable correspondiente.

Actualizar el inventario para reflejar únicamente los activos válidos y operativos.

Evitar distorsiones contables y garantizar la coherencia entre el inventario físico y el sistema.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Ajuste",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Ajuste para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio a ajustar",
              description:
                "Busca y selecciona el activo que será dado de baja por ajuste. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del ajuste",
              description:
                "Completa los campos requeridos: motivo del ajuste, fecha de baja y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de ajuste",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por ajuste.",
            },
          ],
        },
        {
          id: 17,
          aNombre: "Baja por Pérdida",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que han sido extraviados, robados o no localizados durante procesos de verificación. Sirve para:

Formalizar la baja de medios que no se encuentran físicamente y no pueden recuperarse.

Registrar el motivo de la pérdida, generar el comprobante contable y actualizar el inventario.

Garantizar la trazabilidad del evento y documentar la salida patrimonial por causas no operativas.

Evitar inconsistencias contables y asegurar el cierre legal y administrativo del activo perdido.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Pérdida",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Pérdida para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio perdido",
              description:
                "Busca y selecciona el activo que será dado de baja por pérdida. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la pérdida",
              description:
                "Completa los campos requeridos: fecha de pérdida, motivo (robo, extravío, no localizado), y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de pérdida",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por pérdida.",
            },
          ],
        },
        {
          id: 18,
          aNombre: "Baja por Siniestro",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que han sido destruidos o inutilizados por eventos fortuitos como incendios, inundaciones o accidentes. Sirve para:

Formalizar la baja de medios afectados por siniestros, reflejando correctamente la pérdida patrimonial.

Registrar el evento, el medio afectado y generar el comprobante contable correspondiente.

Actualizar el inventario y garantizar la trazabilidad del activo siniestrado.

Evitar inconsistencias contables y asegurar el cierre legal y administrativo de la baja por siniestro.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Siniestro",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Siniestro para iniciar el registro de salida del medio afectado.",
            },
            {
              label: "Seleccionar el medio siniestrado",
              description:
                "Busca y selecciona el activo que será dado de baja por siniestro. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del siniestro",
              description:
                "Completa los campos requeridos: tipo de siniestro (incendio, inundación, accidente), fecha del evento, y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de siniestro",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por siniestro.",
            },
          ],
        },
        {
          id: 19,
          aNombre: "Baja por Obsolescencia",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que han quedado obsoletos por razones tecnológicas, funcionales o normativas. Sirve para:

Formalizar la baja de medios que ya no cumplen con los requisitos operativos o técnicos actuales.

Registrar el motivo de obsolescencia y generar el comprobante contable correspondiente.

Actualizar el inventario para reflejar únicamente activos vigentes y funcionales.

Evitar sobrecostos operativos y garantizar la eficiencia patrimonial de la entidad.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Obsolescencia",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Obsolescencia para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio obsoleto",
              description:
                "Busca y selecciona el activo que será dado de baja por obsolescencia. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la obsolescencia",
              description:
                "Completa los campos requeridos: fecha de baja, motivo (tecnológico, funcional, normativo) y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de obsolescencia",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por obsolescencia.",
            },
          ],
        },
        {
          id: 20,
          aNombre: "Baja por Venta",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que han sido vendidos a terceros. Sirve para:

Formalizar la baja de medios que generan ingresos por venta, reflejando correctamente la salida patrimonial.

Registrar los datos del comprador, el valor de venta y el comprobante contable correspondiente.

Actualizar el inventario y garantizar la trazabilidad del activo vendido.

Evitar inconsistencias contables y asegurar el cierre legal y financiero de la operación de venta.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Venta",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Venta para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio vendido",
              description:
                "Busca y selecciona el activo que será dado de baja por venta. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la venta",
              description:
                "Completa los campos requeridos: comprador, valor de venta, número de factura o documento, fecha de venta y motivo.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de venta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por venta.",
            },
          ],
        },
        {
          id: 21,
          aNombre: "Baja por Retiro",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que son retirados de uso por decisión administrativa, sin que medie siniestro, venta o transferencia. Sirve para:

Formalizar la baja de medios que dejan de ser utilizados por obsolescencia operativa, reorganización o desuso.

Registrar el motivo del retiro y generar el comprobante contable correspondiente.

Actualizar el inventario para reflejar únicamente los activos en uso efectivo.

Evitar distorsiones patrimoniales y garantizar la trazabilidad de los activos retirados.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Retiro",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Retiro para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio retirado",
              description:
                "Busca y selecciona el activo que será dado de baja por retiro. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del retiro",
              description:
                "Completa los campos requeridos: fecha de retiro, motivo (desuso, reorganización, decisión administrativa) y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de retiro",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por retiro.",
            },
          ],
        },
        {
          id: 22,
          aNombre: "Traspaso Efectuado",
          aResumen: `Este módulo permite registrar el movimiento interno de activos fijos tangibles (AFT) entre áreas, subáreas o responsables dentro de la misma entidad. Sirve para:

Formalizar el cambio de ubicación o responsable de un medio sin que implique baja ni alta.

Actualizar los datos administrativos del activo, manteniendo su trazabilidad operativa y contable.

Generar el comprobante contable correspondiente al traspaso efectuado.

Evitar inconsistencias en la asignación de medios y garantizar el control interno del inventario.`,
          pasos: [
            {
              label: "Acceder al módulo Traspaso Efectuado",
              description:
                "Desde el menú Operaciones, selecciona la opción Traspaso Efectuado para iniciar el movimiento interno del medio.",
            },
            {
              label: "Seleccionar el medio a traspasar",
              description:
                "Busca y selecciona el activo que será trasladado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nuevos datos administrativos",
              description:
                "Completa los campos requeridos: nuevo centro de costo, área, subárea, responsable y fecha de traspaso.",
            },
            {
              label: "Confirmar y guardar el traspaso",
              description:
                "Haz clic en Aceptar para registrar el movimiento. El sistema actualizará los datos y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de traspaso",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de traspaso efectuado.",
            },
          ],
        },
        {
          id: 23,
          aNombre: "Devolución del Préstamo",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que fueron recibidos en calidad de préstamo y ahora se devuelven a su entidad de origen. Sirve para:

Formalizar la devolución de medios prestados, cerrando correctamente el ciclo de responsabilidad temporal.

Actualizar el inventario y eliminar el vínculo operativo con el medio devuelto.

Generar el comprobante contable correspondiente a la operación de devolución.

Evitar inconsistencias patrimoniales y garantizar la trazabilidad del activo durante todo el período de préstamo.`,
          pasos: [
            {
              label: "Acceder al módulo Devolución del Préstamo",
              description:
                "Desde el menú Operaciones, selecciona la opción Devolución del Préstamo para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio a devolver",
              description:
                "Busca y selecciona el activo que fue recibido en préstamo y será devuelto. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la devolución",
              description:
                "Completa los campos requeridos: entidad propietaria, fecha de devolución, número de documento y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la devolución",
              description:
                "Haz clic en Aceptar para registrar la salida. El sistema actualizará el inventario y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de devolución",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de devolución del préstamo.",
            },
          ],
        },
        {
          id: 24,
          aNombre: "Devolución del Alquiler",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que fueron recibidos en calidad de alquiler y ahora se devuelven al proveedor. Sirve para:

Formalizar la devolución de medios alquilados, cerrando correctamente el ciclo de uso temporal.

Actualizar el inventario y eliminar el vínculo operativo con el medio devuelto.

Generar el comprobante contable correspondiente a la operación de devolución.

Evitar inconsistencias patrimoniales y garantizar la trazabilidad del activo durante todo el período de alquiler.`,
          pasos: [
            {
              label: "Acceder al módulo Devolución del Alquiler",
              description:
                "Desde el menú Operaciones, selecciona la opción Devolución del Alquiler para iniciar el registro de salida del medio.",
            },
            {
              label: "Seleccionar el medio a devolver",
              description:
                "Busca y selecciona el activo que fue recibido en alquiler y será devuelto. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la devolución",
              description:
                "Completa los campos requeridos: proveedor, fecha de devolución, número de contrato y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la devolución",
              description:
                "Haz clic en Aceptar para registrar la salida. El sistema actualizará el inventario y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de devolución",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de devolución del alquiler.",
            },
          ],
        },
        {
          id: 25,
          aNombre: "Baja por Faltante",
          aResumen: `Este módulo permite registrar la salida de activos fijos tangibles (AFT) que no se encuentran durante procesos de verificación física o auditoría. Sirve para:

Formalizar la baja de medios que no aparecen en su ubicación asignada y no han sido recuperados.

Registrar el evento de faltante, generar el comprobante contable y actualizar el inventario.

Documentar la pérdida operativa y garantizar la trazabilidad del activo durante el proceso de verificación.

Evitar inconsistencias patrimoniales y asegurar el cierre administrativo del medio faltante.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Faltante",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Faltante para iniciar el registro de salida del medio no localizado.",
            },
            {
              label: "Seleccionar el medio faltante",
              description:
                "Busca y selecciona el activo que será dado de baja por faltante. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del evento",
              description:
                "Completa los campos requeridos: fecha de verificación, motivo del faltante (no localizado, sin trazabilidad), y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar la baja",
              description:
                "Haz clic en Aceptar para registrar la baja. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de faltante",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de baja por faltante.",
            },
          ],
        },
        {
          id: 26,
          aNombre: "Baja por Lote",
          aResumen: `Este módulo permite registrar la salida simultánea de múltiples activos fijos tangibles (AFT) que comparten un mismo motivo de baja. Sirve para:

Agilizar el proceso de eliminación de medios cuando se trata de grupos homogéneos o eventos masivos.

Registrar todos los medios involucrados en una sola operación, manteniendo trazabilidad y consistencia contable.

Generar un único comprobante contable que respalde la baja colectiva.

Evitar registros individuales repetitivos y facilitar auditorías sobre eventos de baja masiva.`,
          pasos: [
            {
              label: "Acceder al módulo Baja por Lote",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja por Lote para iniciar el registro colectivo de salida.",
            },
            {
              label: "Seleccionar los medios a dar de baja",
              description:
                "Busca y selecciona todos los activos que serán dados de baja en el lote. Puedes filtrar por centro de costo, área, subárea o responsable.",
            },
            {
              label: "Introducir datos comunes de la baja",
              description:
                "Completa los campos requeridos: fecha de baja, motivo (obsolescencia, siniestro, reorganización, etc.), y observaciones generales.",
            },
            {
              label: "Confirmar y guardar la operación",
              description:
                "Haz clic en Aceptar para registrar la baja masiva. El sistema generará automáticamente un comprobante contable único para el lote.",
            },
            {
              label: "Imprimir comprobante de baja por lote",
              description:
                "Haz clic en Imprimir para generar el comprobante contable que respalda la operación colectiva.",
            },
          ],
        },
        {
          id: 27,
          aNombre: "Baja Masiva desde Excel",
          aResumen: `Este módulo permite registrar la salida de múltiples activos fijos tangibles (AFT) mediante la importación de una hoja de cálculo Excel. Sirve para:

Agilizar el proceso de baja cuando se trata de grandes volúmenes de medios.

Estandarizar la estructura de datos mediante una plantilla predefinida que garantiza consistencia y validación.

Generar automáticamente los comprobantes contables de cada medio dado de baja.

Evitar errores de digitación y facilitar auditorías sobre eventos de baja masiva.`,
          pasos: [
            {
              label: "Acceder al módulo de Baja Masiva",
              description:
                "Desde el menú Operaciones, selecciona la opción Baja Masiva desde Excel para iniciar el proceso de importación.",
            },
            {
              label: "Descargar plantilla de Excel",
              description:
                "Haz clic en Plantilla para obtener el archivo con los campos requeridos: código del medio, motivo de baja, fecha, observaciones, etc.",
            },
            {
              label: "Completar la plantilla",
              description:
                "Llena la hoja de Excel respetando el formato y validaciones indicadas. No modifiques los encabezados ni el orden de las columnas.",
            },
            {
              label: "Importar archivo Excel",
              description:
                "Haz clic en Importar, selecciona el archivo completado y espera la validación automática del sistema.",
            },
            {
              label: "Revisar medios cargados",
              description:
                "Verifica que los medios hayan sido procesados correctamente. El sistema mostrará errores si hay campos inválidos.",
            },
            {
              label: "Confirmar y generar comprobantes",
              description:
                "Haz clic en Aceptar para confirmar la baja. Se generarán automáticamente los comprobantes contables de cada medio.",
            },
            {
              label: "Imprimir resumen de baja masiva",
              description:
                "Haz clic en Imprimir para obtener un listado de los medios dados de baja y sus comprobantes asociados.",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      sNombre: "Traslados",
      acciones: [
        {
          id: 70,
          aNombre: "Enviado a Reparación",
          aResumen: `Este módulo permite registrar el envío de activos fijos tangibles (AFT) a reparación, ya sea interna o externa. Sirve para:

Controlar los medios que salen temporalmente del inventario operativo por fallas o mantenimiento.

Registrar los datos del medio, el tipo de reparación, el proveedor o área técnica responsable y la fecha de envío.

Generar el comprobante contable correspondiente al movimiento de reparación.

Evitar pérdidas de trazabilidad y garantizar el seguimiento técnico y administrativo del activo reparado.`,
          pasos: [
            {
              label: "Acceder al módulo Enviado a Reparación",
              description:
                "Desde el menú Operaciones, selecciona la opción Enviado a Reparación para iniciar el registro del medio que será reparado.",
            },
            {
              label: "Seleccionar el medio a reparar",
              description:
                "Busca y selecciona el activo que será enviado a reparación. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos de la reparación",
              description:
                "Completa los campos requeridos: tipo de reparación (interna o externa), proveedor o área técnica, fecha de envío, motivo y observaciones.",
            },
            {
              label: "Confirmar y guardar el envío",
              description:
                "Haz clic en Aceptar para registrar el movimiento. El sistema actualizará el estado del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de reparación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de envío a reparación.",
            },
          ],
        },
        {
          id: 1,
          aNombre: "Traslado Interno",
          aResumen: `Este módulo permite registrar el movimiento físico de activos fijos tangibles (AFT) dentro de la misma entidad, sin que implique cambio de responsable ni baja. Sirve para:

Formalizar el traslado de medios entre áreas, subáreas o ubicaciones físicas internas.

Actualizar la ubicación operativa del activo, manteniendo su trazabilidad sin alterar su asignación administrativa.

Generar el comprobante contable correspondiente al traslado físico.

Evitar inconsistencias logísticas y garantizar el control interno del inventario.`,
          pasos: [
            {
              label: "Acceder al módulo Traslado Interno",
              description:
                "Desde el menú Operaciones, selecciona la opción Traslado Interno para iniciar el registro del movimiento físico del medio.",
            },
            {
              label: "Seleccionar el medio a trasladar",
              description:
                "Busca y selecciona el activo que será trasladado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nueva ubicación física",
              description:
                "Completa los campos requeridos: nueva ubicación, área, subárea, fecha de traslado y observaciones relevantes.",
            },
            {
              label: "Confirmar y guardar el traslado",
              description:
                "Haz clic en Aceptar para registrar el movimiento. El sistema actualizará la ubicación del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de traslado",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de traslado interno.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Recibido de Reparación",
          aResumen: `Este módulo permite registrar el retorno de activos fijos tangibles (AFT) que fueron enviados a reparación, ya sea interna o externa. Sirve para:

Formalizar el reingreso de medios reparados al inventario operativo.

Actualizar el estado del activo, registrar los detalles de la reparación y generar el comprobante contable correspondiente.

Restablecer la trazabilidad del medio y garantizar su reincorporación técnica y administrativa.

Evitar inconsistencias patrimoniales y asegurar el cierre del ciclo de reparación.`,
          pasos: [
            {
              label: "Acceder al módulo Recibido de Reparación",
              description:
                "Desde el menú Operaciones, selecciona la opción Recibido de Reparación para iniciar el registro del retorno del medio.",
            },
            {
              label: "Seleccionar el medio reparado",
              description:
                "Busca y selecciona el activo que fue enviado a reparación y ahora retorna. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del retorno",
              description:
                "Completa los campos requeridos: fecha de retorno, tipo de reparación realizada, proveedor o área técnica, y observaciones.",
            },
            {
              label: "Confirmar y guardar el ingreso",
              description:
                "Haz clic en Aceptar para registrar el retorno. El sistema actualizará el estado del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de recepción",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de recibido de reparación.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Préstamo Efectuado",
          aResumen: `Este módulo permite registrar el envío temporal de activos fijos tangibles (AFT) a otra entidad o área, bajo condiciones de préstamo. Sirve para:

Formalizar el movimiento de medios que salen del inventario operativo sin implicar baja patrimonial.

Registrar los datos del medio, la entidad receptora, el período de préstamo y el comprobante contable correspondiente.

Actualizar el estado del activo para reflejar su condición de préstamo y garantizar trazabilidad.

Evitar pérdidas de control y asegurar el seguimiento técnico y administrativo del activo prestado.`,
          pasos: [
            {
              label: "Acceder al módulo Préstamo Efectuado",
              description:
                "Desde el menú Operaciones, selecciona la opción Préstamo Efectuado para iniciar el registro del medio que será prestado.",
            },
            {
              label: "Seleccionar el medio a prestar",
              description:
                "Busca y selecciona el activo que será enviado en préstamo. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del préstamo",
              description:
                "Completa los campos requeridos: entidad receptora, fecha de inicio, fecha estimada de devolución, motivo y observaciones.",
            },
            {
              label: "Confirmar y guardar el préstamo",
              description:
                "Haz clic en Aceptar para registrar el movimiento. El sistema actualizará el estado del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de préstamo",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de préstamo efectuado.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Préstamo Recibido",
          aResumen: `Este módulo permite registrar el ingreso temporal de activos fijos tangibles (AFT) que han sido prestados por otra entidad. Sirve para:

Formalizar la incorporación de medios ajenos al inventario operativo bajo condiciones de préstamo.

Registrar los datos del medio, la entidad prestadora, el período de préstamo y el comprobante contable correspondiente.

Actualizar el estado del activo para reflejar su condición de préstamo y garantizar trazabilidad.

Evitar inconsistencias patrimoniales y asegurar el seguimiento técnico y administrativo del activo recibido.`,
          pasos: [
            {
              label: "Acceder al módulo Préstamo Recibido",
              description:
                "Desde el menú Operaciones, selecciona la opción Préstamo Recibido para iniciar el registro del medio recibido en préstamo.",
            },
            {
              label: "Registrar el medio recibido",
              description:
                "Introduce los datos del activo prestado: código, descripción, valor, estado y ubicación física.",
            },
            {
              label: "Introducir datos del préstamo",
              description:
                "Completa los campos requeridos: entidad prestadora, fecha de inicio, fecha estimada de devolución, motivo y observaciones.",
            },
            {
              label: "Confirmar y guardar el ingreso",
              description:
                "Haz clic en Aceptar para registrar el ingreso. El sistema actualizará el estado del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de préstamo recibido",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de préstamo recibido.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Alquiler Efectuado",
          aResumen: `Este módulo permite registrar el envío temporal de activos fijos tangibles (AFT) a otra entidad bajo contrato de alquiler. Sirve para:

Formalizar el movimiento de medios alquilados, reflejando correctamente la salida patrimonial temporal.

Registrar los datos del medio, el arrendatario, el contrato de alquiler y el comprobante contable correspondiente.

Actualizar el estado del activo para reflejar su condición de alquiler y garantizar trazabilidad.

Evitar inconsistencias contables y asegurar el seguimiento técnico y administrativo del activo alquilado.`,
          pasos: [
            {
              label: "Acceder al módulo Alquiler Efectuado",
              description:
                "Desde el menú Operaciones, selecciona la opción Alquiler Efectuado para iniciar el registro del medio que será alquilado.",
            },
            {
              label: "Seleccionar el medio a alquilar",
              description:
                "Busca y selecciona el activo que será enviado en alquiler. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del contrato",
              description:
                "Completa los campos requeridos: entidad arrendataria, número de contrato, fecha de inicio, fecha estimada de devolución, y observaciones.",
            },
            {
              label: "Confirmar y guardar el alquiler",
              description:
                "Haz clic en Aceptar para registrar el movimiento. El sistema actualizará el estado del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alquiler",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de alquiler efectuado.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Alquiler Recibido",
          aResumen: `Este módulo permite registrar el ingreso temporal de activos fijos tangibles (AFT) que han sido alquilados a un proveedor externo. Sirve para:

Formalizar la incorporación de medios alquilados al inventario operativo bajo contrato vigente.

Registrar los datos del medio, el proveedor, el contrato de alquiler y el comprobante contable correspondiente.

Actualizar el estado del activo para reflejar su condición de alquiler y garantizar trazabilidad.

Evitar inconsistencias patrimoniales y asegurar el seguimiento técnico y administrativo del activo alquilado.`,
          pasos: [
            {
              label: "Acceder al módulo Alquiler Recibido",
              description:
                "Desde el menú Operaciones, selecciona la opción Alquiler Recibido para iniciar el registro del medio recibido en alquiler.",
            },
            {
              label: "Registrar el medio alquilado",
              description:
                "Introduce los datos del activo recibido: código, descripción, valor, estado y ubicación física.",
            },
            {
              label: "Introducir datos del contrato",
              description:
                "Completa los campos requeridos: proveedor, número de contrato, fecha de inicio, fecha estimada de devolución, y observaciones.",
            },
            {
              label: "Confirmar y guardar el ingreso",
              description:
                "Haz clic en Aceptar para registrar el ingreso. El sistema actualizará el estado del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alquiler recibido",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de alquiler recibido.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Traslado Interno por Lote",
          aResumen: `Este módulo permite registrar el movimiento físico simultáneo de múltiples activos fijos tangibles (AFT) dentro de la misma entidad. Sirve para:

Agilizar el traslado de grupos de medios entre áreas, subáreas o ubicaciones físicas internas.

Actualizar la ubicación operativa de todos los activos involucrados en una sola operación.

Generar un único comprobante contable que respalde el traslado colectivo.

Evitar registros individuales repetitivos y garantizar trazabilidad logística en eventos masivos.`,
          pasos: [
            {
              label: "Acceder al módulo Traslado Interno por Lote",
              description:
                "Desde el menú Operaciones, selecciona la opción Traslado Interno por Lote para iniciar el registro colectivo del movimiento físico.",
            },
            {
              label: "Seleccionar los medios a trasladar",
              description:
                "Busca y selecciona todos los activos que serán trasladados. Puedes filtrar por centro de costo, área, subárea o ubicación actual.",
            },
            {
              label: "Introducir nueva ubicación física común",
              description:
                "Completa los campos requeridos: nueva ubicación, área, subárea, fecha de traslado y observaciones generales.",
            },
            {
              label: "Confirmar y guardar el traslado",
              description:
                "Haz clic en Aceptar para registrar el movimiento. El sistema actualizará la ubicación de todos los medios y generará el comprobante contable único.",
            },
            {
              label: "Imprimir comprobante de traslado por lote",
              description:
                "Haz clic en Imprimir para generar el comprobante contable que respalda la operación colectiva.",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      sNombre: "Ajustes",
      acciones: [
        {
          id: 84,
          aNombre: "Ajuste de Importe",
          aResumen: `Este módulo permite modificar el valor contable de un activo fijo tangible (AFT) sin alterar su existencia física. Sirve para:

Registrar incrementos o disminuciones en el valor del medio por correcciones contables, ajustes técnicos o decisiones administrativas.

Actualizar el importe del activo en el sistema, manteniendo trazabilidad y respaldo documental.

Generar el comprobante contable correspondiente al ajuste realizado.

Evitar distorsiones en los estados financieros y asegurar la integridad del inventario patrimonial.`,
          pasos: [
            {
              label: "Acceder al módulo Ajuste de Importe",
              description:
                "Desde el menú Operaciones, selecciona la opción Ajuste de Importe para iniciar la modificación del valor del medio.",
            },
            {
              label: "Seleccionar el medio a ajustar",
              description:
                "Busca y selecciona el activo cuyo importe será modificado. Verifica sus datos actuales antes de continuar.",
            },
            {
              label: "Introducir nuevo importe y motivo",
              description:
                "Completa los campos requeridos: nuevo valor, motivo del ajuste (corrección, revaluación, error de carga, etc.) y observaciones.",
            },
            {
              label: "Confirmar y guardar el ajuste",
              description:
                "Haz clic en Aceptar para registrar el nuevo importe. El sistema actualizará el valor del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de ajuste",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de ajuste de importe.",
            },
          ],
        },
        {
          id: 85,
          aNombre: "Ajuste de Depreciación",
          aResumen: `Este módulo permite modificar el valor acumulado de depreciación de un activo fijo tangible (AFT), sin alterar su importe original ni su existencia física. Sirve para:

Registrar correcciones contables en la depreciación acumulada por errores, cambios de criterio o ajustes técnicos.

Actualizar el valor depreciado del medio, manteniendo trazabilidad y respaldo documental.

Generar el comprobante contable correspondiente al ajuste realizado.

Evitar distorsiones en los estados financieros y asegurar la integridad del inventario patrimonial.`,
          pasos: [
            {
              label: "Acceder al módulo Ajuste de Depreciación",
              description:
                "Desde el menú Operaciones, selecciona la opción Ajuste de Depreciación para iniciar la modificación del valor depreciado del medio.",
            },
            {
              label: "Seleccionar el medio a ajustar",
              description:
                "Busca y selecciona el activo cuyo valor de depreciación acumulada será modificado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nuevo valor de depreciación y motivo",
              description:
                "Completa los campos requeridos: nuevo valor acumulado, motivo del ajuste (corrección, cambio de criterio, error de carga, etc.) y observaciones.",
            },
            {
              label: "Confirmar y guardar el ajuste",
              description:
                "Haz clic en Aceptar para registrar el nuevo valor. El sistema actualizará la depreciación acumulada y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de ajuste",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de ajuste de depreciación.",
            },
          ],
        },
        {
          id: 1,
          aNombre: "Ajuste de Moneda",
          aResumen: `Este módulo permite modificar la moneda de registro contable de un activo fijo tangible (AFT), sin alterar su existencia ni su valor original. Sirve para:

Actualizar la moneda base del activo por cambios en políticas contables, migraciones de sistema o correcciones administrativas.

Registrar el nuevo tipo de moneda y aplicar la tasa de conversión correspondiente.

Generar el comprobante contable que respalde el ajuste de moneda.

Evitar inconsistencias en los reportes financieros y asegurar la trazabilidad del activo en su nueva denominación.`,
          pasos: [
            {
              label: "Acceder al módulo Ajuste de Moneda",
              description:
                "Desde el menú Operaciones, selecciona la opción Ajuste de Moneda para iniciar el cambio de denominación contable del medio.",
            },
            {
              label: "Seleccionar el medio a ajustar",
              description:
                "Busca y selecciona el activo cuya moneda será modificada. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nueva moneda y tasa de conversión",
              description:
                "Completa los campos requeridos: nueva moneda, tasa de conversión, fecha de ajuste y motivo del cambio.",
            },
            {
              label: "Confirmar y guardar el ajuste",
              description:
                "Haz clic en Aceptar para registrar el cambio. El sistema actualizará la moneda del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de ajuste de moneda",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de ajuste de moneda.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Cambio de Submayor",
          aResumen: `Este módulo permite modificar la cuenta contable asociada a un activo fijo tangible (AFT), sin alterar su existencia ni su valor. Sirve para:

Reasignar el submayor contable del medio por correcciones administrativas, reorganización contable o cambios de clasificación.

Actualizar la cuenta contable del activo en el sistema, manteniendo trazabilidad y respaldo documental.

Generar el comprobante contable correspondiente al cambio de submayor.

Evitar inconsistencias en los reportes financieros y asegurar la correcta clasificación patrimonial del activo.`,
          pasos: [
            {
              label: "Acceder al módulo Cambio de Submayor",
              description:
                "Desde el menú Operaciones, selecciona la opción Cambio de Submayor para iniciar la modificación de la cuenta contable del medio.",
            },
            {
              label: "Seleccionar el medio a modificar",
              description:
                "Busca y selecciona el activo cuyo submayor contable será cambiado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nueva cuenta contable",
              description:
                "Completa los campos requeridos: nueva cuenta contable (submayor), fecha de cambio, motivo y observaciones.",
            },
            {
              label: "Confirmar y guardar el cambio",
              description:
                "Haz clic en Aceptar para registrar la modificación. El sistema actualizará la cuenta contable del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de cambio de submayor",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de cambio de submayor.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Paralizar o Compactar Activos",
          aResumen: `Este módulo permite registrar el cambio de estado operativo de activos fijos tangibles (AFT) que dejan de estar en uso temporalmente o se agrupan funcionalmente. Sirve para:

Paralizar medios que no están operativos por mantenimiento, obsolescencia temporal o decisión administrativa.

Compactar activos que se agrupan para operar como una unidad funcional, sin alterar su existencia individual.

Actualizar el estado técnico del medio, manteniendo trazabilidad y respaldo documental.

Evitar inconsistencias operativas y garantizar el control interno durante períodos de inactividad o agrupación.`,
          pasos: [
            {
              label: "Acceder al módulo Paralizar o Compactar",
              description:
                "Desde el menú Operaciones, selecciona la opción Paralizar o Compactar Activos para iniciar el cambio de estado operativo.",
            },
            {
              label: "Seleccionar el medio a modificar",
              description:
                "Busca y selecciona el activo que será paralizado o compactado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Indicar tipo de operación",
              description:
                "Selecciona si se trata de una paralización o una compactación. Completa los campos requeridos: fecha, motivo y observaciones.",
            },
            {
              label: "Confirmar y guardar el cambio",
              description:
                "Haz clic en Aceptar para registrar el nuevo estado. El sistema actualizará el estado técnico del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de operación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de paralización o compactación.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Modificar Fecha de Adquisición",
          aResumen: `Este módulo permite corregir la fecha de adquisición registrada para un activo fijo tangible (AFT), sin alterar su valor ni su existencia. Sirve para:

Ajustar errores de carga o migración que afecten la trazabilidad contable y técnica del medio.

Actualizar la fecha de adquisición en el sistema, manteniendo respaldo documental y consistencia histórica.

Generar el comprobante contable correspondiente al cambio de fecha.

Evitar distorsiones en los cálculos de depreciación y asegurar la integridad del inventario patrimonial.`,
          pasos: [
            {
              label: "Acceder al módulo Modificar Fecha de Adquisición",
              description:
                "Desde el menú Operaciones, selecciona la opción Modificar Fecha de Adquisición para iniciar la corrección.",
            },
            {
              label: "Seleccionar el medio a modificar",
              description:
                "Busca y selecciona el activo cuya fecha de adquisición será corregida. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nueva fecha y motivo",
              description:
                "Completa los campos requeridos: nueva fecha de adquisición, motivo del cambio (error, migración, ajuste técnico) y observaciones.",
            },
            {
              label: "Confirmar y guardar la modificación",
              description:
                "Haz clic en Aceptar para registrar la nueva fecha. El sistema actualizará el dato y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de modificación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de modificación de fecha.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Unificar activos",
          aResumen: `Este módulo permite consolidar dos o más activos fijos tangibles (AFT) que representan físicamente un mismo bien, pero fueron registrados por separado. Sirve para:

Evitar duplicidades en el inventario patrimonial y reflejar correctamente la existencia real de los medios.

Seleccionar un medio principal y absorber los secundarios, sumando sus valores y trazabilidad.

Actualizar los datos del medio resultante y generar el comprobante contable correspondiente.

Mantener la integridad técnica y contable del inventario, especialmente tras migraciones o errores de carga.`,
          pasos: [
            {
              label: "Acceder al módulo Unificar activos",
              description:
                "Desde el menú Operaciones, selecciona la opción Unificar activos para iniciar el proceso de consolidación.",
            },
            {
              label: "Seleccionar el medio principal",
              description:
                "Busca y selecciona el activo que quedará como producto principal tras la unificación.",
            },
            {
              label: "Seleccionar los medios a unificar",
              description:
                "Selecciona uno o más activos que serán absorbidos por el medio principal. Verifica que correspondan físicamente al mismo bien.",
            },
            {
              label: "Confirmar la unificación",
              description:
                "Haz clic en Aceptar para consolidar los medios. El sistema sumará los valores y actualizará la trazabilidad en el medio principal.",
            },
            {
              label: "Imprimir comprobante de unificación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de unificación de activos.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Separar Activos",
          aResumen: `Este módulo permite dividir un activo fijo tangible (AFT) en dos o más medios independientes, cuando originalmente fueron registrados como una sola unidad. Sirve para:

Reflejar correctamente la existencia física de medios que operan por separado pero fueron agrupados en el sistema.

Crear nuevos registros individuales a partir del medio original, asignando valores, ubicaciones y responsables específicos.

Actualizar la trazabilidad técnica y contable del inventario patrimonial.

Evitar inconsistencias operativas y facilitar el control individual de cada componente separado.`,
          pasos: [
            {
              label: "Acceder al módulo Separar activos",
              description:
                "Desde el menú Operaciones, selecciona la opción Separar activos para iniciar el proceso de división.",
            },
            {
              label: "Seleccionar el medio a separar",
              description:
                "Busca y selecciona el activo que será dividido en varios componentes. Verifica sus datos antes de continuar.",
            },
            {
              label: "Definir los nuevos activos",
              description:
                "Completa los campos requeridos para cada nuevo medio: descripción, valor, ubicación, responsable y observaciones.",
            },
            {
              label: "Confirmar la separación",
              description:
                "Haz clic en Aceptar para registrar la operación. El sistema creará los nuevos medios y ajustará el valor del original.",
            },
            {
              label: "Imprimir comprobante de separación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de separación de activos.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Cambiar Número de Inventario",
          aResumen: `Este módulo permite modificar el número de inventario asignado a un activo fijo tangible (AFT), sin alterar su existencia ni sus valores contables. Sirve para:

Corregir errores de digitación, duplicidades o inconsistencias en la numeración de medios registrados.

Actualizar el identificador del activo en el sistema, manteniendo trazabilidad y respaldo documental.

Evitar conflictos en auditorías, conciliaciones físicas y reportes patrimoniales.

Garantizar la unicidad y consistencia del número de inventario en todo el ciclo de vida del medio.`,
          pasos: [
            {
              label: "Acceder al módulo Cambiar Número de Inventario",
              description:
                "Desde el menú Operaciones, selecciona la opción Cambiar Número de Inventario para iniciar la modificación.",
            },
            {
              label: "Seleccionar el medio a modificar",
              description:
                "Busca y selecciona el activo cuyo número de inventario será corregido. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nuevo número de inventario",
              description:
                "Completa los campos requeridos: nuevo número, motivo del cambio (error, duplicidad, migración, etc.) y observaciones.",
            },
            {
              label: "Confirmar y guardar la modificación",
              description:
                "Haz clic en Aceptar para registrar el nuevo número. El sistema actualizará el identificador y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de modificación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de cambio de número de inventario.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Ajuste de Vida Útil",
          aResumen: `Este módulo permite modificar la vida útil registrada de un activo fijo tangible (AFT), sin alterar su valor original ni su existencia física. Sirve para:

Corregir errores de carga o actualizar la vida útil por cambios técnicos, normativos o administrativos.

Recalcular la depreciación futura del medio en función de su nueva vida útil.

Generar el comprobante contable correspondiente al ajuste realizado.

Asegurar la consistencia entre el uso real del activo y su tratamiento contable.`,
          pasos: [
            {
              label: "Acceder al módulo Ajuste de Vida Útil",
              description:
                "Desde el menú Operaciones, selecciona la opción Ajuste de Vida Útil para iniciar la modificación.",
            },
            {
              label: "Seleccionar el medio a ajustar",
              description:
                "Busca y selecciona el activo cuya vida útil será modificada. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir nueva vida útil y motivo",
              description:
                "Completa los campos requeridos: nueva vida útil (en años o meses), motivo del cambio y observaciones.",
            },
            {
              label: "Confirmar y guardar el ajuste",
              description:
                "Haz clic en Aceptar para registrar la nueva vida útil. El sistema recalculará la depreciación futura y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de ajuste",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de ajuste de vida útil.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Cambio de Datos a Medios",
          aResumen: `Este módulo permite modificar información descriptiva o técnica de un activo fijo tangible (AFT), sin alterar su valor contable ni su existencia física. Sirve para:

Corregir errores de digitación, actualizar datos obsoletos o completar campos faltantes en el registro del medio.

Modificar atributos como descripción, marca, modelo, número de serie, ubicación física, responsable, entre otros.

Mantener la integridad documental del inventario y asegurar la trazabilidad operativa del activo.

Evitar inconsistencias en reportes, conciliaciones y procesos de auditoría.`,
          pasos: [
            {
              label: "Acceder al módulo Cambio de Datos a Medios",
              description:
                "Desde el menú Operaciones, selecciona la opción Cambio de Datos a Medios para iniciar la modificación.",
            },
            {
              label: "Seleccionar el medio a modificar",
              description:
                "Busca y selecciona el activo cuyos datos serán actualizados. Verifica sus datos actuales antes de continuar.",
            },
            {
              label: "Modificar los campos necesarios",
              description:
                "Edita los campos que requieren corrección o actualización: descripción, marca, modelo, serie, ubicación, responsable, etc.",
            },
            {
              label: "Confirmar y guardar los cambios",
              description:
                "Haz clic en Aceptar para registrar las modificaciones. El sistema actualizará los datos del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de modificación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de cambio de datos.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Actualizar Datos Principales de Transportes",
          aResumen: `Este módulo permite modificar los datos técnicos y administrativos clave de los medios de transporte registrados como activos fijos tangibles (AFT). Sirve para:

Corregir errores o completar información faltante en vehículos, equipos móviles o medios de transporte.

Actualizar campos como matrícula, marca, modelo, número de motor, número de chasis, tipo de combustible, capacidad, y responsable.

Mantener la trazabilidad operativa y documental del transporte, asegurando consistencia en reportes y auditorías.

Evitar inconsistencias en procesos de control técnico, asignación y mantenimiento.`,
          pasos: [
            {
              label: "Acceder al módulo Actualizar Datos de Transportes",
              description:
                "Desde el menú Operaciones, selecciona la opción Actualizar Datos Principales de Transportes para iniciar la modificación.",
            },
            {
              label: "Seleccionar el medio de transporte",
              description:
                "Busca y selecciona el vehículo o equipo móvil cuyos datos serán actualizados. Verifica sus datos actuales antes de continuar.",
            },
            {
              label: "Modificar los campos técnicos y administrativos",
              description:
                "Edita los campos necesarios: matrícula, marca, modelo, número de motor, chasis, tipo de combustible, capacidad, responsable, etc.",
            },
            {
              label: "Confirmar y guardar los cambios",
              description:
                "Haz clic en Aceptar para registrar las modificaciones. El sistema actualizará los datos del medio y generará el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de modificación",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de actualización de datos de transporte.",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      sNombre: "Ops.Contables",
      acciones: [
        {
          id: 11,
          aNombre: "Comprobantes Contables No Posteados",
          aResumen: `Este módulo permite revisar, validar y postear comprobantes contables que han sido generados por operaciones en el sistema pero aún no han sido registrados oficialmente en la contabilidad. Sirve para:

Evitar que operaciones queden pendientes de registro contable por omisión o error.

Validar comprobantes antes de su integración definitiva en los libros contables.

Postear manualmente comprobantes que requieren revisión previa o autorización.

Mantener la trazabilidad contable y evitar inconsistencias entre operaciones y registros financieros.`,
          pasos: [
            {
              label: "Acceder al módulo Comprobantes No Posteados",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Comprobantes Contables No Posteados para visualizar los comprobantes pendientes.",
            },
            {
              label: "Filtrar y revisar comprobantes pendientes",
              description:
                "Aplica filtros por fecha, tipo de operación, usuario o estado. Revisa cada comprobante para verificar su contenido contable.",
            },
            {
              label: "Seleccionar comprobantes a postear",
              description:
                "Marca los comprobantes que están listos para ser registrados oficialmente. Puedes seleccionar uno o varios.",
            },
            {
              label: "Confirmar y ejecutar el posteo",
              description:
                "Haz clic en Postear para registrar los comprobantes seleccionados en la contabilidad. El sistema actualizará su estado y los integrará en los reportes contables.",
            },
            {
              label: "Imprimir o exportar comprobantes posteados",
              description:
                "Opcionalmente, puedes imprimir o exportar los comprobantes ya posteados para respaldo documental o revisión externa.",
            },
          ],
        },
        {
          id: 12,
          aNombre: "Reversión de Operaciones Contables",
          aResumen: `Este módulo permite anular operaciones contables previamente registradas, generando un comprobante inverso que revierte su efecto. Sirve para:

Corregir errores en operaciones contables sin necesidad de intervención técnica.

Restablecer el estado contable del medio antes de la operación revertida.

Evitar duplicidades, inconsistencias y distorsiones en los reportes financieros.

Mantener trazabilidad y respaldo documental de cada reversión realizada.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Operaciones",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Reversión de Operaciones Contables.",
            },
            {
              label: "Buscar la operación a revertir",
              description:
                "Filtra por tipo de operación, fecha, usuario o número de comprobante. Selecciona la operación que deseas anular.",
            },
            {
              label: "Confirmar la reversión",
              description:
                "Haz clic en Revertir. El sistema generará un comprobante inverso que anula el efecto contable de la operación original.",
            },
            {
              label: "Verificar el estado del medio",
              description:
                "Confirma que el activo ha sido restaurado a su estado previo. Revisa los datos contables y técnicos.",
            },
            {
              label: "Imprimir comprobante de reversión",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la reversión.",
            },
          ],
        },
        {
          id: 14,
          aNombre: "Depreciación Mensual",
          aResumen: `Este módulo permite ejecutar el cálculo automático de la depreciación contable de todos los activos fijos tangibles (AFT) registrados en el sistema, correspondiente al período mensual actual. Sirve para:

Registrar el gasto contable por depreciación de forma periódica y sistemática.

Actualizar el valor depreciado acumulado de cada medio según su vida útil y fecha de adquisición.

Generar los comprobantes contables que respaldan el cálculo mensual.

Evitar omisiones en el cierre contable y asegurar la consistencia financiera del inventario.`,
          pasos: [
            {
              label: "Acceder al módulo Depreciación Mensual",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Depreciación Mensual para iniciar el cálculo automático.",
            },
            {
              label: "Seleccionar el período contable",
              description:
                "Indica el mes y año para el cual deseas ejecutar la depreciación. Verifica que no haya cálculos previos duplicados.",
            },
            {
              label: "Ejecutar el cálculo de depreciación",
              description:
                "Haz clic en Calcular. El sistema procesará todos los medios elegibles y calculará su depreciación correspondiente.",
            },
            {
              label: "Revisar y validar los resultados",
              description:
                "Verifica los valores calculados por medio, incluyendo importe depreciado, vida útil restante y estado contable.",
            },
            {
              label: "Generar comprobantes contables",
              description:
                "Haz clic en Generar Comprobantes para registrar oficialmente la depreciación mensual en la contabilidad.",
            },
            {
              label: "Imprimir o exportar comprobantes",
              description:
                "Opcionalmente, puedes imprimir o exportar los comprobantes generados para respaldo documental o revisión externa.",
            },
          ],
        },
        {
          id: 15,
          aNombre: "Cierre de Mes",
          aResumen: `Este módulo permite consolidar todas las operaciones contables realizadas durante el período mensual actual, bloqueando nuevas modificaciones y asegurando la integridad de los datos. Sirve para:

Finalizar oficialmente el período contable, evitando ajustes posteriores sin autorización.

Verificar que todas las operaciones estén posteadas y que no existan comprobantes pendientes.

Generar los reportes contables mensuales y respaldar el estado del inventario patrimonial.

Facilitar auditorías, conciliaciones y continuidad contable entre períodos.`,
          pasos: [
            {
              label: "Acceder al módulo Cierre de Mes",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Cierre de Mes para iniciar el proceso de consolidación.",
            },
            {
              label: "Seleccionar el período a cerrar",
              description:
                "Indica el mes y año que deseas cerrar. Verifica que no haya comprobantes no posteados ni operaciones pendientes.",
            },
            {
              label: "Ejecutar validaciones previas",
              description:
                "El sistema revisará que todos los comprobantes estén posteados y que no existan inconsistencias contables.",
            },
            {
              label: "Confirmar el cierre contable",
              description:
                "Haz clic en Cerrar Mes para consolidar el período. El sistema bloqueará nuevas operaciones en ese mes y generará los reportes correspondientes.",
            },
            {
              label: "Imprimir reportes de cierre",
              description:
                "Opcionalmente, puedes imprimir o exportar los reportes contables del mes cerrado para respaldo documental.",
            },
          ],
        },
        {
          id: 16,
          aNombre: "Transferir al Mayor General",
          aResumen: `Este módulo permite enviar los comprobantes contables generados en el sistema de activos fijos hacia el sistema contable principal (mayor general), consolidando la información financiera. Sirve para:

Registrar oficialmente las operaciones patrimoniales en el sistema contable institucional.

Evitar duplicidades o pérdidas de información entre sistemas.

Asegurar que los movimientos contables de activos estén reflejados en los libros mayores.

Facilitar conciliaciones contables, auditorías y reportes financieros integrados.`,
          pasos: [
            {
              label: "Acceder al módulo Transferir al Mayor General",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Transferir al Mayor General para iniciar el proceso.",
            },
            {
              label: "Seleccionar el período contable",
              description:
                "Indica el mes y año de los comprobantes que deseas transferir. Verifica que estén posteados y sin errores.",
            },
            {
              label: "Ejecutar la transferencia",
              description:
                "Haz clic en Transferir. El sistema enviará los comprobantes al sistema contable principal, marcándolos como transferidos.",
            },
            {
              label: "Verificar estado de transferencia",
              description:
                "Confirma que los comprobantes aparecen como transferidos y que no hubo errores en el proceso.",
            },
            {
              label: "Imprimir reporte de transferencia",
              description:
                "Opcionalmente, puedes imprimir o exportar el reporte de comprobantes transferidos para respaldo contable.",
            },
          ],
        },
        {
          id: 17,
          aNombre: "Transferencia Directa al ZUNacc",
          aResumen: `Este módulo permite enviar comprobantes contables desde el sistema de activos fijos directamente al sistema contable ZUNacc, sin necesidad de posteo intermedio. Sirve para:

Agilizar la integración contable entre módulos patrimoniales y financieros.

Evitar omisiones o duplicidades al eliminar pasos manuales de posteo.

Asegurar que las operaciones patrimoniales impacten de inmediato en la contabilidad institucional.

Facilitar el cierre contable mensual y la conciliación entre sistemas.`,
          pasos: [
            {
              label: "Acceder al módulo Transferencia Directa al ZUNacc",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Transferencia Directa al ZUNacc.",
            },
            {
              label: "Seleccionar el período contable",
              description:
                "Indica el mes y año de los comprobantes que deseas transferir directamente. Verifica que estén listos para envío.",
            },
            {
              label: "Ejecutar la transferencia directa",
              description:
                "Haz clic en Transferir. El sistema enviará los comprobantes al ZUNacc sin requerir posteo previo.",
            },
            {
              label: "Verificar estado de transferencia",
              description:
                "Confirma que los comprobantes aparecen como transferidos en ambos sistemas. Revisa si hubo errores o rechazos.",
            },
            {
              label: "Imprimir reporte de transferencia",
              description:
                "Opcionalmente, puedes imprimir o exportar el reporte de comprobantes transferidos para respaldo contable.",
            },
          ],
        },
        {
          id: 18,
          aNombre: "Transferir ETES",
          aResumen: `Este módulo permite enviar los comprobantes contables generados por operaciones patrimoniales hacia el sistema ETES (Estado de Ejecución del Gasto), asegurando que los movimientos de activos se reflejen en la ejecución presupuestaria. Sirve para:

Integrar los movimientos patrimoniales en el control presupuestario institucional.

Evitar omisiones entre el sistema contable y el sistema de ejecución del gasto.

Facilitar conciliaciones entre contabilidad patrimonial y presupuestaria.

Asegurar que los activos impacten correctamente en los reportes de ejecución financiera.`,
          pasos: [
            {
              label: "Acceder al módulo Transferir ETES",
              description:
                "Desde el menú Operaciones Contables, selecciona la opción Transferir ETES para iniciar el proceso.",
            },
            {
              label: "Seleccionar el período contable",
              description:
                "Indica el mes y año de los comprobantes que deseas transferir al sistema ETES. Verifica que estén posteados.",
            },
            {
              label: "Ejecutar la transferencia",
              description:
                "Haz clic en Transferir. El sistema enviará los comprobantes al módulo ETES, marcándolos como transferidos.",
            },
            {
              label: "Verificar estado de transferencia",
              description:
                "Confirma que los comprobantes aparecen como transferidos en el sistema ETES. Revisa si hubo errores o rechazos.",
            },
            {
              label: "Imprimir reporte de transferencia",
              description:
                "Opcionalmente, puedes imprimir o exportar el reporte de comprobantes transferidos para respaldo presupuestario.",
            },
          ],
        },
      ],
    },
  ],
};

// Aplicar cargos a todas las acciones
export const zunaft = addCargosToModule(zunaftBase);
