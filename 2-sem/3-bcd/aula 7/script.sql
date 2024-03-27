drop database if exists aluguel_veiculos;
create database aluguel_veiculos;
use aluguel_veiculos;

create table veiculo (
    placa varchar(8) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    ano varchar(4) not null
);

create table funcionario (
    matricula integer not null auto_increment primary key,
    nome varchar(30) not null,
    telefone varchar(50) not null
);

create table manutencao (
    id_manutencao integer not null auto_increment primary key,
    inicio_manutencao date not null,
    fim_manutencao date not null,
    descricao varchar(50) not null,
    placa varchar(8) not null,
    foreign key (placa) references veiculo(placa),
    matricula integer not null,
    foreign key (matricula) references funcionario(matricula)
);

