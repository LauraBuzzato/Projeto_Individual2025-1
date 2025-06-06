var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.post("/cadastrar", function (req, res) {
    livroController.cadastrar(req, res);
});

router.post("/buscarLivros", function (req, res) {
    livroController.buscarLivros(req, res);
});

router.post("/buscarLivrosNaolidos", function (req, res) {
    livroController.buscarLivrosNaolidos(req, res);
});

router.post("/inserirLido", function (req, res) {
    livroController.inserirLido(req, res);
});

router.post("/mostrarLido", function (req, res) {
    livroController.mostrarLido(req, res);
});

router.delete("/excluirLido", function (req, res) {
  livroController.excluirLido(req, res);
});

router.get("/mostrarKPI", function (req, res) {
    livroController.mostrarKPI(req, res);
});

router.post("/mostrarquantidadelivros", function (req, res) {
    livroController.mostrarquantidadelivros(req, res);
});

router.post("/mostrargeneros", function (req, res) {
    livroController.mostrargeneros(req, res);
});

router.post("/mostraravaliacoes", function (req, res) {
    livroController.mostraravaliacoes(req, res);
});

router.post("/excluirAvaliacao", function (req, res) {
    livroController.excluirAvaliacao(req, res);
});

module.exports = router;
