const con = require("../connect/connect").con;

const readFuncionario = (req, res) => {
    con.query("SELECT * FROM funcionario ORDER BY id_funcionario DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createFuncionario = (req, res) => {
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let salario = req.body.salario;
    let query = `INSERT INTO funcionario(nome, cargo, salario) VALUE`;
    query += `('${nome}', '${cargo}', '${salario}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_funcionario = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const updateFuncionario = (req, res) => {
    let id_funcionario = req.params.id_funcionario;
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let salario = req.body.salario;
    let query = `UPDATE funcionario SET nome = '${nome}', cargo = '${cargo}', salario = '${salario}' WHERE id_funcionario = ${id_funcionario}`;
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

const delFuncionario = (req, res) => {
    let id_funcionario = req.params.id_funcionario;
    let query = `DELETE FROM funcionario WHERE id_funcionario = ${id_funcionario}`;
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
    readFuncionario,
    createFuncionario,
    updateFuncionario,
    delFuncionario
}