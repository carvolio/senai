const con = require("../connect/connect").con;

const readCliente = (req, res) => {
    con.query("SELECT * FROM cliente ORDER BY id_cliente DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createCliente = (req, res) => {
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let query = `INSERT INTO cliente(nome, endereco, telefone, email) VALUE`;
    query += `('${nome}', '${endereco}', '${telefone}', '${email}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_cliente = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const updateCliente = (req, res) => {
    let id_cliente = req.params.id_cliente;
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let query = `UPDATE cliente SET nome = '${nome}', endereco = '${endereco}', telefone = '${telefone}', email = '${email}' WHERE id_cliente = ${id_cliente}`;
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

const delCliente = (req, res) => {
    let id_cliente = req.params.id_cliente;
    let query = `DELETE FROM cliente WHERE id_cliente = ${id_cliente}`;
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
    readCliente,
    createCliente,
    updateCliente,
    delCliente
}