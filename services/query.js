/**
 * saveQuery - Save data into any collection
 * @param  {Object}   modelObj [The model Object to be use]
 * @param  {Object}   data     [Data to be saved]
 * @param  {Function} cb       [Passes result to callback]
 */
exports.saveQuery = function(modelObj, data, cb) {
  let newModelObj = new modelObj(data);
  newModelObj.save(function(err, result) {
    return err ? cb(false, err) : cb(true, result);
  });
}

/**
 * batchSaveQuery - Save data into any collection
 * @param  {Object}   modelObj [The model Object to be use]
 * @param  {Array}   dataArray     [Bulk data to be saved]
 * @param  {Function} cb       [Passes result to callback]
 */
exports.batchSaveQuery = function(modelObj, dataArray, cb) {
  // let newModelObj = new modelObj(data);
  modelObj.create(dataArray, function(err, result) {
    return err ? cb(false, err) : cb(true, result);
  });
}

/**
 * findQuery - Searches any collection
 * @param  {Object}   modelObj    [The model object to be used]
 * @param  {Object}   searchQuery [Search query]
 * @param  {Function} cb          [Passes result to callback]
 */
exports.findQuery = function(modelObj, searchQuery, cb, populate = '') {
  if (!!populate) {
    modelObj.find(searchQuery)
    .populate(populate)
    .exec(function(err, data) {
      return err ? cb(false, err) : cb(true, data);
    });
    console.log('populatepopulatepopulate')
  } else {
    console.log('skdhjksjdkskdksjj', !!populate, populate)

    modelObj.find(searchQuery, function(err, data) {
      return err ? cb(false, err) : cb(true, data);
    });
  }
}

/**
 * deleteQuery - Delete data in any collection
 * @param  {Object}   modelObj    [The db model to be used]
 * @param  {Object}   deleteQuery [The delete query]
 * @param  {Function} cb          [Passes result to callback]
 */
exports.deleteQuery = function(modelObj, deleteQuery, cb) {
  modelObj.remove(deleteQuery, function(err) {
    return err ? cb(false, err) : cb(true, 'removed');
  });
}

/**
 * updateQuery - Update any collection
 * @param  {Object}   modelObj [The db model to be used]
 * @param  {Object}   query    [The delete query]
 * @param  {Object}   newData  [New data]
 * @param  {Function} cb       [Passes result to callback]
 */
exports.updateQuery = function(modelObj, query, newData, cb) {
  let field = { $set: newData };
  let option = { new: true };
  modelObj.findOneAndUpdate(query, field, option, function(err, data) {
    return err ? cb(false, err) : cb(true, data);
  });
}
