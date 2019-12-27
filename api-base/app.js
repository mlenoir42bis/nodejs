const path = require('path');
const express = require('express');
require('./src/database');
const router = require('./src/routes');
const cookieParser = require('cookie-parser');
const app = express();

exports.app = app;

app.use(cookieParser());

require('./src/config/jwt.config');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000);
