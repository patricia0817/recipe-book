import React, { useEffect } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Page from './Page'
import Hero from './Hero'
import SignInContainer from './SignInContainer'
import BestRecipesGallery from './BestRecipesGallery'
import DiscoverAllRecipes from './DiscoverAllRecipes'
import ReviewsHomeContainer from './ReviewsHomeContainer'

function HomeGuest() {
  return (
    <Page>
      <Hero />
      <SignInContainer />
      <BestRecipesGallery />
      <DiscoverAllRecipes />
      <ReviewsHomeContainer />
    </Page>
  )
}

export default HomeGuest