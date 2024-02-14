const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// require('./connection12');              // connection12 uses "sequelize ORM"
require('./connection13');              // connection13 uses raw sqlite
const reviewsRouter = require('./routes/reviews');
const booksRouter = require('./routes/books');
const otherRouter = require('./routes/others23');
const app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('', booksRouter);
app.use('/reviews', reviewsRouter);

app.use('', otherRouter);

module.exports = app;
