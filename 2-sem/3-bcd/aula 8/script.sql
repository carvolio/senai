drop database if exists aluguel_veiculos;
create database aluguel_veiculos;
use aluguel_veiculos;

create table Veiculo (
    placa varchar(8) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    tipo varchar(20) not null,
    diaria float(10,2) not null
);

create table Cliente (
    cpf_cliente integer not null primary key,
    nome_cliente varchar(30) not null,
    telefone varchar(50) not null
);

create table Aluguel (
    id_aluguel integer not null auto_increment primary key,
    reserva date not null,
    retirada date not null,
    devolucao varchar(50) not null,
    placa varchar(8) not null,
    foreign key (placa) references Veiculo(placa),
    cpf_cliente integer not null,
    foreign key (cpf_cliente) references Cliente(cpf_cliente),
    status varchar(20) not null,
    subtotal float(10,2) not null
);

