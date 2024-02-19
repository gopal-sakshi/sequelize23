const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// require('./connection12');              // connection12 uses "sequelize ORM"
require('./connection13');              // connection13 uses raw sqlite


const reviewsRouter = require('./routes/reviews');
const booksRouter = require('./routes/books');
const otherRouter = require('./routes/others23');
const eduRouter = require('./routes/student_course');

app.use('', booksRouter);
app.use('/reviews', reviewsRouter);
app.use('', otherRouter);
app.use('/edu', eduRouter);
/********************* ERROR HANDLER stuff ******************************************/
function routeHandler23(acceptFnAsParam) {
    // MORAL ===> try/catch wont catch errors thrown in async functions ????
    try {
        return acceptFnAsParam
    } catch (error44) { console.log('error44 ===> ', error44.message); res.status(500).send({ info: 'ati pedda pappa' }) }
}

function routeHandler24(acceptFnAsParam) {
    // ERROR ---> req is not defined
    return acceptFnAsParam (req,res,next)
    .then(result => { console.log('resultInThen ==> ', result)})
    .catch(err => { console.log('error ni catch chessaa gaa'); res.send({ info: 'em emautundo' }) }); 
}

function routeHandler25(acceptFnAsParam) {
    // WORKS ----------> so, now I am able to handle all async routeFunctions... just need to wrap them within routeHandler25
    return function (req, res, next) {
        return acceptFnAsParam (req,res)
        .then(result => { console.log('resultInThen ==> ', result); res.status(200).send(result); })
        .catch(err => { console.log('error ni catch chessaa gaa'); res.send({ info: 'em emautundo' }) }); 
    }
}

const syncFn11 = (req, res) => {
    console.log('notice this router handler is sync function... no async keyword before fn');
    throw { name44: 'na ishtam error throw chestaaa', time44: new Date().toISOString() };
    // throw new Error(`errorConstructor throw chestaaa... ${Date.now()}`);
}
const asyncFn11 = async (req, res) => {
    // throw new Error('very very interesting ');
    return { info1: 'general ga res ni ikkada use cheyyaddu', info2: 'just result ni send cheyyi, wrapper res ni client ki pamputundi'}
}
app.get('/syncErrorHandler23', syncFn11);
app.get('/syncErrorHandler24', routeHandler25(asyncFn11));

// this error handler handles async error handlers
// https://medium.com/@chang_yan/how-generator-works-with-promise-async-await-in-es7-f894eadf16dd



// express central error handler ---> only handles erros thrown in sync callbacks
app.use((err, req, res, next) => {
    // console.log('centralisedError23 ====> ', err.name44, '___' ,err.time44);
    console.log('centralisedError24 ====> ', err.name, '___' ,err.message);             // dont print err.stack
    res.status(500).send({ err: 'edo phattu' });
});

module.exports = app;
