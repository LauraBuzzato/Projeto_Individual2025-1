var livroModel = require("../models/livroModel");


function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var genero = req.body.generoServer;
    var qtdPagina = req.body.qtdPaginaServer;
    var urlCapa = req.body.urlCapaServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu genero está undefined!");
    } else if (qtdPagina == undefined) {
        res.status(400).send("Sua qtdPagina está undefined!");
    } else if (urlCapa == undefined) {
        res.status(400).send("Sua urlCapa está undefined!");
    }else {

        
        livroModel.cadastrar(nome, genero, qtdPagina, urlCapa)
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

function buscarLivros(req, res) {
    livroModel.buscarLivros()
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao buscar livros:", erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}


module.exports = {
    cadastrar,
    buscarLivros
}