-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2026 a las 00:11:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `zunsteps`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acciones`
--

CREATE TABLE `acciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `id_seccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `acciones`
--

INSERT INTO `acciones` (`id`, `nombre`, `descripcion`, `id_seccion`) VALUES
(4, 'Pasos para la instalación ', 'Instalar sql server es el pirmer paso para la puesta en marcha del servidor sql para el correcto funcionamiento de la Suite ZUN.', 3),
(5, 'PROCEDIMIENTO PARA CREACION UEB AUTORIZADAS', ': Este procedimiento es para uso de los técnicos de GET y especialistas Informáticos de algunas entidades que estén preparados para este tipo de trabajo. Surge basado en el conocimiento adquirido en los intercambios con especialistas del MINTUR, según este entendimiento NO SE CIERRAN LAS CUENTAS NOMINALES (Estado de Resultado) en la contabilidad actual de la entidad, no se deben cerrar contra cuenta de resultado NI DE NINGUN OTRO MODO, las cuentas nominales se deben mantener en la contabilidad actual hasta que se haga el cierre de ejercicio, para de este modo poder mantener el acumulado que tributaron estas cuentas a nivel de consolidado en la Casa Matriz. Las cuentas de ACTIVOS y PASIVOS(Balance General) se cierran en la contabilidad actual contra una cuenta de transferencia y se abren en la nueva contabilidad contra la misma cuenta de transferencia. De este modo la nueva contabilidad nace solamente con los saldos de las cuentas de ACTIVOS y PASIVOS y con las cuentas nominales en 0.', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cadenas`
--

CREATE TABLE `cadenas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cadenas`
--

