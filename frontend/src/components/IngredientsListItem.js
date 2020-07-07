import React, { useEffect } from 'react'
import { ListGroup, Button } from 'react-bootstrap'

function IngredientsListItem( props ) {
  console.log( props )
  return (
    <ListGroup.Item className="ingredients-list-item px-0">
      <span><b>{ props.ingredient.quantity } { props.ingredient.units }</b> { props.ingredient.ingredientName }</span>
      { !props.viewRecipe && <Button onClick={ () => props.handleRemoveIngredient( props.ingredient.id ) } variant="outline-dark">remove</Button> }
    </ListGroup.Item>
  )
}

export default IngredientsListItem