create database estantedesonhos;
use estantedesonhos;

create table usuario(
id int not null primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

create table livro(
id int not null primary key auto_increment,
nome varchar(45),
genero varchar(45),
qtdPagina int, 
urlCapa varchar(100));

create table lido(
fkusuario int not null,
fklivro int not null,
nota int,
avaliacao varchar(200),
primary key (fkusuario, fklivro),
constraint fkusuario foreign key (fkusuario) references usuario(id),
constraint fklivro foreign key (fklivro) references livro(id));
select nome, genero, qtdPagina, urlCapa from livro order by nome asc;
select * from lido;


