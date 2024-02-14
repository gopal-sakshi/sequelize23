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
    }, { timestamps : false });

    Books.associate22 = (dbInstance23) => {
        // this dbInstance23 has all the models list
        Books.hasOne(dbInstance23.reviews, {
            foreignKey: { allowNull: false }
        });
    }
    return Books;
}