export const zunst = {
  mNombre: "ZUNstock Almacén",
  mImage: "/st",
  mResumen: `ZUNstock es un sistema integral de gestión de inventarios que registra,
   controla y audita cada movimiento de productos —entradas, salidas, transferencias,
    compras, ventas, ajustes y cierres— garantizando trazabilidad, consistencia entre inventario físico 
    y sistema, y reportes claros para logística, contabilidad y auditoría.`,
  mSecciones: [
    {
      id: 1,
      sNombre: "Nomencladores",
      acciones: [
        {
          id: 21,
          aNombre: "Configuración de Parámetros Generales",
          aResumen:
            "Define el comportamiento base del sistema ZUNstock para productos, almacenes, documentos y usuarios.",
          pasos: [
            {
              label: "Acceder al módulo de Parámetros Generales",
              description:
                "Desde el menú principal, ir a Configuración > Parámetros Generales.",
            },
            {
              label: "Revisar cada grupo de parámetros",
              description:
                "Explora las secciones de productos, almacén, documentos, usuarios e integración.",
            },
            {
              label: "Modificar según políticas institucionales",
              description:
                "Activa o desactiva opciones según las reglas operativas de tu entidad.",
            },
            {
              label: "Guardar y validar",
              description:
                "Haz clic en Guardar. El sistema aplicará los cambios en todos los módulos afectados.",
            },
          ],
        },
        {
          id: 22,
          aNombre: "Enlace Empresa/Moneda",
          aResumen: `Este módulo permite vincular cada empresa registrada en el sistema con una o más monedas de operación, asegurando que los movimientos de inventario se registren con la unidad monetaria correcta. Sirve para:

Establecer la moneda oficial de trabajo para cada empresa o unidad institucional.

Evitar errores en la valorización de productos por uso de monedas no autorizadas.

Facilitar la conversión de valores y la generación de reportes financieros por empresa.

Permitir operaciones multimoneda en instituciones que manejan inventario en diferentes divisas.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Empresa/Moneda",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Enlace Empresa/Moneda.",
            },
            {
              label: "Seleccionar la empresa",
              description:
                "Busca y selecciona la empresa registrada en el sistema que deseas vincular con una moneda.",
            },
            {
              label: "Asignar moneda de operación",
              description:
                "Selecciona la moneda principal (ej. CUP, USD, EUR) que utilizará la empresa para sus operaciones de inventario.",
            },
            {
              label: "Definir moneda secundaria (si aplica)",
              description:
                "Si la empresa opera en más de una moneda, puedes asignar una moneda secundaria para operaciones específicas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta moneda en todos los movimientos y reportes vinculados a la empresa.",
            },
          ],
        },
        {
          id: 23,
          aNombre: "Cuentas Especiales",
          aResumen: `Este módulo permite configurar las cuentas contables que se utilizarán automáticamente en operaciones específicas del sistema, como ajustes, pérdidas, sobrantes o consumos. Sirve para:

Asegurar que cada operación técnica tenga su correspondencia contable definida.

Evitar errores por falta de codificación contable en movimientos críticos.

Facilitar la generación automática de comprobantes contables desde los módulos de inventario.

Permitir trazabilidad financiera de operaciones no estándar como ajustes por auditoría o regularización.`,
          pasos: [
            {
              label: "Acceder al módulo Cuentas Especiales",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Cuentas Especiales.",
            },
            {
              label: "Seleccionar tipo de operación",
              description:
                "Elige la operación que deseas vincular (ej. Ajuste por pérdida, Consumo interno, Regularización por sobrante).",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente desde el catálogo institucional. Puedes definir más de una si aplica.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará estas cuentas automáticamente al generar comprobantes desde los módulos operativos.",
            },
          ],
        },
        {
          id: 24,
          aNombre: "Unidades de Medida",
          aResumen: `Este módulo permite registrar y gestionar las unidades de medida utilizadas para cuantificar productos en el sistema, como unidades, kilogramos, litros, metros, etc. Sirve para:

Establecer criterios uniformes de medición en ingresos, salidas y ajustes de inventario.

Evitar errores por uso de unidades inconsistentes o no definidas.

Facilitar el control de stock por tipo de producto y su presentación física.

Permitir reportes precisos por cantidad, volumen o peso según la unidad registrada.`,
          pasos: [
            {
              label: "Acceder al módulo Unidades de Medida",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Unidades de Medida.",
            },
            {
              label: "Agregar nueva unidad",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la unidad (ej. Unidad, Kg, Litro), su abreviatura y descripción si aplica.",
            },
            {
              label: "Definir tipo de unidad",
              description:
                "Selecciona si la unidad corresponde a cantidad, peso, volumen, longitud u otro tipo según el producto.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar la unidad. Estará disponible en la ficha de productos y en los módulos operativos.",
            },
          ],
        },
        {
          id: 25,
          aNombre: "Especialidad de Proveedores",
          aResumen: `Este módulo permite registrar y gestionar las especialidades técnicas o comerciales que se asignan a los proveedores institucionales. Sirve para:

Clasificar a los proveedores según el tipo de producto, insumo o servicio que ofrecen.

Facilitar la selección de proveedores adecuados en procesos de ingreso, reposición o ajuste de inventario.

Evitar errores al vincular proveedores con productos fuera de su especialidad.

Mejorar la trazabilidad de compras y servicios por categoría técnica.`,
          pasos: [
            {
              label: "Acceder al módulo Especialidad de Proveedores",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Especialidad de Proveedores.",
            },
            {
              label: "Agregar nueva especialidad",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la especialidad (ej. Material de Oficina, Equipos Médicos, Repuestos Industriales) y una descripción si aplica.",
            },
            {
              label: "Editar o eliminar especialidades existentes",
              description:
                "Selecciona una especialidad registrada y haz clic en Editar para modificarla o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Las especialidades estarán disponibles al registrar o editar proveedores.",
            },
          ],
        },
        {
          id: 26,
          aNombre: "Clientes",
          aResumen: `Este módulo permite registrar clientes institucionales o externos que reciben productos desde el almacén, ya sea por consumo interno, distribución o entrega. Sirve para:

Identificar claramente a las áreas, dependencias o terceros que reciben productos.

Evitar errores en la asignación de salidas por falta de identificación del receptor.

Facilitar la trazabilidad de entregas por cliente, sede o unidad organizativa.

Permitir reportes por consumo o distribución según cliente registrado.`,
          pasos: [
            {
              label: "Acceder al módulo Clientes",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Clientes para visualizar los registros existentes.",
            },
            {
              label: "Agregar nuevo cliente",
              description:
                "Haz clic en Agregar. Ingresa el nombre del cliente, código institucional, tipo (interno o externo), dirección y datos de contacto si aplica.",
            },
            {
              label: "Asignar unidad organizativa o sede",
              description:
                "Si el cliente pertenece a la institución, vincúlalo con su unidad organizativa o sede para facilitar la trazabilidad.",
            },
            {
              label: "Editar o eliminar clientes existentes",
              description:
                "Selecciona un cliente registrado y haz clic en Editar para modificar sus datos o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Los clientes estarán disponibles en los módulos de salida, asignación y distribución de productos.",
            },
          ],
        },
        {
          id: 27,
          aNombre: "Conceptos de Gastos",
          aResumen: `Este módulo permite registrar y gestionar los conceptos que justifican la salida de productos del almacén, como consumo interno, distribución, reposición o baja. Sirve para:

Clasificar las salidas de productos según su finalidad operativa o administrativa.

Evitar ambigüedades al registrar movimientos sin causa definida.

Facilitar reportes por tipo de gasto, área usuaria o frecuencia de consumo.

Permitir trazabilidad institucional sobre cómo y por qué se utilizan los productos almacenados.`,
          pasos: [
            {
              label: "Acceder al módulo Conceptos de Gastos",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Conceptos de Gastos.",
            },
            {
              label: "Agregar nuevo concepto",
              description:
                "Haz clic en Agregar. Ingresa el nombre del concepto (ej. Consumo Interno, Entrega a Cliente, Reposición Técnica) y una descripción si aplica.",
            },
            {
              label: "Definir tipo de salida",
              description:
                "Indica si el concepto corresponde a una salida operativa, administrativa, técnica o por baja.",
            },
            {
              label: "Editar o eliminar conceptos existentes",
              description:
                "Selecciona un concepto registrado y haz clic en Editar para modificarlo o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Los conceptos estarán disponibles en los módulos de salida y distribución de productos.",
            },
          ],
        },
        {
          id: 28,
          aNombre: "Temporadas",
          aResumen: `Este módulo permite definir los períodos operativos en los que se registrarán los movimientos de inventario. Sirve para:

Delimitar el uso del sistema por año, trimestre u otro ciclo definido por la institución.

Evitar registros fuera de temporada o en períodos cerrados.

Facilitar el control, la auditoría y los reportes por período activo.

Permitir la apertura y cierre de temporadas según la política institucional.`,
          pasos: [
            {
              label: "Acceder al módulo Temporadas",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Temporadas.",
            },
            {
              label: "Agregar nueva temporada",
              description:
                "Haz clic en Agregar. Ingresa el nombre del período (ej. 2025), la fecha de inicio y la fecha de cierre.",
            },
            {
              label: "Activar temporada",
              description:
                "Marca la temporada como activa para permitir operaciones dentro de ese rango de fechas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar la temporada. El sistema aplicará esta estructura temporal en todos los módulos operativos.",
            },
          ],
        },
        {
          id: 29,
          aNombre: "Enlaces de Temporadas",
          aResumen: `Este módulo permite vincular cada temporada con parámetros clave como almacenes, monedas, cuentas contables y responsables. Sirve para:

Asegurar que cada operación dentro de una temporada utilice los parámetros correctos.

Evitar errores por falta de asociación entre temporada y configuración operativa.

Facilitar la trazabilidad contable y técnica por período.

Permitir que cada temporada tenga sus propios enlaces funcionales definidos.`,
          pasos: [
            {
              label: "Acceder al módulo Enlaces de Temporadas",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Enlaces de Temporadas.",
            },
            {
              label: "Seleccionar temporada activa",
              description:
                "Elige la temporada que deseas vincular con parámetros operativos.",
            },
            {
              label: "Definir enlaces funcionales",
              description:
                "Asocia la temporada con almacenes, monedas, cuentas contables, responsables y otros parámetros necesarios.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema aplicará estos vínculos automáticamente en las operaciones de esa temporada.",
            },
          ],
        },
        {
          id: 30,
          aNombre: "Clasificación",
          aResumen: `Este módulo permite definir las categorías o grupos funcionales en los que se organizan los productos del almacén. Sirve para:

Facilitar la búsqueda, el ingreso y la salida de productos por tipo o familia.

Evitar errores al registrar productos sin categoría definida.

Permitir reportes por grupo funcional, tipo de uso o área técnica.

Mejorar la trazabilidad operativa y administrativa del inventario.`,
          pasos: [
            {
              label: "Acceder al módulo Clasificación",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Clasificación.",
            },
            {
              label: "Agregar nueva clasificación",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la clasificación (ej. Material de Oficina, Insumos Médicos, Herramientas) y una descripción si aplica.",
            },
            {
              label: "Definir tipo o familia",
              description:
                "Puedes establecer si la clasificación corresponde a una familia técnica, tipo de producto o categoría funcional.",
            },
            {
              label: "Editar o eliminar clasificaciones existentes",
              description:
                "Selecciona una clasificación registrada y haz clic en Editar para modificarla o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Las clasificaciones estarán disponibles al registrar productos y en los reportes operativos.",
            },
          ],
        },
        {
          id: 31,
          aNombre: "Impuesto",
          aResumen: `Este módulo permite registrar y gestionar los impuestos aplicables a productos o movimientos dentro del sistema ZUNstock. Sirve para:

Definir tasas impositivas como IVA, aranceles u otros cargos según normativa vigente.

Evitar errores en la valorización de productos por omisión de impuestos.

Facilitar la generación de reportes financieros con valores netos y brutos.

Permitir que los comprobantes reflejen correctamente el impacto tributario de cada operación.`,
          pasos: [
            {
              label: "Acceder al módulo Impuesto",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Impuesto.",
            },
            {
              label: "Agregar nuevo impuesto",
              description:
                "Haz clic en Agregar. Ingresa el nombre del impuesto (ej. IVA), el porcentaje aplicable y una descripción si aplica.",
            },
            {
              label: "Definir aplicación del impuesto",
              description:
                "Indica si el impuesto se aplica por producto, por operación (ej. ingreso, salida) o por proveedor.",
            },
            {
              label: "Editar o eliminar impuestos existentes",
              description:
                "Selecciona un impuesto registrado y haz clic en Editar para modificarlo o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. El sistema aplicará el impuesto en los módulos operativos según la configuración definida.",
            },
          ],
        },
        {
          id: 32,
          aNombre: "Almacén y Parámetros",
          aResumen: `Este módulo permite registrar los almacenes físicos donde se gestionan los productos, así como definir parámetros operativos específicos para cada uno. Sirve para:

Establecer la estructura física de almacenamiento por sede, zona o tipo de producto.

Evitar errores en la asignación de productos a almacenes no configurados.

Permitir que cada almacén tenga sus propias reglas de operación, responsables y ubicaciones.

Facilitar la trazabilidad por almacén en ingresos, salidas, ajustes y transferencias.`,
          pasos: [
            {
              label: "Acceder al módulo Almacén y Parámetros",
              description:
                "Desde el menú principal, selecciona la opción Almacén > Almacén y Parámetros.",
            },
            {
              label: "Agregar nuevo almacén",
              description:
                "Haz clic en Agregar. Ingresa el nombre del almacén, código, sede, tipo (central, técnico, de consumo) y descripción.",
            },
            {
              label: "Definir parámetros operativos",
              description:
                "Configura si el almacén permite transferencias, si requiere ubicación obligatoria, si tiene responsable asignado, y otras reglas específicas.",
            },
            {
              label: "Asignar responsable del almacén",
              description:
                "Selecciona el usuario responsable de las operaciones en ese almacén. Esto permite trazabilidad y control.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el almacén y sus parámetros. Estará disponible en todos los módulos operativos.",
            },
          ],
        },
        {
          id: 33,
          aNombre: "Proveedores y Especialidades",
          aResumen: `Este módulo permite registrar proveedores institucionales y vincularlos con una o más especialidades técnicas o comerciales. Sirve para:

Organizar los proveedores por tipo de producto o servicio que ofrecen.

Facilitar la selección de proveedores adecuados en procesos de ingreso, reposición o ajuste.

Evitar errores al asignar proveedores a productos fuera de su especialidad.

Mejorar la trazabilidad de compras y servicios por categoría técnica.`,
          pasos: [
            {
              label: "Acceder al módulo Proveedores",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Proveedores y Especialidades.",
            },
            {
              label: "Agregar nuevo proveedor",
              description:
                "Haz clic en Agregar. Ingresa los datos del proveedor: nombre, identificación fiscal, dirección, contacto y estado.",
            },
            {
              label: "Asignar especialidades",
              description:
                "Selecciona una o más especialidades previamente registradas que describan el tipo de productos o servicios que ofrece el proveedor.",
            },
            {
              label: "Editar o eliminar proveedores existentes",
              description:
                "Selecciona un proveedor registrado y haz clic en Editar para modificar sus datos o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Los proveedores estarán disponibles en los módulos de ingreso, ajuste y reposición de productos.",
            },
          ],
        },
        {
          id: 34,
          aNombre: "Ubicación de Productos",
          aResumen: `Este módulo permite registrar y asignar ubicaciones físicas dentro del almacén para cada producto, como zonas, estantes, niveles o contenedores. Sirve para:

Optimizar la organización interna del almacén y el proceso de búsqueda de productos.

Evitar errores en el picking, la preparación de pedidos y los movimientos internos.

Facilitar la trazabilidad física del inventario por ubicación específica.

Permitir reportes por zona, estante o nivel dentro de cada almacén.`,
          pasos: [
            {
              label: "Acceder al módulo Ubicación de Productos",
              description:
                "Desde el menú Almacén, selecciona la opción Ubicación de Productos.",
            },
            {
              label: "Seleccionar el producto",
              description:
                "Busca el producto por código o nombre. Haz clic sobre él para abrir su ficha de ubicación.",
            },
            {
              label: "Asignar ubicación física",
              description:
                "Selecciona el almacén correspondiente y define la ubicación específica (ej. Zona A, Estante 3, Nivel 2). Puedes usar códigos estructurados o etiquetas personalizadas.",
            },
            {
              label: "Guardar la asignación",
              description:
                "Haz clic en Aceptar para registrar la ubicación. El sistema actualizará los documentos de movimiento y los reportes de inventario.",
            },
          ],
        },
        {
          id: 35,
          aNombre: "Grupo, Familia y Subfamilia",
          aResumen: `Este módulo permite definir una estructura jerárquica para clasificar los productos del inventario en tres niveles: grupo, familia y subfamilia. Sirve para:

Organizar los productos por categorías técnicas, funcionales o administrativas.

Facilitar la búsqueda, el ingreso y la salida de productos por nivel de clasificación.

Evitar errores al registrar productos sin estructura definida.

Permitir reportes detallados por grupo, familia o subfamilia según el tipo de producto.`,
          pasos: [
            {
              label: "Acceder al módulo Grupo, Familia y Subfamilia",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Grupo, Familia y Subfamilia.",
            },
            {
              label: "Agregar nuevo grupo",
              description:
                "Haz clic en Agregar Grupo. Ingresa el nombre del grupo (ej. Medicamentos, Material de Oficina, Herramientas) y una descripción si aplica.",
            },
            {
              label: "Agregar familia dentro del grupo",
              description:
                "Selecciona el grupo correspondiente y haz clic en Agregar Familia. Ingresa el nombre de la familia (ej. Antibióticos, Papelería, Manuales) y su descripción.",
            },
            {
              label: "Agregar subfamilia dentro de la familia",
              description:
                "Selecciona la familia correspondiente y haz clic en Agregar Subfamilia. Ingresa el nombre de la subfamilia (ej. Penicilinas, Cuadernos, Llaves) y su descripción.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar la estructura. Estará disponible al registrar productos y en los reportes operativos.",
            },
          ],
        },
        {
          id: 36,
          aNombre: "Secciones",
          aResumen: `Este módulo permite registrar y gestionar las secciones internas del almacén, como áreas, zonas o bloques físicos donde se ubican productos. Sirve para:

Organizar el almacén en unidades funcionales que faciliten la ubicación y el control de productos.

Evitar errores en el registro de movimientos por falta de referencia física.

Permitir reportes por sección, zona o área operativa.

Mejorar la trazabilidad física del inventario y la eficiencia en el picking.`,
          pasos: [
            {
              label: "Acceder al módulo Secciones",
              description:
                "Desde el menú Almacén, selecciona la opción Secciones.",
            },
            {
              label: "Agregar nueva sección",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la sección (ej. Zona A, Área Técnica, Bloque 1), el código y una descripción si aplica.",
            },
            {
              label: "Asignar almacén correspondiente",
              description:
                "Selecciona el almacén al que pertenece la sección. Esto permite vincular la estructura física correctamente.",
            },
            {
              label: "Editar o eliminar secciones existentes",
              description:
                "Selecciona una sección registrada y haz clic en Editar para modificarla o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar la sección. Estará disponible al asignar ubicaciones físicas y en los reportes operativos.",
            },
          ],
        },
        {
          id: 37,
          aNombre: "Productos",
          aResumen: `Este módulo permite registrar todos los productos que serán gestionados en el sistema ZUNstock, incluyendo insumos, bienes de consumo, herramientas, equipos y otros. Sirve para:

Establecer la ficha técnica de cada producto con sus atributos clave.

Evitar errores en el ingreso, salida o ajuste por falta de codificación o clasificación.

Facilitar la trazabilidad por código, nombre, unidad de medida, clasificación y ubicación.

Permitir reportes por tipo de producto, familia, proveedor o ubicación física.`,
          pasos: [
            {
              label: "Acceder al módulo Productos",
              description:
                "Desde el menú Almacén, selecciona la opción Productos.",
            },
            {
              label: "Agregar nuevo producto",
              description:
                "Haz clic en Agregar. Ingresa el nombre, código, unidad de medida, clasificación (grupo, familia, subfamilia), tipo de control (por lote o serie), y descripción si aplica.",
            },
            {
              label: "Asignar proveedor y especialidad",
              description:
                "Selecciona el proveedor habitual y su especialidad técnica para facilitar la trazabilidad.",
            },
            {
              label: "Definir ubicación física",
              description:
                "Asocia el producto con su ubicación dentro del almacén (zona, estante, nivel) si aplica.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el producto. Estará disponible en los módulos de ingreso, salida, ajuste y reportes.",
            },
          ],
        },
        {
          id: 38,
          aNombre: "Conversión de Unidad de Medida",
          aResumen: `Este módulo permite registrar equivalencias entre diferentes unidades de medida para un mismo producto, como cajas a unidades, litros a mililitros, etc. Sirve para:

Facilitar el ingreso, salida o ajuste de productos en distintas presentaciones.

Evitar errores de cálculo al convertir entre unidades mayores y menores.

Permitir que el sistema realice conversiones automáticas en movimientos y reportes.

Mejorar la trazabilidad y valorización de productos con múltiples unidades asociadas.`,
          pasos: [
            {
              label: "Acceder al módulo Conversión de Unidad de Medida",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Conversión de Unidad de Medida.",
            },
            {
              label: "Seleccionar producto o categoría",
              description:
                "Busca el producto o grupo de productos que requieren conversión entre unidades.",
            },
            {
              label: "Definir unidad base y unidad secundaria",
              description:
                "Selecciona la unidad principal (ej. Caja) y la unidad secundaria (ej. Unidad).",
            },
            {
              label: "Establecer factor de conversión",
              description:
                "Indica cuántas unidades secundarias equivalen a una unidad base (ej. 1 Caja = 12 Unidades).",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar la conversión. El sistema aplicará esta equivalencia en los módulos operativos.",
            },
          ],
        },
        {
          id: 39,
          aNombre: "Cambio de Código",
          aResumen: `Este módulo permite modificar el código principal de un producto registrado en el sistema, manteniendo su historial de movimientos, ubicación y trazabilidad. Sirve para:

Actualizar códigos institucionales por cambios normativos, migraciones o correcciones técnicas.

Evitar duplicidad de productos por errores en el registro inicial.

Preservar el historial de ingresos, salidas y ajustes sin pérdida de información.

Permitir que el nuevo código se aplique en todos los módulos operativos y reportes.`,
          pasos: [
            {
              label: "Acceder al módulo Cambio de Código",
              description:
                "Desde el menú Almacén, selecciona la opción Cambio de Código.",
            },
            {
              label: "Buscar el producto por código actual",
              description:
                "Ingresa el código vigente del producto que deseas modificar. Verifica que el producto esté activo.",
            },
            {
              label: "Ingresar nuevo código",
              description:
                "Escribe el nuevo código institucional que reemplazará al anterior. El sistema validará que no esté duplicado.",
            },
            {
              label: "Confirmar el cambio",
              description:
                "Revisa los datos del producto y haz clic en Aceptar para aplicar el cambio. El sistema actualizará automáticamente todos los registros vinculados.",
            },
            {
              label: "Verificar trazabilidad",
              description:
                "Consulta los reportes de movimientos y ubicación para confirmar que el nuevo código se refleja correctamente.",
            },
          ],
        },
        {
          id: 40,
          aNombre: "Actualización de Cambio de Código",
          aResumen: `Este módulo permite revisar y actualizar los cambios de código realizados sobre productos registrados, asegurando que la trazabilidad y los vínculos operativos se mantengan intactos. Sirve para:

Verificar que el nuevo código se haya aplicado correctamente en todos los módulos.

Corregir errores en cambios de código que afecten la trazabilidad o la valorización.

Revertir cambios si el nuevo código fue asignado incorrectamente.

Auditar el historial de modificaciones para control técnico o contable.`,
          pasos: [
            {
              label: "Acceder al módulo Actualización de Cambio de Código",
              description:
                "Desde el menú Almacén, selecciona la opción Actualización de Cambio de Código.",
            },
            {
              label: "Buscar el producto por código nuevo o anterior",
              description:
                "Ingresa el código actual o el código anterior para localizar el producto afectado.",
            },
            {
              label: "Revisar historial de cambio",
              description:
                "Consulta la fecha, usuario responsable y motivo del cambio registrado. Verifica si el nuevo código está activo.",
            },
            {
              label: "Actualizar o revertir el código",
              description:
                "Si el cambio fue incorrecto, puedes revertir al código anterior o asignar uno nuevo. El sistema validará duplicados y trazabilidad.",
            },
            {
              label: "Guardar la actualización",
              description:
                "Haz clic en Aceptar para aplicar los cambios. El sistema actualizará automáticamente los registros vinculados.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      sNombre: "Enl(Nomencladores)",
      acciones: [
        {
          id: 41,
          aNombre: "Enlace Almacén con Grupo",
          aResumen: `Este módulo permite vincular cada almacén con los grupos de productos que está autorizado a gestionar. Sirve para:

Restringir el uso de productos a los almacenes correspondientes según su naturaleza o función.

Evitar errores al ingresar, transferir o ajustar productos en almacenes no habilitados para ese grupo.

Facilitar la trazabilidad operativa por almacén y grupo funcional.

Permitir reportes y validaciones por almacén según los grupos asignados.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Almacén con Grupo",
              description:
                "Desde el menú Enlaces con Nomencladores, selecciona la opción Almacén con Grupo.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Elige el almacén que deseas vincular con uno o más grupos de productos.",
            },
            {
              label: "Asignar grupos permitidos",
              description:
                "Marca los grupos de productos que el almacén está autorizado a recibir, almacenar y despachar.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema validará estos vínculos en los módulos de ingreso, salida y ajuste.",
            },
          ],
        },
        {
          id: 42,
          aNombre: "Enlace Almacén con Subfamilia",
          aResumen: `Este módulo permite vincular cada almacén con las subfamilias específicas de productos que puede gestionar. Sirve para:

Restringir el uso de productos a nivel detallado dentro de cada almacén.

Evitar errores al ingresar o mover productos que no corresponden a la subfamilia autorizada.

Facilitar la trazabilidad operativa por almacén y subfamilia técnica.

Permitir reportes y validaciones más precisas por almacén según las subfamilias asignadas.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Almacén con Subfamilia",
              description:
                "Desde el menú Enlaces con Nomencladores, selecciona la opción Almacén con Subfamilia.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Elige el almacén que deseas vincular con una o más subfamilias de productos.",
            },
            {
              label: "Asignar subfamilias permitidas",
              description:
                "Marca las subfamilias que el almacén está autorizado a recibir, almacenar y despachar.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema validará estos vínculos en los módulos de ingreso, salida y ajuste.",
            },
          ],
        },
        {
          id: 43,
          aNombre: "Enlace Almacén con Sección",
          aResumen: `Este módulo permite vincular cada almacén con las secciones físicas que lo componen, como zonas, áreas o bloques. Sirve para:

Establecer la estructura interna del almacén y facilitar la organización de productos.

Evitar errores al asignar ubicaciones que no pertenecen al almacén seleccionado.

Permitir reportes por sección dentro de cada almacén.

Mejorar la trazabilidad física y operativa en los procesos de ingreso, salida y ajuste.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Almacén con Sección",
              description:
                "Desde el menú Enlaces con Nomencladores, selecciona la opción Almacén con Sección.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Elige el almacén que deseas vincular con una o más secciones internas.",
            },
            {
              label: "Asignar secciones disponibles",
              description:
                "Marca las secciones que pertenecen físicamente al almacén seleccionado. Puedes usar códigos o nombres descriptivos.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema validará esta estructura en los módulos de ubicación y movimientos internos.",
            },
          ],
        },
        {
          id: 44,
          aNombre: "Enlace Almacén con Proveedores",
          aResumen: `Este módulo permite vincular cada almacén con los proveedores que están autorizados a abastecerlo, según su especialidad o ubicación. Sirve para:

Restringir el ingreso de productos a proveedores válidos para cada almacén.

Evitar errores al registrar compras o ingresos desde proveedores no autorizados.

Facilitar la trazabilidad por almacén y proveedor en los reportes operativos.

Permitir validaciones automáticas en los módulos de ingreso, reposición y ajuste.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Almacén con Proveedores",
              description:
                "Desde el menú Enlaces con Nomencladores, selecciona la opción Almacén con Proveedores.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Elige el almacén que deseas vincular con uno o más proveedores.",
            },
            {
              label: "Asignar proveedores autorizados",
              description:
                "Marca los proveedores que están habilitados para abastecer ese almacén, según su especialidad o contrato.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema validará esta relación en los módulos de ingreso y reposición.",
            },
          ],
        },
        {
          id: 45,
          aNombre: "Enlace Almacén–Sección–Producto",
          aResumen: `Este módulo permite vincular productos específicos con secciones físicas dentro de un almacén determinado. Sirve para:

Definir con precisión dónde se ubica cada producto dentro del almacén.

Evitar errores al asignar ubicaciones que no corresponden al producto o al almacén.

Facilitar el picking, la reposición y los ajustes físicos por ubicación exacta.

Permitir reportes por producto, sección y almacén con trazabilidad completa.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Almacén–Sección–Producto",
              description:
                "Desde el menú Enlaces con Nomencladores, selecciona la opción Almacén–Sección–Producto.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Elige el almacén donde se encuentra el producto que deseas vincular.",
            },
            {
              label: "Seleccionar sección física",
              description:
                "Elige la sección interna del almacén (ej. Zona A, Estante 3) donde se ubica el producto.",
            },
            {
              label: "Seleccionar producto",
              description:
                "Busca el producto por código o nombre y selecciónalo para vincularlo con la sección elegida.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema validará esta ubicación en los módulos de ingreso, salida y ajuste.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Enl(Contables)",
      acciones: [
        {
          id: 1,
          aNombre: "Enlace Sección/Subfamilia con Cuenta Contable",
          aResumen: `Este módulo permite vincular cada sección física del almacén y cada subfamilia de productos con una cuenta contable específica. Sirve para:

Asignar cuentas contables por ubicación y tipo de producto, facilitando la integración con el sistema financiero.

Evitar errores en la contabilización de ingresos, salidas y ajustes por falta de vínculo contable.

Permitir reportes contables por sección, subfamilia y almacén con trazabilidad completa.

Automatizar la generación de asientos contables desde los movimientos operativos.`,
          pasos: [
            {
              label:
                "Acceder al módulo Enlace Sección/Subfamilia con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables con Almacén, selecciona la opción Sección/Subfamilia con Cuenta Contable.",
            },
            {
              label: "Seleccionar almacén y sección",
              description:
                "Elige el almacén y la sección física que deseas vincular con una cuenta contable.",
            },
            {
              label: "Seleccionar subfamilia de productos",
              description:
                "Elige la subfamilia que opera en esa sección y que requiere trazabilidad contable.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 1101 – Inventario de Material Médico) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los movimientos operativos y reportes contables.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Enlace Faltante/Sobrante con Cuenta Contable",
          aResumen: `Este módulo permite vincular los ajustes por faltantes y sobrantes detectados en el inventario con cuentas contables específicas. Sirve para:

Registrar correctamente el impacto contable de las diferencias físicas encontradas en el almacén.

Evitar errores en la contabilización de ajustes por falta de vínculo contable.

Permitir reportes contables por tipo de ajuste y almacén.

Automatizar la generación de asientos contables en procesos de auditoría o regularización.`,
          pasos: [
            {
              label:
                "Acceder al módulo Enlace Faltante/Sobrante con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables con Almacén, selecciona la opción Faltante/Sobrante con Cuenta Contable.",
            },
            {
              label: "Seleccionar tipo de ajuste",
              description:
                "Elige si deseas vincular un faltante o un sobrante detectado en el inventario.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Elige el almacén donde se aplicará el ajuste contable.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 6102 – Pérdidas por Faltantes, 4103 – Ingresos por Sobrantes).",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de ajuste y reportes contables.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Enlace Arancel con Cuenta Contable",
          aResumen: `Este módulo permite vincular cada tipo de arancel registrado en el sistema con una cuenta contable específica. Sirve para:

Registrar correctamente el impacto contable de los cargos arancelarios aplicados a productos.

Evitar errores en la valorización contable por omisión o duplicación de aranceles.

Permitir reportes financieros por tipo de arancel y cuenta contable asociada.

Automatizar la generación de asientos contables en procesos de ingreso o importación de productos.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Arancel con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables con Almacén, selecciona la opción Arancel con Cuenta Contable.",
            },
            {
              label: "Seleccionar tipo de arancel",
              description:
                "Elige el arancel registrado previamente (ej. IVA de importación, arancel aduanal) que deseas vincular.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 5104 – Cargos por Importación) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de ingreso y valorización contable.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Enlace Flete con Cuenta Contable",
          aResumen: `Este módulo permite vincular los costos de flete asociados a productos o movimientos con una cuenta contable específica. Sirve para:

Registrar correctamente el impacto contable del transporte de mercancías.

Evitar errores en la valorización contable por omisión o duplicación de costos logísticos.

Permitir reportes financieros por tipo de gasto logístico y almacén.

Automatizar la generación de asientos contables en procesos de ingreso, traslado o recepción de productos.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Flete con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables con Almacén, selecciona la opción Flete con Cuenta Contable.",
            },
            {
              label: "Seleccionar tipo de flete",
              description:
                "Elige el tipo de flete registrado previamente (ej. transporte terrestre, aéreo, marítimo) que deseas vincular.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 5201 – Gastos de Transporte) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de ingreso, traslado y valorización contable.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Enlace Manipulación con Cuenta Contable",
          aResumen: `Este módulo permite vincular los costos de manipulación asociados a productos o movimientos internos con una cuenta contable específica. Sirve para:

Registrar correctamente el impacto contable de tareas como embalaje, etiquetado, reubicación o preparación de productos.

Evitar errores en la valorización contable por omisión de costos operativos internos.

Permitir reportes financieros por tipo de manipulación y almacén.

Automatizar la generación de asientos contables en procesos de ingreso, traslado, ajuste o salida.`,
          pasos: [
            {
              label:
                "Acceder al módulo Enlace Manipulación con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables con Almacén, selecciona la opción Manipulación con Cuenta Contable.",
            },
            {
              label: "Seleccionar tipo de manipulación",
              description:
                "Elige el tipo de manipulación registrada previamente (ej. reempaque, etiquetado, consolidación) que deseas vincular.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 5302 – Costos de Manipulación Interna) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de movimiento y valorización contable.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Enlace Embalaje con Cuenta Contable",
          aResumen: `Este módulo permite vincular los costos de embalaje aplicables a productos o movimientos con una cuenta contable específica. Sirve para:

Registrar correctamente el impacto contable de materiales y tareas de embalaje.

Evitar errores en la valorización contable por omisión de costos logísticos.

Permitir reportes financieros por tipo de gasto de embalaje y almacén.

Automatizar la generación de asientos contables en procesos de ingreso, preparación o salida de productos.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Embalaje con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables con Almacén, selecciona la opción Embalaje con Cuenta Contable.",
            },
            {
              label: "Seleccionar tipo de embalaje",
              description:
                "Elige el tipo de embalaje registrado previamente (ej. caja, envoltura, paletizado) que deseas vincular.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 5303 – Costos de Embalaje) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de ingreso, salida y valorización contable.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Enlace Proveedor con Cuenta Contable",
          aResumen: `Este módulo permite vincular cada proveedor registrado en el sistema con una cuenta contable específica, independientemente del almacén. Sirve para:

Registrar correctamente el impacto contable de las compras y servicios recibidos por proveedor.

Evitar errores en la contabilización por falta de vínculo contable directo.

Permitir reportes financieros por proveedor y cuenta contable asociada.

Automatizar la generación de asientos contables en procesos de ingreso, facturación y pago.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Proveedor con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables sin Almacén, selecciona la opción Proveedor con Cuenta Contable.",
            },
            {
              label: "Seleccionar proveedor",
              description:
                "Elige el proveedor registrado que deseas vincular con una cuenta contable.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 2101 – Cuentas por Pagar a Proveedores) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de ingreso, facturación y pagos.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Enlace Cliente con Cuenta Contable",
          aResumen: `Este módulo permite vincular cada cliente registrado en el sistema con una cuenta contable específica, independientemente del almacén. Sirve para:

Registrar correctamente el impacto contable de las salidas, entregas o ventas realizadas a cada cliente.

Evitar errores en la contabilización por falta de vínculo contable directo.

Permitir reportes financieros por cliente y cuenta contable asociada.

Automatizar la generación de asientos contables en procesos de salida, facturación y cobranza.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Cliente con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables sin Almacén, selecciona la opción Cliente con Cuenta Contable.",
            },
            {
              label: "Seleccionar cliente",
              description:
                "Elige el cliente registrado que deseas vincular con una cuenta contable.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 1301 – Cuentas por Cobrar a Clientes) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de salida, facturación y cobranza.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Enlace Concepto de Gasto con Cuenta Contable",
          aResumen: `Este módulo permite vincular cada concepto de gasto registrado en el sistema con una cuenta contable específica, independientemente del almacén. Sirve para:

Registrar correctamente el impacto contable de gastos operativos, administrativos o logísticos.

Evitar errores en la contabilización por falta de vínculo contable directo.

Permitir reportes financieros por concepto de gasto y cuenta contable asociada.

Automatizar la generación de asientos contables en procesos de ingreso, ajuste o salida.`,
          pasos: [
            {
              label:
                "Acceder al módulo Enlace Concepto de Gasto con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables sin Almacén, selecciona la opción Concepto de Gasto con Cuenta Contable.",
            },
            {
              label: "Seleccionar concepto de gasto",
              description:
                "Elige el concepto registrado previamente (ej. mantenimiento, transporte, embalaje) que deseas vincular.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 5401 – Gastos Operativos) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de movimiento y valorización contable.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Enlace Impuesto con Cuenta Contable",
          aResumen: `Este módulo permite vincular cada tipo de impuesto registrado en el sistema con una cuenta contable específica, sin depender de un almacén. Sirve para:

Registrar correctamente el impacto contable de impuestos aplicados en compras, ventas o ajustes.

Evitar errores en la contabilización por falta de vínculo contable directo.

Permitir reportes financieros por tipo de impuesto y cuenta contable asociada.

Automatizar la generación de asientos contables en procesos de ingreso, salida y facturación.`,
          pasos: [
            {
              label: "Acceder al módulo Enlace Impuesto con Cuenta Contable",
              description:
                "Desde el menú Enlaces Contables sin Almacén, selecciona la opción Impuesto con Cuenta Contable.",
            },
            {
              label: "Seleccionar tipo de impuesto",
              description:
                "Elige el impuesto registrado previamente (ej. IVA, impuesto específico, retención) que deseas vincular.",
            },
            {
              label: "Asignar cuenta contable",
              description:
                "Selecciona la cuenta contable correspondiente (ej. 2103 – Impuestos por Pagar, 5105 – Impuestos sobre Compras) desde el plan de cuentas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el enlace. El sistema aplicará esta relación en los módulos de ingreso, salida y facturación.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      sNombre: "Compras",
      acciones: [
        {
          id: 1,
          aNombre: "Ofertas a Proveedores",
          aResumen: `Este módulo permite gestionar el ciclo completo de ofertas comerciales recibidas de proveedores, desde la solicitud hasta la evaluación. Sirve para:

Solicitar cotizaciones a múltiples proveedores para productos específicos.

Registrar condiciones comerciales ofrecidas (precio, plazo, forma de pago, validez).

Comparar ofertas recibidas y seleccionar la más conveniente.

Generar órdenes de compra directamente desde la oferta seleccionada.`,
          pasos: [
            {
              label: "Acceder al módulo Ofertas a Proveedores",
              description:
                "Desde el menú Compras, selecciona la opción Ofertas a Proveedores.",
            },
            {
              label: "Crear solicitud de oferta",
              description:
                "Define los productos requeridos, cantidades, condiciones deseadas y proveedores a consultar.",
            },
            {
              label: "Enviar solicitud a proveedores",
              description:
                "El sistema permite imprimir o enviar electrónicamente la solicitud a los proveedores seleccionados.",
            },
            {
              label: "Registrar ofertas recibidas",
              description:
                "Por cada proveedor, ingresa los precios, condiciones, fechas de validez y observaciones.",
            },
            {
              label: "Comparar ofertas",
              description:
                "Utiliza la vista comparativa para analizar precios, plazos y condiciones entre proveedores.",
            },
            {
              label: "Seleccionar oferta ganadora",
              description:
                "Marca la oferta seleccionada. El sistema permite generar directamente la orden de compra desde esta selección.",
            },
            {
              label: "Guardar y cerrar proceso",
              description:
                "Confirma la selección y guarda el historial de ofertas para futuras auditorías o análisis.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Consulta de Ofertas",
          aResumen: `Este módulo permite revisar el historial de ofertas recibidas por proveedor, producto o solicitud. Sirve para:

Visualizar condiciones comerciales ofrecidas en procesos anteriores.

Comparar propuestas históricas por proveedor, producto o fecha.

Auditar decisiones de compra y justificar selecciones.

Facilitar análisis de precios y condiciones en futuras negociaciones.`,
          pasos: [
            {
              label: "Acceder al módulo Consulta de Ofertas",
              description:
                "Desde el menú Compras, selecciona la opción Consulta de Ofertas.",
            },
            {
              label: "Filtrar por criterio",
              description:
                "Selecciona filtros como proveedor, producto, fecha o estado de la oferta.",
            },
            {
              label: "Visualizar detalle de la oferta",
              description:
                "Consulta precios, condiciones, validez y observaciones registradas en cada propuesta.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Opcionalmente, puedes generar reportes para análisis o auditoría.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Cierre de Oferta",
          aResumen: `Este módulo permite cerrar formalmente una oferta comercial, dejando constancia de su resultado. Sirve para:

Finalizar el ciclo de evaluación y selección de propuestas.

Evitar modificaciones posteriores en ofertas ya procesadas.

Registrar el motivo de cierre (selección, rechazo, expiración).

Preservar trazabilidad y control documental en el proceso de compras.`,
          pasos: [
            {
              label: "Acceder al módulo Cierre de Oferta",
              description:
                "Desde el menú Compras, selecciona la opción Cierre de Oferta.",
            },
            {
              label: "Seleccionar oferta a cerrar",
              description:
                "Busca la oferta activa que deseas cerrar, por número o proveedor.",
            },
            {
              label: "Registrar motivo de cierre",
              description:
                "Indica si la oferta fue seleccionada, rechazada o vencida. Puedes agregar observaciones.",
            },
            {
              label: "Confirmar cierre",
              description:
                "Haz clic en Aceptar. El sistema bloqueará la edición y dejará constancia del estado final.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Órdenes de Compra",
          aResumen: `Este módulo permite generar, registrar y gestionar órdenes de compra hacia proveedores, formalizando el compromiso de adquisición. Sirve para:

Formalizar la compra de productos o servicios con condiciones previamente negociadas.

Controlar cantidades, precios, fechas de entrega y condiciones comerciales.

Evitar errores en la recepción y facturación por falta de referencia contractual.

Permitir trazabilidad completa desde la oferta hasta la recepción y contabilización.`,
          pasos: [
            {
              label: "Acceder al módulo Órdenes de Compra",
              description:
                "Desde el menú Compras, selecciona la opción Órdenes de Compra.",
            },
            {
              label: "Crear nueva orden",
              description:
                "Selecciona el proveedor, productos, cantidades, precios y condiciones. Puedes importar desde una oferta seleccionada.",
            },
            {
              label: "Definir condiciones comerciales",
              description:
                "Establece forma de pago, fecha de entrega, validez de precios, condiciones logísticas y observaciones.",
            },
            {
              label: "Asignar almacén de destino",
              description:
                "Indica el almacén donde se recepcionarán los productos. Esto activa validaciones posteriores.",
            },
            {
              label: "Confirmar y emitir orden",
              description:
                "Haz clic en Aceptar. El sistema genera el documento oficial y lo vincula con el proveedor y el flujo de recepción.",
            },
            {
              label: "Consultar y modificar órdenes",
              description:
                "Puedes revisar el estado de cada orden (pendiente, parcial, cerrada) y realizar ajustes si aún no ha sido recepcionada.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Consulta de Órdenes de Compra",
          aResumen: `Este módulo permite revisar el historial de órdenes de compra emitidas, filtrando por proveedor, producto, estado o fecha. Sirve para:

Visualizar el estado actual de cada orden (pendiente, parcial, cerrada).

Auditar condiciones comerciales pactadas y entregas realizadas.

Facilitar el seguimiento de compras por proveedor, producto o almacén.

Exportar reportes para análisis financiero o logístico.`,
          pasos: [
            {
              label: "Acceder al módulo Consulta de Órdenes de Compra",
              description:
                "Desde el menú Compras, selecciona la opción Consulta de Órdenes de Compra.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Selecciona criterios como proveedor, producto, número de orden, estado o rango de fechas.",
            },
            {
              label: "Visualizar detalle de la orden",
              description:
                "Consulta productos, cantidades, precios, condiciones comerciales y entregas realizadas.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Opcionalmente, puedes generar reportes para análisis o auditoría.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Cierre de Órdenes de Compra",
          aResumen: `Este módulo permite cerrar formalmente una orden de compra, dejando constancia de su estado final. Sirve para:

Finalizar el ciclo de compra y evitar modificaciones posteriores.

Registrar el motivo de cierre (entrega completa, cancelación, expiración).

Preservar trazabilidad y control documental en el proceso de compras.

Activar validaciones contables y logísticas posteriores al cierre.`,
          pasos: [
            {
              label: "Acceder al módulo Cierre de Órdenes de Compra",
              description:
                "Desde el menú Compras, selecciona la opción Cierre de Órdenes de Compra.",
            },
            {
              label: "Seleccionar orden a cerrar",
              description:
                "Busca la orden activa que deseas cerrar, por número o proveedor.",
            },
            {
              label: "Registrar motivo de cierre",
              description:
                "Indica si la orden fue completada, cancelada o vencida. Puedes agregar observaciones.",
            },
            {
              label: "Confirmar cierre",
              description:
                "Haz clic en Aceptar. El sistema bloqueará la edición y dejará constancia del estado final.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Generación de Órdenes de Compra por Stocks",
          aResumen: `Este módulo permite generar automáticamente órdenes de compra en función de los niveles de stock mínimos, máximos y puntos de reposición definidos por producto y almacén. Sirve para:

Evitar quiebres de stock mediante reposición oportuna.

Reducir el exceso de inventario al respetar límites máximos.

Agilizar el proceso de compras sin intervención manual.

Generar órdenes de compra listas para revisión o emisión.`,
          pasos: [
            {
              label:
                "Acceder al módulo Generación de Órdenes de Compra por Stocks",
              description:
                "Desde el menú Compras, selecciona la opción Generación de Órdenes por Stocks.",
            },
            {
              label: "Seleccionar almacén o grupo de almacenes",
              description:
                "Define el ámbito de análisis: un almacén específico o un conjunto de almacenes.",
            },
            {
              label: "Ejecutar análisis de stock",
              description:
                "El sistema compara el stock actual con los niveles mínimos y puntos de reposición definidos para cada producto.",
            },
            {
              label: "Revisar sugerencias de compra",
              description:
                "Se muestra una lista de productos a reponer, con cantidades sugeridas y proveedor habitual si está vinculado.",
            },
            {
              label: "Generar órdenes de compra",
              description:
                "Puedes generar órdenes automáticamente por proveedor, agrupando productos según reglas definidas.",
            },
            {
              label: "Confirmar y emitir órdenes",
              description:
                "Revisa las órdenes generadas, ajusta si es necesario y haz clic en Aceptar para emitirlas formalmente.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Entrada de Mercancía",
          aResumen: `Este módulo permite registrar la recepción física de productos comprados, vinculándolos con órdenes de compra y actualizando el stock. Sirve para:

Confirmar la llegada de productos al almacén.

Actualizar el inventario y activar la valorización contable.

Vincular la entrada con la orden de compra y el proveedor.

Registrar observaciones, diferencias o rechazos parciales.`,
          pasos: [
            {
              label: "Acceder al módulo Entrada de Mercancía",
              description:
                "Desde el menú Compras, selecciona la opción Entrada de Mercancía.",
            },
            {
              label: "Seleccionar orden de compra",
              description:
                "Busca la orden correspondiente. El sistema carga los productos y cantidades esperadas.",
            },
            {
              label: "Registrar cantidades recibidas",
              description:
                "Ingresa las cantidades efectivamente recibidas. Puedes registrar diferencias o rechazos.",
            },
            {
              label: "Asignar ubicación en almacén",
              description:
                "Define el almacén y sección donde se almacenarán los productos.",
            },
            {
              label: "Confirmar entrada",
              description:
                "Haz clic en Aceptar. El sistema actualiza el stock, genera el asiento contable y vincula la entrada con la orden.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Reversión de Entrada",
          aResumen: `Este módulo permite anular una entrada de mercancía previamente registrada, corrigiendo errores de recepción o duplicación. Sirve para:

Eliminar entradas mal registradas sin afectar el historial contable.

Reestablecer el stock y liberar la orden de compra para nueva recepción.

Evitar errores acumulativos en inventario y contabilidad.

Preservar trazabilidad mediante registro de motivo y usuario responsable.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Entrada",
              description:
                "Desde el menú Compras, selecciona la opción Reversión de Entrada.",
            },
            {
              label: "Seleccionar entrada a revertir",
              description:
                "Busca la entrada por número, proveedor o fecha. Verifica que no esté cerrada contablemente.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de cantidad, producto incorrecto, duplicación) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema elimina el movimiento, ajusta el stock y deja constancia del cambio.",
            },
          ],
        },
        {
          id: 11,
          aNombre: "Solicitud de Compra",
          aResumen: `Este módulo permite registrar solicitudes internas de compra, iniciando el flujo formal de adquisición. Sirve para:

Documentar necesidades de productos o servicios por parte de usuarios o áreas.

Activar el proceso de evaluación, cotización y aprobación.

Evitar compras no autorizadas o fuera de presupuesto.

Permitir trazabilidad desde la solicitud hasta la recepción y contabilización.`,
          pasos: [
            {
              label: "Acceder al módulo Solicitud de Compra",
              description:
                "Desde el menú Compras, selecciona la opción Solicitud de Compra.",
            },
            {
              label: "Crear nueva solicitud",
              description:
                "Indica el área solicitante, fecha, prioridad y observaciones generales.",
            },
            {
              label: "Agregar productos o servicios requeridos",
              description:
                "Selecciona productos desde el catálogo o ingresa servicios manualmente. Define cantidades y unidades.",
            },
            {
              label: "Asignar almacén de destino",
              description:
                "Indica el almacén donde se recepcionarán los productos una vez adquiridos.",
            },
            {
              label: "Guardar y enviar solicitud",
              description:
                "Haz clic en Aceptar. La solicitud queda registrada y puede ser consultada, modificada o utilizada para generar ofertas u órdenes.",
            },
          ],
        },
        {
          id: 12,
          aNombre: "Reversión de Compras",
          aResumen: `Este módulo permite revertir una compra registrada, eliminando sus efectos en inventario y contabilidad. Sirve para:

Corregir errores en la entrada de productos, facturación o condiciones comerciales.

Evitar acumulación de stock incorrecto o duplicación de asientos contables.

Liberar órdenes de compra para nueva recepción o ajuste.

Preservar trazabilidad mediante registro de motivo, usuario y fecha de reversión.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Compras",
              description:
                "Desde el menú Compras, selecciona la opción Reversión de Compras.",
            },
            {
              label: "Seleccionar compra a revertir",
              description:
                "Busca la compra por número de orden, proveedor o fecha. Verifica que no esté cerrada contablemente.",
            },
            {
              label: "Verificar documentos vinculados",
              description:
                "Confirma si la compra tiene entrada de mercancía, factura o asiento contable asociado. El sistema advierte si hay vínculos activos.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de producto, cantidad, precio, duplicación) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema elimina la compra, ajusta el stock, revierte los asientos contables y deja constancia del cambio.",
            },
          ],
        },
        {
          id: 13,
          aNombre: "Entrada del Informe de Recepción",
          aResumen: `Este módulo permite registrar el informe oficial de recepción de productos, validando cantidades, condiciones y observaciones. Sirve para:

Documentar la conformidad o disconformidad de la recepción física.

Registrar diferencias entre lo solicitado, lo facturado y lo recibido.

Activar procesos de devolución, ajuste o reclamo si corresponde.

Generar trazabilidad documental para auditoría y contabilidad.`,
          pasos: [
            {
              label: "Acceder al módulo Informe de Recepción",
              description:
                "Desde el menú Compras, selecciona la opción Informe de Recepción.",
            },
            {
              label: "Seleccionar orden de compra o entrada vinculada",
              description:
                "Busca la orden o entrada de mercancía que deseas validar mediante informe.",
            },
            {
              label: "Registrar cantidades recibidas y observaciones",
              description:
                "Confirma cantidades, condiciones del producto, embalaje y cualquier diferencia detectada.",
            },
            {
              label: "Indicar conformidad o disconformidad",
              description:
                "Marca si la recepción fue conforme o no. En caso de disconformidad, puedes activar procesos de devolución o reclamo.",
            },
            {
              label: "Guardar y emitir informe",
              description:
                "Haz clic en Aceptar. El sistema genera el documento de recepción, lo vincula con la orden y lo deja disponible para contabilidad y auditoría.",
            },
          ],
        },
        {
          id: 14,
          aNombre: "Anulación de Compras",
          aResumen: `Este módulo permite anular una compra registrada antes de que se haya recepcionado o facturado, eliminando su impacto operativo. Sirve para:

Cancelar órdenes de compra por error, duplicación o cambio de decisión.

Evitar que la orden genere movimientos de entrada o asientos contables.

Preservar trazabilidad mediante registro de motivo y usuario responsable.

Liberar productos y presupuestos para nuevas solicitudes o compras.`,
          pasos: [
            {
              label: "Acceder al módulo Anulación de Compras",
              description:
                "Desde el menú Compras, selecciona la opción Anulación de Compras.",
            },
            {
              label: "Seleccionar orden de compra a anular",
              description:
                "Busca la orden por número, proveedor o fecha. Verifica que no tenga entrada ni factura vinculada.",
            },
            {
              label: "Registrar motivo de anulación",
              description:
                "Indica el motivo (error, duplicación, cancelación por proveedor) y agrega observaciones si corresponde.",
            },
            {
              label: "Confirmar anulación",
              description:
                "Haz clic en Aceptar. El sistema elimina la orden, libera los productos y deja constancia del cambio.",
            },
          ],
        },
        {
          id: 15,
          aNombre: "Actualización de Compras",
          aResumen: `Este módulo permite modificar datos de una compra registrada, como cantidades, precios, condiciones o productos, siempre que no esté cerrada contablemente. Sirve para:

Corregir errores detectados antes de la recepción o facturación.

Actualizar condiciones pactadas con el proveedor (precio, forma de pago, fechas).

Evitar anulaciones innecesarias manteniendo la trazabilidad del proceso.

Preservar control documental mediante registro de usuario y motivo de cambio.`,
          pasos: [
            {
              label: "Acceder al módulo Actualización de Compras",
              description:
                "Desde el menú Compras, selecciona la opción Actualización de Compras.",
            },
            {
              label: "Seleccionar compra a actualizar",
              description:
                "Busca la orden por número, proveedor o fecha. Verifica que no esté cerrada ni recepcionada completamente.",
            },
            {
              label: "Modificar datos necesarios",
              description:
                "Puedes ajustar productos, cantidades, precios, condiciones comerciales, fechas o almacén de destino.",
            },
            {
              label: "Registrar motivo de actualización",
              description:
                "Indica el motivo del cambio (error, renegociación, ajuste operativo) y agrega observaciones.",
            },
            {
              label: "Confirmar actualización",
              description:
                "Haz clic en Aceptar. El sistema guarda los cambios, actualiza los vínculos y deja constancia del usuario y fecha.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Actualización de Stocks",
          aResumen: `Este módulo permite modificar directamente los niveles de stock de productos en un almacén, sin generar movimientos operativos. Sirve para:

Corregir diferencias detectadas en inventario físico versus sistema.

Regularizar cantidades por errores de digitación o procesos externos.

Evitar quiebres o excesos de stock por inconsistencias operativas.

Preservar trazabilidad mediante registro de motivo, usuario y fecha.`,
          pasos: [
            {
              label: "Acceder al módulo Actualización de Stocks",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Actualización de Stocks.",
            },
            {
              label: "Seleccionar producto y almacén",
              description:
                "Busca el producto por código o descripción y selecciona el almacén donde se encuentra.",
            },
            {
              label: "Visualizar stock actual",
              description:
                "El sistema muestra la cantidad registrada actualmente en el sistema para ese producto y almacén.",
            },
            {
              label: "Ingresar nueva cantidad",
              description:
                "Define la cantidad corregida que debe quedar registrada. El sistema calculará la diferencia.",
            },
            {
              label: "Registrar motivo de actualización",
              description:
                "Indica el motivo (error, ajuste físico, regularización) y agrega observaciones si corresponde.",
            },
            {
              label: "Confirmar actualización",
              description:
                "Haz clic en Aceptar. El sistema ajusta el stock y deja constancia del cambio en el historial de movimientos.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sNombre: "Transferencias",
      acciones: [
        {
          id: 16,
          aNombre: "Plantilla de Pedidos",
          aResumen: `Este módulo permite crear y gestionar plantillas de pedidos frecuentes a proveedores, agilizando el proceso de compras recurrentes. Sirve para:

Definir listas de productos que se solicitan periódicamente.

Establecer condiciones comerciales estándar (proveedor, forma de pago, plazos).

Evitar errores y ahorrar tiempo en la generación de pedidos.

Permitir trazabilidad y control sobre pedidos recurrentes.`,
          pasos: [
            {
              label: "Acceder al módulo Plantilla de Pedidos",
              description:
                "Desde el menú Compras, selecciona la opción Plantilla de Pedidos.",
            },
            {
              label: "Crear nueva plantilla",
              description:
                "Define el nombre de la plantilla, proveedor asociado y condiciones comerciales generales.",
            },
            {
              label: "Agregar productos",
              description:
                "Selecciona los productos desde el catálogo, indicando cantidades habituales y unidades de medida.",
            },
            {
              label: "Guardar plantilla",
              description:
                "Haz clic en Aceptar. La plantilla queda registrada y disponible para futuras órdenes.",
            },
            {
              label: "Generar pedido desde plantilla",
              description:
                "Selecciona la plantilla y el sistema genera automáticamente el pedido con los productos y condiciones definidas.",
            },
            {
              label: "Modificar o actualizar plantilla",
              description:
                "Puedes ajustar productos, cantidades o condiciones en cualquier momento para mantenerla vigente.",
            },
          ],
        },
        {
          id: 17,
          aNombre: "Generación Automática de Pedidos por Stocks",
          aResumen: `Este módulo permite generar pedidos de manera automática según los niveles de stock mínimos, máximos y puntos de reposición configurados para cada producto. Sirve para:

Evitar quiebres de stock mediante reposición automática.

Reducir exceso de inventario respetando límites máximos.

Agilizar el proceso de compras sin intervención manual.

Generar pedidos listos para revisión y emisión.`,
          pasos: [
            {
              label: "Acceder al módulo Generación Automática de Pedidos",
              description:
                "Desde el menú Compras, selecciona la opción Generación Automática de Pedidos por Stocks.",
            },
            {
              label: "Seleccionar almacén o grupo de almacenes",
              description:
                "Define el ámbito de análisis: un almacén específico o varios en conjunto.",
            },
            {
              label: "Ejecutar análisis de stock",
              description:
                "El sistema compara el stock actual con los niveles mínimos y puntos de reposición definidos para cada producto.",
            },
            {
              label: "Revisar sugerencias de pedidos",
              description:
                "Se muestra una lista de productos a reponer, con cantidades sugeridas y proveedor habitual si está vinculado.",
            },
            {
              label: "Generar pedidos automáticamente",
              description:
                "El sistema crea pedidos agrupados por proveedor, listos para revisión o emisión.",
            },
            {
              label: "Confirmar y emitir pedidos",
              description:
                "Revisa los pedidos generados, ajusta si es necesario y haz clic en Aceptar para emitirlos formalmente.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Pedidos a un Almacén Dado",
          aResumen: `Este módulo permite generar solicitudes de productos hacia un almacén específico, iniciando el flujo de traslado interno. Sirve para:

Formalizar pedidos internos de productos entre almacenes o áreas.

Controlar cantidades solicitadas y disponibles en el almacén origen.

Evitar quiebres de stock en áreas de consumo mediante reposición interna.

Mantener trazabilidad desde el pedido hasta la entrega y contabilización.`,
          pasos: [
            {
              label: "Acceder al módulo Pedidos a un Almacén Dado",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Pedidos a un Almacén Dado.",
            },
            {
              label: "Seleccionar almacén origen",
              description:
                "Indica el almacén desde el cual se solicitarán los productos.",
            },
            {
              label: "Definir almacén destino o área solicitante",
              description:
                "Selecciona el almacén o área interna que recibirá los productos.",
            },
            {
              label: "Agregar productos al pedido",
              description:
                "Busca los productos en el catálogo, define cantidades y unidades requeridas.",
            },
            {
              label: "Verificar disponibilidad",
              description:
                "El sistema valida si el almacén origen tiene stock suficiente para cubrir el pedido.",
            },
            {
              label: "Guardar y emitir pedido",
              description:
                "Haz clic en Aceptar. El sistema registra el pedido y lo vincula con el flujo de traslado interno.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Consulta de Pedidos a un Almacén Dado",
          aResumen: `Este módulo permite revisar el historial de pedidos internos realizados a un almacén específico. Sirve para:

Visualizar pedidos pendientes, atendidos o cerrados.

Auditar solicitudes internas y verificar cumplimiento.

Facilitar seguimiento de abastecimiento entre almacenes o áreas.

Exportar reportes para análisis logístico o administrativo.`,
          pasos: [
            {
              label: "Acceder al módulo Consulta de Pedidos",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Consulta de Pedidos a un Almacén Dado.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Selecciona criterios como almacén origen, almacén destino, producto, estado o rango de fechas.",
            },
            {
              label: "Visualizar detalle del pedido",
              description:
                "Consulta productos, cantidades solicitadas, estado de atención y observaciones registradas.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Opcionalmente, genera reportes para análisis o auditoría.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Cierre de Pedidos a un Almacén Dado",
          aResumen: `Este módulo permite cerrar formalmente un pedido interno, dejando constancia de su estado final. Sirve para:

Finalizar el ciclo de solicitud y evitar modificaciones posteriores.

Registrar el motivo de cierre (atendido, cancelado, vencido).

Preservar trazabilidad y control documental en el proceso interno.

Activar validaciones logísticas posteriores al cierre.`,
          pasos: [
            {
              label: "Acceder al módulo Cierre de Pedidos",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Cierre de Pedidos a un Almacén Dado.",
            },
            {
              label: "Seleccionar pedido a cerrar",
              description:
                "Busca el pedido activo que deseas cerrar, por número, almacén o fecha.",
            },
            {
              label: "Registrar motivo de cierre",
              description:
                "Indica si el pedido fue atendido, cancelado o vencido. Puedes agregar observaciones.",
            },
            {
              label: "Confirmar cierre",
              description:
                "Haz clic en Aceptar. El sistema bloquea la edición y deja constancia del estado final.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Entrada de Transferencias",
          aResumen: `Este módulo permite registrar la recepción de productos trasladados desde otro almacén, actualizando el stock en el almacén destino. Sirve para:

Confirmar la llegada de productos transferidos.

Actualizar inventario en el almacén receptor.

Mantener trazabilidad entre almacén origen y destino.

Registrar observaciones o diferencias en la recepción.`,
          pasos: [
            {
              label: "Acceder al módulo Entrada de Transferencias",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Entrada de Transferencias.",
            },
            {
              label: "Seleccionar transferencia pendiente",
              description:
                "Busca la transferencia registrada desde el almacén origen que está pendiente de recepción.",
            },
            {
              label: "Registrar cantidades recibidas",
              description:
                "Confirma las cantidades efectivamente recibidas. Puedes registrar diferencias o rechazos.",
            },
            {
              label: "Asignar ubicación en almacén destino",
              description:
                "Define la sección o ubicación donde se almacenarán los productos recibidos.",
            },
            {
              label: "Confirmar entrada",
              description:
                "Haz clic en Aceptar. El sistema actualiza el stock en el almacén destino y deja constancia del movimiento.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Reversión de Transferencias",
          aResumen: `Este módulo permite anular una transferencia registrada, corrigiendo errores de envío o recepción. Sirve para:

Eliminar movimientos mal registrados entre almacenes.

Reestablecer stock en origen y destino.

Evitar errores acumulativos en inventario.

Preservar trazabilidad mediante registro de motivo y usuario responsable.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Transferencias",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Reversión de Transferencias.",
            },
            {
              label: "Seleccionar transferencia a revertir",
              description:
                "Busca la transferencia por número, almacén origen/destino o fecha. Verifica que no esté cerrada.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de cantidad, producto incorrecto, duplicación) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema elimina el movimiento, ajusta el stock en ambos almacenes y deja constancia del cambio.",
            },
          ],
        },
        {
          id: 20,
          aNombre: "Registro de Movimientos",
          aResumen: `Este módulo permite registrar cualquier tipo de movimiento de inventario (entrada, salida, ajuste, transferencia). Sirve para:

Mantener trazabilidad de cambios en stock.

Controlar diferencias entre inventario físico y sistema.

Formalizar operaciones internas con motivo y usuario responsable.`,
          pasos: [
            {
              label: "Acceder al módulo Registro de Movimientos",
              description:
                "Desde el menú Movimientos, selecciona la opción Registro de Movimientos.",
            },
            {
              label: "Seleccionar tipo de movimiento",
              description:
                "Define si es entrada, salida, ajuste o transferencia.",
            },
            {
              label: "Indicar almacén origen/destino",
              description:
                "Selecciona el almacén involucrado en el movimiento.",
            },
            {
              label: "Agregar productos",
              description:
                "Busca productos en el catálogo, define cantidades y unidades.",
            },
            {
              label: "Registrar motivo",
              description:
                "Indica el motivo del movimiento (compra, devolución, ajuste, traslado).",
            },
            {
              label: "Confirmar registro",
              description:
                "Haz clic en Aceptar. El sistema actualiza stock y deja constancia del movimiento.",
            },
          ],
        },
        {
          id: 21,
          aNombre: "Consulta de Movimientos",
          aResumen: `Este módulo permite revisar el historial de movimientos registrados en el sistema. Sirve para:

Auditar entradas, salidas, ajustes y transferencias.

Filtrar movimientos por producto, almacén, usuario o fecha.

Exportar reportes para análisis logístico o contable.`,
          pasos: [
            {
              label: "Acceder al módulo Consulta de Movimientos",
              description:
                "Desde el menú Movimientos, selecciona la opción Consulta de Movimientos.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Selecciona criterios como tipo de movimiento, producto, almacén, usuario o rango de fechas.",
            },
            {
              label: "Visualizar detalle",
              description:
                "Consulta productos, cantidades, motivo y usuario responsable.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Opcionalmente, genera reportes para análisis o auditoría.",
            },
          ],
        },
        {
          id: 22,
          aNombre: "Cierre de Movimientos",
          aResumen: `Este módulo permite cerrar formalmente un movimiento registrado, bloqueando su edición y dejando constancia del estado final. Sirve para:

Finalizar operaciones y evitar modificaciones posteriores.

Registrar motivo de cierre (ejecutado, cancelado, corregido).

Mantener trazabilidad y control documental.`,
          pasos: [
            {
              label: "Acceder al módulo Cierre de Movimientos",
              description:
                "Desde el menú Movimientos, selecciona la opción Cierre de Movimientos.",
            },
            {
              label: "Seleccionar movimiento a cerrar",
              description:
                "Busca el movimiento activo por número, almacén o fecha.",
            },
            {
              label: "Registrar motivo de cierre",
              description:
                "Indica si el movimiento fue ejecutado, cancelado o corregido.",
            },
            {
              label: "Confirmar cierre",
              description:
                "Haz clic en Aceptar. El sistema bloquea la edición y deja constancia del estado final.",
            },
          ],
        },
        {
          id: 23,
          aNombre: "Reversión de Movimientos",
          aResumen: `Este módulo permite revertir un movimiento de inventario registrado, eliminando sus efectos en stock y contabilidad. Sirve para:

Corregir errores en entradas, salidas, ajustes o transferencias.

Evitar acumulación de diferencias en inventario por registros incorrectos.

Reestablecer el stock a su estado previo al movimiento.

Preservar trazabilidad mediante registro de motivo, usuario y fecha.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Movimientos",
              description:
                "Desde el menú Movimientos, selecciona la opción Reversión de Movimientos.",
            },
            {
              label: "Seleccionar movimiento a revertir",
              description:
                "Busca el movimiento por número, tipo, producto, almacén o fecha. Verifica que no esté cerrado contablemente.",
            },
            {
              label: "Verificar documentos vinculados",
              description:
                "Confirma si el movimiento tiene relación con pedidos, transferencias o facturas. El sistema advierte si hay vínculos activos.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de cantidad, producto incorrecto, duplicación, ajuste inválido) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema elimina el movimiento, ajusta el stock y deja constancia del cambio en el historial.",
            },
          ],
        },
        {
          id: 24,
          aNombre: "Gasto",
          aResumen: `Este módulo permite registrar salidas de inventario por consumo interno, sin relación con ventas o transferencias. Sirve para:

Controlar consumos internos de materiales, insumos o productos.

Mantener trazabilidad de salidas no comerciales.

Evitar diferencias en inventario por uso interno no documentado.

Generar reportes de gastos por área, proyecto o usuario.`,
          pasos: [
            {
              label: "Acceder al módulo Gasto",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Gasto.",
            },
            {
              label: "Seleccionar almacén origen",
              description:
                "Indica el almacén desde el cual se retirarán los productos para consumo interno.",
            },
            {
              label: "Agregar productos al gasto",
              description:
                "Busca los productos en el catálogo, define cantidades y unidades consumidas.",
            },
            {
              label: "Registrar área o proyecto",
              description:
                "Indica el área interna, departamento o proyecto que utilizará los productos.",
            },
            {
              label: "Registrar motivo del gasto",
              description:
                "Especifica el motivo (uso interno, mantenimiento, prueba, evento) y agrega observaciones.",
            },
            {
              label: "Confirmar gasto",
              description:
                "Haz clic en Aceptar. El sistema descuenta las cantidades del stock y deja constancia del movimiento.",
            },
          ],
        },
        {
          id: 25,
          aNombre: "Reversión de Gastos",
          aResumen: `Este módulo permite revertir un gasto registrado, eliminando sus efectos en inventario y contabilidad interna. Sirve para:

Corregir errores en consumos internos de productos.

Reestablecer stock en el almacén origen.

Evitar diferencias en inventario por registros incorrectos.

Preservar trazabilidad mediante registro de motivo, usuario y fecha.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Gastos",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Reversión de Gastos.",
            },
            {
              label: "Seleccionar gasto a revertir",
              description:
                "Busca el gasto por número, producto, área solicitante o fecha. Verifica que no esté cerrado contablemente.",
            },
            {
              label: "Verificar documentos vinculados",
              description:
                "Confirma si el gasto tiene relación con proyectos, áreas o reportes. El sistema advierte si hay vínculos activos.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de cantidad, producto incorrecto, duplicación) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema elimina el gasto, ajusta el stock y deja constancia del cambio en el historial.",
            },
          ],
        },
        {
          id: 26,
          aNombre: "Venta",
          aResumen: `Este módulo permite registrar salidas de inventario por ventas realizadas a clientes, vinculando productos, cantidades y condiciones comerciales. Sirve para:

Formalizar la salida de productos del almacén hacia clientes.

Mantener trazabilidad entre inventario, facturación y contabilidad.

Evitar diferencias en stock por ventas no documentadas.

Generar reportes de ventas por cliente, producto o período.`,
          pasos: [
            {
              label: "Acceder al módulo Venta",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Venta.",
            },
            {
              label: "Seleccionar cliente",
              description:
                "Indica el cliente al cual se le realizará la venta. Puedes buscarlo por nombre, código o NIT.",
            },
            {
              label: "Agregar productos a la venta",
              description:
                "Busca los productos en el catálogo, define cantidades, precios y condiciones comerciales.",
            },
            {
              label: "Registrar condiciones de la operación",
              description:
                "Indica forma de pago, fecha de entrega y observaciones si corresponde.",
            },
            {
              label: "Confirmar venta",
              description:
                "Haz clic en Aceptar. El sistema descuenta las cantidades del stock, vincula la operación con facturación y deja constancia del movimiento.",
            },
          ],
        },
        {
          id: 27,
          aNombre: "Reversión de Ventas",
          aResumen: `Este módulo permite revertir una venta registrada, eliminando sus efectos en inventario y contabilidad. Sirve para:

Corregir errores en la salida de productos por ventas.

Reestablecer stock en el almacén origen.

Evitar diferencias en inventario y facturación por registros incorrectos.

Preservar trazabilidad mediante registro de motivo, usuario y fecha.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión de Ventas",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Reversión de Ventas.",
            },
            {
              label: "Seleccionar venta a revertir",
              description:
                "Busca la venta por número, cliente, producto o fecha. Verifica que no esté cerrada contablemente.",
            },
            {
              label: "Verificar documentos vinculados",
              description:
                "Confirma si la venta tiene factura, asiento contable o entrega asociada. El sistema advierte si hay vínculos activos.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de cantidad, producto incorrecto, duplicación, cancelación) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema elimina la venta, ajusta el stock y deja constancia del cambio en el historial.",
            },
          ],
        },
        {
          id: 28,
          aNombre: "Anulación de Movimientos",
          aResumen: `Este módulo permite anular un movimiento registrado antes de su cierre contable, eliminando sus efectos en inventario. Sirve para:

Cancelar movimientos creados por error o duplicación.

Evitar que ajustes, entradas o salidas incorrectas afecten el stock.

Liberar registros para nueva operación correcta.

Preservar trazabilidad mediante registro de motivo y usuario responsable.`,
          pasos: [
            {
              label: "Acceder al módulo Anulación de Movimientos",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Anulación de Movimientos.",
            },
            {
              label: "Seleccionar movimiento a anular",
              description:
                "Busca el movimiento por número, tipo, producto o fecha. Verifica que no esté cerrado.",
            },
            {
              label: "Registrar motivo de anulación",
              description:
                "Indica el motivo (error, duplicación, cancelación) y agrega observaciones.",
            },
            {
              label: "Confirmar anulación",
              description:
                "Haz clic en Aceptar. El sistema elimina el movimiento y deja constancia del cambio en el historial.",
            },
          ],
        },
        {
          id: 29,
          aNombre: "Reversión entre Secciones",
          aResumen: `Este módulo permite revertir movimientos internos entre secciones de un mismo almacén, corrigiendo errores de ubicación o asignación. Sirve para:

Corregir traslados internos mal registrados.

Reestablecer stock en la sección origen y destino.

Evitar diferencias en inventario por errores de ubicación.

Mantener trazabilidad mediante registro de motivo, usuario y fecha.`,
          pasos: [
            {
              label: "Acceder al módulo Reversión entre Secciones",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Reversión entre Secciones.",
            },
            {
              label: "Seleccionar movimiento interno a revertir",
              description:
                "Busca el traslado entre secciones por número, producto o fecha.",
            },
            {
              label: "Verificar disponibilidad",
              description:
                "Confirma que el stock en la sección destino no haya sido ya utilizado o comprometido.",
            },
            {
              label: "Registrar motivo de reversión",
              description:
                "Indica el motivo (error de ubicación, duplicación, asignación incorrecta) y agrega observaciones.",
            },
            {
              label: "Confirmar reversión",
              description:
                "Haz clic en Aceptar. El sistema ajusta el stock en ambas secciones y deja constancia del cambio.",
            },
          ],
        },
        {
          id: 30,
          aNombre: "Actualización de Movimientos",
          aResumen: `Este módulo permite modificar datos de un movimiento de inventario registrado (entrada, salida, ajuste o transferencia), siempre que no esté cerrado contablemente. Sirve para:

Corregir errores detectados en cantidades, productos o almacenes.

Actualizar condiciones operativas antes del cierre definitivo.

Evitar anulaciones innecesarias manteniendo la trazabilidad del proceso.

Preservar control documental mediante registro de usuario y motivo de cambio.`,
          pasos: [
            {
              label: "Acceder al módulo Actualización de Movimientos",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Actualización de Movimientos.",
            },
            {
              label: "Seleccionar movimiento a actualizar",
              description:
                "Busca el movimiento por número, tipo, producto, almacén o fecha. Verifica que no esté cerrado.",
            },
            {
              label: "Modificar datos necesarios",
              description:
                "Puedes ajustar productos, cantidades, almacén origen/destino, motivo o condiciones asociadas.",
            },
            {
              label: "Registrar motivo de actualización",
              description:
                "Indica el motivo del cambio (error, ajuste operativo, corrección) y agrega observaciones.",
            },
            {
              label: "Confirmar actualización",
              description:
                "Haz clic en Aceptar. El sistema guarda los cambios, actualiza el stock y deja constancia del usuario y fecha.",
            },
          ],
        },
        {
          id: 31,
          aNombre: "Listado de Operaciones Pendientes",
          aResumen: `Este módulo permite consultar todas las operaciones de inventario que están abiertas o pendientes de cierre. Sirve para:

Centralizar en un solo listado las operaciones aún no ejecutadas.

Facilitar seguimiento de entradas, salidas, transferencias, gastos y ventas pendientes.

Evitar olvidos o acumulación de movimientos sin cierre.

Generar reportes para planificación logística y auditoría.`,
          pasos: [
            {
              label: "Acceder al módulo Listado de Operaciones Pendientes",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Listado de Operaciones Pendientes.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Selecciona criterios como tipo de operación (entrada, salida, transferencia, gasto, venta), almacén, usuario o rango de fechas.",
            },
            {
              label: "Visualizar listado",
              description:
                "El sistema muestra todas las operaciones abiertas, con detalle de productos, cantidades y estado.",
            },
            {
              label: "Revisar estado de cada operación",
              description:
                "Identifica si la operación está pendiente de confirmación, ejecución o cierre.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Opcionalmente, genera reportes para análisis logístico, auditoría o planificación.",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      sNombre: "Inventario",
      acciones: [
        {
          id: 32,
          aNombre: "Listado para Toma",
          aResumen: `Este módulo permite generar listados de productos y ubicaciones que serán verificados en una toma de inventario. Sirve para:

Preparar la información necesaria antes de realizar el conteo físico.

Definir qué productos, secciones o almacenes serán incluidos en la toma.

Facilitar la organización del personal encargado del conteo.

Mantener trazabilidad entre inventario físico y sistema.`,
          pasos: [
            {
              label: "Acceder al módulo Listado para Toma",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Listado para Toma.",
            },
            {
              label: "Seleccionar almacén o sección",
              description:
                "Define el ámbito de la toma: almacén completo, sección específica o grupo de productos.",
            },
            {
              label: "Aplicar filtros de productos",
              description:
                "Puedes filtrar por categoría, familia, estado o rango de códigos para delimitar el listado.",
            },
            {
              label: "Generar listado preliminar",
              description:
                "El sistema muestra los productos seleccionados con sus datos actuales de stock, ubicación y código.",
            },
            {
              label: "Imprimir o exportar listado",
              description:
                "Genera el documento que servirá como guía para el conteo físico en la toma de inventario.",
            },
            {
              label: "Asignar responsables",
              description:
                "Opcionalmente, registra qué usuario o equipo se encargará de cada sección del listado.",
            },
          ],
        },
        {
          id: 33,
          aNombre: "Entrada",
          aResumen: `Este módulo permite registrar entradas de productos al inventario, provenientes de compras, devoluciones, transferencias o ajustes. Sirve para:

Actualizar el stock en el almacén receptor.

Mantener trazabilidad de productos ingresados con motivo y documento asociado.

Evitar diferencias entre inventario físico y sistema.

Generar reportes de entradas por proveedor, producto o período.`,
          pasos: [
            {
              label: "Acceder al módulo Entrada",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Entrada.",
            },
            {
              label: "Seleccionar almacén destino",
              description:
                "Indica el almacén en el cual se registrará la entrada de productos.",
            },
            {
              label: "Definir tipo de entrada",
              description:
                "Selecciona si la entrada proviene de una compra, devolución, transferencia o ajuste.",
            },
            {
              label: "Agregar productos",
              description:
                "Busca los productos en el catálogo, define cantidades, unidades y precios si corresponde.",
            },
            {
              label: "Registrar documento asociado",
              description:
                "Indica el número de factura, nota de crédito, transferencia o documento que respalda la entrada.",
            },
            {
              label: "Confirmar entrada",
              description:
                "Haz clic en Aceptar. El sistema actualiza el stock en el almacén destino y deja constancia del movimiento.",
            },
          ],
        },
        {
          id: 34,
          aNombre: "Listado de Inventario Pendiente a Actualizar",
          aResumen: `Este módulo permite consultar todos los productos y registros de inventario que están pendientes de actualización, ya sea por toma de inventario, ajustes o movimientos no cerrados. Sirve para:

Detectar diferencias entre inventario físico y sistema.

Centralizar en un listado los productos que requieren actualización.

Evitar inconsistencias en stock por registros incompletos.

Facilitar la planificación de ajustes y cierres.`,
          pasos: [
            {
              label:
                "Acceder al módulo Listado de Inventario Pendiente a Actualizar",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Listado de Inventario Pendiente a Actualizar.",
            },
            {
              label: "Seleccionar almacén o sección",
              description:
                "Define el ámbito de análisis: almacén completo, sección específica o grupo de productos.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Puedes filtrar por categoría, familia, estado o rango de fechas para delimitar el listado.",
            },
            {
              label: "Visualizar listado",
              description:
                "El sistema muestra los productos pendientes de actualización, con detalle de stock actual, stock físico y diferencias detectadas.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte para análisis logístico o auditoría, que servirá de base para la actualización.",
            },
            {
              label: "Asignar responsables",
              description:
                "Opcionalmente, registra qué usuario o equipo se encargará de realizar la actualización correspondiente.",
            },
          ],
        },
        {
          id: 35,
          aNombre: "Anulación",
          aResumen: `Este módulo permite anular operaciones de inventario registradas (entradas, salidas, transferencias, gastos o ventas) antes de su cierre definitivo. Sirve para:

Cancelar movimientos creados por error o duplicación.

Evitar que registros incorrectos afecten el stock y la contabilidad.

Mantener la trazabilidad mediante registro de motivo y usuario responsable.

Facilitar la corrección sin necesidad de reversión completa.`,
          pasos: [
            {
              label: "Acceder al módulo Anulación",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Anulación.",
            },
            {
              label: "Seleccionar operación a anular",
              description:
                "Busca la operación por número, tipo, producto, almacén o fecha. Verifica que no esté cerrada.",
            },
            {
              label: "Verificar vínculos asociados",
              description:
                "Confirma si la operación está vinculada a pedidos, facturas o transferencias. El sistema advierte si hay dependencias.",
            },
            {
              label: "Registrar motivo de anulación",
              description:
                "Indica el motivo (error, duplicación, cancelación) y agrega observaciones.",
            },
            {
              label: "Confirmar anulación",
              description:
                "Haz clic en Aceptar. El sistema elimina la operación, ajusta el stock y deja constancia del cambio en el historial.",
            },
          ],
        },
        {
          id: 36,
          aNombre: "Actualización",
          aResumen: `Este módulo permite actualizar operaciones de inventario registradas (entradas, salidas, transferencias, gastos o ventas), siempre que no estén cerradas. Sirve para:

Corregir errores detectados en cantidades, productos o almacenes.

Actualizar condiciones operativas antes del cierre definitivo.

Evitar anulaciones innecesarias manteniendo la trazabilidad del proceso.

Preservar control documental mediante registro de usuario y motivo del cambio.`,
          pasos: [
            {
              label: "Acceder al módulo Actualización",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Actualización.",
            },
            {
              label: "Seleccionar operación a actualizar",
              description:
                "Busca la operación por número, tipo, producto, almacén o fecha. Verifica que no esté cerrada.",
            },
            {
              label: "Modificar datos necesarios",
              description:
                "Puedes ajustar productos, cantidades, almacén origen/destino, motivo o condiciones asociadas.",
            },
            {
              label: "Registrar motivo de actualización",
              description:
                "Indica el motivo del cambio (error, ajuste operativo, corrección) y agrega observaciones.",
            },
            {
              label: "Confirmar actualización",
              description:
                "Haz clic en Aceptar. El sistema guarda los cambios, actualiza el stock y deja constancia del usuario y fecha.",
            },
          ],
        },
        {
          id: 37,
          aNombre: "Cierre de Inventario",
          aResumen: `Este módulo permite cerrar formalmente el inventario tras una toma o actualización, consolidando los datos y bloqueando modificaciones posteriores. Sirve para:

Finalizar el proceso de toma y actualización de inventario.

Evitar cambios posteriores que afecten la consistencia del stock.

Generar reportes definitivos para auditoría y contabilidad.

Mantener trazabilidad mediante registro de usuario, fecha y motivo de cierre.`,
          pasos: [
            {
              label: "Acceder al módulo Cierre de Inventario",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Cierre de Inventario.",
            },
            {
              label: "Seleccionar inventario a cerrar",
              description:
                "Busca el inventario por almacén, sección o fecha de toma. Verifica que esté pendiente de cierre.",
            },
            {
              label: "Revisar diferencias",
              description:
                "El sistema muestra diferencias entre stock físico y stock registrado. Confirma que las actualizaciones estén completas.",
            },
            {
              label: "Registrar motivo de cierre",
              description:
                "Indica si el cierre corresponde a toma finalizada, ajuste consolidado o auditoría concluida.",
            },
            {
              label: "Confirmar cierre",
              description:
                "Haz clic en Aceptar. El sistema bloquea la edición, consolida el inventario y deja constancia del estado final.",
            },
          ],
        },
        {
          id: 38,
          aNombre: "Listado de Inventario",
          aResumen: `Este módulo permite consultar el inventario actual en el sistema, mostrando productos, cantidades y ubicaciones. Sirve para:

Visualizar el stock disponible en cada almacén o sección.

Aplicar filtros por producto, categoría, familia o estado.

Generar reportes de inventario para auditoría y planificación.

Mantener trazabilidad entre inventario físico y sistema.`,
          pasos: [
            {
              label: "Acceder al módulo Listado de Inventario",
              description:
                "Desde el menú Movimientos Operativos, selecciona la opción Listado de Inventario.",
            },
            {
              label: "Seleccionar almacén o sección",
              description:
                "Define el ámbito de consulta: almacén completo, sección específica o grupo de productos.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Puedes filtrar por categoría, familia, estado, rango de códigos o fechas de actualización.",
            },
            {
              label: "Visualizar listado",
              description:
                "El sistema muestra los productos con detalle de stock actual, ubicación, código y estado.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte para análisis logístico, auditoría o planificación.",
            },
            {
              label: "Asignar responsables (opcional)",
              description:
                "Registra qué usuario o área se encargará de revisar o validar el listado generado.",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      sNombre: "Estadísticas",
      acciones: [
        {
          id: 39,
          aNombre: "Submayor de Productos",
          aResumen: `Este módulo permite consultar el historial detallado de movimientos de un producto, mostrando entradas, salidas, transferencias, gastos y ventas. Sirve para:

Auditar el comportamiento de cada producto en inventario.

Detectar diferencias entre stock físico y sistema.

Generar reportes de movimientos por período, almacén o usuario.

Mantener trazabilidad completa de cada artículo.`,
          pasos: [
            {
              label: "Acceder al módulo Submayor de Productos",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Submayor de Productos.",
            },
            {
              label: "Seleccionar producto",
              description:
                "Busca el producto por código, nombre o categoría. Puedes seleccionar varios productos si lo requieres.",
            },
            {
              label: "Definir período de consulta",
              description:
                "Indica el rango de fechas para el cual deseas visualizar los movimientos.",
            },
            {
              label: "Aplicar filtros adicionales",
              description:
                "Opcionalmente, filtra por almacén, sección, tipo de movimiento o usuario responsable.",
            },
            {
              label: "Visualizar historial",
              description:
                "El sistema muestra entradas, salidas, transferencias, gastos y ventas del producto, con detalle de cantidades, fechas y documentos asociados.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte en formato digital o físico para auditoría, análisis contable o planificación logística.",
            },
          ],
        },
        {
          id: 40,
          aNombre: "Revisión del Submayor de Productos",
          aResumen: `Este módulo permite revisar y auditar el historial de movimientos de un producto, validando que las entradas, salidas, transferencias, gastos y ventas estén correctamente registradas. Sirve para:

Detectar inconsistencias entre inventario físico y sistema.

Validar que los movimientos asociados a un producto estén completos y correctos.

Generar reportes de revisión para auditoría interna o externa.

Mantener trazabilidad mediante registro de usuario, fecha y observaciones.`,
          pasos: [
            {
              label: "Acceder al módulo Revisión del Submayor de Productos",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Revisión del Submayor de Productos.",
            },
            {
              label: "Seleccionar producto a revisar",
              description:
                "Busca el producto por código, nombre o categoría. Puedes seleccionar varios productos si lo requieres.",
            },
            {
              label: "Definir período de revisión",
              description:
                "Indica el rango de fechas para el cual deseas validar los movimientos.",
            },
            {
              label: "Comparar movimientos con inventario físico",
              description:
                "Verifica que las entradas, salidas y ajustes coincidan con el stock físico registrado en la última toma.",
            },
            {
              label: "Registrar observaciones",
              description:
                "Agrega notas sobre diferencias detectadas, errores o validaciones realizadas.",
            },
            {
              label: "Generar reporte de revisión",
              description:
                "Exporta o imprime el resultado de la revisión, con detalle de movimientos, diferencias y observaciones.",
            },
          ],
        },
        {
          id: 41,
          aNombre: "Ajustar Submayor",
          aResumen: `Este módulo permite realizar ajustes en el historial de movimientos de un producto dentro del submayor, corrigiendo errores en cantidades, fechas o documentos asociados. Sirve para:

Corregir inconsistencias detectadas en la revisión del submayor.

Actualizar datos de movimientos sin necesidad de anulación completa.

Mantener la trazabilidad mediante registro de usuario, fecha y motivo del ajuste.

Evitar diferencias acumulativas entre inventario físico y sistema.`,
          pasos: [
            {
              label: "Acceder al módulo Ajustar Submayor",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Ajustar Submayor.",
            },
            {
              label: "Seleccionar producto y período",
              description:
                "Busca el producto por código o nombre y define el rango de fechas del submayor a ajustar.",
            },
            {
              label: "Identificar movimiento a corregir",
              description:
                "Localiza la entrada, salida, transferencia, gasto o venta que presenta inconsistencias.",
            },
            {
              label: "Modificar datos del movimiento",
              description:
                "Ajusta cantidades, fechas, documentos asociados o almacén involucrado según corresponda.",
            },
            {
              label: "Registrar motivo del ajuste",
              description:
                "Indica el motivo (error de registro, corrección contable, ajuste operativo) y agrega observaciones.",
            },
            {
              label: "Confirmar ajuste",
              description:
                "Haz clic en Aceptar. El sistema guarda los cambios, actualiza el submayor y deja constancia del usuario y fecha.",
            },
          ],
        },
        {
          id: 42,
          aNombre: "Inventario de Productos",
          aResumen: `Este módulo permite consultar el inventario actual de cada producto, mostrando cantidades disponibles, ubicaciones y movimientos asociados. Sirve para:

Visualizar el stock detallado por producto en tiempo real.

Aplicar filtros por categoría, familia, almacén o estado.

Generar reportes de inventario para auditoría, logística y planificación.

Mantener trazabilidad entre inventario físico y sistema.`,
          pasos: [
            {
              label: "Acceder al módulo Inventario de Productos",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Inventario de Productos.",
            },
            {
              label: "Seleccionar almacén o sección",
              description:
                "Define el ámbito de consulta: almacén completo, sección específica o grupo de productos.",
            },
            {
              label: "Aplicar filtros de búsqueda",
              description:
                "Puedes filtrar por categoría, familia, estado, rango de códigos o fechas de actualización.",
            },
            {
              label: "Visualizar inventario",
              description:
                "El sistema muestra los productos con detalle de stock actual, ubicación, código y estado.",
            },
            {
              label: "Revisar movimientos asociados",
              description:
                "Opcionalmente, consulta los movimientos recientes vinculados a cada producto para validar consistencia.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte en formato digital o físico para análisis logístico, auditoría o planificación.",
            },
          ],
        },
        {
          id: 43,
          aNombre: "Productos No Consumidos",
          aResumen: `Este módulo permite consultar los productos que permanecen en inventario sin movimientos de consumo (salidas, ventas, transferencias o gastos) durante un período definido. Sirve para:

Detectar artículos inmovilizados o de baja rotación.

Optimizar espacio en almacenes y reducir costos de almacenamiento.

Planificar estrategias de liquidación, devolución o redistribución.

Mantener trazabilidad de productos con escaso movimiento.`,
          pasos: [
            {
              label: "Acceder al módulo Productos No Consumidos",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Productos No Consumidos.",
            },
            {
              label: "Definir período de análisis",
              description:
                "Indica el rango de fechas en el cual se evaluará el consumo de productos.",
            },
            {
              label: "Seleccionar almacén o sección",
              description:
                "Define el ámbito de consulta: almacén completo, sección específica o grupo de productos.",
            },
            {
              label: "Aplicar filtros adicionales",
              description:
                "Opcionalmente, filtra por categoría, familia, estado o proveedor para delimitar el listado.",
            },
            {
              label: "Visualizar listado",
              description:
                "El sistema muestra los productos que no registraron movimientos de salida o consumo en el período definido.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte para análisis logístico, auditoría o planificación de acciones correctivas.",
            },
          ],
        },
        {
          id: 44,
          aNombre: "Extracto de Compras",
          aResumen: `Este módulo permite consultar y generar un extracto de las compras registradas en el sistema, mostrando detalle por proveedor, producto y documento. Sirve para:

Auditar las compras realizadas en un período específico.

Validar que las entradas de inventario estén respaldadas por documentos de compra.

Generar reportes para análisis contable y logístico.

Mantener trazabilidad entre proveedores, productos y almacenes.`,
          pasos: [
            {
              label: "Acceder al módulo Extracto de Compras",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Extracto de Compras.",
            },
            {
              label: "Definir período de consulta",
              description:
                "Indica el rango de fechas para el cual deseas visualizar las compras registradas.",
            },
            {
              label: "Seleccionar proveedor o grupo de proveedores",
              description:
                "Puedes delimitar la consulta a un proveedor específico o a varios proveedores.",
            },
            {
              label: "Aplicar filtros adicionales",
              description:
                "Opcionalmente, filtra por producto, categoría, almacén o estado de la compra.",
            },
            {
              label: "Visualizar extracto",
              description:
                "El sistema muestra las compras realizadas con detalle de productos, cantidades, precios y documentos asociados.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte en formato digital o físico para análisis contable, auditoría o planificación de compras.",
            },
          ],
        },
        {
          id: 45,
          aNombre: "Productos con Precio de Compra Diferente",
          aResumen: `Este módulo permite consultar los productos que presentan variaciones en su precio de compra en distintos documentos o períodos. Sirve para:

Detectar diferencias de costos entre proveedores o compras sucesivas.

Analizar impacto en márgenes de venta y rentabilidad.

Controlar coherencia de precios en el sistema frente a facturas recibidas.

Generar reportes de variaciones para auditoría y negociación con proveedores.`,
          pasos: [
            {
              label:
                "Acceder al módulo Productos con Precio de Compra Diferente",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Productos con Precio de Compra Diferente.",
            },
            {
              label: "Definir período de análisis",
              description:
                "Indica el rango de fechas en el cual deseas evaluar las compras registradas.",
            },
            {
              label: "Seleccionar producto o grupo de productos",
              description:
                "Busca por código, nombre, categoría o familia de productos.",
            },
            {
              label: "Visualizar variaciones de precio",
              description:
                "El sistema muestra las compras registradas con detalle de proveedor, documento, fecha y precio unitario.",
            },
            {
              label: "Comparar precios",
              description:
                "Identifica diferencias entre precios de compra para el mismo producto en distintos documentos o proveedores.",
            },
            {
              label: "Exportar o imprimir reporte",
              description:
                "Genera un informe con las variaciones detectadas, útil para auditoría, negociación y control de costos.",
            },
          ],
        },
        {
          id: 46,
          aNombre: "Resumen por Secciones",
          aResumen: `Este módulo permite consultar un resumen consolidado del inventario y movimientos agrupados por secciones de un almacén. Sirve para:

Visualizar el stock total y movimientos por cada sección.

Detectar diferencias de inventario entre secciones.

Generar reportes de control para auditoría y planificación logística.

Mantener trazabilidad entre inventario físico y sistema a nivel de sección.`,
          pasos: [
            {
              label: "Acceder al módulo Resumen por Secciones",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Resumen por Secciones.",
            },
            {
              label: "Seleccionar almacén",
              description:
                "Indica el almacén del cual deseas obtener el resumen por secciones.",
            },
            {
              label: "Definir período de consulta",
              description:
                "Indica el rango de fechas para el cual deseas consolidar los movimientos.",
            },
            {
              label: "Visualizar resumen",
              description:
                "El sistema muestra cada sección con detalle de stock inicial, entradas, salidas, ajustes y stock final.",
            },
            {
              label: "Comparar secciones",
              description:
                "Identifica diferencias entre secciones en cuanto a movimientos y stock disponible.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte consolidado para auditoría, planificación logística o análisis contable.",
            },
          ],
        },
        {
          id: 47,
          aNombre: "Consecutivos Utilizados",
          aResumen: `Este módulo permite consultar los números consecutivos ya asignados a operaciones de inventario y documentos. Sirve para:

Auditar la secuencia de registros en entradas, salidas, transferencias, compras y ventas.

Detectar duplicaciones o saltos en la numeración.

Mantener trazabilidad documental y control interno.

Generar reportes de consecutivos utilizados por período o tipo de operación.`,
          pasos: [
            {
              label: "Acceder al módulo Consecutivos Utilizados",
              description:
                "Desde el menú Consultas y Reportes, selecciona la opción Consecutivos Utilizados.",
            },
            {
              label: "Seleccionar tipo de operación",
              description:
                "Define si deseas consultar consecutivos de entradas, salidas, transferencias, compras, ventas u otro movimiento.",
            },
            {
              label: "Definir período de consulta",
              description:
                "Indica el rango de fechas para el cual deseas visualizar los consecutivos utilizados.",
            },
            {
              label: "Visualizar listado",
              description:
                "El sistema muestra los números consecutivos asignados, con detalle de operación, fecha, usuario y documento asociado.",
            },
            {
              label: "Detectar inconsistencias",
              description:
                "Revisa si existen duplicaciones, saltos o números faltantes en la secuencia.",
            },
            {
              label: "Exportar o imprimir",
              description:
                "Genera un reporte para auditoría, control interno o planificación de ajustes en la numeración.",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      sNombre: "Históricos",
      acciones: [],
    },
    //     {
    //       id: 9,
    //       sNombre: "Otros",
    //       acciones: [
    //         {
    //           id: 1,
    //           aNombre: "Cambio de Código de Producto",
    //           aResumen: `Este módulo permite reemplazar el código de un producto por otro, manteniendo su historial de movimientos, ubicación y valorización. Sirve para:

    // Actualizar códigos obsoletos o mal asignados sin perder trazabilidad.

    // Unificar productos duplicados bajo un solo código operativo.

    // Evitar errores en reportes, ajustes y contabilización por códigos inconsistentes.

    // Preservar la relación con almacenes, secciones, cuentas contables y nomencladores.`,
    //           pasos: [
    //             {
    //               label: "Acceder al módulo Cambio de Código de Producto",
    //               description:
    //                 "Desde el menú Movimientos Operativos, selecciona la opción Cambio de Código de Producto.",
    //             },
    //             {
    //               label: "Seleccionar código origen",
    //               description:
    //                 "Busca y selecciona el código actual del producto que deseas reemplazar.",
    //             },
    //             {
    //               label: "Seleccionar código destino",
    //               description:
    //                 "Busca y selecciona el nuevo código que reemplazará al anterior. Debe estar previamente registrado.",
    //             },
    //             {
    //               label: "Confirmar el reemplazo",
    //               description:
    //                 "Verifica que el nuevo código tenga las mismas características operativas (unidad, tipo, subfamilia).",
    //             },
    //             {
    //               label: "Ejecutar el cambio",
    //               description:
    //                 "Haz clic en Aceptar. El sistema migrará todos los movimientos, ubicaciones y enlaces al nuevo código.",
    //             },
    //           ],
    //         },
    //       ],
    //     },
  ],
};

// Agregar cargos a todas las acciones
const cargosDisponibles = [
  "Contador",
  "Encargado Contable",
  "Encargado de Almacén",
  "Jefe de Operaciones",
  "Auditor Interno",
];
const cargoGet = "Encargado de Almacén";

zunst.mSecciones.forEach((seccion) => {
  seccion.acciones.forEach((accion) => {
    const cargosAsignados = [cargoGet];
    // Agregar un cargo random aleatoriamente (60% de probabilidad)
    if (Math.random() > 0.4) {
      const cargoRandom =
        cargosDisponibles[Math.floor(Math.random() * cargosDisponibles.length)];
      if (!cargosAsignados.includes(cargoRandom)) {
        cargosAsignados.push(cargoRandom);
      }
    }
    accion.cargos = cargosAsignados;
  });
});
