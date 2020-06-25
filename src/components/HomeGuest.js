import React, { useEffect } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Page from './Page'
import Hero from './Hero'
import SignInForm from './SignInForm'

function HomeGuest() {
  return (
    <Page>
      <Hero isSmall />
      <SignInForm />
    </Page>
  )
}

export default HomeGuest