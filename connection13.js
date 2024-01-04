const sqlite3 = require('sqlite3').verbose();

let db11 = new sqlite3.Database('./db23/sqlite13.db', (err) => {
    if (err) {
      console.error(err.message);
    } else {
        console.log('Connected to the sqlite13 database.');
    }
});

db11.serialize(() => {
    let query23 = `CREATE TABLE IF NOT EXISTS football12 (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        club23 TEXT NOT NULL,
        stadium22 TEXT DEFAULT 'NA'
    )`;
    db11.each(query23, (err, row) => {
        if(err) console.log('err ------------ >', err);
        else console.log('results =====> ', row);
    })
});

db11.close((err) => {
    if (err) console.error(err.message);
    else console.log('Closed the sqlite13Db connection.');
});