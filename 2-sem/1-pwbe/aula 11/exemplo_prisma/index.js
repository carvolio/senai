const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./src/routes');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log("running on 3000");
});

app.get('/', (req, res) => {
    res.send('hello world');
});

