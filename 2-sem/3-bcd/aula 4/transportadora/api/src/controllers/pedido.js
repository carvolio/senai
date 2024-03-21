const con = require("../connect/connect").con;

const readPedido = (req, res) => {
    con.query("SELECT * FROM pedido ORDER BY id_pedido DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createPedido = (req, res) => {
    let id_entrega = req.body.id_entrega;
    let id_cliente = req.body.id_cliente;
    let dataPedido = req.body.dataPedido;
    let valor = req.body.valor;
    let query = `INSERT INTO pedido(id_entrega, id_cliente, dataPedido, valor) VALUE`;
    query += `('${id_entrega}', '${id_cliente}', '${dataPedido}', '${valor}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_pedido = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const updatePedido = (req, res) => {
    let id_pedido = req.params.id_pedido;
    let id_entrega = req.body.id_entrega;
    let id_cliente = req.body.id_cliente;
    let dataPedido = req.body.dataPedido;
    let valor = req.body.valor;
    let query = `UPDATE pedido SET id_entrega = '${id_entrega}', id_cliente = '${id_cliente}', dataPedido = '${dataPedido}', valor = '${valor}' WHERE id_pedido = ${id_pedido}`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(202).json(req.body).end();
            else
                res.status(404).json("registro não encontrado").end();
        }
    });
};

const delPedido = (req, res) => {
    let id_pedido = req.params.id_pedido;
    let query = `DELETE FROM pedido WHERE id_pedido = ${id_pedido}`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("registro não encontrado").end();
        }
    });
};

module.exports = {
    readPedido,
    createPedido,
    updatePedido,
    delPedido
}