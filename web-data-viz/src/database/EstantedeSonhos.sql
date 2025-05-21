create database estantedesonhos;
use estantedesonhos;

create table usuario(
id int not null primary key auto_increment,
nome varchar(400),
email varchar(45) unique,
senha varchar(45));

create table livro(
id int not null primary key auto_increment,
nome varchar(200),
autor varchar(200),
genero varchar(45),
qtdPagina int, 
urlCapa varchar(200));

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
('A Menina que Roubava Livros', 'Drama', 480, 'https://m.media-amazon.com/images/I/41pVlY-bbaL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Markus Zusak'),
('Duna', 'Ficção científica', '680', 'https://m.media-amazon.com/images/I/81zN7udGRUL._SY522_.jpg', 'Frank Herbert'),
('Carmilla - A vampira de Karnstein', 'Clássico', '96', 'https://m.media-amazon.com/images/I/61J43V72F7L._SY522_.jpg', 'Le Fanu J. Sheridan'),
('O Corvo', 'Clássico', '200', 'https://m.media-amazon.com/images/I/91GKn4g3fML._SY522_.jpg', 'Edgar Allan Poe'),
('Jantar secreto', 'Suspense', 368, 'https://m.media-amazon.com/images/I/71AeB1+8dZL._SY522_.jpg', 'Raphael Montes'),
('Assistente do Vilão', 'Fantasia', 512, 'https://m.media-amazon.com/images/I/81DkKVIavBL._SY522_.jpg', 'Hannah Nicole Maehrer'),
('A Biblioteca da Meia-Noite', 'Ficção científica', 308, 'https://m.media-amazon.com/images/I/81iqH8dpjuL._SY522_.jpg', 'Matt Haig'),
('It: A coisa', 'Terror', '1104', 'https://m.media-amazon.com/images/I/91g9Dvtf+jL._SY522_.jpg', 'Stephen King'),
('O iluminado', 'Terror', '464', 'https://m.media-amazon.com/images/I/8147kKLLvOL._SY522_.jpg', 'Stephen King'),
('Esperança: A autobiografia', 'Autobiografia', 368, 'https://m.media-amazon.com/images/I/71Vcd8NaDJL._SY522_.jpg', 'Papa Francisco'),
('Rita Lee: Uma autobiografia', 'Autobiografia', 296, 'https://m.media-amazon.com/images/I/81vgnVeezUL._SY522_.jpg', 'Rita Lee'),
('Maus', 'Histórico', 296, 'https://m.media-amazon.com/images/I/916IgqQ-54L._SY522_.jpg', 'Art Spiegelman'),
('O Príncipe de Maquiavel', 'Histórico', 96, 'https://m.media-amazon.com/images/I/81h4CdNxdgL._SY522_.jpg', 'Nicolau Maquiavel'),
('Haikyu! Vol. 01 - Big', 'Mangá / HQ / Graphic Novel', 392, 'https://m.media-amazon.com/images/I/61AU5L7LvRL._SY522_.jpg', 'Haruichi Furudate'),
('Fence Vol. 1', 'Mangá / HQ / Graphic Novel', 112, 'https://m.media-amazon.com/images/I/71c2vYv+SNL._SY522_.jpg', 'C. S. Pacat'),
('Comédias para se ler na escola', 'Comédia', 148, 'https://m.media-amazon.com/images/I/81JiRe21N+L._SY522_.jpg', 'Luis Fernando Verissimo'),
('Serviço de atendimento aos corações partidos', 'Comédia', 224, 'https://m.media-amazon.com/images/I/81pwpcRfDuL._SY522_.jpg', 'Giulia Paim'),
('A Arte da Guerra - Sun Tzu', 'Autoajuda', 80, 'https://m.media-amazon.com/images/I/81S-LTF2gQL._SY522_.jpg', 'Sun Tzu'),
('Ansiedade: Como enfrentar o mal do século', 'Autoajuda', 160, 'https://m.media-amazon.com/images/I/71K63fWqCAL._SY522_.jpg', 'Augusto Cury'),
('Umbandas: Uma história do Brasil', 'Religioso / Espiritualidade', 192, 'https://m.media-amazon.com/images/I/81jOXNbb9XL._SY522_.jpg', 'Luis Antonio Simas'),
('Café com Deus Pai 2025: Porções Diárias de Transformação', 'Religioso / Espiritualidade', 424, 'https://m.media-amazon.com/images/I/5109YEIX0kL._SY522_.jpg', 'Júnior Rostirola'),
('Crônicas para ler em qualquer lugar', 'Crônica', 112, 'https://m.media-amazon.com/images/I/61oRp11ee2L._SY522_.jpg', 'Gregorio Duvivier'),
('Crônicas de Petersburgo', 'Crônica', 96, 'https://m.media-amazon.com/images/I/91vyXG9vRfS._SY522_.jpg', 'Fiódor Dostoiévski'),
('50 contos de Machado de Assis', 'Conto', 496, 'https://m.media-amazon.com/images/I/A1tEetjmC5S._SY522_.jpg', 'Machado de Assis'),
('Todas as flores que não te enviei', 'Poesia', 232, 'https://m.media-amazon.com/images/I/91cF7r3MliL._SY522_.jpg', 'Felipe Rocha'),
('A bruxa não vai para a fogueira neste livro', 'Poesia', 208, 'https://m.media-amazon.com/images/I/611H92p9R9L._SY522_.jpg', 'Amanda Lovelace');

insert into usuario(nome, email, senha) values ('Laura Belinello Buzzato', 'laurabelinello@gmail.com', '123'),
('Camilli Jamilli', 'camilli@gmail.com', 'abc');

insert into lido(fkusuario, fklivro, nota, avaliacao) values ;
