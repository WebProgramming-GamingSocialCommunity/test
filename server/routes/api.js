var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');
var assign = require('object-assign');

var DB_PATH = __dirname + '/../db.json';

/* GET users listing. */
router.get('/posts', function(req, res, next) {
  fs.readFile(DB_PATH, 'utf8', function(err, postContent) {
    if (err) return next(err);
    try {
      var posts = JSON.parse(postContent);
      res.json(posts);
    } catch (e) {
      next(err);
    }
  });
});

router.post('/posts', function(req, res, next) {
  var postContent = req.body.postContent;
  console.log('postContent: ', postContent);
  fs.readFile(DB_PATH, 'utf8', function(err, data) {
    if (err) return next(err);
    var posts;
    try {
      posts = JSON.parse(data);
    } catch (e) {
      return next(err);
    }
    var newPost = {
      postContent: postContent,
    };
    posts.push(newPost);
    fs.writeFile(DB_PATH, JSON.stringify(posts), function(err) {
      if (err) return next(err);
      res.json(newPost);
    });
  });
});

module.exports = router;
