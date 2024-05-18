-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 01:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alugueis`
--

-- --------------------------------------------------------

--
-- Table structure for table `aluguel`
--

CREATE TABLE `aluguel` (
  `id` int(11) NOT NULL,
  `placa` varchar(8) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `reserva` date NOT NULL,
  `retirada` date DEFAULT NULL,
  `devolucao` date DEFAULT NULL,
  `subtotal` decimal(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `aluguel`
--

INSERT INTO `aluguel` (`id`, `placa`, `cpf`, `reserva`, `retirada`, `devolucao`, `subtotal`) VALUES
(1, 'DEA-7981', '111.111.111-11', '2024-03-23', '2024-03-23', '2024-03-28', 500.00),
(2, 'CBC-4945', '222.222.222-22', '2024-03-23', '2024-03-24', '2024-04-03', 1200.00),
(3, 'BEE-7735', '333.333.333-33', '2024-03-25', '2024-03-26', '2024-04-05', 1000.00),
(4, 'CBA-4403', '444.444.444-44', '2024-03-28', '2024-03-29', '2024-04-08', 1000.00),
(5, 'BBC-8504', '444.444.444-44', '2024-04-02', '2024-04-02', '2024-04-12', 1000.00),
(6, 'BEB-5885', '111.111.111-11', '2024-04-02', '2024-04-02', '2024-04-17', 1500.00),
(7, 'EDB-2475', '111.111.111-11', '2024-04-02', '2024-04-02', '2024-04-07', 1000.00),
(8, 'CBC-4901', '444.444.444-44', '2024-04-07', '2024-04-07', '2024-04-17', 1200.00),
(9, 'EDB-2475', '111.111.111-11', '2024-04-09', '2024-04-10', '2024-04-22', 2400.00),
(10, 'DEA-7981', '444.444.444-44', '2024-04-11', '2024-04-11', '2024-04-27', 1600.00),
(11, 'CBA-4403', '555.555.555-55', '2024-04-11', '2024-04-11', '2024-04-24', 1300.00),
(12, 'BBC-8504', '333.333.333-33', '2024-04-12', '2024-04-13', '2024-04-17', 400.00),
(13, 'BEE-7735', '222.222.222-22', '2024-04-14', '2024-04-15', '2024-04-26', 1100.00),
(14, 'BEB-5885', '111.111.111-11', '2024-04-17', '2024-04-17', '2024-05-02', 1500.00),
(15, 'CBA-4403', '555.555.555-55', '2024-04-18', '2024-04-18', '2024-05-04', 1600.00),
(16, 'BEE-7735', '333.333.333-33', '2024-04-20', '2024-04-21', '2024-05-06', 1500.00),
(17, 'BBC-8504', '444.444.444-44', '2024-04-22', '2024-04-22', '2024-05-02', 1000.00),
(18, 'CBC-4945', '444.444.444-44', '2024-04-22', '2024-04-22', NULL, 0.00),
(19, 'DEA-7981', '555.555.555-55', '2024-04-23', '2024-04-23', NULL, 0.00),
(20, 'EDB-2475', '555.555.555-55', '2024-04-27', '2024-04-27', NULL, 0.00),
(21, 'CBA-4403', '222.222.222-22', '2024-05-05', '2024-03-28', NULL, 0.00),
(22, 'BEB-5885', '222.222.222-22', '2024-05-05', '2024-03-23', NULL, 0.00),
(23, 'BBC-8504', '222.222.222-22', '2024-05-06', NULL, NULL, 0.00),
(24, 'DEA-7981', '111.111.111-11', '2024-05-07', NULL, NULL, 0.00),
(25, 'CBC-4945', '222.222.222-22', '2024-05-07', NULL, NULL, 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `cpf` varchar(14) NOT NULL,
  `nome_cliente` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`cpf`, `nome_cliente`) VALUES
('111.111.111-11', 'Osvaldo Oliveira'),
('222.222.222-22', 'Jaqueline Teixeira'),
('333.333.333-33', 'Keli Matos'),
('444.444.444-44', 'Ursula Souza'),
('555.555.555-55', 'Evandro Silva');

-- --------------------------------------------------------

--
-- Table structure for table `telefone`
--

CREATE TABLE `telefone` (
  `cpf` varchar(14) DEFAULT NULL,
  `numero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `telefone`
