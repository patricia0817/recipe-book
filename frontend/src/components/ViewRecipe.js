import React, { useEffect } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Page from './Page'

function ViewRecipe() {
  return (
    <Page>
      <Jumbotron fluid className="view-recipe-jumbotron">
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
    </p>
        </Container>
      </Jumbotron>
    </Page>
  )
}

export default ViewRecipe