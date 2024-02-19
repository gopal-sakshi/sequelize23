module.exports = (sequelize, Sequelize) => {
    const students = sequelize.define("student", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.TEXT,
        email : {
            type: Sequelize.TEXT,
            unique: true
        },
        class: Sequelize.TEXT
    }, { 
        initialAutoIncrement: 100, timestamps : false 
    });

    students.associate22 = (db23) => {
        students.belongsToMany(db23.courses, { through: 'students_courses' })
    }

    return students;
}