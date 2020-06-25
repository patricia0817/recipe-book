import React, { useEffect } from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

function HeroCard() {
  return (
    <Jumbotron className="hero-card-container col-xs-12 col-lg-7 text-left">
      <h1>Delicios Egg Salad</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
  </p>
      <p>
        <Button variant="outline-dark">See Recipe</Button>
      </p>
    </Jumbotron>
  )
}

export default HeroCard