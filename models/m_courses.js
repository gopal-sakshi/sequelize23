module.exports = (sequelize, Sequelize) => {
    const courses = sequelize.define("course", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        course_name : {
            type: Sequelize.TEXT,
            unique: true
        },
        subject : Sequelize.ENUM('MATHS', 'SCIENCE', 'SOCIAL'),
        duration: Sequelize.TEXT,
        fees: Sequelize.TEXT
    }, { 
        initialAutoIncrement: 100, timestamps : false 
    });

    courses.associate22 = (db23) => {
        courses.belongsToMany(db23.students, { through: 'students_courses' })
    }

    return courses;
}