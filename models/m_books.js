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

        /*
            we defined Books.hasOne ----> meaning we can use "include" only within books model
            
            // WORKSSSSSSSSSSS
            await db.books.findAll({
                include: db.reviews
            });

            // DOESNT WORK... for it to work, we need to create association in reviews model also
            await db.reviews.findAll({
                include: db.books
            });
        */
    }

    // Books.sync({ force:true })
    return Books;
}