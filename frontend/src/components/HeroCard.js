import React, { useEffect } from 'react'
import { Button, Jumbotron, Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Page from './Page'

function HeroCard( props ) {
  function handleSeeRecipe() {
    props.history.push( `/viewRecipe/${ props.recipe._id }` )
  }

  if ( !props.recipe ) {
    return (
      <Page>
        <div className="loading-container text-center pt-5">
          <Spinner animation="border" />
          <h4 style={ { display: "inline-block", marginLeft: "1rem" } }>Loading...</h4>
        </div>
      </Page >
    )
  }

  return (
    <Jumbotron className="hero-card-container col-xs-12 col-lg-7 text-left">
      <h1>{ props.recipe.title }</h1>
      <p>
        { props.recipe.instructions }
      </p>
      <p>
        <Button onClick={ handleSeeRecipe } variant="outline-dark">See Recipe</Button>
      </p>
    </Jumbotron>
  )
}

export default withRouter( HeroCard )