const express = require('express')
const router = express.Router()

const turma = require('./controllers/turma')

router.get('/', turma.iniciar)

module.exports = router