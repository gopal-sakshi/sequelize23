const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
    dialect: "sqlite",
    // storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize23\\db23\\sqlite12.db",
    storage: "./db23/sqlite12.db",
    dialectOptions: {
        application_name: 'booksModel'
    }
});
const Books = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING,
        unique: true
    },
    author : DataTypes.NUMBER,
    isPublished: DataTypes.BOOLEAN,
    timestamp: DataTypes.BIGINT,
    publishedDate : DataTypes.BIGINT
}, {timestamps : false});

module.exports = Books;
