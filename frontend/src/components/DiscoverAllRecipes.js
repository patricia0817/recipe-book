import React, { useEffect } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

function DicoverAllRecipes() {
  return (
    <Jumbotron className="discover-all-recipes-container h-100 text-center">
      <h1>Food Is Love</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button className="text-white" size="lg" variant="warning">Discover All Recipes</Button>
      </p>
    </Jumbotron>
  )
}

export default DicoverAllRecipes