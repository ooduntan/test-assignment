var modelAsset = require('./modelPrerequisite');

modelAsset.initIncrement();

var BooksSchema = new modelAsset.schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  author: {
    type: String,
    trim: true,
  },
  isbn: {
    type: String,
    trim: true,
  },
  numberOfBooks: {
    type: Number,
  },
  branch: {
    type: String,
  },
  datePublished: {
    type: Date,
    required: true
  },
  category: {
    type: String,
  },
  numberOfBooksIssued: {
    type: Number,
  }
});

modelAsset.aiPlugin(BooksSchema, {
  model: 'books',
  startAt: 1
});


module.exports = modelAsset.model('books', BooksSchema);
