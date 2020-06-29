const mongoose = require( 'mongoose' )
const validator = require( 'validator' )
const bcrypt = require( 'bcryptjs' )
const jwt = require( 'jsonwebtoken' )

const userSchema = new mongoose.Schema( {
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
    validate( value ) {
      if ( !validator.isEmail( value ) ) {
        throw new Error( 'Email is invalid' )
      }
    }
  },
  password: {
    type: String,
    require: true,
    trim: true,
    minlength: 7,
    validate( value ) {
      if ( value.toLowerCase().includes( 'password' ) ) {
        throw new Error( 'Password cannot contain "password"' )
      }
    }
  }
} )

userSchema.pre( 'save', async function( next ) {
  const user = this

  if ( user.isModified( 'password' ) ) {
    user.password = await bcrypt.hash( user.password, 8 )
  }

  next()
} )

const User = mongoose.model( 'User', userSchema )

module.exports = User