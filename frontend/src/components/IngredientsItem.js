import React, { useEffect } from 'react'

function IngredientsItem( props ) {
  let { ingredientName, quantity, units } = props.ingredient
  return (
    <div className="ingredient">
      <span className="ingredient"><b>{ quantity } { units }</b> { ingredientName }</span>
    </div>
  )
}

export default IngredientsItem