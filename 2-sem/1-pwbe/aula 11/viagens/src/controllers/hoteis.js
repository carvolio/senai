const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const hotel = await prisma.hoteis.create({
        data
    });

    res.status(201).json(hotel).end();
};

const read = async (req, res) => {
    const hotel = await prisma.hoteis.findMany();

    res.status(200).json(hotel).end();
};

const remove = async (req, res) => {
    const hotel = await prisma.hoteis.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(hotel).end();
};

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const hotel = await prisma.hoteis.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(hotel).end();
}

module.exports = {
    create,
    read,
    remove,
    update,
}

