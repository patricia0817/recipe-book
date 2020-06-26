import React, { useEffect } from 'react'
import Page from './Page'
import Hero from './Hero'
import SignInContainer from './SignInContainer'
import BestRecipesGallery from './BestRecipesGallery'
import DiscoverAllRecipes from './DiscoverAllRecipes'
import ReviewsHomeContainer from './ReviewsHomeContainer'


function Home() {
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

export default Home