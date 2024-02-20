create database if not exists companydb;

use companydb;
show tables;

create table employee(
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default null,
    primary key (id)
);

describe employee;

insert into employee values
    (1, 'Pabel', 1000),
    (2, 'Sofia', 2000),
    (3, 'Fiorela', 3000);