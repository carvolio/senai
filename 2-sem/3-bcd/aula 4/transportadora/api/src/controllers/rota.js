const con = require("../connect/connect").con;

const readRota = (req, res) => {
    con.query("SELECT * FROM rota ORDER BY id_rota DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createRota = (req, res) => {
    let origem = req.body.origem;
    let destino = req.body.destino;
    let distancia = req.body.distancia;
    let query = `INSERT INTO rota(origem, destino, distancia) VALUE`;
    query += `('${origem}', '${destino}', '${distancia}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_rota = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const updateRota = (req, res) => {
    let id_rota = req.params.id_rota;
    let origem = req.body.origem;
    let destino = req.body.destino;
    let distancia = req.body.distancia;
    let query = `UPDATE rota SET origem = '${origem}', destino = '${destino}', distancia = '${distancia}' WHERE id_rota = ${id_rota}`;
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

const delRota = (req, res) => {
    let id_rota = req.params.id_rota;
    let query = `DELETE FROM rota WHERE id_rota = ${id_rota}`;
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
    readRota,
    createRota,
    updateRota,
    delRota
}