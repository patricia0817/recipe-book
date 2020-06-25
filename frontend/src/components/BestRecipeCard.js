import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

function BigRecipeCard() {
  return (
    <Card className="best-recipe-card text-center m-3" style={ { width: '18rem' } }>
      <Card.Img variant="top" src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Card.Body>
        <Card.Title>
          <NavLink className="best-recipe-card__title" to='/recipes/:id'>Egg Salad</NavLink>
        </Card.Title>
        <Card.Text>
          <div className="best-recipe-card-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BigRecipeCard