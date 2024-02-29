const con = require("../connect/connect").con;

const readVeiculo = (req, res) => {
    con.query("SELECT * FROM veiculo ORDER BY id_veiculo DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createVeiculo = (req, res) => {
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let capacidade = req.body.capacidade;
    let query = `INSERT INTO veiculo(placa, modelo, capacidade) VALUE`;
    query += `('${placa}', '${modelo}', '${capacidade}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_veiculo = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const updateVeiculo = (req, res) => {
    let id_veiculo = req.params.id_veiculo;
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let capacidade = req.body.capacidade;
    let query = `UPDATE veiculo SET placa = '${placa}', modelo = '${modelo}', capacidade = '${capacidade}' WHERE id_veiculo = ${id_veiculo}`;
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

const delVeiculo = (req, res) => {
    let id_veiculo = req.params.id_veiculo;
    let query = `DELETE FROM veiculo WHERE id_veiculo = ${id_veiculo}`;
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
    readVeiculo,
    createVeiculo,
    updateVeiculo,
    delVeiculo
}