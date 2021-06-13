const path = require('path');
const express = require('express');
const morgan = require('morgan');

const api = require('./controllers/api');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve('.', 'static')), api);

app.listen(3000, () => console.log(`Listening on port 3000.`));