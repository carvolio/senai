const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const ponto = await prisma.pontos.create({
        data
    });

    res.status(201).json(ponto).end();
};

const read = async (req, res) => {
    const ponto = await prisma.pontos.findMany();

    res.status(200).json(ponto).end();
};

const remove = async (req, res) => {
    const ponto = await prisma.pontos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(ponto).end();
};

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const ponto = await prisma.pontos.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(ponto).end();
}

module.exports = {
    create,
    read,
    remove,
    update,
}

