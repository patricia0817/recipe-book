const mongoose = require( 'mongoose' )
const validator = require( 'validator' )

const Recipe = mongoose.model( 'Recipe', {
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    default: "Appetizers"
  },
  calories: {
    type: Number,
    default: 0
  },
  time: {
    type: String,
    default: 0
  },
  ingredients: [ {
    quantity: {
      type: Number,
      required: true
    },
    units: {
      type: String,
      required: true,
      trim: true
    },
    ingredientName: {
      type: String,
      required: true,
    }
  } ],
  instructions: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
} )

module.exports = Recipe