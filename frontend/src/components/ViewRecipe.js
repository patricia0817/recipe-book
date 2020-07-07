import React, { useEffect } from 'react'
import { Jumbotron, Container, CardDeck } from 'react-bootstrap'
import Page from './Page'
import MacrosCard from './MacrosCard'
import InstructionsCard from './InstructionsCard'
import IngredientsCard from './IngredientsCard'

function ViewRecipe() {
  return (
    <Page>
      <Jumbotron fluid className="view-recipe-jumbotron">
        <Container>
          <MacrosCard />
        </Container>
      </Jumbotron>
      <CardDeck className="view-recipe-content px-5">
        <IngredientsCard />
        <InstructionsCard />
      </CardDeck>
    </Page>
  )
}

export default ViewRecipe