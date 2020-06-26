const mongoose = require( 'mongoose' )

mongoose.connect( 'mongodb://127.0.0.1:27017/recipe-book-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
} )

const User = mongoose.model( 'User', {
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
} )

const me = new User( {
  name: 'Patricia',
  email: 'patricia@test.com',
  password: 'Red12345!'
} )

me.save().then( () => {
  console.log( me )
} ).catch( ( error ) => {
  console.log( 'Error!', error )
} )