--

INSERT INTO `telefone` (`cpf`, `numero`) VALUES
('111.111.111-11', '19-06078-6843'),
('111.111.111-11', '19-72077-0521'),
('222.222.222-22', '19-23003-4864'),
('333.333.333-33', '19-06486-6449'),
('333.333.333-33', '19-53266-7923'),
('444.444.444-44', '19-64378-2404'),
('555.555.555-55', '19-53315-2734');

-- --------------------------------------------------------

--
-- Table structure for table `veiculo`
--

CREATE TABLE `veiculo` (
  `placa` varchar(8) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `tipo` enum('standart','utilitario','esportivo') NOT NULL,
  `diaria` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `veiculo`
--

INSERT INTO `veiculo` (`placa`, `modelo`, `marca`, `tipo`, `diaria`) VALUES
('BBC-8504', 'Palio', 'Fiat', 'standart', 100.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100.00),
('CBC-4901', 'Fiorino', 'Fiat', 'utilitario', 120.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200.00);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_alugueis_em_andamento`
-- (See below for the actual view)
--
CREATE TABLE `vw_alugueis_em_andamento` (
`id` int(11)
,`placa` varchar(8)
,`cpf` varchar(14)
,`reserva` date
,`retirada` date
,`devolucao` date
,`subtotal` decimal(10,2)
,`nome_cliente` varchar(100)
,`modelo` varchar(100)
,`marca` varchar(100)
,`dias` int(7)
,`sub_calc` decimal(16,2)
,`status` varchar(12)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_alugueis_reservados`
-- (See below for the actual view)
--
CREATE TABLE `vw_alugueis_reservados` (
`id` int(11)
,`placa` varchar(8)
,`cpf` varchar(14)
,`reserva` date
,`retirada` date
,`devolucao` date
,`subtotal` decimal(10,2)
,`nome_cliente` varchar(100)
,`modelo` varchar(100)
,`marca` varchar(100)
,`dias` int(7)
,`sub_calc` decimal(16,2)
,`status` varchar(12)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_todos_os_alugueis_com_status`
-- (See below for the actual view)
--
CREATE TABLE `vw_todos_os_alugueis_com_status` (
`id` int(11)
,`placa` varchar(8)
,`cpf` varchar(14)
,`reserva` date
,`retirada` date
,`devolucao` date
,`subtotal` decimal(10,2)
,`nome_cliente` varchar(100)
,`modelo` varchar(100)
,`marca` varchar(100)
,`dias` int(7)
,`sub_calc` decimal(16,2)
,`status` varchar(12)
);

-- --------------------------------------------------------

--
-- Structure for view `vw_alugueis_em_andamento`
--
DROP TABLE IF EXISTS `vw_alugueis_em_andamento`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_alugueis_em_andamento`  AS SELECT `vw_todos_os_alugueis_com_status`.`id` AS `id`, `vw_todos_os_alugueis_com_status`.`placa` AS `placa`, `vw_todos_os_alugueis_com_status`.`cpf` AS `cpf`, `vw_todos_os_alugueis_com_status`.`reserva` AS `reserva`, `vw_todos_os_alugueis_com_status`.`retirada` AS `retirada`, `vw_todos_os_alugueis_com_status`.`devolucao` AS `devolucao`, `vw_todos_os_alugueis_com_status`.`subtotal` AS `subtotal`, `vw_todos_os_alugueis_com_status`.`nome_cliente` AS `nome_cliente`, `vw_todos_os_alugueis_com_status`.`modelo` AS `modelo`, `vw_todos_os_alugueis_com_status`.`marca` AS `marca`, `vw_todos_os_alugueis_com_status`.`dias` AS `dias`, `vw_todos_os_alugueis_com_status`.`sub_calc` AS `sub_calc`, `vw_todos_os_alugueis_com_status`.`status` AS `status` FROM `vw_todos_os_alugueis_com_status` WHERE `vw_todos_os_alugueis_com_status`.`status` = 'Em andamento' ;

-- --------------------------------------------------------

--
-- Structure for view `vw_alugueis_reservados`
--
DROP TABLE IF EXISTS `vw_alugueis_reservados`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_alugueis_reservados`  AS SELECT `vw_todos_os_alugueis_com_status`.`id` AS `id`, `vw_todos_os_alugueis_com_status`.`placa` AS `placa`, `vw_todos_os_alugueis_com_status`.`cpf` AS `cpf`, `vw_todos_os_alugueis_com_status`.`reserva` AS `reserva`, `vw_todos_os_alugueis_com_status`.`retirada` AS `retirada`, `vw_todos_os_alugueis_com_status`.`devolucao` AS `devolucao`, `vw_todos_os_alugueis_com_status`.`subtotal` AS `subtotal`, `vw_todos_os_alugueis_com_status`.`nome_cliente` AS `nome_cliente`, `vw_todos_os_alugueis_com_status`.`modelo` AS `modelo`, `vw_todos_os_alugueis_com_status`.`marca` AS `marca`, `vw_todos_os_alugueis_com_status`.`dias` AS `dias`, `vw_todos_os_alugueis_com_status`.`sub_calc` AS `sub_calc`, `vw_todos_os_alugueis_com_status`.`status` AS `status` FROM `vw_todos_os_alugueis_com_status` WHERE `vw_todos_os_alugueis_com_status`.`status` = 'Reservado' ;

-- --------------------------------------------------------

--
-- Structure for view `vw_todos_os_alugueis_com_status`
--
DROP TABLE IF EXISTS `vw_todos_os_alugueis_com_status`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_todos_os_alugueis_com_status`  AS SELECT `a`.`id` AS `id`, `a`.`placa` AS `placa`, `a`.`cpf` AS `cpf`, `a`.`reserva` AS `reserva`, `a`.`retirada` AS `retirada`, `a`.`devolucao` AS `devolucao`, `a`.`subtotal` AS `subtotal`, `c`.`nome_cliente` AS `nome_cliente`, `v`.`modelo` AS `modelo`, `v`.`marca` AS `marca`, CASE WHEN `a`.`devolucao` is null AND `a`.`retirada` is null THEN 0 WHEN `a`.`devolucao` is null THEN to_days(curdate()) - to_days(`a`.`retirada`) ELSE to_days(`a`.`devolucao`) - to_days(`a`.`retirada`) END AS `dias`, if(`a`.`retirada` is null,0,if(`a`.`devolucao` is null,to_days(curdate()) - to_days(`a`.`retirada`),to_days(`a`.`devolucao`) - to_days(`a`.`retirada`))) * (select `veiculo`.`diaria` from `veiculo` where `veiculo`.`placa` = `a`.`placa`) AS `sub_calc`, CASE WHEN `a`.`devolucao` is not null THEN 'Conclu¡do' WHEN `a`.`devolucao` is null AND `a`.`retirada` is not null THEN 'Em andamento' ELSE 'Reservado' END AS `status` FROM ((`aluguel` `a` left join `cliente` `c` on(`a`.`cpf` = `c`.`cpf`)) left join `veiculo` `v` on(`a`.`placa` = `v`.`placa`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aluguel`
--
ALTER TABLE `aluguel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cpf` (`cpf`),
  ADD KEY `placa` (`placa`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cpf`);

--
-- Indexes for table `telefone`
--
ALTER TABLE `telefone`
  ADD UNIQUE KEY `numero` (`numero`),
  ADD KEY `cpf` (`cpf`);

--
-- Indexes for table `veiculo`
--
ALTER TABLE `veiculo`
  ADD PRIMARY KEY (`placa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aluguel`
--
ALTER TABLE `aluguel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aluguel`
--
ALTER TABLE `aluguel`
  ADD CONSTRAINT `aluguel_ibfk_1` FOREIGN KEY (`cpf`) REFERENCES `cliente` (`cpf`),
  ADD CONSTRAINT `aluguel_ibfk_2` FOREIGN KEY (`placa`) REFERENCES `veiculo` (`placa`);

--
-- Constraints for table `telefone`
--
ALTER TABLE `telefone`
  ADD CONSTRAINT `telefone_ibfk_1` FOREIGN KEY (`cpf`) REFERENCES `cliente` (`cpf`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
