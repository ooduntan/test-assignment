var bookCategory = require('../../models/bookCategory');
var query  = require('../../services/query');

query.findQuery(bookCategory, {}, function(bool, gender) {
  if (gender.length <= 0) {
    query.batchSaveQuery(bookCategory,  [{category: 'Issue'},  {category: 'Return'}], (status, result) => { });
  }
});
