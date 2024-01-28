
-- DDL estrutura e desenvolvimento

drop databese if exists lojinha;
create databese lojinha;
use lojinha;

create table Clientes (
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);

describe Clientes;

-- DML manipulação

insert into Clientes(cpf, nome, sobrenome, nascimento) values 
("111.111.111.11", "jair", "silva", "1234.12.12"),
("222.222.222.122", "bruno", "silva", "1264.12.12"),
("333.333.333.33", "guilherme", "silva", "1294.12.12");

select * from Clientes;