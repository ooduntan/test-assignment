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
  bookService.save(req.body, (status, err) => {
    if (status) {
      return utils.dataResponder(res, true, result, 'book', 200);
    }
    const result = `The following error occurred while creating user: ${err}`
    utils.messageResponder(res, false, result, 400);
  })
}

function validateUserData(bookData) {
  const { name = '', author = '', isbn = '', numberOfBooks = '', datePublished = '', category = '', numberOfBooksIssued = '' } = bookData;
  let errorBox = [];

  if(!validator.isLength(name, 2)) {
    errorBox.push('name')
  }

  if(!validator.isLength(author, 2)) {
    errorBox.push('author')
  }

  if (!validator.isNumeric(numberOfBooks)) {
    errorBox.push('numberOfBooks')
  }
  if (!validator.isNumeric(numberOfBooksIssued)) {
    errorBox.push('numberOfBooksIssued')
  }

  if(!validator.isLength(category, 2)) {
    errorBox.push('category')
  }

  if (!validator.isLength(datePublished, 2)) {
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
  const { bookId } = req.body
  if(!!bookId || !validator.isNumeric(bookId)) {
    return utils.messageResponder(res, false, `Invalid book id`, 400)
  }

  bookService.updateOneBook(bookId, req.body, (status, result) => {
    if(status) {
      return utils.messageResponder(res, true, result, 200)
    }

    return utils.messageResponder(res, false, result, 400)
  });
}
