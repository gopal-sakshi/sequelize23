const db = require('../models');
// const table23 = require('../models_old');
var express = require('express');
var router = express.Router();

router.post('/addReview', async (req, res) => {
    let review = req.body;
    await db.reviews.create(review).then(data => {
        res.status(201).send(data);
    });
});

router.get('/getAll', async (req, res) => {
    // db.reviews.findAll({
    //     include: db.books
    // })
    let list23 = await db.reviews.findAll({
        include: db.books
    })
    res.status(201).send(list23);
})

module.exports = router;