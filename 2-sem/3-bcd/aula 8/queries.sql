Crie uma consulta que liste os clientes em ordem alfabética de nome
SELECT * FROM `cliente` ORDER BY nome_cliente ASC;

Crie uma consulta que liste todos os clientes e seus telefones
SELECT nome_cliente, telefone FROM `cliente`;

Crie uma consulta que liste todos os veículos em ordem crescente de marca e modelo
SELECT * FROM `veiculo` ORDER BY marca, modelo ASC;

Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pela diária decrescente
SELECT * FROM `veiculo` WHERE marca = "fiat" ORDER BY diaria DESC;

Crie uma consulta que mostre todos os dados dos veículos e a quantidade de aluguéis realizadas em cada um
SELECT v.*, COUNT(a.placa) as 'alugeis' FROM veiculo v INNER JOIN aluguel a ON v.placa = a.placa GROUP BY v.placa;

Crie um relatório que mostre todos os auguéis acrescidos do nome do cliente, modelo e marca do veículo, dias, subtotal e salve como uma visão chamada vw_todos_os_alugueis
create view vw_todos_os_alugueis as 
SELECT a.*, c.nome_cliente, v.modelo, v.marca FROM aluguel a INNER JOIN cliente c ON a.cpf_cliente = c.cpf_cliente INNER JOIN veiculo v ON a.placa = v.placa;