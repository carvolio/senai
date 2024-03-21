const con = require("../connect/connect").con;

const readEntrega = (req, res) => {
    con.query("SELECT * FROM entrega ORDER BY id_entrega DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createEntrega = (req, res) => {
    let id_veiculo = req.body.id_veiculo;
    let motorista = req.body.motorista;
    let id_rota = req.body.id_rota;
    let inicio = req.body.inicio;
    let fim = req.body.fim;
    let status = req.body.status;
    let query = `INSERT INTO entrega(id_veiculo, motorista, id_rota, inicio, fim, status) VALUE`;
    query += `('${id_veiculo}', '${motorista}', '${id_rota}', '${inicio}', '${fim}', '${status}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_entrega = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const updateEntrega = (req, res) => {
    let id_entrega = req.params.id_entrega;
    let id_veiculo = req.body.id_veiculo;
    let motorista = req.body.motorista;
    let id_rota = req.body.id_rota;
    let inicio = req.body.inicio;
    let fim = req.body.fim;
    let status = req.body.status;
    let query = `UPDATE entrega SET id_veiculo = '${id_veiculo}', motorista = '${motorista}', id_rota = '${id_rota}', inicio = '${inicio}', fim = '${fim}', status = '${status}' WHERE id_entrega = ${id_entrega}`;
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

const delEntrega = (req, res) => {
    let id_entrega = req.params.id_entrega;
    let query = `DELETE FROM entrega WHERE id_entrega = ${id_entrega}`;
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
    readEntrega,
    createEntrega,
    updateEntrega,
    delEntrega
}