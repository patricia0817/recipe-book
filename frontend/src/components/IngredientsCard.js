import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import IngredientsListItem from './IngredientsListItem'

function IngredientsCard() {
  return (
    <Card className="ingredients-card-container col-xs-12 col-lg-5">
      <Card.Body>
        <Card.Title className="ingredients-card-title text-success">Ingredients</Card.Title>
        <ListGroup variant="flush">
          <IngredientsListItem viewRecipe ingredient={ { ingredientName: "onions", quantity: "21", units: "tbs", id: 0 } } />
          <IngredientsListItem viewRecipe ingredient={ { ingredientName: "onions", quantity: "21", units: "tbs", id: 0 } } />
          <IngredientsListItem viewRecipe ingredient={ { ingredientName: "onions", quantity: "21", units: "tbs", id: 0 } } />
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default IngredientsCard