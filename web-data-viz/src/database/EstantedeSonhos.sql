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

insert into lido(fkusuario, fklivro, nota, avaliacao) values 
('1', '2', '4', 'Odiar a escritora e amar a obra. Bom, oque tenho pra dizer é que é uma obra boa , porém muito massiva de ler, pra mim a saga só fica boa a partir do 3 livro, pois a história deste aqui basicamente se resume na história do harry na casa dos dursley e sofrendo bastante, porém é muito bom ver ele conhecendo os weasley e o desenrolar da história deixa tudo mais especial! Ver ele sendo selecionado pra grifinória é um dos melhores momentos do livro.'),
('1', '7', '4', 'Mais um para lista de clássicos, maravilhoso, eu achei que seria mais romântico um pouco acho que se trata mais de como as mulheres eram vistas a pressão por um casamento bem sucedido eu amo a relação que Elizabeth tem com o pai dela. Elizabeth Bennet e Mr. Darcy se apaixonam, mas precisam superar o orgulho dele e o preconceito dela para ficarem juntos, em meio a diferenças sociais e mal-entendidos.'),
('1', '8', '5', 'Gente, que livro incrível, não tenho oq reclamar, a história te prende, os personagens, é tudo tão fantasioso que da vontade de viver dentro do livro, eu realmente me apaixonei pela história.'),
('1', '11', '5', 'Obcecada por duna! Não consigo pensar em nada que não seja Arrakis e o Paul Muadib? To ansiosa demais pra ler os outros.'),
('1', '12', '3', 'Adorei a ambientação do livro, sou apaixonada pela estilistica de escrita gótica e eu não poderia deixar Carmilla de fora. Apesar da história ser muito bem escrita e os detalhes da ambientação excelentes, não consegui me ligar 100% aos personagens, dificultando a criação de sentimentos por eles.'),
('1', '14', '5', 'Eu acho que foi o melhor livro que eu já li na minha vida. confesso que me senti burra por não ter descoberto isso antes porque estava muito na cara eu que não quis acreditar, mas de qualquer maneira eu amei esse livro'),
('1', '15', '5', 'Não tenho absolutamente nada para reclamar desse livro, foi uma experiência super gostosinha e divertida.\nNão esperem muita complexidade ou grandes construções de mundo, a proposta é ser um livro leve e divertido, e é isso que ele é, e cumpriu perfeitamente o que prometeu, tive momentos em que eu simplesmente começava a rir sozinha. O casal é muito, muito fofo, não tem defeitos nenhum, o Vilão e a Evie são meus amores. O plot twist foi incrível, realmente me surpreendeu.\nEsse livro me trouxe sensações maravilhosas, diversão e paixão, unidas de uma forma excelente. A escrita é super leve, você lê sem nem perceber, tudo nesse livro é incrível.\nApenas não recomendo para quem gosta de livros mais sérios e complexos, mas é uma ótima escolha para quem ama romances e se divertir com livros fofos e leves.'),
('1', '16', '4', 'É um livro que eu sinceramente esperava não gostar, é uma temática que não costumo ler muito, mas me surpreendi bastante, o livro faz vc refletir muito, inspirador'),
('1', '23', '5', 'No começo não está apostando nada nesse manga. Mais comecei a fazer vôlei e fui gostando dele cada vez mais !! Super recomendo pra quem quer aprender coisas novas e se divertir ao mesmo tempo (também se apaixonar pelos personagens!!)'),
('1', '24', '4', 'No primeiro volume já estou adorando esta trama da história, fico curiosa pra saber o que vai acontecer nos próximos capítulo e como tudo vai terminar, além de aprender mais sobre a esgrima.'),
('1', '35', '3', 'Me decepcionei um pouco, talvez coloquei muita expectativa, parece q foi preguiçoso, mas teve algumas partes boas tbm.'),
('2', '4', '4', 'Após três tentativas mal sucedidas, consegui finalizar 1984 em sua totalidade. O livro é divido em três partes, a primeira foi um desafio pra mim, e nela que não avancei nas primeiras tentativas.\nA segunda e a terceira parte é onde finalmente vemos algo acontecer e o que despertou o interesse por finalizar o livro.'),
('2', '6', '5', 'Em relação à Jogos Vorazes não é preciso dizer muito. Apenas é bom falar que Suzanne Collins é uma gênia da escrita, pois ela conseguiu fazer um mix de tudo o que nós leitores mais gostamos: romance, luta, ação, aventura, fantasia entre muitas outras coisas que vou deixar você descobrir por conta própria, pois esse livro nos da experiências incríveis e nos faz sentir que estamos dentro dele.'),
('2', '8', '5', 'Primeiro livro que li na vida ?? como eu amo essa saga e como eu amo rick riordan!!!! gente que livro maravilhoso, te prende de uma forma q vc quer ler os 5 de uma vez'),
('2', '9', '4', 'Machado é o maior nome na prosa brasileira sem sombra de dúvidas e esta obra é leitura obrigatória para todas as pessoas ditas brasileiras que se prezem.'),
('2', '11', '5', 'É um livro ambicioso e quase perfeito. Uma ficção científica de alta qualidade, um clássico do gênero. Será relevante por muito tempo ainda. Só achei que em certa parte poderia ter mais desenvolvimento, apesar das quase 700 páginas, podia ter mais algumas para desenvolver melhor a ascensão de Paul em Duna.'),
('2', '17', '2', 'Um livro imenso com o nome da Coisa que quase não aparece no livro. Muuuuito longe de ser um livro de terror ou horror ou sei lá o que, eu achei uma enrolação sem fim.'),
('2', '23', '5', 'Eu já tô assistindo o anime, só que ler tudo aquilo é bem melhor, eu AMEI meu primeiro mangá, super recomendo, dá muito uma sensação de conforto!'),
('2', '27', '5', 'As dicas são extremamente boas e é uma leitura fluída, muito interessante e faz a gente pensar em como as gerações lidaram com essas informações. Não dei nota máxima por conta da repetição de algumas afirmações.'),
('2', '33', '5', '');

