In this `models_old` folder, in each model.js file, we have

new Sequelize({
    ...
});

we have in books.js, reviews.js
meaning we have <two sequelize instances>
we are importing both books & reviews model and exporting them in index.js
But this is incorrect design

say, we imported books model in controllers/books.js
but what if we want to have access to "reviews model" in controllers/books.js
its just not possible
thats why we wont import models indivdually... ie books.js (or) reviews.js
we will just import/export whole db object
now we can import what we want in controllers/books.js ====> 

=============================================================================

the correct design is in `models` folder