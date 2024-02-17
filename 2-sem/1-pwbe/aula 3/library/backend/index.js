const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'library'
});

const app = express();
app.listen(3000,()=>{
    console.log("Back-end respondendo na porta 3000");
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


const teste = (req, res)=>{
    res.send("Back-end respondendo ");
}
app.get("/", teste);

const create = (req, res) => {
    let nome = req.body.nome;
    let autor = req.body.autor;
    let publicacao = req.body.publicacao;
    let query = `INSERT INTO Books(nome, autor, publicacao) VALUE`;
    query += `('${nome}', '${autor}', '${publicacao}');`;
    con.query(query,(err, result) => {
        if(err)
            res.redirect("http://127.0.0.1:5500/frontend/erro.html");
        else
            res.redirect("http://127.0.0.1:5500/frontend/index.html");
    })
}
app.post("/Books", create);

const read = (req, res) => {
    con.query("SELECT * FROM Books ORDER BY id DESC",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}
app.get("/Books", read);

const deleteId = (req, res) => {
    let id = req.params.id;
    let query = `delete from Books where id = ${id}`;
    con.query(query, (err, result) => {
        if (err) 
            res.json(err);
        else 
            res.redirect("http://127.0.0.1:5500/frontend/index.html");
    });
};
app.delete("/delete/:id", deleteId);
