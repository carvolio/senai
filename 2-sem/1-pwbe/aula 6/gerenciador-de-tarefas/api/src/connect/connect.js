const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'gerenciador_de_tarefas'
});

module.exports = { con };