const posts = require('../models/posts');
var express = require('express');
var router = express.Router();

router.post('/posts', async (req, res) => {
  var post = {};
  if(req.body.isPublished) {
    post = {
      isPublished: req.body.isPublished,
      title : req.body.title,
      author : req.body.author,
      timestamp: req.body.timestamp,
      publishedDate : Date.now()  
    }
  } else {
    post = {
      isPublished: req.body.isPublished,
      title : req.body.title,
      author : req.body.author,
      timestamp: req.body.timestamp
    }
  }
  posts.create(post).then(data => res.status(201).send(data));

});

router.get('/posts/:id', async (req, res) => {
  posts.finpostsyPk(req.params.id).then(data => {
    data ? res.status(200).send(data) : res.status(404).send('ID not found');
  });
});

router.get('/posts', async (req, res) => {
  var condition = {};
  if(req.query.author && req.query.isPublished) {
    condition = { where: { author: req.quert.author, isPublished: req.query.isPublished }}
    posts.findAll(condition).then(data => res.status(200).send(data))
  } else if(req.query.author) { 
    posts.findAll({where: { author: req.query.author }}).then(data => res.status(200).send(data))
  } else if (req.query.isPublished) {
    posts.findAll({where: { isPublished: req.query.isPublished }}).then(data => res.status(200).send(data))
  } else {
    posts.findAll({}).then(data => res.status(200).send(data))
  }  
});

router.all('/posts/:id', async(req, res) => {
  res.status(405).send({});
});

module.exports = router;