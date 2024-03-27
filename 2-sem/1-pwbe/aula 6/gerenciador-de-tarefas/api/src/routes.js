const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

const teste = (req, res) => {
    res.json("API gerenciador de tarefas respondendo!");
};

router.get("/", teste);
router.post("/login", Item.login);
router.post("/cadastro", Item.cadastro)
router.get("/read", Item.read);
router.post("/create", Item.create);
router.put("/:id_tarefas", Item.update);
router.delete("/:id_tarefas", Item.del);

module.exports = router;