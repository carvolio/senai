drop database if exists transportadora;
create database transportadora;
use transportadora;

create table cliente (
    id_cliente integer not null primary key auto_increment,
    nome varchar(20) not null,
    endereco varchar(50) not null,
    telefone numeric(11) not null,
    email varchar(30) not null
);

create table funcionario (
    id_funcionario integer not null auto_increment primary key,
    nome varchar(20) not null,
    cargo varchar(15) not null,
    salario decimal(10,2) not null
);

create table veiculo (
    id_veiculo integer not null auto_increment primary key,
    placa varchar(15) not null,
    modelo varchar(15) not null,
    capacidade varchar(15) not null
);

create table rota (
    id_rota integer not null auto_increment primary key,
    origem varchar(50) not null,
    destino varchar(50) not null,
    distancia varchar(15) not null
);

create table entrega (
    id_entrega integer not null auto_increment primary key,
    id_veiculo integer not null,
    foreign key (id_veiculo) references veiculo(id_veiculo),
    motorista integer not null,
    foreign key (motorista) references funcionario(id_funcionario),
    id_rota integer not null,
    foreign key (id_rota) references rota(id_rota),
    inicio date not null,
    fim date not null,
    status varchar(10) not null
);

create table pedido (
    id_pedido integer not null auto_increment primary key,
    id_entrega integer not null,
    foreign key (id_entrega) references entrega(id_entrega),
    id_cliente integer not null,
    foreign key (id_cliente) references cliente(id_cliente),
    dataPedido date not null,
    valor decimal(10,2) not null
);

insert into cliente (nome ,endereco, telefone, email) values
('Fabiula de Souza', 'Avenida Paulista 123', 19111111111, 'fabiuladesouza@gmail.com'),
('Joaquim dos Peixes', 'Rua Santos Gonçalos 588', 19222222222, 'joaquimdospeixes@gmail.com'),
('Larissa Araujo', 'Avenida Pereira 321', 19333333333, 'larissaaraujo@gmail.com'),
('Bruno Otávio', 'Rua Conceição Tavares 34', 19444444444, 'brunootávio@gmail.com'),
('Alexandre dos Santos', 'Rua Maria das Graças 354', 19555555555, 'alexandredossantos@gmail.com');

insert into funcionario (nome, cargo, salario) values
('João das neves', 'Caminhoneiro', 1500.00),
('Fernanda Teixeira', 'Caminhoneiro', 1500.00),
('Sandra Dias', 'Trocador de Pneu', 1300.00);

insert into veiculo (placa, modelo, capacidade) values
('KQG-0005','caminhão', '1 tonelada'),
('NEW-6967','caminhão', '1.5 tonelada'),
('JYA-1825','Caminhonete', '0.5 tonelada');

insert into rota (origem, destino, distancia) values
('Avenida Paulista 123', 'Rua Santos Gonçalos 588', '24 km'),
('Avenida Pereira 321', 'Rua Conceição Tavares 34', '76 km'),
('Rua Maria das Graças 354', 'Rua Santos Gonçalos 588', '12 km');

insert into entrega (id_veiculo, motorista, id_rota, inicio, fim, status) values
(1, 1, 1, '2024-01-12', '2024-01-15', 'completo'),
(2, 1, 1, '2024-01-13', '2024-01-15', 'completo'),
(3, 1, 1, '2024-01-15', '2024-01-20', 'completo'),
(3, 1, 3, '2024-01-15', ' ', 'andamento'),
(3, 2, 2, '2024-01-18', '2024-01-20', 'completo'),
(1, 2, 2, '2024-01-23', '2024-01-30', 'completo'),
(1, 1, 1, '2024-01-29', ' ', 'andamento'),
(2, 1, 1, '2024-02-01', '2024-02-07', 'completo'),
(2, 2, 3, '2024-02-05', '2024-02-09', 'completo'),
(2, 1, 3, '2024-02-10', '2024-02-15', 'completo');

insert into pedido (id_entrega, id_cliente, dataPedido, valor) values
(1, 5, '2024-01-01', 500.00),
(1, 4, '2024-01-01', 125.00),
(2, 1, '2024-01-01', 173.23),
(2, 1, '2024-01-02', 1421.51),
(3, 1, '2024-01-02', 19.00),
(3, 4, '2024-01-02', 100.00),
(4, 3, '2024-01-02', 473.83),
(4, 2, '2024-01-02', 98.00),
(5, 2, '2024-01-04', 67.70),
(5, 2, '2024-01-04', 847.23),
(6, 1, '2024-01-04', 356.00),
(6, 1, '2024-01-06', 123.00),
(7, 5, '2024-01-06', 321.00),
(7, 5, '2024-01-06', 231.00),
(8, 5, '2024-01-07', 312.00),
(8, 3, '2024-01-07', 564.84),
(9, 4, '2024-01-09', 735.00),
(9, 2, '2024-01-09', 3435.00),
(10, 1, '2024-01-09', 752.09),
(10, 3, '2024-01-09', 430.00);