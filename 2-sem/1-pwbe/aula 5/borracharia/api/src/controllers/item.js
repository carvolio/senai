const con = require("../connect/connect").con;
const bodyParser = require("body-parser");

const readProdutos = (req, res) => {
    con.query("SELECT * FROM Produtos ORDER BY id_produtos DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const readFornecedores = (req, res) => {
    con.query("SELECT * FROM Fornecedores ORDER BY id_fornecedores DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const readClientes = (req, res) => {
    con.query("SELECT * FROM Clientes ORDER BY id_clientes DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createProdutos = (req, res) => {
    let nome = req.body.nome;
    let valor = req.body.valor;
    let id_fornecedores = req.body.id_fornecedores;
    let query = `INSERT INTO Produtos (nome, valor, id_fornecedores) VALUE`;
    query += `('${nome}', '${valor}', '${id_fornecedores}')`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_produtos = result.insertId;
            res.status(201).json(novo).end();
        }
    })

}

module.exports = { 
    readProdutos,
    readFornecedores, 
    readClientes,
    createProdutos
};