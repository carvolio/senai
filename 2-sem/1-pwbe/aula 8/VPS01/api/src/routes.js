const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

const teste = (req, res) => {
    res.json("API papeltudo respondendo!");
};

router.get("/", teste);
router.get("/cliente", Item.readCliente);
router.post("/cliente", Item.createCliente);
router.put("/cliente/:cpf", Item.updateCliente);
router.delete("/cliente/:cpf", Item.delCliente);
router.get("/veiculo", Item.readVeiculo);
router.post("/veiculo", Item.createVeiculo);
router.put("/veiculo/:placa", Item.updateVeiculo);
router.delete("/veiculo/:placa", Item.delVeiculo);

module.exports = router;