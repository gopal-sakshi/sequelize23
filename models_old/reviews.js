const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db23/sqlite12.db",
    dialectOptions: {
        application_name: 'reviewsModel'
    }
});
const Reviews = sequelize.define("review", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    reviewer_name : DataTypes.STRING,
    rating : DataTypes.NUMBER,
    publishedDate : DataTypes.BIGINT
}, { timestamps : false });

module.exports = Reviews;