INSERT INTO `cadenas` (`id`, `nombre`) VALUES
(1, 'Gaviota'),
(2, 'Islazul'),
(3, 'Otras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id`, `nombre`, `descripcion`) VALUES
(1, 'GET', 'GET'),
(2, 'ADMIN', 'ADMIN'),
(3, 'Especialista', 'Especialista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Utilitario', 'Utilitario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `facturado` tinyint(1) NOT NULL,
  `id_cadena` int(11) NOT NULL,
  `contacto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `direccion`, `facturado`, `id_cadena`, `contacto`) VALUES
(1, 'Sucursal Islazul Varadero\r\n', '', 0, 2, ''),
(2, 'Sucursal Emprestur SA Servicios Tecnológicos Varadero \r\n', '', 0, 3, ''),
(3, 'UBI Islazul Varadero\r\n', '', 0, 2, ''),
(4, 'HOTEL EL PATRIARCA\r\n', '', 0, 1, ''),
(5, 'HOTEL LA SALINA\r\n', '', 0, 1, ''),
(6, 'HOTEL LAGUNA AZUL\r\n', '', 0, 1, ''),
(7, 'GAVIOTA TOURS\r\n', '', 0, 1, ''),
(8, 'UEB La Sirenas\r\n', '', 0, 1, ''),
(9, 'Agencia Empleatur Matanzas\r\n', '', 0, 3, ''),
(10, 'Simon joyeria calle 28\r\n', '', 0, 3, ''),
(11, 'CNA Castell Nuovo\r\n', '', 0, 3, ''),
(12, 'Servisa S.A.\r\n', '', 0, 3, ''),
(13, 'MARINA GAVIOTA VARADERO\r\n', '', 0, 1, ''),
(14, 'UEB EXTRAHOTELERA GAVIOTA\r\n', '', 0, 1, ''),
(15, 'HOTEL PUNTA FRANCES\r\n', '', 0, 1, ''),
(16, 'HOTEL PENINSULA VARADERO\r\n', '', 0, 1, ''),
(17, 'HOTEL PLAYA ALAMEDA\r\n', '', 0, 1, ''),
(18, 'UEB TRANSGAVIOTA\r\n', '', 0, 1, ''),
(19, 'Hotel Princesa del Mar\r\n', '', 0, 1, ''),
(20, 'Sucursal de Omnibus Transtur\r\n', '', 0, 3, ''),
(21, 'Hotel El Caney\r\n', '', 0, 1, ''),
(22, 'Hotel Oasis II\r\n', '', 0, 1, ''),
(23, 'Hotel Oasis I', '', 0, 1, ''),
(24, 'AT LAVANDERIA\r\n', '', 0, 3, ''),
(25, 'AT Comercial S. A.\r\n', '', 0, 3, ''),
(26, 'Extrahotelera Oasis\r\n', '', 0, 1, ''),
(27, 'Mtto constructivo\r\n', '', 0, 3, ''),
(28, 'UEB PUEBLO HOTELERO LA MARINA\r\n', '', 0, 1, ''),
(29, 'UEB Hotel Conchas I.\r\n', '', 0, 1, ''),
(30, 'UEB Hotel Conchas II', '', 0, 1, ''),
(31, 'UEB Hotel Punta Hicaco\r\n', '', 0, 1, ''),
(32, 'HOTEL PLAYA MARINA\r\n', '', 0, 1, ''),
(33, 'UEB Hotel Coral\r\n', '', 0, 1, ''),
(34, 'FIESTA DEL CARBON\r\n', '', 0, 3, ''),
(35, 'Hotel Laguna Dorada\r\n', '', 0, 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `errores`
--

CREATE TABLE `errores` (
  `id` int(11) NOT NULL,
  `error` varchar(255) NOT NULL,
  `solucion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `nivel_acc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `errores`
--

INSERT INTO `errores` (`id`, `error`, `solucion`, `imagen`, `nivel_acc`) VALUES
(1, 'Error 0001', 'Error de prueba del sistema, dato ficticio.', 'images/errors/test.jpg', 1),
(2, 'Error 404', 'Revisa la url', 'imagen.jpg', 1),
(3, 'Error 000: system files', 'Solucion de prueba 2', 'imagen.jpg', 2),
(4, 'desde sql', 'desde sql', 'imagen-desde-sql.jpg', 1),
(5, 'error 21', 'prueba desde form', 'este es un error de prueba desde el form', 1),
(6, 'error con imagen', 'solucion de error con imagen desde form', '/errors_images/error_1776615371097_32qcuo.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `links`
--

INSERT INTO `links` (`id`, `url`, `descripcion`, `id_user`) VALUES
(6, 'https://stac.get.tur.cu/', 'Plataforma para el control de reportes  y ordenes de trabajo para el GET', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login_attempts`
--

CREATE TABLE `login_attempts` (
  `id` int(11) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `razon` varchar(50) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login_attempts`
--

INSERT INTO `login_attempts` (`id`, `telefono`, `razon`, `fecha`) VALUES
(1, '+53 5 1234567', 'USER_NOT_FOUND', '2026-03-15 23:45:07'),
(2, '+53 555429129', 'USER_NOT_FOUND', '2026-03-15 23:45:23'),
(3, '+5355429129', 'USER_NOT_FOUND', '2026-03-21 00:07:55'),
(4, '+5355429129', 'USER_NOT_FOUND', '2026-03-21 00:09:08'),
(5, '+53 55429129', 'USER_NOT_FOUND', '2026-03-21 00:24:56'),
(6, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 00:04:40'),
(7, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 04:08:39'),
(8, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 15:42:18'),
(9, '+5355429129', 'USER_NOT_FOUND', '2026-03-26 15:43:09'),
(10, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 15:43:40'),
(11, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 15:45:18'),
(12, '+53 5 1234567', 'USER_NOT_FOUND', '2026-03-26 15:45:31'),
(13, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 15:45:58'),
(14, '+53 55429129', 'USER_NOT_FOUND', '2026-03-26 15:46:45'),
(15, '+53 63907157', 'USER_NOT_FOUND', '2026-04-01 20:51:11'),
(16, '+53 63907157', 'USER_NOT_FOUND', '2026-04-01 20:56:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulocargo`
--

CREATE TABLE `modulocargo` (
  `id_modulo` int(11) NOT NULL,
  `id_cargo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modulocargo`
--

INSERT INTO `modulocargo` (`id_modulo`, `id_cargo`) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 1),
(3, 1),
(3, 2),
(4, 1),
(5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--

CREATE TABLE `modulos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modulos`
--

INSERT INTO `modulos` (`id`, `nombre`, `imagen`, `descripcion`) VALUES
(7, 'Server', '', 'SQL Server 2008 R2 es una versión intermedia del gestor de bases de datos de Microsoft que introdujo mejoras clave en escalabilidad, administración y herramientas de inteligencia de negocio.\r\nPrincipales características de SQL Server 2008 R2\r\nMayor escalabilidad: soporta más usuarios concurrentes y bases de datos más grandes que SQL Server 2008.\r\n\r\nEdiciones disponibles: Express (gratuita), Standard, Enterprise y Datacenter, cada una con diferentes límites de memoria, núcleos y funcionalidades.\r\n\r\nHerramientas de administración:\r\n\r\nSQL Server Management Studio (SSMS) para gestión y consultas.\r\n\r\nUtility Control Point (UCP) para administrar múltiples instancias desde un solo punto.\r\n\r\nInteligencia de negocio (BI):\r\n\r\nMejoras en Reporting Services (RS) con soporte para gráficos avanzados y mapas.\r\n\r\nPowerPivot para Excel, permitiendo análisis de grandes volúmenes de datos.\r\n\r\nSeguridad: integración con Active Directory y mejoras en auditoría de eventos.\r\n\r\nSoporte para virtualización: optimizado para entornos con Hyper-V y VMware.'),
(8, 'SUITE ZUN', '', 'La Suite ZUN es un conjunto de módulos desarrollados con la finalidad de brindar al usuario el manejo fácil y automatizado de operaciones contables, de almacenaje, gestión de recursos humanos, control hotelero entre otras. Propiedad de GET.'),
(9, 'Manuales', '', 'Utilitarios manuales para describir paso a paso acciones importantes y con cierto grado de complejidad para el usuario.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Publico', 'Nivel de acceso para todos los ususarios'),
(2, 'Tecnico', 'Solo para asistencia tecnica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasos`
--

CREATE TABLE `pasos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `id_accion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pasos`
--

INSERT INTO `pasos` (`id`, `nombre`, `imagen`, `descripcion`, `id_accion`) VALUES
(4, 'Validar Requisitos', '', 'Se valida que el sistema operativo cumpla los requisitos.', 4),
(5, 'Instalador', '', 'Se ejecuta el instalador de SQL Server.', 4),
(6, 'Nueva...', '', 'Se selecciona la opción de nueva instalación', 4),
(7, 'Términos', '', 'Se aceptan términos de licencia.', 4),
(8, 'Verificación', '', 'Se realiza la verificación de reglas de instalación.', 4),
(9, 'Componentes a Instalar', '', 'Se eligen los componentes a instalar (1. Database Engine Services,2. INtegracion de SErvices,3. SQL Server Book Online,4. Managment Tools Complete).', 4),
(10, 'Salvar la base ', '/image.jpg', 'Salvar la base de datos de zunacc tal y como este, revisar que tenga Periodo Junio Cerrado.\r\n', 5),
(11, 'Crear base de datos de zunacc limpia ', '/image.jpg', 'Crear base de datos de zunacc limpia manteniendo plan de cuentas y centros de costos tal y como estén. Para esto se le correrá a la base de datos actual de zunacc el script que limpia la bd pero que mantiene el plan de cuentas completo incluido las cuentas plan y los centros de costos. Ir a la tabla CONTPERI y buscar el id del periodo Julio 2021 anotarlo, posteriormente abrir la tabla CONTNASI localizar ese id de periodo y la columna num_comp ponerla en 1, para reiniciar el consecutivo de los comprobantes para el mes de Julio. Luego se entra por la aplicación en esa bd nueva y se establece en Configuración- Definición de Empresa el Periodo activo de Julio a Julio del 2021. \r\nDe este modo la bd que siempre existió de zunacc se convierte en la nueva contabilidad con la nacerá la entidad como UEB autorizada y garantizamos así que los módulos del ZUN que se enlazan a zunacc no sufran cambios en los enlaces ya que van a seguir referenciando a la misma bd de zunacc de siempre.\r\n', 5),
(12, 'Crear en el sql una nueva base datos ', 'ooo', 'Crear en el sql una nueva base datos de zunacc que será la bd liquidadora.', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scripts`
--

CREATE TABLE `scripts` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `scripts`
--

INSERT INTO `scripts` (`id`, `nombre`, `descripcion`, `code`) VALUES
(1, 'Reset Password', 'Este script reinicia la contraseña del operador get a una contraseña predeterminada (Root2020).', 'update operador set password = \'E63861044767D6E16A11E1BEB9B725DA72BD40C7\' where nombre = \'get\'');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `id_modulo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id`, `nombre`, `id_modulo`) VALUES
(3, 'Instalación', 7),
(4, 'Restores', 7),
(5, 'Back-Ups', 7),
(6, 'Matenimiento', 7),
(7, 'Consultas', 7),
(8, 'Trazas', 7),
(9, 'Actualización', 8),
(10, 'Instalacíon', 8),
(11, 'Configuración ', 8),
(12, 'CREACION UEB AUTORIZADAS', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Licencia', 'Licencia'),
(2, 'Consejos', 'Consejos para el usuario'),
(3, 'Trucos', 'Trucos para el usuario'),
(4, 'Ley', 'Conceptos que siempre se cumplen'),
(5, 'Buenas Practicas', 'Agrupa buenas practicas para el usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tips`
--

CREATE TABLE `tips` (
  `id` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_creado` date NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  `id_clase` int(11) NOT NULL,
  `id_tema` int(11) NOT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tips`
--

INSERT INTO `tips` (`id`, `nombre`, `descripcion`, `fecha_creado`, `imagen`, `usuario_id`, `id_clase`, `id_tema`, `likes`) VALUES
(4, 'Ejecuta como administrador', 'Siempre que estés registrando la licencia de cualquier modulo, ejecuta como administrador para evitar que no se registre de manera correcta o que se pierda la configuración en algún momento', '2026-03-25', 'imagen.jpg', 1, 1, 1, 2),
(5, 'Mantén siempre tus archivos de licencia a mano.', 'Siempre trata de poner los archivos de licencia de cada modulo en la carpeta correspondiente al mismo, esto te evitara problemas a la hora de encontrar el archivo y también es una buena practica para cuando es otro técnico que necesita el archivo.', '2026-03-26', 'imagen.jpg', 1, 1, 1, 1),
(6, '*TABL, si es problema de configuracion ', 'En la Suite ZUN existe un patrón de nomenclatura de tablas y una muy importante es la terminación *TABL, en estas tablas se almacenan los parámetros de configuración de los distintos módulos. Si el problema es de configuración primero revisa esa tabla', '2026-03-25', 'imagen.jpg', 1, 1, 3, 0),
(12, 'El dominio es importante', 'Siempre ten en cuenta que una PC que no esté en el dominio local puede romper vistas en tus BDs así que trata en la medida de lo posible que siempre esten todas las estaciones de trabajos unidas al dominio', '2026-04-05', NULL, 2, 1, 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `telefono`, `token`, `is_active`) VALUES
(1, 'Carlos', '55429129', '2153ee77-947a-4755-9977-bee71f503a91', 1),
(2, 'Administrador', '+5363907157', '669dd9b6-cdd5-40fc-90f2-a16afa23de22', 1),
(3, 'Anisley', '+5354174050', '51df29ff-981c-42fc-b1ea-1f5434fa3576', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acciones`
--
ALTER TABLE `acciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idSeccion` (`id_seccion`);

--
-- Indices de la tabla `cadenas`
--
ALTER TABLE `cadenas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cadena` (`id_cadena`);

--
-- Indices de la tabla `errores`
--
ALTER TABLE `errores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nivel_acc` (`nivel_acc`);

--
-- Indices de la tabla `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `login_attempts`
--
ALTER TABLE `login_attempts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pasos`
--
ALTER TABLE `pasos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAccion` (`id_accion`);

--
-- Indices de la tabla `scripts`
--
ALTER TABLE `scripts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idModulo` (`id_modulo`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tips`
--
ALTER TABLE `tips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `id_clase` (`id_clase`),
  ADD KEY `id_tema` (`id_tema`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefono` (`telefono`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acciones`
--
ALTER TABLE `acciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cadenas`
--
ALTER TABLE `cadenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `errores`
--
ALTER TABLE `errores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `login_attempts`
--
ALTER TABLE `login_attempts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `modulos`
--
ALTER TABLE `modulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `niveles`
--
ALTER TABLE `niveles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pasos`
--
ALTER TABLE `pasos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `scripts`
--
ALTER TABLE `scripts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `temas`
--
ALTER TABLE `temas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tips`
--
ALTER TABLE `tips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acciones`
--
ALTER TABLE `acciones`
  ADD CONSTRAINT `acciones_ibfk_1` FOREIGN KEY (`id_seccion`) REFERENCES `secciones` (`id`);

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`id_cadena`) REFERENCES `cadenas` (`id`);

--
-- Filtros para la tabla `errores`
--
ALTER TABLE `errores`
  ADD CONSTRAINT `errores_ibfk_1` FOREIGN KEY (`nivel_acc`) REFERENCES `niveles` (`id`);

--
-- Filtros para la tabla `links`
--
ALTER TABLE `links`
  ADD CONSTRAINT `links_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `pasos`
--
ALTER TABLE `pasos`
  ADD CONSTRAINT `pasos_ibfk_1` FOREIGN KEY (`id_accion`) REFERENCES `acciones` (`id`);

--
-- Filtros para la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD CONSTRAINT `secciones_ibfk_1` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id`);

--
-- Filtros para la tabla `tips`
--
ALTER TABLE `tips`
  ADD CONSTRAINT `tips_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `tips_ibfk_2` FOREIGN KEY (`id_clase`) REFERENCES `clases` (`id`),
  ADD CONSTRAINT `tips_ibfk_3` FOREIGN KEY (`id_tema`) REFERENCES `temas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
