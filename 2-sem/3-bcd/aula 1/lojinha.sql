drop database if exists lojinha;
create database lojinha;
use lojinha;

create table Clientes (
    id integer primary key not null auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);

describe Clientes;

show tables;