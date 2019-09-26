const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router.js');
const app = express();
const db = require('../database/index.js');

const port = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => console.log(`You're listening on ${port}, smooth jazz`));