const Books = require('./books');
const Reviews = require('./reviews');
const table23 = require('./table23');

// Books.hasOne(Reviews);
Books.hasOne(Reviews, {
    foreignKey: { allowNull: false },
    // onDelete: 'RESTRICT',
});      
/*  
    CREATE TABLE IF NOT EXISTS `reviews` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `reviewer_name` VARCHAR(255), `rating` NUMBER, `publishedDate` BIGINT, `bookId` INTEGER REFERENCES `books` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);

    CREATE TABLE IF NOT EXISTS `reviews` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `reviewer_name` VARCHAR(255), `rating` NUMBER, `publishedDate` BIGINT, `bookId` INTEGER NOT NULL REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);
*/


console.log('>...................')
Books.sync({force:true});
Reviews.sync({force:true});

/*
    Reviews table will have bookId ---> about what book the review is about
    so, info is present on "reviews" table
    if info is present on target model ---> we use hasOne

    we can also use
    - Reviews.belongsTo(Posts)
    because, then Reviews becomes source model... info is on source model
    so, thats why we use belongsTo
    in both cases... new column will be created on "reviews" table... it wouldnt matter anyway

    What MATTERS is
    - when we use include in sequelize queries
*/


module.exports = {
    Books:Books,
    Reviews:Reviews,
    table23:table23
}

// https://stackoverflow.com/questions/61709290/sequelize-model-association-wont-create-a-new-column/61710568#61710568