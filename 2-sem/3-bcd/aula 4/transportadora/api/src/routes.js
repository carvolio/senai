const express = require('express');
const router = express.Router();

const itemCliente = require("./controllers/cliente");
const itemFuncionario = require("./controllers/funcionario");
const itemVeiculo = require("./controllers/veiculo");
const itemRota = require("./controllers/rota");
const itemEntrega = require("./controllers/entrega");
const itemPedido = require("./controllers/pedido");

const teste = (req, res) => {
    res.json("API respondendo");
};

router.get("/", teste);

router.get("/cliente", itemCliente.readCliente);
router.post("/cliente", itemCliente.createCliente);
router.put("/cliente/:id_cliente", itemCliente.updateCliente);
router.delete("/cliente/:id_cliente", itemCliente.delCliente);

router.get("/funcionario", itemFuncionario.readFuncionario);
router.post("/funcionario", itemFuncionario.createFuncionario);
router.put("/funcionario/:id_funcionario", itemFuncionario.updateFuncionario);
router.delete("/funcionario/:id_funcionario", itemFuncionario.delFuncionario);

router.get("/veiculo", itemVeiculo.readVeiculo);
router.post("/veiculo", itemVeiculo.createVeiculo);
router.put("/veiculo/:id_veiculo", itemVeiculo.updateVeiculo);
router.delete("/veiculo/:id_veiculo", itemVeiculo.delVeiculo);

router.get("/rota", itemRota.readRota);
router.post("/rota", itemRota.createRota);
router.put("/rota/:id_rota", itemRota.updateRota);
router.delete("/rota/:id_rota", itemRota.delRota);

router.get("/entrega", itemEntrega.readEntrega);
router.post("/entrega", itemEntrega.createEntrega);
router.put("/entrega/:id_entrega", itemEntrega.updateEntrega);
router.delete("/entrega/:id_entrega", itemEntrega.delEntrega);

router.get("/pedido", itemPedido.readPedido);
router.post("/pedido", itemPedido.createPedido);
router.put("/pedido/:id_pedido", itemPedido.updatePedido);
router.delete("/pedido/:id_pedido", itemPedido.delPedido);

module.exports = router;