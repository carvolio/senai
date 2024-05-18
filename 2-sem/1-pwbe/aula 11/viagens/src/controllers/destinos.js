const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    data.data = new Date(data.data);

    const destino = await prisma.destinos.create({
        data
    });

    res.status(201).json(destino).end();
};

const read = async (req, res) => {
    const destino = await prisma.destinos.findMany({
        include : {
            pontos: {
                select : {
                    endereco: true
                }
            },
            hoteis: {
                select : {
                    nome: true
                }
            }
        }
    });

    res.status(200).json(destino).end();
};

const remove = async (req, res) => {
    const destino = await prisma.destinos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(destino).end();
};

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    data.data = new Date(data.data);

    const destino = await prisma.destinos.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(destino).end();
}

module.exports = {
    create,
    read,
    remove,
    update,
}