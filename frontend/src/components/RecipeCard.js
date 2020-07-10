import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

function RecipeCard() {
  return (
    <Card className="best-recipe-card text-center m-3" style={ { width: '18rem' } }>
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