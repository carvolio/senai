funcionários em ordem alfabética de nome
SELECT * FROM `funcionario` ORDER BY nome ASC;

todos os funcionários e seus telefones
SELECT nome, telefone FROM `funcionario` ORDER BY nome ASC;

veículos da marca 'Fiat' ordenados pelo ano decrescente
SELECT * FROM `veiculo` where marca = "fiat" ORDER BY ano DESC;

todos os dados dos veículos e a quantidade de manutenções realizadas em cada um
SELECT v.*, COUNT(m.id_manutencao) FROM veiculo v inner join manutencao m ON m.placa = v.placa GROUP BY v.placa;

todas as manutenções acrescida do nome do funcionário que a realizou e o modelo do veículo e salve como uma visão chamada vw_totas_as_manutencoes
CREATE VIEW vw_totas_as_manutencoes AS
SELECT m.*, f.nome, v.modelo FROM manutencao m inner join funcionario f ON m.matricula = f.matricula inner join veiculo v ON m.placa = v.placa;