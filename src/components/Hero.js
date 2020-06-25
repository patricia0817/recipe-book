import React, { useEffect } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

function Hero( props ) {
  return (
    <Jumbotron fluid className={ `py-5 hero-container  ${ props.isSmall && 'col-xs-12 col-lg-5' }` }>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
          </p>
      </Container>
    </Jumbotron >
  )
}

export default Hero