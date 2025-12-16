import { addCargosToModule } from "../helpers/cargoHelper";

export const zunaccBase = {
  mNombre: "ZUNacc Contabilidad",
  mImage: "/acc",
  mResumen:
    "El sistema trabaja con el concepto de ejercicio que habitualmente se utiliza en la Contabilidad, un espacio de tiempo que generalmente coincide con el año fiscal. El ejercicio se divide en períodos contables, generalmente los meses, aunque el sistema permite otros tipos de períodos. Dentro de un ejercicio puede haber hasta 98 períodos definidos por el usuario, más dos obligatorios: apertura y cierre de ejercicio. Dentro del módulo se trabaja normalmente con todos los ejercicios definidos. Los ejercicios anteriores al actual sólo podrán ser accedidos para obtener información, en ningún caso se permite contabilizar o cambiar los datos relativos a un ejercicio anterior.",
  mSecciones: [
    {
      id: 1,
      sNombre: "Registro",
      acciones: [
        {
          id: 1,
          aNombre: "Creación y Modificación de Comprobantes",
          cargos: ["Cargo de prueba basico"],
          aResumen: `La ventana que se despliega está diseñada para que tanto la creación como la edición se 
puedan realizar por el operador de la manera más ágil posible, ya que es la opción en que  
se produce la mayor interacción con el usuario.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/modificar-comprobante.png",
              description: `Dirigirse a la opcion de Comprobantes en el menu del sistema.`,
            },
            {
              label: "Que desea hacer",
              description: `Del listado de botones que aparecen en el lado derecho (*paso anterior), seleccione la que desea.`,
            },
            {
              label: "Configurar la cabecera del comprobante",
              description: `Introducir todos los datos que pide el sistema, ejemplo: título, fecha o libro.`,
            },
            {
              label: "El Recuadro del Centro",
              description: `En el recuadro del centro se procede a la introducción o modificación de cada uno de los 
apuntes del comprobante.Ten en cuenta que campos como El código del Concepto, La Descripción del apunte y 
El Documento no son campos obligatorios `,
            },
            {
              label: "Funciones",
              description: `Con la opción Incertar podras agregar más apuntes, con la de Borrar puedes eliminar apuntes
              y con la opción OK guardarás todos los cambios`,
            },
          ],
        },
        {
          id: 2,
          aNombre: "Reversión de Comprobantes",
          cargos: ["Cargo de prueba basico"],
          aResumen: `El objetivo de esta opción es crear un comprobante (que NO se considera automático) 
revirtiendo otro ya integrado. Debe ser considerada como una opción de ayuda al usuario 
que le evita la introducción manual del comprobante de reversión. El comprobante 
resultante queda como pendiente de integrar y por ser de tipo manual, podrá ser anulado o 
editado.`,
          pasos: [
            {
              label: "Inicio",
              description: `Entrar en la opción de sistema llamada Reversion de Comprobantes Integrados`,
            },
            {
              label: "Introducir Comprobante",
              image: "/zunacc/registro/reversion-comprobante.png",
              description: `Introduce en el campo que se muestra el número del comprobante que se desea revertir.`,
            },
            {
              label: "Fecha de Reversión",
              description: `Introducir la fecha de reversión o contabilización para el 
              comprobante resultante.`,
            },
            {
              label: "Revertir",
              description: `Al oprimir el botón Revertir se realizará dicha acción, mostrándose en pantalla el 
comprobante resultante en cuyo título se reflejará que constituye una reversión del 
comprobante original. El sistema asignará un nuevo número consecutivo y la pantalla 
reflejará consecuentemente dicha operación. `,
            },
          ],
        },
        {
          id: 3,
          aNombre: "Listado de Comprobantes",
          aResumen: `El objetivo de esta opción es el de listar uno o más comprobantes pendientes de integrar o 
anulados, por tanto se encontrará activa tanto si se están visualizando los comprobantes 
pendientes o los anulados. Se deberán seleccionar previamente en la lista aquellos que se 
desean listar y dar Clic en el botón. Esta opción es de libre acceso en el sistema si se tiene 
derecho a ejecutar la pantalla de comprobantes.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Entrar en la opción de sistema llamada Comprobantes Pendientes a Integrar`,
            },
            {
              label: "Cuales Mostrar?",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Si marcas la opción Solo mis Comprobantes, solo se mostraran los que correspondan
              a tu operador, de lo contrario se mostraran todos los componentes pendientes a integrar.
              También esta la opción de filtrar por solo pendientes o solo los anulados.`,
            },
          ],
        },
        {
          id: 4,
          aNombre: "Integración de Comprobantes Pendientes",
          aResumen: `El objetivo de esta opción es actualizar en el diario contable uno o más comprobantes 
pendientes de integrar. Es una opción que permite la ejecución sobre varios comprobantes 
que deberán seleccionarse previamente de la lista.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Entrar en la opción de sistema llamada Comprobantes Pendientes a Integrar`,
            },
            {
              label: "Integrar",
              description: `Realizar la opción de INTEGRAR, de esta manera se validarán todos los datos
              y se actualizará el Diario Contable con los Comprobantes Integrados.`,
            },
          ],
        },
        {
          id: 5,
          aNombre: "Anulación de Comprobantes Pendientes",
          aResumen: `El objetivo de esta opción es el de anular un comprobante pendiente de integrar. Esta 
operación el sistema la realiza individualmente para un comprobante, por tanto en caso de 
haber seleccionado varios de ellos en la lista, solo se considerará para anular el primero de 
dicha selección.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Seleccionar de la lista de comprobantes el que se desea anular`,
            },
            {
              label: "Realizar Anulación",
              description: `Cliquear la opción de anular comprobante`,
            },
            {
              label: "Motivo",
              image: "/zunacc/registro/motivo-anulacion.png",
              description: `Introducir en el cuadro de texto el motivo por el que se
              desea anular el comprobante en cuestión.`,
            },
          ],
        },
        {
          id: 6,
          aNombre: "Recuperación de un Comprobante Anulado",
          aResumen: `El objetivo de esta opción es recuperar un comprobante que se ha anulado previamente. 
Por tanto, se debe activar la pantalla para la visualización de los comprobantes anulados en 
el botón correspondiente. La operación de recuperación se realiza individualmente para 
cada comprobante, por tanto aunque se seleccionen varios en la lista, solo se considerará el 
primero de la selección para ejecutar la misma.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Aplicar el filtro de la opción de mostrar solo los comprobantes anulados.`,
            },
            {
              label: "Selección",
              description: `De la lista de comprobantes anulados seleccionar el comprobante a recuperar.`,
            },
            {
              label: "Recuperar",
              description: ` La operación de recuperación se realiza individualmente para 
cada comprobante, por tanto aunque se seleccionen varios en la lista, solo se considerará el 
primero de la selección para ejecutar la misma. Una vez recuperado, un comprobante pasa a formar parte nuevamente de los pendientes 
de integrar.`,
            },
          ],
        },
        {
          id: 7,
          aNombre: "Listado Diario",
          aResumen: `El objetivo de este reporte es el de listar apuntes del diario contable. Este listado se realiza 
de acuerdo a criterios establecidos para casi todos los campos del diario. Los apuntes pueden listarse con la 
moneda en que fueron registrados o ser previamente convertidos a la moneda base de la 
empresa seleccionada en la Barra de Herramientas.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listado-diario.png",
              description: `Ir a la opción de Listado de Diario y llenar los campos de la parte superior,
              como son ejercicio, desde, hasta etc. `,
            },
            {
              label: "Aplicar",
              description: `Click en la opción aplicar para que se muestre la lista de diario. Cuentas con
              varias opciones de agrupación, como son: Total por Día, Total por Comprobante o la opción de
              convertir a moneda base. `,
            },
            {
              label: "*Cabe destacar*",
              description: `La casilla Convertir a Moneda Base se marcará cuando se requiere que los importes de 
todos los apuntes se muestren en el listado convertidos a la moneda base de la empresa 
según la tasa de cambio del comprobante. En caso de que se quiera el listado con los 
apuntes en su moneda original, no se marcará esta casilla. `,
            },
          ],
        },
        {
          id: 8,
          aNombre: "Extracto de Cuentas",
          aResumen: `Este listado tiene como objetivo  listar los apuntes de una cuenta durante el período dado, 
así como el saldo que tenía al iniciar el período y el total de sus movimientos en el mismo. Los apuntes pueden listarse con la moneda en que fueron registrados o ser previamente 
convertidos a la moneda base de la empresa seleccionada en la Barra de Herramientas.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listado-diario.png",
              description: `Ir a la opción de Extracto de Cuentas en la barra de herramientas. `,
            },
            {
              label: "Seleccionar Cuenta",
              image: "/zunacc/registro/extracto-cuenta.png",
              description: `En el combo-box Cuenta puedes seleccionar una o varias cuentas con sus centros de costos
              de las cuales se emitirá un extracto. `,
            },
            {
              label: "Aplicar",
              description: `Clickear la opción Aplicar para que se aplique el extracto a la cuenta o cuentas seleccionadas
               `,
            },
            {
              label: "Reporte",
              description: `Clickear la opción Reporte para visualizar el reporte correspondiente
              al extracto de la cuenta.`,
            },
            {
              label: "*Consideraciones*",
              image: "/zunacc/registro/extracto-cuenta-rango.png",
              description: `Si el operador seleccionó Rango o Plantilla de cuentas, la pantalla será mostrada como 
aparece a continuación:
               `,
            },
          ],
        },
        {
          id: 9,
          aNombre: "Balance de Comprobación",
          aResumen: `Este listado tiene como objetivo obtener para cada cuenta en el período seleccionado: 
*Período
 : total de los apuntes al debe menos total de los apuntes al haber, y el saldo 
del período 
*Acumulado
 : total de los apuntes al debe menos total de los apuntes al haber, y el 
saldo acumulado hasta el período 
* Ambos
 : saldo antes del período, total de los apuntes al debe y al haber 
respectivamente, saldo del período y el saldo al final del período seleccionado `,
          pasos: [
            {
              label: "Inicio",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Ir a la opción de Balance de Comprobación en la barra de herramientas. `,
            },
            {
              label: "Selecionar Período de Tiempo",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Lo primero que se debe definir es el período de tiempo para el cual se desea obtener la 
información. Para esto tiene tres opciones: Todo el ejercicio, un Período o Fecha Inicial y 
Fecha Final`,
            },
            {
              label: "Selección de artículos a incluir",
              // image: "/zunacc/registro/listado-diario.png",
              description: `LLenar los campos: Empresa, Tipo de Cuenta, Cuenta y Centro de Costo o Gasto. En los dos primeros 
casos se permite la selección múltiple escogiendo en sendas listas de opciones. Para Cuenta 
se escogerá en un combo box Rango o Plantilla, y para Centro de Costo un rango.*Ten en cuenta que el campo Empresa es obligatorio*
`,
            },
            {
              label: "Seleccionar a que niveles de información se desea",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Mayor,  en que sólo aparecen en el listado las cuentas de estructura de este tipo,
              Estructura, en que aparecen en el listado todas las cuentas definidas en la estructura,
              Detalle, en que aparecen en el listado todas las cuentas definidas en el plan de 
cuentas detallado y la acumulación de importes sólo será la correspondiente a los 
apuntes de cada cuenta en el período seleccionado y antes de éste
Todo, en que aparecen en el listado todas las cuentas definidas en la estructura más 
todas las definidas en el detalle, mezcladas según el código y las de detalle se 
muestran con un desplazamiento de una posición hacia la derecha. `,
            },
            {
              label: "Optener Reporte",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Los botones OK y Salir ejecutan la emisión del reporte con las condiciones seleccionadas y 
la salida de la pantalla respectivamente.`,
            },
            {
              label: "Consideraciones adicionales*",
              // image: "/zunacc/registro/listado-diario.png",
              description: `El reporte puede ser Comparativo o no, en dependencia de si se marca o no el campo 
correspondiente. Cuando se marca, se permite especificar, mediante un botón de radio, si 
la comparación se realizará con el Real o con el Presupuesto.
La casilla Incluir cuentas con saldo Cero posibilita cuando está marcado que aparezcan en el 
listado las cuentas que en todas las columnas del listado tengan el valor cero. En caso 
contrario, aparecerán en el listado los datos de todas las cuentas que hayan tenido apuntes 
dentro del período solicitado.`,
            },
          ],
        },
        {
          id: 10,
          aNombre: "Traslado entre Cuentas",
          aResumen: `El objetivo de esta opción es generar un comprobante que anule todos los apuntes de una 
cuenta origen y los abra en una cuenta destino.Una vez integrado este comprobante, la cuenta origen podrá ser puesta como inactiva si se 
requiere. Esta opción nos permite realizar todas estas operaciones.`,
          pasos: [
            {
              label: "Inicio",
              // image: "/zunacc/registro/modificar-comprobante.png",
              description: `Dirigirse a la opción Traslado de apuntes entre cuentas en el menú del sistema.`,
            },
            {
              label: "Llenar campos requeridos",
              image: "/zunacc/registro/traslado-cuentas.png",
              description: `Llenar cada uno de los campos requeridos en la acción. Como son cuenta de origen, cuenta de 
              destino con sus respectivos centros de costos en caso de tenerlos.`,
            },
            {
              label: "Fecha de Contabilización",
              // image: "/zunacc/registro/modificar-comprobante.png",
              description: `se debe introducir la que debe llevar el comprobante a 
generar. Debe pertenecer a uno de los períodos vigentes del ejercicio activo. Ahora bien, en 
el comprobante generado, cada apunte de la cuenta nueva tendrá como fecha valor la del 
apunte correspondiente de la vieja y los apuntes a la cuenta vieja llevarán en este campo la 
fecha del sistema. De esta forma, no cambiará la edad de las facturas implicadas si las 
cuentas a trasladar son por pagar,  por cobrar o tarjetas de crédito.`,
            },
            {
              label: `Mantener los apuntes de apertura en el libro de Inicio de 
Ejercicio`,
              image: "/zunacc/registro/traslado-cuentas.png",
              description: `(de estar seleccionado) que si la cuenta tuvo apuntes en el 
período de apertura del ejercicio, el comprobante resultante de la operación mantendrá 
dichos apuntes en el mismo libro.`,
            },
            {
              label: "Trasladar",
              image: "/zunacc/registro/traslado-cuentas2.png",
              description: `Con el botón Trasladar se ejecuta la operación que genera los comprobantes que realizan el 
traslado. La pantalla reflejará la cantidad de comprobantes resultantes y dará la 
oportunidad de listarlos e integrarlos posteriormente.`,
            },
            {
              label: "*Tener en cuenta*",
              description: `El comprobante generado se considera manual, por lo que el usuario podrá modificarlo o 
anularlo una vez generado aunque si la intención es inactivar la cuenta origen no tendrá 
sentido realizar modificaciones al mismo. `,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      sNombre: "Estados Financieros",
      acciones: [
        {
          id: 2,
          aNombre: "Balance General",
          aResumen: `Esta opción tiene como objetivos la emisión del Balance General de la entidad en dos 
formatos posibles, comparativo o no y seleccionando uno de tres niveles de información. 
Asimismo permite la obtención del balance de una empresa o de varias consolidado.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/estados_financieros/balance-general.png",
              description: `Dirigirse a la opción Balance General.`,
            },
            {
              label: "Definir el período",
              // image: "/zunacc/estados_financieros/balance-general.png",
              description: `Se debe definir el período de tiempo para el cual se desea obtener la información.`,
            },
            {
              label: "Seleccionar Empresa",
              // image: "/zunacc/estados_financieros/balance-general.png",
              description: `La selección de al 
menos una empresa es obligatoria.`,
            },
            {
              label: "Elegir Nivel",
              image: "/zunacc/estados_financieros/balance-general.png",
              description: `Si el tipo de balance seleccionado es por cuentas, es posible obtener la información a 
diferentes niveles, siendo los permitidos: Mayor, Estructura o Detalle.`,
            },
            {
              label: "Definir la moneda",
              // image: "/zunacc/estados_financieros/balance-general.png",
              description: `El listado puede obtenerse en cualquier moneda de las definidas, ya que primeramente se 
convierten los importes de los apuntes según sus tasas a la moneda base de la empresa y 
después según la tasa vigente a la moneda solicitada en el campo Moneda`,
            },
            {
              label: "Realizar Comentario",
              // image: "/zunacc/estados_financieros/balance-general.png",
              description: `Así mismo se puede realizar un Comentario al Balance que será impreso en los reportes.`,
            },
            {
              label: "Reporte",
              // image: "/zunacc/estados_financieros/balance-general.png",
              description: `Los botones Reporte y Cerrar ejecutan la emisión del reporte con las condiciones 
seleccionadas y la salida de la pantalla respectivamente.`,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Cobros y Pagos",
      acciones: [
        {
          id: 2,
          aNombre: "Abonos directos",
          aResumen: `Consejos prácticos y errores comunes
- **Validar cliente** antes de aplicar el abono para evitar cargos en cuentas equivocadas.  
- **Verificar referencias de transferencia** para poder rastrear fondos en caso de discrepancia.  
- **No cerrar la ventana** hasta confirmar que el recibo se generó; algunos sistemas no permiten reversar fácilmente.  
- **Si aparece error de autorización**, revisa permisos de tu usuario o contacta al administrador.`,
          pasos: [
            {
              label: "Ingresar al sistema",
              description: `Inicia sesión con tu usuario y contraseña en el módulo principal del sistema.`,
            },
            {
              label: "Abrir el módulo de cuentas por cobrar / caja",
              description: `En el menú principal selecciona **Cuentas por cobrar**, **Cobros** o **Caja**, según aparezca.`,
            },
            {
              label: "Seleccionar la opción Abonos / Registrar abono",
              description: `Haz clic en **Abonos**, **Registrar abono** o **Abono directo** para abrir la pantalla de entrada de pago.`,
            },
            {
              label: "Elegir el cliente",
              description: `Busca y selecciona el cliente al que le aplicarás el abono mediante nombre, 
              código o documento de identidad.`,
            },
            {
              label: "Seleccionar la cuenta o factura a abonar",
              description: `Si el sistema pide, elige la factura(s) o la cuenta pendiente a la que se aplicará el abono; si es un abono sin factura, 
              selecciona la cuenta corriente o marca “Abono sin factura” si existe esa opción.`,
            },
            {
              label: "Ingresar la fecha del abono",
              description: `Establece la fecha en la que se realiza el abono; por defecto suele venir la fecha del día, 
              cámbiala si corresponde.`,
            },
            {
              label: "Registrar el monto del abono",
              description: `Introduce el importe que se recibe como abono. Verifica la moneda y decimales.`,
            },
            {
              label: "Seleccionar la forma de pago",
              description: `Elige entre **Efectivo**, **Transferencia**, **Tarjeta**, **Cheque** u otra forma; 
              si corresponde, anota número de cheque o referencia de la transacción.`,
            },
            {
              label: "Aplicar descuentos, retenciones o ajustes (si aplica)",
              description: `Indica cualquier descuento, retención o ajuste antes de confirmar para que el sistema compute el saldo correctamente.`,
            },
            {
              label:
                "Asignar centro de costo o cuenta contable (si el sistema lo solicita)",
              description: `Selecciona el centro de costo, proyecto o cuenta contable vinculada al abono para registro contable correcto.
`,
            },
            {
              label: "Agregar observaciones o referencia",
              description: `Escribe una nota breve 
              (por ejemplo: “Abono parcial factura 1234”, o referencia de la transferencia) para facilitar auditoría.`,
            },
            {
              label: "Verificar totales y saldo resultante",
              description: `Revisa el total aplicado y el nuevo saldo de la factura o cuenta; 
              confirma que los importes coinciden con lo recibido.`,
            },
            {
              label: "Guardar / Registrar el abono",
              description: `Haz clic en **Guardar**, **Registrar** o **Confirmar pago** para finalizar el registro.`,
            },
            {
              label: "Emitir comprobante o recibo",
              description: `Genera e imprime o envía por correo electrónico el recibo o comprobante de abono
               si el sistema ofrece esa opción.`,
            },
            {
              label: "*Conciliar en caja y actualizar arqueo",
              description: `Asegúrate de incluir el abono en el arqueo del día y en los reportes de caja para cuadre diario.
`,
            },
            {
              label: "*Revisar reportes y saldos",
              description: `Consulta el reporte de movimientos del cliente o el estado de cuenta para verificar
               que el abono quedó correctamente aplicado.
`,
            },
          ],
        },
        {
          id: 3,
          aNombre: "Conciliación Bancaria",
          aResumen: `Los pasos de conciliación bancaria permiten verificar que los movimientos registrados en el sistema contable coincidan con los del estado de cuenta del banco. Sirven para:

Detectar errores o diferencias entre lo que se registró internamente y lo que realmente ocurrió en el banco.

Registrar ajustes como comisiones, intereses o depósitos omitidos.

Marcar movimientos conciliados para mantener un control financiero preciso.

Generar reportes confiables para auditorías, cierres contables y toma de decisiones.

Evitar fraudes o duplicaciones al revisar cada transacción con respaldo bancario.`,
          pasos: [
            {
              label: "Acceder al sistema",
              description: "Inicia sesión con tu usuario y contraseña.",
            },
            {
              label: "Ir al módulo de Conciliación bancaria",
              description:
                "En el menú principal, selecciona Conciliación bancaria o Conciliar cuenta bancaria.",
            },
            {
              label: "Seleccionar la cuenta bancaria a conciliar",
              description:
                "Elige la cuenta que deseas conciliar. Puedes buscarla por nombre, número o banco.",
            },
            {
              label: "Establecer el período de conciliación",
              description:
                "Define el rango de fechas que deseas conciliar (por ejemplo: del 1 al 30 de septiembre).",
            },
            {
              label: "Cargar movimientos del sistema",
              description:
                "El sistema mostrará todos los movimientos registrados en esa cuenta durante el período.",
            },
            {
              label: "Comparar con el estado de cuenta bancario",
              description:
                "Revisa cada movimiento y marca como conciliado aquellos que aparecen en el estado de cuenta del banco.",
            },
            {
              label: "Registrar diferencias o ajustes",
              description:
                "Si hay diferencias, puedes registrar ajustes o notas para dejar constancia.",
            },
            {
              label: "Guardar conciliación",
              description:
                "Haz clic en Guardar, Registrar conciliación o Finalizar para completar el proceso.",
            },
            {
              label: "Generar reporte de conciliación",
              description:
                "Genera un reporte que muestre los movimientos conciliados, los pendientes y los ajustes realizados.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Cuentas por edades",
          aResumen: `Los pasos de Cuentas por edades permiten analizar qué saldos están pendientes de cobro o pago según su antigüedad. Sirven para:

Identificar deudas vencidas y priorizar su gestión.

Evaluar la salud financiera de la cartera de clientes o proveedores.

Tomar decisiones informadas sobre cobros, renegociaciones o provisiones.

Facilitar auditorías y reportes con información agrupada por rangos de tiempo.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "En el menú principal, selecciona Cuentas por edades o Análisis de antigüedad de saldos.",
            },
            {
              label: "Elegir tipo de cuenta",
              description:
                "Selecciona si deseas ver Cuentas por cobrar (clientes) o Cuentas por pagar (proveedores).",
            },
            {
              label: "Establecer filtros de búsqueda",
              description:
                "Define el rango de fechas, cliente/proveedor, sucursal, tipo de documento, etc.",
            },
            {
              label: "Ejecutar la consulta",
              description:
                "Haz clic en Buscar, Filtrar o Consultar para mostrar los resultados.",
            },
            {
              label: "Visualizar el informe",
              description:
                "El sistema mostrará una tabla con los saldos agrupados por rangos de antigüedad.",
            },
            {
              label: "Acceder a detalles",
              description:
                "Haz clic en el nombre del cliente/proveedor para ver los documentos que componen cada saldo.",
            },
            {
              label: "Exportar o imprimir el informe",
              description:
                "Exporta el informe a Excel o PDF, o imprímelo directamente si el sistema lo permite.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Pagos anticipados",
          aResumen: `Los pasos de pagos anticipados permiten registrar correctamente los fondos que un cliente entrega antes de recibir una factura. Sirven para:

Controlar saldos a favor de clientes que pagan por adelantado.

Evitar errores contables al no vincular el pago a una factura inexistente.

Facilitar la aplicación futura del anticipo cuando se emita la factura correspondiente.

Generar comprobantes claros que respalden el movimiento financiero.

Mantener orden en reportes de anticipos y saldos disponibles.`,
          pasos: [
            {
              label: "Acceder al sistema",
              description:
                "Inicia sesión con tu usuario y contraseña en el sistema ZUNacc.",
            },
            {
              label: "Ir al módulo de Cobros / Caja / Cuentas por cobrar",
              description:
                "En el menú principal, selecciona el módulo donde se gestionan los pagos de clientes.",
            },
            {
              label: "Seleccionar la opción Pagos anticipados",
              description:
                "Haz clic en Pagos anticipados, Registrar pago anticipado o una opción similar.",
            },
            {
              label: "Elegir el cliente",
              description:
                "Busca y selecciona el cliente que está realizando el pago anticipado.",
            },
            {
              label: "Ingresar la fecha del pago",
              description:
                "Establece la fecha en que se recibe el pago; por defecto suele ser la fecha actual.",
            },
            {
              label: "Registrar el monto recibido",
              description:
                "Introduce el importe del pago anticipado. Verifica que esté en la moneda correcta.",
            },
            {
              label: "Seleccionar la forma de pago",
              description:
                "Elige entre Efectivo, Transferencia, Cheque, Tarjeta, etc. Registra referencias si aplica.",
            },
            {
              label: "Asignar cuenta contable o centro de costo (si aplica)",
              description:
                "Selecciona la cuenta contable o centro de costo donde se registrará el pago anticipado.",
            },
            {
              label: "Agregar observaciones o referencia",
              description:
                "Escribe una nota como 'Pago anticipado para futura factura' o 'Anticipo por contrato X'.",
            },
            {
              label: "Verificar que no se vincula a ninguna factura",
              description:
                "Asegúrate de que el pago no se asocie a una factura específica en este momento.",
            },
            {
              label: "Guardar / Registrar el pago anticipado",
              description:
                "Haz clic en Guardar, Registrar o Confirmar para completar el proceso.",
            },
            {
              label: "Emitir comprobante o recibo",
              description:
                "Genera el recibo del pago anticipado y entrégalo al cliente o envíalo por correo.",
            },
            {
              label: "Consultar saldo disponible del cliente",
              description:
                "Verifica que el sistema haya registrado el anticipo como saldo a favor del cliente.",
            },
            {
              label: "Aplicar el pago anticipado en futuras facturas",
              description:
                "Cuando se emita una factura, podrás aplicar el saldo del pago anticipado como forma de pago.",
            },
            {
              label: "Revisar reportes de anticipos",
              description:
                "Consulta los reportes de pagos anticipados para verificar que el movimiento esté correctamente registrado.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Pagos directos",
          aResumen: `Los pasos de pagos directos permiten registrar correctamente los egresos que no están vinculados a una factura específica. Sirven para:

Controlar pagos anticipados o por servicios no facturados aún.

Evitar errores contables al registrar pagos sin documento de respaldo inmediato.

Generar comprobantes claros que respalden el movimiento financiero.

Mantener orden en reportes de pagos y saldos de proveedores.

Facilitar conciliaciones bancarias al tener referencias precisas del pago.`,
          pasos: [
            {
              label: "Acceder al sistema",
              description:
                "Inicia sesión con tu usuario y contraseña en el sistema ZUNacc.",
            },
            {
              label: "Ir al módulo de Pagos / Cuentas por pagar / Caja",
              description:
                "En el menú principal, selecciona la opción relacionada con Pagos directos o Registrar pago.",
            },
            {
              label: "Seleccionar proveedor o beneficiario",
              description:
                "Busca y elige el proveedor al que se le realizará el pago. Puedes usar nombre, código o número de identificación.",
            },
            {
              label: "Indicar tipo de pago",
              description:
                "Selecciona Pago directo como tipo de operación. Este tipo de pago no está vinculado a una factura específica en el momento del registro.",
            },
            {
              label: "Ingresar fecha del pago",
              description:
                "Establece la fecha en que se realiza el pago. Por defecto suele ser la fecha actual.",
            },
            {
              label: "Registrar monto del pago",
              description:
                "Introduce el importe total que se está pagando. Verifica moneda y decimales.",
            },
            {
              label: "Seleccionar forma de pago",
              description:
                "Elige entre Efectivo, Transferencia, Cheque, Tarjeta, etc. Si corresponde, registra número de cheque o referencia de la transacción.",
            },
            {
              label: "Asignar cuenta contable o centro de costo (si aplica)",
              description:
                "Selecciona la cuenta contable o centro de costo donde se registrará el pago.",
            },
            {
              label: "Agregar observaciones o motivo del pago",
              description:
                "Escribe una nota como 'Pago directo por servicios generales' o 'Anticipo sin factura'.",
            },
            {
              label: "Verificar que no se vincula a ninguna factura",
              description:
                "Asegúrate de que el pago no esté asociado a una factura específica en este momento.",
            },
            {
              label: "Guardar / Registrar el pago",
              description:
                "Haz clic en Guardar, Registrar o Confirmar para completar el proceso.",
            },
            {
              label: "Emitir comprobante o recibo",
              description:
                "Genera el recibo del pago directo y entrégalo al proveedor o guárdalo para auditoría.",
            },
            {
              label: "Consultar saldos y reportes",
              description:
                "Verifica que el pago haya sido registrado correctamente en los reportes de pagos y en el estado de cuenta del proveedor.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Resumen de cobros y pagos",
          aResumen: `Los pasos del resumen de cobros y pagos permiten visualizar y controlar todos los movimientos financieros registrados en el sistema. Sirven para:

Consultar ingresos y egresos de forma consolidada y filtrada.

Verificar estados de conciliación y detectar movimientos pendientes.

Acceder rápidamente a comprobantes para auditoría o respaldo.

Exportar información útil para reportes contables o análisis financiero.

Mantener trazabilidad de cada operación registrada por usuario, fecha y forma de pago.`,
          pasos: [
            {
              label: "Acceder al módulo",
              description:
                "En el menú principal, selecciona Resumen de Cobros y Pagos o una opción similar.",
            },
            {
              label: "Establecer filtros de búsqueda",
              description:
                "Define el rango de fechas, tipo de operación (cobro/pago), cliente/proveedor, forma de pago, estado, usuario, etc.",
            },
            {
              label: "Ejecutar la consulta",
              description:
                "Haz clic en Buscar, Consultar o Filtrar para mostrar los resultados.",
            },
            {
              label: "Revisar los resultados",
              description:
                "Verifica cada movimiento: fecha, monto, forma de pago, estado, observaciones.",
            },
            {
              label: "Acceder a detalles o comprobantes",
              description:
                "Haz clic en el número de documento para ver el detalle completo o imprimir el comprobante.",
            },
            {
              label: "Conciliar movimientos (si aplica)",
              description:
                "Marca como conciliado o pendiente según el estado real del movimiento.",
            },
            {
              label: "Exportar o imprimir resumen",
              description:
                "Si el sistema lo permite, exporta el resumen a Excel o PDF, o imprime directamente desde la pantalla.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Traspaso de documentos",
          aResumen: `Los pasos de traspaso de documentos permiten mover registros entre módulos, usuarios o áreas dentro del sistema. Sirven para:

Reasignar documentos por cambios operativos o administrativos.

Mantener trazabilidad de quién gestionó cada documento y cuándo.

Evitar duplicaciones o pérdidas al centralizar el control del flujo documental.

Facilitar auditorías internas con reportes e historial de movimientos.

Organizar la carga de trabajo entre usuarios o sucursales según necesidad.`,
          pasos: [
            {
              label: "Acceder al sistema",
              description: "Inicia sesión en ZUNacc con tus credenciales.",
            },
            {
              label: "Ir al módulo de Traspasos / Documentos",
              description:
                "En el menú principal, selecciona la opción Traspaso de documentos, Transferencia de documentos o similar.",
            },
            {
              label: "Seleccionar tipo de documento a traspasar",
              description:
                "Elige el tipo de documento que deseas mover: factura, nota de crédito, recibo, etc.",
            },
            {
              label: "Indicar documento origen",
              description:
                "Selecciona el documento que será traspasado. Puedes buscarlo por número, cliente, fecha o estado.",
            },
            {
              label: "Elegir destino del traspaso",
              description:
                "Define a qué módulo, usuario, sucursal o área se enviará el documento. Si el sistema lo permite, selecciona el nuevo estado o clasificación.",
            },
            {
              label: "Verificar datos del documento",
              description:
                "Revisa que los datos del documento estén correctos antes de confirmar el traspaso.",
            },
            {
              label: "Agregar observaciones o motivo del traspaso",
              description:
                "Escribe una nota breve explicando por qué se realiza el traspaso (por ejemplo: 'Reasignación por cambio de sucursal').",
            },
            {
              label: "Confirmar el traspaso",
              description:
                "Haz clic en Traspasar, Confirmar o Ejecutar traspaso para completar la operación.",
            },
            {
              label: "Verificar que el documento aparece en el destino",
              description:
                "Revisa que el documento se haya movido correctamente al módulo o usuario destino.",
            },
            {
              label: "Consultar historial de traspasos",
              description:
                "Si el sistema lo permite, accede al historial para ver cuándo y por quién se realizó el traspaso.",
            },
            {
              label: "Emitir reporte de traspasos (opcional)",
              description:
                "Genera un reporte de documentos traspasados si necesitas respaldo o auditoría.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      sNombre: "Otras Operaciones",
      acciones: [
        {
          id: 2,
          aNombre: "Presupuesto",
          aResumen: `Los pasos del módulo de presupuesto permiten planificar y controlar los recursos financieros de forma anticipada. Sirven para:

Establecer metas financieras por área, proyecto o cuenta contable.

Comparar lo planificado con lo ejecutado para detectar desviaciones.

Asignar responsabilidades sobre el uso de fondos.

Facilitar la toma de decisiones basada en datos presupuestarios.

Generar reportes claros para dirección, auditoría y seguimiento operativo.`,
          pasos: [
            {
              label: "Acceder al módulo de Presupuesto",
              description:
                "Desde el menú principal, selecciona la opción Presupuesto o Gestión presupuestaria.",
            },
            {
              label: "Seleccionar el período presupuestal",
              description:
                "Define el año o rango de fechas para el cual deseas crear o consultar el presupuesto.",
            },
            {
              label: "Elegir el tipo de presupuesto",
              description:
                "Selecciona si el presupuesto será por centro de costo, por cuenta contable, por proyecto, o por área funcional.",
            },
            {
              label: "Ingresar los valores presupuestados",
              description:
                "Introduce los montos estimados para cada categoría o cuenta, distribuidos por mes o trimestre según el formato del sistema.",
            },
            {
              label: "Asignar responsables o unidades",
              description:
                "Vincula cada partida presupuestaria con el responsable, unidad operativa o centro de costo correspondiente.",
            },
            {
              label: "Agregar observaciones o notas",
              description:
                "Incluye comentarios que expliquen supuestos, ajustes o condiciones del presupuesto.",
            },
            {
              label: "Guardar el presupuesto",
              description:
                "Haz clic en Guardar, Registrar o Confirmar para almacenar el presupuesto en el sistema.",
            },
            {
              label: "Consultar ejecución presupuestaria",
              description:
                "Accede a reportes que comparan lo presupuestado con lo ejecutado, para evaluar desviaciones.",
            },
            {
              label: "Exportar o imprimir el presupuesto",
              description:
                "Si el sistema lo permite, exporta el presupuesto a Excel o PDF, o imprímelo para respaldo.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Configuración Flujo de Efectivo",
          aResumen: `Los pasos del módulo de presupuesto permiten planificar y controlar los recursos financieros de forma anticipada. Sirven para:

Establecer metas financieras por área, proyecto o cuenta contable.

Comparar lo planificado con lo ejecutado para detectar desviaciones.

Asignar responsabilidades sobre el uso de fondos.

Facilitar la toma de decisiones basada en datos presupuestarios.

Generar reportes claros para dirección, auditoría y seguimiento operativo.`,
          pasos: [
            {
              label: "Acceder al módulo de Presupuesto",
              description:
                "Desde el menú principal, selecciona la opción Presupuesto o Gestión presupuestaria.",
            },
            {
              label: "Seleccionar el período presupuestal",
              description:
                "Define el año o rango de fechas para el cual deseas crear o consultar el presupuesto.",
            },
            {
              label: "Elegir el tipo de presupuesto",
              description:
                "Selecciona si el presupuesto será por centro de costo, por cuenta contable, por proyecto, o por área funcional.",
            },
            {
              label: "Ingresar los valores presupuestados",
              description:
                "Introduce los montos estimados para cada categoría o cuenta, distribuidos por mes o trimestre según el formato del sistema.",
            },
            {
              label: "Asignar responsables o unidades",
              description:
                "Vincula cada partida presupuestaria con el responsable, unidad operativa o centro de costo correspondiente.",
            },
            {
              label: "Agregar observaciones o notas",
              description:
                "Incluye comentarios que expliquen supuestos, ajustes o condiciones del presupuesto.",
            },
            {
              label: "Guardar el presupuesto",
              description:
                "Haz clic en Guardar, Registrar o Confirmar para almacenar el presupuesto en el sistema.",
            },
            {
              label: "Consultar ejecución presupuestaria",
              description:
                "Accede a reportes que comparan lo presupuestado con lo ejecutado, para evaluar desviaciones.",
            },
            {
              label: "Exportar o imprimir el presupuesto",
              description:
                "Si el sistema lo permite, exporta el presupuesto a Excel o PDF, o imprímelo para respaldo.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Modificar la estructura del plan de cuentas",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
      ],
    },
  ],
};

// Aplicar cargos a todas las acciones
export const zunacc = addCargosToModule(zunaccBase);
