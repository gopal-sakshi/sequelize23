const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
    dialect: "sqlite",
    // storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize23\\db23\\sqlite12.db",
    storage: "./db23/sqlite12.db"
});
const Books = require('./models/books');

return sequelize.authenticate()
    .then(result => {
        console.log(`SQLite successfully connected!`);
        return Books.sync();
    })
    .then(result => {
        console.log(`Books table created`);
        return result;
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    })
