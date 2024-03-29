const db = require('../models');
var express = require('express');
var router = express.Router();

router.post('/multiplePosts', async (req, res) => {
    // we will assume that posts/books are published for the timebeing
    let books = req.body;

    db.books.bulkCreate(books).then(data => {
        res.status(201).send(data)
    });
});

router.post('/posts', async (req, res) => {
    var post = {
        isPublished: req.body.isPublished,
        title: req.body.title,
        author: req.body.author,
        timestamp: req.body.timestamp
    };
    if (req.body.isPublished) {
        post['publishedDate'] = Date.now();
    }
    db.books.create(post).then(data => res.status(201).send(data));
});

router.get('/posts/:id', async (req, res) => {
    db.books.findByPk(req.params.id, { include: db.reviews }).then(data => {
        data ? res.status(200).send(data) : res.status(404).send('ID not found');
    });
});

router.get('/postReviews/:id', async (req, res) => {
    let reviews23 = await db.books.findByPk(req.params.id).then(async (bookRow) => {
        // return await bookRow.getParent();                // NOT WORKING
        // https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize
        return 23
    });
    res.send({info: reviews23});
})


router.get('/posts', async (req, res) => {
    var condition = {};
    console.log(req.query.isPublished, typeof req.query.isPublished);
    if (req.query.author && req.query.isPublished) {
        condition = { where: { author: req.query.author, isPublished: req.query.isPublished } }
        db.books.findAll(condition).then(data => res.status(200).send(data))
    } else if (req.query.author) {
        db.books.findAll({ where: { author: req.query.author } }).then(data => res.status(200).send(data))
    } else if (req.query.isPublished) {
        db.books.findAll({ where: { isPublished: req.query.isPublished } }).then(data => res.status(200).send(data))
    } else {
        db.books.findAll({}).then(data => res.status(200).send(data))
    }
});

// mocha test... put/patch/delete to /posts/:id ====> should result 405 ERROR
router.all('/posts/:id', async (req, res) => {
    res.status(405).send({});
});

module.exports = router;