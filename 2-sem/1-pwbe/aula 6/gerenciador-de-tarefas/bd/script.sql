drop database if exists gerenciador_de_tarefas;
create database gerenciador_de_tarefas;
use gerenciador_de_tarefas;

create table Usuarios (
    id_usuarios integer not null auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) not null,
    senha varchar(50) not null
);

create table Tarefas (
    id_tarefas integer not null auto_increment primary key,
    descricao varchar(255),
    dataVencimento datetime,
    status varchar(20) not null,
    id_usuarios integer not null,
    foreign key (id_usuarios) references Usuarios(id_usuarios)
);

