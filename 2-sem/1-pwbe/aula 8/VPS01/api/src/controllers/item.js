const con = require("../connect/connect").con;

const readCliente = (req, res) => {
    con.query("SELECT c.*, t.numeto FROM Cliente c inner join Telefone t on c.cpf = t.cpf ORDER BY c.nome_cliente DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
};

const createCliente = (req, res) => {
    let cpf = req.body.cpf;
    let nome_cliente = req.body.nome_cliente;
    let numeto = req.body.numeto;
    con.query (`INSERT INTO Cliente (cpf, nome_cliente) VALUE ('${cpf}', '${nome_cliente}')` , (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            con.query (`insert into Telefone (cpf, numeto) value ('${cpf}', '${numeto}')`, (err, result) => {
                if (err)
                    res.status(400).json(err).end();
                else {
                    const novo = req.body;
                    res.status(201).json(novo).end();
                }
            })
        }
    })
};

const updateCliente = (req, res) => {
    let cpf = req.params.cpf;
    let nome_cliente = req.body.nome_cliente;
    let numeto = req.body.numeto;
    con.query (`update Cliente set nome_cliente = '${nome_cliente}' where cpf = "${cpf}"`, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        }

        if (result.affectedRows === 0) {
            res.status(404).json("registro não encontrado1").end();
        } else {
            con.query (`update Telefone set numeto = '${numeto}' where cpf = "${cpf}"`, (err, result) => {
                if (err) {
                    res.status(400).json(err).end();
                }
        
                if (result.affectedRows === 0) {
                    res.status(404).json("registro não encontrado2").end();
                } else {
                    res.status(202).json(req.body).end();
                }
            })
        }
    });
};

const delCliente = (req, res) => {
    let cpf = req.params.cpf;
    con.query(`delete from Cliente where cpf = "${cpf}"`, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            con.query(`delete from Telefone where cpf = "${cpf}"`, (err, result) => {
                    res.status(202).json("OK").end();
            });
        }
    });
}

const readVeiculo = (req, res) => {
    con.query("SELECT * FROM Veiculo ORDER BY placa DESC", (err, result) => {
        if (err)
            res.json(err);
        else {
            res.status(202).json(result).end();
        }
    });
};

const createVeiculo = (req, res) => {
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let marca = req.body.marca;
    let tipo = req.body.tipo;
    let diaria = req.body.diaria;
    let query = `insert into Veiculo (placa, modelo, marca, tipo, diaria) value`; 
    query += `('${placa}', '${modelo}', '${marca}', '${tipo}', '${diaria}')`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.placa = result;
            res.status(201).json(novo).end();
        }
    })
};

const updateVeiculo = (req, res) => {
    let placa = req.params.placa;
    let modelo = req.body.modelo;
    let marca = req.body.marca;
    let tipo = req.body.tipo;
    let diaria = req.body.diaria;
    let query = `update Veiculo set modelo = '${modelo}', marca = '${marca}', tipo = '${tipo}', diaria = '${diaria}' where placa = "${placa}"`;
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
    let placa = req.params.placa;
    con.query(`delete from Veiculo where placa = "${placa}"`, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            res.status(202).json("OK").end();
        }
    });
}



module.exports = {
    readCliente,
    createCliente,
    updateCliente,
    delCliente,
    readVeiculo,
    createVeiculo,
    updateVeiculo,
    delVeiculo
}