DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

create table Motorista (
    CPF VARCHAR(14) NOT NULL primary key,
    Nome_motorista VARCHAR(100) NOT NULL
);

create table Telefone ( 
    CPF VARCHAR(14) NOT NULL,
    Numero VARCHAR(15) NOT NULL UNIQUE,
    foreign key (CPF) references Motorista(CPF)
);

create table Linha (
    ID_linha VARCHAR(6) NOT NULL primary key,
    Descricao_linha VARCHAR(100) NOT NULL
);

create table Horarios (
    ID_linha VARCHAR(6) NOT NULL,
    Horarios VARCHAR(10) NOT NULL,
    foreign key (ID_linha) references Linha(ID_linha)
);

create table Dirige (
    CPF VARCHAR(14) NOT NULL,
    ID_linha VARCHAR(6) NOT NULL,
    foreign key (CPF) references Motorista(CPF),
    foreign key (ID_linha) references Linha(ID_linha)
);


LOAD DATA INFILE 'C:/Users/guica/Downloads/motorista.csv'
INTO TABLE Motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/guica/Downloads/telefone.csv'
INTO TABLE Telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/guica/Downloads/linha.csv'
INTO TABLE Linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/guica/Downloads/horario.csv'
INTO TABLE Horarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/guica/Downloads/dirige.csv'
INTO TABLE Dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;