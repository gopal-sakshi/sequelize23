module.exports = (sequelize, Sequelize) => {
    const Reviews = sequelize.define("review", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        reviewer_name : Sequelize.STRING,           // only valid types in sqlite = NULL, INTEGER, REAL, TEXT, BLOB
        rating : Sequelize.NUMBER,                      // it seems, sequelize allows us to use 'STRING'
        publishedDate : Sequelize.BIGINT
    }, { timestamps : false });

    Reviews.associate22 = (allModelsList23) => {
        // here allModelsList23 is nothing but "db" object in index.js
        Reviews.belongsTo(allModelsList23.books, {
            foreignKey: { allowNull: false }
        })
    }

    // Reviews.sync({ force:true })

    return Reviews;
}