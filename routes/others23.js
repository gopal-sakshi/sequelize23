const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get('/rawSqlite/getData', (req, res) => {
    
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


router.post('/rawSqlite/postData', (req, res) => {
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

module.exports = router;