const express = require( 'express' )
const router = new express.Router()
const Recipe = require( '../models/recipe' )
const auth = require( '../middleware/auth' )

router.post( '/addRecipe', auth, async ( req, res ) => {
  const recipe = new Recipe( {
    ...req.body,
    owner: req.user._id
  } )
  console.log( 'recipe: ', recipe )
  console.log( recipe.ingredients[ 0 ].ingedientName )
  try {
    await recipe.save()
    res.status( 201 ).send( recipe )
  } catch ( e ) {
    console.log( e )
    res.status( 400 ).send()
  }
} )

router.get( '/recipes', auth, async ( req, res ) => {
  try {
    const recipes = await Recipe.find( { owner: req.user._id } )
    res.send( recipes )
  } catch ( e ) {
    res.status( 500 ).send()
  }
} )

module.exports = router