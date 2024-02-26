DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia;
USE borracharia;

CREATE TABLE Clientes(
    id_clientes integer not null auto_increment primary key,
    nome varchar(30) not null,
    endereco varchar(50) not null
);

CREATE TABLE Fornecedores(
    id_fornecedores integer not null auto_increment primary key,
    nome varchar(30) not null,
    endereco varchar(50) not null
);

CREATE TABLE Produtos(
    id_produtos integer not null auto_increment primary key,
    nome varchar(30) not null,
    valor decimal(10,2) not null,
    id_fornecedores integer unique not null,
    foreign key (id_fornecedores) references Fornecedores(id_fornecedores)
);

CREATE TABLE Estoque(
    id_estoque integer not null auto_increment primary key,
    id_produtos integer unique not null,
    foreign key (id_produtos) references Produtos(id_produtos),
    quantidade integer not null
);

INSERT INTO Clientes (nome, endereco) VALUES 
('Fernanda Castro', 'Avenida Paulista 123'),
('Catarina de Souza', 'Avenida das Palmeiras 695'),
('Alex Paulo Oliveira', 'Rua Paulo de Souza');

INSERT INTO Fornecedores (nome, endereco) VALUES 
('Peneus S.A.', 'Avenida Paulista 123'),
('Flavinho do Peneu', 'Avenida das Palmeiras 695'),
('Amazon', 'Rua Paulo de Souza');

INSERT INTO Produtos (nome, valor, id_fornecedores) VALUES
('pneu', 100.00, 1),
('Graxa', 157.00, 2),
('Flanela', 13.00, 3);

INSERT INTO Estoque (id_produtos, quantidade) VALUES
(1, 3),
(2, 1),
(3, 2);

