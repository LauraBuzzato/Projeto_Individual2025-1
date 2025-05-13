var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.post("/cadastrar", function (req, res) {
    livroController.cadastrar(req, res);
});

router.post("/buscarLivros", function (req, res) {
    livroController.buscarLivros(req, res);
});

module.exports = router;
