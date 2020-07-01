const mongoose = require( 'mongoose' )

mongoose.connect( 'mongodb://127.0.0.1:27017/recipe-book-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
} )