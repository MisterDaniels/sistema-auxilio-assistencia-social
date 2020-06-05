var express = require('express');
const cors = require('cors');
var { errors } = require('celebrate');

var routes = require('./routes');

var app = express();

app.use(cors());
app.use(express.json());
app.use(errors());

app.use(routes);

module.exports = app;