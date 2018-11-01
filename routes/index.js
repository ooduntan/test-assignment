var express = require('express');
var router = express.Router();
var books = require('./books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Welcome' });
});

router.use('/books', books);


module.exports = router;
