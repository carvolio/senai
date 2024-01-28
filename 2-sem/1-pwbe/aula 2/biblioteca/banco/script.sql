drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

create table Livros(
    id integer not null auto_increment primary key,
    nome varchar(15) not null,
    autor varchar(15) not null,
    publicacao date not null
);

describe Livros;