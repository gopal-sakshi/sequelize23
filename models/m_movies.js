module.exports = (sequelize, Sequelize) => {
    const movies = sequelize.define("movie", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: Sequelize.TEXT,
            unique: true
        },
        hero : Sequelize.TEXT,
        heroine: Sequelize.TEXT,
        director: Sequelize.TEXT
    }, { initialAutoIncrement: 100, timestamps : false });
    return movies;
}