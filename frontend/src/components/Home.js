import React, { useEffect, useContext } from 'react'
import Page from './Page'
import Hero from './Hero'
import SignInContainer from './SignInContainer'
import RecipesGallery from './RecipesGallery'
import DiscoverAllRecipes from './DiscoverAllRecipes'
import ReviewsHomeContainer from './ReviewsHomeContainer'
import StateContext from '../StateContext'


function Home() {
  const appState = useContext( StateContext )

  return (
    <Page>
      <Hero />
      { !appState.loggedIn && <SignInContainer /> }
      <RecipesGallery />
      <DiscoverAllRecipes />
      <ReviewsHomeContainer />
    </Page>
  )
}

export default Home