import React, { useEffect } from 'react'
import BestRecipeCard from './BestRecipeCard'

function BestRecipesGallery() {
  return (
    <div className="best-recipes-container my-5 text-center">
      <BestRecipeCard />
      <BestRecipeCard />
      <BestRecipeCard />
      <BestRecipeCard />
      <BestRecipeCard />
      <BestRecipeCard />
      <BestRecipeCard />
      <BestRecipeCard />
    </div>
  )
}

export default BestRecipesGallery