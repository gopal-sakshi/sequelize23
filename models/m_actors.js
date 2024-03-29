module.exports = (sequelize, Sequelize) => {
    const actors = sequelize.define("actor", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: Sequelize.TEXT,
            unique: true
        },
        skills : Sequelize.JSON,
        industry: Sequelize.TEXT,
    }, { 
        initialAutoIncrement: 100, timestamps : false 
    });

    actors.associate22 = (db23) => {
        actors.belongsToMany(db23.movies, { through: 'ActorMovies23' })
    }

    return actors;
}