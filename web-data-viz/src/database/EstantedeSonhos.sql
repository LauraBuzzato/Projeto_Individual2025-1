create database estantedesonhos;
use estantedesonhos;

create table usuario(
id int not null primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45));

create table livro(
id int not null primary key auto_increment,
nome varchar(45),
autor varchar(45),
genero varchar(45),
qtdPagina int, 
urlCapa varchar(100));

create table lido(
fkusuario int not null,
fklivro int not null,
nota int,
avaliacao varchar(1000),
primary key (fkusuario, fklivro),
constraint fkusuario foreign key (fkusuario) references usuario(id),
constraint fklivro foreign key (fklivro) references livro(id));

INSERT INTO livro (nome, genero, qtdPagina, urlCapa, autor) VALUES
('A Culpa é das Estrelas', 'Romance', 288, 'https://m.media-amazon.com/images/I/41yToN1cOML._SY445_SX342_ControlCacheEqualizer_.jpg', 'John Green'),
('Harry Potter e a Pedra Filosofal', 'Fantasia', 208, 'https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_ControlCacheEqualizer_.jpg', 'J.K. Rowling'),
('O Senhor dos Anéis: A Sociedade do Anel', 'Fantasia', 576, 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_ControlCacheEqualizer_.jpg', 'J.R.R. Tolkien'),
('1984', 'Distopia', 416, 'https://m.media-amazon.com/images/I/51feD87yuEL._SY445_SX342_ControlCacheEqualizer_.jpg', 'George Orwell'),
('O Pequeno Príncipe', 'Fábula', 96, 'https://m.media-amazon.com/images/I/81TmOZIXvzL._SY522_.jpg', 'Antoine de Saint-Exupéry'),
('Jogos Vorazes', 'Distopia', 393, 'https://m.media-amazon.com/images/I/41pbZcXFYkL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Suzanne Collins'),
('Orgulho e Preconceito', 'Romance', 424, 'https://m.media-amazon.com/images/I/51lC3sHYyML._SY445_SX342_ControlCacheEqualizer_.jpg', 'Jane Austen'),
('Percy Jackson e o Ladrão de Raios', 'Fantasia', 400, 'https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UF350,350_QL50_.jpg', 'Rick Riordan'),
('Dom Casmurro', 'Romance', 208, 'https://m.media-amazon.com/images/I/41AYWyc6qmL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Machado de Assis'),
('A Menina que Roubava Livros', 'Drama', 480, 'https://m.media-amazon.com/images/I/41pVlY-bbaL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Markus Zusak');
