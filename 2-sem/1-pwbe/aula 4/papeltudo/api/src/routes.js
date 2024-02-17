const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

const teste = (req, res) => {
    res.json("API papeltudo respondendo!");
};

router.get("/", teste);
router.get("/item", Item.read);
router.post("/item", Item.create);
router.put("/item/:id", Item.update);
router.delete("/item/:id", Item.del)

module.exports = router;