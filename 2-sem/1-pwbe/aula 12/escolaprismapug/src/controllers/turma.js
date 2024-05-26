const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    res.render('index')
}

module.exports = {
    iniciar
}