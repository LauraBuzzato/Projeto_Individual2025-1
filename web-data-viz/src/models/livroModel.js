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
    var instrucaoSql = `select nome, autor, genero, urlCapa from livro lv 
                        left join lido ld on lv.id=ld.fklivro where fkusuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarLivros,
    inserirLido,
    mostrarLido
};