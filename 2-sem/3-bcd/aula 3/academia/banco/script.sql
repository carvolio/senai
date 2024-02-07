drop database if exists academia_banco;
create database academia_banco; 
use academia_banco;

drop table IF EXISTS Funcionario; 
create table Funcionario (
    id_funcionario integer not null auto_increment primary key,
    cargo varchar(25) not null,
    cpf varchar(14) unique not null,
    nome varchar(25) not null,
    nascimneto date not null,
    cep varchar(8) not null,
    numero varchar(5) not null,
    complemento varchar(100)
);

drop table IF EXISTS Cliente; 
create table Cliente (
    id_cliente integer not null auto_increment primary key,
    cpf varchar(14) unique not null,
    nome varchar(25) not null,
    cep varchar(8) not null,
    numero varchar(5)
);

drop table IF EXISTS Instrutor; 
create table Instrutor (
    id_instrutor integer not null auto_increment primary key,
    id_cliente integer not null,
    foreign key (id_cliente) references Cliente(id_cliente),
    id_funcionario integer not null,
    foreign key (id_funcionario) references Funcionario(id_funcionario),
    horario time
);

drop table IF EXISTS Equipamento; 
create table Equipamento (
    id_equipamneto integer not null auto_increment primary key,
    nome varchar(25) not null,
    funcao varchar(25) not null,
    ultima_manutencao date not null
);

drop table IF EXISTS Pagamento; 
create table Pagamento (
    id_pagamento integer not null auto_increment primary key,
    id_cliente integer not null,
    foreign key (id_cliente) references Cliente(id_cliente),
    valor varchar(10) not null,
    data_pago datetime not null 
);

drop table IF EXISTS Frequencia; 
create table Frequencia (
    dia datetime not null,
    id_cliente integer not null,
    foreign key (id_cliente) references Cliente(id_cliente),
    presente varchar(1) not null
);

describe Cliente;
describe Funcionario;
describe Instrutor;
describe Equipamento;
describe Pagamento;
describe Frequencia;