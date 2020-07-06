const express = require( 'express' )
const cors = require( 'cors' )
require( './db/mongoose' )
const User = require( './models/user' )
const Recipe = require( './models/recipe' )
const userRouter = require( './routers/user' )
const recipeRouter = require( './routers/recipe' )

const app = express()
const port = process.env.PORT || 3000

app.use( cors() )
app.use( express.json() )
app.use( userRouter )
app.use( recipeRouter )

app.listen( port, () => {
  console.log( 'Server is up on port ' + port )
} )