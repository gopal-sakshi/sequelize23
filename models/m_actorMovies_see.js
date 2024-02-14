module.exports = (sequelize, Sequelize) => {
    
    class ActorMovies extends Model {
        static associate22(dbInstance23) {
            ActorMovies.belongsToMany(dbInstance)
        }        
    }

    ActorMovies.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement   : true,
            primaryKey      : true,
        }
    }, { initialAutoIncrement: 1000 })

    return ActorMovies;

}