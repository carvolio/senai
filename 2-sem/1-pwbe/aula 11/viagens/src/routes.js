const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

const destinos = require('./controllers/destinos');
const pontos = require('./controllers/pontos');
const hoteis = require('./controllers/hoteis');

router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.delete('/destinos/:id', destinos.remove);
router.put('/destinos/:id', destinos.update);

router.post('/pontos', pontos.create);
router.get('/pontos', pontos.read);
router.delete('/pontos/:id', pontos.remove);
router.put('/pontos/:id', pontos.update);

router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.delete('/hoteis/:id', hoteis.remove);
router.put('/hoteis/:id', hoteis.update);

module.exports = router;