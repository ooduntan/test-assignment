/**
 * messageResponder -- Helps send a response message to the client
 * @param  {Object} res      [Response Object]
 * @param  {Boolean} bool     [The status of the response message]
 * @param  {String} result   [The message to display]
 * @param  {Int} httpCode [The http status the response is false]
 */
exports.messageResponder = function(res, bool, result, httpCode) {
  if (bool) {
    res.json({
      success: bool,
      message: result
    });
  } else {
    res.status(httpCode).send({
      success: bool,
      message: result
    });
  }
}

/**
 * dataResponder Sends a response with a data object to the client
 * @param  {Object} res        [The response Object]
 * @param  {Boolean} bool       [The status of the response]
 * @param  {Object} result     [The result of the response]
 * @param  {String} resultName [The json property of the result]
 * @param  {Int} httpCode   [The HTTP status of the response if  false]
 */
exports.dataResponder = function(res, bool, result, resultName, httpCode) {
  if (bool) {
    var response = {};
    response[resultName] = result;
    res.json(response);
  } else {
    res.status(httpCode).send({
      success: bool,
      message: result
    });
  }
}
