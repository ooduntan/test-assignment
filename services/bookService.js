var bookModel  = require('../models/bookModel');
var categoryModel = require('../models/bookCategory');
var query  = require('./query');

/**
 * saveUser - Saves user data in the db
 * @param  {Object}   booksData [User data]
 * @param  {Function} cb       [Passes result to callback]
 */
exports.saveBooks = function(booksData, cb) {
  query.saveQuery(bookModel, booksData, cb);
}


/**
 * findAndUpdateOneUser - Find and update a user
 * @param  {Object}   userInfo [new user data]
 * @param  {Int}   id       [User ID]
 * @param  {Function} cb       [Passes result to callback]
 */
exports.findAndUpdateOneUser = function(userInfo, id, cb) {
  var _this = this;
  query.findQuery(userObj, id, function(bool, user) {

    if (bool && user.length > 0) {
      user = user[0];
      if (userInfo.name !== undefined) {
        userInfo.name = _this.updateUserInfoObj(userInfo.name, user.name);
      }

      _this.updateOneUser(id, userInfo, cb);
    } else {
      return cb(false, 'Invalid user');
    }
  });
}

/**
 * findUsers - Fetches all users
 * @param  {Object}   searchTerm [The search query]
 * @param  {Function} cb         [Passes result to callback]
 */
exports.findBooks = function(searchTerm, cb) {
  query.findQuery(bookModel, searchTerm, cb);
}

/**
 * findRoles - Fetches all roles
 * @param  {Object}   searchTerm [The search query]
 * @param  {Function} cb         [Passes result to callback]
 */
exports.findCategory = function(searchTerm, cb) {
  query.findQuery(categoryModel, searchTerm, cb);
}


/**
 * UpdateOneUser Update a user by its ID
 * @param {Int}   id       [The User ID]
 * @param {Object}   userData [The new user data]
 * @param {Function} cb       [Passes result to callback]
 */
exports.updateOneBook = function(id, bookData, cb) {
  query.updateQuery(bookModel, id, bookData, cb);
}

