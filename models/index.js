const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db23/sqlite12.db",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./m_books")(sequelize, Sequelize);
db.reviews = require("./m_reviews")(sequelize, Sequelize);
// db.movies = require("./m_movies")(sequelize, Sequelize);
// db.actors = require("./m_actors")(sequelize, Sequelize);
db.students = require("./m_students")(sequelize, Sequelize);
db.courses = require("./m_courses")(sequelize, Sequelize);
db.employees = require("./m_employee")(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate22) {
        db[modelName].associate22(db);              // we are passing "db" object as parameter... 
    }                                               // so, db[modelName] (ie books (or) reviews model) can have access to db object 
});

// db.books.sync({ force:true });
// db.reviews.sync({ force:true });
// db.students.sync({ force:true });
// db.courses.sync({ force:true });
// db.employees.sync({ force:true });

// this is needed... otherwise junction table wont be created
sequelize.sync({ force: true });                

module.exports = db;