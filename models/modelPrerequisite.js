var mongoose = require('mongoose');
var ai = require('mongoose-auto-increment');
var config = require('../config');

const connection = mongoose.createConnection(config.database);

module.exports = {
  schema: mongoose.Schema,
  initIncrement: function() {
    ai.initialize(connection);
  },
  model: function(collection, schema) {
    return connection.model(collection, schema);
  },
  aiPlugin: function(modelSchema, settings) {
    modelSchema.plugin(ai.plugin, settings);
  }
};
