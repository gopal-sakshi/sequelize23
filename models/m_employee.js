module.exports = (sequelize, Sequelize) => {
    const employees = sequelize.define("employee", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: Sequelize.TEXT,
            unique: true
        },
        manager_id : Sequelize.INTEGER,
        designation: Sequelize.TEXT        
    }, { initialAutoIncrement: 100, timestamps : false });

    // this will create a table "manager23employees" --->
    employees.associate22 = (db23) => {

        // new table will NOT be created
        // employees.belongsTo(db23.employees, { foreignKey: 'manager_id', as: 'manager' });


        // new table will BE CREATED
        employees.belongsTo(db23.employees, { as: 'mngr23', through: 'manager_employee', });
    }


    /*      This is the generated sql query for "Self-reference" association sequelize

        CREATE TABLE IF NOT EXISTS employees (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT UNIQUE, 
            manager_id INTEGER REFERENCES employees(id) ON DELETE NO ACTION ON UPDATE CASCADE, 
            designation TEXT
        )

    */
    return employees;
}