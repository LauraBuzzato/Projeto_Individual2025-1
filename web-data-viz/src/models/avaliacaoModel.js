var database = require("../database/config")

function verificarsefoilido(idlivro, idUsuario) {

    var instrucaoSql = `  
            select * from lido where fkusuario = '${idUsuario}' and fklivro = '${idlivro}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionar(nota, idlivro, textoAvaliacao, idUsuario) {

    var instrucaoSql = `
        update lido
        set nota = '${nota}', avaliacao = '${textoAvaliacao}'
        where fkusuario = '${idUsuario}' and fklivro = '${idlivro}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ver(idLivro){
    var instrucaoSql = `select u.nome, urlCapa, nota, avaliacao from livro lv 
inner join lido ld on lv.id = ld.fklivro 
inner join usuario u on u.id = ld.fkusuario
where fklivro = '${idLivro}' and nota not like 'null';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verificarsefoilido,
    adicionar,
    ver
}