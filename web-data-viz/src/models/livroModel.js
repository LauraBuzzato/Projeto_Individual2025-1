var database = require("../database/config")

function cadastrar(nome, autor, genero, qtdPagina, urlCapa) {

    var instrucaoSql = `
        INSERT INTO livro (nome, autor, genero, qtdPagina, urlCapa) VALUES ('${nome}', '${autor}', '${genero}', ${qtdPagina}, '${urlCapa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLivros() {

    var instrucaoSql = `select id, nome, genero, qtdPagina, urlCapa from livro order by nome asc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirLido(idLivroLido, idUsuario){
    var instrucaoSql = `
        insert into lido (fklivro, fkusuario) values (${idLivroLido},${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarLido(idUsuario){
    var instrucaoSql = `select fklivro, nome, autor, genero, urlCapa from livro lv 
                        left join lido ld on lv.id=ld.fklivro where fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirLido(idLivro, idUsuario) {
  const instrucaoSql = `
    delete from lido where fklivro = ${idLivro} and fkusuario = ${idUsuario};
  `;

  return database.executar(instrucaoSql);
}

function mostrarKPI(){
    var instrucaoSql = `select nome, urlCapa, round(avg(nota),1) media, count(ld.fkusuario) as qtdLeitores from livro lv 
inner join lido ld on ld.fklivro = lv.id
group by fklivro
order by media desc
limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarquantidadelivros(idUsuario){
    var instrucaoSql = `select count(fklivro) total from lido where fkusuario = '${idUsuario}' group by fkusuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrargeneros(idUsuario){
    var instrucaoSql = `select genero, count(fklivro) qtd from livro lv inner join lido ld on lv.id = ld.fklivro 
        where fkusuario = ${idUsuario} group by genero;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostraravaliacoes(idUsuario){
    var instrucaoSql = `select urlCapa, nota, avaliacao from livro lv inner join lido ld on lv.id = ld.fklivro where fkusuario = '${idUsuario}' and avaliacao not like 'null';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarLivros,
    inserirLido,
    mostrarLido,
    excluirLido,
    mostrarKPI,
    mostrarquantidadelivros,
    mostrargeneros,
    mostraravaliacoes
};