const {Sequelize, DataTypes} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize23\\db23\\sqllite12.db"
});
const BlogPost = sequelize.define("post", {
    isPublished: DataTypes.BOOLEAN,
    title : DataTypes.STRING,
    author : DataTypes.NUMBER,
    timestamp: DataTypes.BIGINT,
    publishedDate : DataTypes.BIGINT,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {timestamps : false});

module.exports = BlogPost;
