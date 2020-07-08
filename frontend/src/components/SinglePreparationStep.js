import React, { useEffect } from 'react'

function SinglePreparationStep( props ) {
  return (
    <div className="single-preparation-step d-flex">
      <p>{ props.instructions }</p>
    </div>
  )
}

export default SinglePreparationStep