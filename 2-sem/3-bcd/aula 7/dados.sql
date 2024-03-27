
INSERT ignore INTO veiculo (placa, modelo, marca, ano) VALUES
('DEA-7981', 'Uno', 'Fiat', "2005"),
('CBC-4945', 'Fiorino', 'Fiat', "2007"),
('BEE-7735', 'Saveiro', 'VW', "2015"),
('CBA-4403', 'Sandeiro', 'Renault', "2012"),
('BBC-8504', 'Palio', 'Fiat', "2004"),
('BEB-5885', 'Gol', 'VW', "2013"),
('EDB-2475', 'Ranger', 'Ford', "2005"),
('CBC-4945', 'Fiorino', 'Fiat', "2007"),
('EDB-2475', 'Ranger', 'Ford', "2005"),
('DEA-7981', 'Uno', 'Fiat', "2005"),
('CBA-4403', 'Sandeiro', 'Renault', "2012"),
('BBC-8504', 'Palio', 'Fiat', "2004"),
('BEE-7735', 'Saveiro', 'VW', "2015"),
('BEB-5885', 'Gol', 'VW', "2013");

insert ignore into funcionario (matricula, nome, telefone) values
(48482, 'Osvaldo Oliveira', '19-72077-0521,19-06078-6843'),
(48542, 'Jaqueline Teixeira', '19-23003-4864'),
(48522, 'Keli Matos', '19-06486-6449,19-53266-7923'),
(48502, 'Ursula Souza', '19-64378-2404'),
(48562, 'Evandro Silva', '19-53315-2734');

insert into manutencao (inicio_manutencao, fim_manutencao, descricao, placa, matricula) values
('25/02/2023', '04/03/2023', 'Lanterna queimada', 'DEA-7981', 48482),
('13/03/2023', '21/03/2023', 'Farol queimado', 'CBC-4945', 48542),
('29/03/2023', '05/04/2023', 'Troca de pneus dianteiros', 'BEE-7735', 48522),
('14/04/2023', '24/04/2023', 'Troca de pneus dianteiros', 'CBA-4403', 48502),
('30/04/2023', '07/05/2023', 'Farol queimado', 'BBC-8504', 48502),
('16/05/2023', '25/05/2023', 'Troca de pneus trazeiros', 'BEB-5885', 48482),
('05/06/2023', '10/06/2023', 'Retrovizor quebrado', 'EDB-2475', 48482),
('25/06/2023', '02/07/2023', 'Troca de óleo e revisão geral', 'CBC-4945', 48502),
('15/07/2023', '19/07/2023', 'Troca de Fluido de Freio', 'EDB-2475', 48482);

