const { Reviews:reviews } = require('../models');
const table23 = require('../models_old');
var express = require('express');
var router = express.Router();

router.post('/addReview', async (req, res) => {
    let review = req.body
    reviews.create(review).then(data => {
        res.status(201).send(data);
    })
});

router.get('/getAll', async (req, res) => {
    await table23.findAll();
    reviews.findAll({
        include: 'Books'
    })
    res.status(201).send('waituuuu');
})

module.exports = router;