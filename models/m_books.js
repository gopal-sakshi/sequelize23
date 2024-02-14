module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define("book", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: Sequelize.STRING,
            unique: true
        },
        author : Sequelize.NUMBER,
        isPublished: Sequelize.BOOLEAN,
        timestamp: Sequelize.BIGINT,
        publishedDate : Sequelize.BIGINT
    }, {timestamps : false});
    return Books;
}