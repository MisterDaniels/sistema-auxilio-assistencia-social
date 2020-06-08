var path = require('path');
var express = require('express');
var nunjucks = require('nunjucks');
const cors = require('cors');
var { errors } = require('celebrate');

var routes = require('./routes');

var app = express();

app.set('view engine', 'njk');

app.use(express.static('public'));
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.use(cors());
app.use(express.json());
app.use(errors());

app.use(routes);

module.exports = app;