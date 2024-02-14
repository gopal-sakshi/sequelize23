const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db23/sqlite12.db"
});

const table23 = sequelize.define("table23", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING,
        unique: true
    },
    description: DataTypes.TEXT
}, {timestamps : false});

module.exports = table23;
