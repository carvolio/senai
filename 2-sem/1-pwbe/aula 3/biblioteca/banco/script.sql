drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

create table Livros(
    id integer not null auto_increment primary key,
    nome varchar(20) not null,
    autor varchar(20) not null,
    publicacao date not null
);

describe Livros;