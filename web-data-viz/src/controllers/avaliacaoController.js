var avaliacaoModel = require("../models/avaliacaoModel");

function verificarsefoilido(req, res){
    var idlivro = req.body.idlivroServer
    var idUsuario = req.body.idUsuarioServer

    if (idUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idlivro == undefined) {
        res.status(400).send("Seu genero está undefined!");
    } else {


        avaliacaoModel.verificarsefoilido(idlivro, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function adicionar(req, res) {
    var nota = req.body.notaServer;
    var idlivro = req.body.idlivroServer
    var textoAvaliacao = req.body.textoAvaliacaoServer;
    var idUsuario = req.body.idUsuarioServer;


    if (nota == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idlivro == undefined) {
        res.status(400).send("Seu genero está undefined!");
    } else if (textoAvaliacao == undefined) {
        res.status(400).send("Sua qtdPagina está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua urlCapa está undefined!");
    } else {


        avaliacaoModel.adicionar(nota, idlivro, textoAvaliacao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    verificarsefoilido,
    adicionar
}