import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

function RecipeCard() {
  return (
    <Card className="best-recipe-card text-center m-3" style={ { width: '18rem' } }>
      {/* <Card.Img variant="top" src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */ }
      <span className="best-recipe-image"></span>
      <Card.Body>
        <Card.Title>
          <NavLink className="best-recipe-card__title" to='/recipes/:id'>Egg Salad</NavLink>
        </Card.Title>
        <Rating />
      </Card.Body>
    </Card>
  )
}

export default RecipeCard