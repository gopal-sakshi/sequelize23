const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();
require('./connection12');              // connection12 uses sequelize
require('./connection13');              // connection13 uses raw sqlite
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

const app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);

app.use('/rawSqlite/getData', (req, res) => {
    
    // acquire db connection
    let db44 = new sqlite3.Database('./db23/sqlite13.db');
    let query22 = `select * from football12`;

    // do db operations
    db44.all(query22, [], (err, rows) => {
        if(err) { 
            console.log('err while inserting fb data ', err); 
            res.send('error while fetching');
        }
        else { 
            res.send(rows); 
        }
    });

    // close db connection
    db44.close();
});


app.use('/rawSqlite/postData', (req, res) => {
    let club = req.body.club || 'blah1';
    let stadium = req.body.stadium || 'blah1';
    // acquire db connection
    let db44 = new sqlite3.Database('./db23/sqlite13.db');
    let query22 = `insert into football12 (club23, stadium22) values ('${club}', '${stadium}')`

    // do db operations
    db44.run(query22, [], (err) => {
        if(err) { 
            console.log('err while inserting fb data ',err); 
            res.send({ info:"insert data phatttuuuu" })
        }
        else { 
            // console.log('info ===> ', this.lastID, this.changes );       // why this isnt working ???
            res.send({ info: "insert successuuu" }); 
        }
    });

    // close db connection
    db44.close();
});

app.use('/', indexRouter);

module.exports = app;
