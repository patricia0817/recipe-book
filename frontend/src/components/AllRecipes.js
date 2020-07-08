import React, { useEffect } from 'react'

import Page from './Page'
import SearchForm from './SearchForm'
import RecipesGallery from './RecipesGallery'

function AllRecipes() {
  return (
    <Page>
      <SearchForm />
      <RecipesGallery />
    </Page>
  )
}

export default AllRecipes