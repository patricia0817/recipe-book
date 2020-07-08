import React, { useEffect } from 'react'
import RecipeCard from './RecipeCard'

function RecipesGallery() {
  return (
    <div className="best-recipes-container my-5 text-center">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  )
}

export default RecipesGallery