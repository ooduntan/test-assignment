var express = require('express');
var router = express.Router();
var books = require('../controller/bookController');

router.post('/create', books.saveBookData);

router.get('/fetch_all', books.getBooks);

router.put('/edit', books.editBooks);

router.get('/category', books.getCategories);

module.exports = router;
