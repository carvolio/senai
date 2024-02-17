drop database if exists library;
create database library;
use library;

create table Books(
    id integer not null auto_increment primary key,
    nome varchar(20) not null,
    autor varchar(20) not null,
    publicacao date not null
);

describe Books;