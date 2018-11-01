var modelAsset = require('./modelPrerequisite');

modelAsset.initIncrement();

var BookCategorySchema = new modelAsset.schema({
  category: {
    type: String,
    trim: true,
    required: true
  }
});

modelAsset.aiPlugin(BookCategorySchema, {
  model: 'category',
  startAt: 1
});

module.exports = modelAsset.model('category', BookCategorySchema);
