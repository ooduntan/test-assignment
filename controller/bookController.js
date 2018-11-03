var validator = require('validator');
var bookService  = require('../services/bookService');
var utils = require('./utils');


exports.getBooks = function(req, res) {
  var search = req.query;

  bookService.findBooks(search, function(bool, result) {
      return utils.dataResponder(res, true, result, 'books', 200);
  });
}

exports.saveBookData =  (req, res)  => {
  const errorReport = validateUserData(req.body);
  if (errorReport.length) {
    return res.send({message: `Invalid User data in the following field ${errorReport.join(', ')}`})
  }
  bookService.saveBooks(req.body, (status, response) => {
    if (status) {
      return utils.dataResponder(res, true, response, 'book', 200);
    }
    const result = `The following error occurred while creating user: ${err}`
    utils.messageResponder(res, false, result, 400);
  })
}

function validateUserData(bookData) {
  const { name = '', author = '', isbn = '', numberOfBooks = '', datePublished = '', category = '', numberOfBooksIssued = '' } = bookData;
  let errorBox = [];

  if(!name || !validator.isLength(name, 2)) {
    errorBox.push('name')
  }

  if(!author || !validator.isLength(author, 2)) {
    errorBox.push('author')
  }

  if (!numberOfBooks || !validator.isNumeric(numberOfBooks)) {
    errorBox.push('numberOfBooks')
  }
  if (!numberOfBooksIssued && !validator.isNumeric(numberOfBooksIssued)) {
    errorBox.push('numberOfBooksIssued')
  }

  if(!category || !validator.isNumeric(category)) {
    errorBox.push('category')
  }

  if (!datePublished || !validator.isLength(datePublished, 2)) {
    errorBox.push('datePublished')
  }


  return errorBox;
}

/**
 * getRoles Helps fetch roles
 */
exports.getCategories = (req, res) => {
  bookService.findCategory({}, (status, result) => {
    return utils.dataResponder(res, true, result, 'categories', 200);
  });
}

/**
 * Edit books
 */
exports.editBooks = (req, res)  => {
  const { id } = req.body
  console.log(id, 'kjjkkjkjk');

  if(isNaN(id)) {
    return utils.messageResponder(res, false, `Invalid book id`, 400)
  }

  bookService.updateOneBook(id, req.body, (status, result) => {
    console.log(status, result, 'status, result');

    if(status) {
      return utils.dataResponder(res, true, result, 'book', 200);
    }

    return utils.messageResponder(res, false, result, 400)
  });
}
