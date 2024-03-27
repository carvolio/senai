const con = require("../connect/connect").con;
const express = require('express');

const app = express();

const login = (req, res) => {
    let emailLogin = req.body.emailLogin;
    let senhaLogin = req.body.senhaLogin;
    con.query("select email, senha from Usuarios", (err, result) => {
        result.forEach(element => {
            if (emailLogin === element.email && senhaLogin === element.senha) {
                // app.get('http//localhost:3000/login', (req, res) => {
                //     res.redirect('http//localhost:3000/read');
                // })
                res.send("ok");
            } else {
            }
        });
    })
};

const cadastro = (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha
    let query = `insert into Usuarios (nome, email, senha) value`;
    query += `('${nome}', '${email}', '${senha}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_usuarios = result.insertId;
            res.status(201).json("ok cadastro").end();

            app.get('http//localhost:3000/cadastro', (req, res) => {
                    res.redirect('http//localhost:3000/read');
                })
        }
    })
};

const read = (req, res) => {
    con.query("SELECT * FROM Tarefas ORDER BY id_tarefas DESC", (err, result) => {
        if (err)
            res.json(err);
        else {
            res.status(202).json(result).end();
        }
    });
}

const create = (req, res) => {
    let descricao = req.body.descricao;
    let dataVencimento = req.body.dataVencimento;
    let status = req.body.status;
    let id_usuarios = req.body.id_usuarios;
    let query = `insert into Tarefas (descricao, dataVencimento, status, id_usuarios) value`; 
    query += `('${descricao}', '${dataVencimento}', '${status}', '${id_usuarios}}')`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id_tarefas = result.insertId;
            res.status(201).json(novo).end();
        }
    })
};

const update = (req, res) => {
    let id_tarefas = req.params.id_tarefas;
    let descricao = req.body.descricao;
    let dataVencimento = req.body.dataVencimento;
    let status = req.body.status;
    let id_usuarios = req.body.id_usuarios;
    let query = `update Tarefas set descricao = '${descricao}', dataVencimento = '${dataVencimento}', status = '${status}', id_usuarios = '${id_usuarios}' where id_tarefas = ${id_tarefas}`;
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

const del = (req, res) => {
    let id_tarefas = req.params.id_tarefas;
    let query = `delete from Tarefas where id_tarefas = ${id_tarefas}`;
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
}

module.exports = { login, cadastro, read, create, update, del };