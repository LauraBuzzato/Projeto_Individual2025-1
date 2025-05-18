var livroModel = require("../models/livroModel");


function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var autor = req.body.autorServer
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
    } else {


        livroModel.cadastrar(nome, autor, genero, qtdPagina, urlCapa)
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

function inserirLido(req, res) {
    var idLivroLido = req.body.idLivroLidoServer;
    var idUsuario = req.body.idUsuarioServer;


    if (idLivroLido == undefined) {
        res.status(400).send("idLivroLido está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {


        livroModel.inserirLido(idLivroLido, idUsuario)
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
function mostrarLido(req, res) {
    var idUsuario = req.body.idUsuarioServer;


    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {


        livroModel.mostrarLido(idUsuario)
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

function excluirLido(req, res) {
    var idLivro = req.body.idLivroServer
    var idUsuario = req.body.idUsuarioServer

    if (!idLivro || !idUsuario) {
        return res.status(400).json({ erro: "idLivro ou idUsuario indefinido!" });
    }

    livroModel.excluirLido(idLivro, idUsuario)
        .then(resultado => {
            res.status(200).json({ mensagem: "Livro excluído com sucesso!" });
        })
        .catch(erro => {
            console.error("Erro ao excluir livro:", erro.sqlMessage);
            res.status(500).json({ erro: "Erro ao excluir livro." });
        });
}

function mostrarKPI(req, res) {
    livroModel.mostrarKPI()
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao buscar livros:", erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}

function mostrarquantidadelivros(req, res) {
    var idUsuario = req.body.idUsuarioServer

    if (!idUsuario) {
        res.status(400).send("Seu idUsuario está undefined!");
    }
    else{
        livroModel.mostrarquantidadelivros(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao procurar quantidade! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    cadastrar,
    buscarLivros,
    inserirLido,
    mostrarLido,
    excluirLido,
    mostrarKPI,
    mostrarquantidadelivros
}