var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/verificarsefoilido", function (req, res) {
    avaliacaoController.verificarsefoilido(req, res);
});

router.post("/adicionar", function (req, res) {
    avaliacaoController.adicionar(req, res);
});

router.post("/ver", function (req, res) {
    avaliacaoController.ver(req, res);
});

module.exports = router;