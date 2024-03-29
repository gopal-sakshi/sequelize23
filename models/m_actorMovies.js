module.exports = (sequelize, Sequelize) => {
    
    const ActorMovies = sequelize.define('actor_movies', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement   : true,
            primaryKey      : true,
        }
    }, 
    { initialAutoIncrement: 1000 })

    ActorMovies.associate222 = function(models) {

        // Enrollment.belongsTo(models.Product, {as: 'Product'});
        // Enrollment.belongsTo(models.School, { as: 'School' });

        // models.Person.belongsToMany(models.Course, {through: {model: Enrollment},foreignKey: 'StudentEnrollId'});
        // models.Course.belongsToMany(models.Person, {through: {model: Enrollment},foreignKey: 'CourseEnrollId'});

        ActorMovies
    }
    return ActorMovies.sync({force:true});

}