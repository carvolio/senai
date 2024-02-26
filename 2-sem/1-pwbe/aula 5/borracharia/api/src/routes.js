const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

const teste = (req, res) => {
    res.json("API papeltudo respondendo!");
};

router.get("/", teste);
router.get("/produtos", Item.readProdutos);
router.get("/fornecedores", Item.readFornecedores);
router.get("/clientes", Item.readClientes);
router.post("/produtos", Item.createProdutos)

module.exports = router;