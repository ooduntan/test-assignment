var express = require('express');
var router = express.Router();
var users = require('./books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Welcome' });
});

router.use('/books', users);


module.exports = router;
