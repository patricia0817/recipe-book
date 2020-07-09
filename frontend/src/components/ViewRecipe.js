import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { Jumbotron, Container, Spinner } from 'react-bootstrap'
import Page from './Page'
import SinglePreparationStep from './SinglePreparationStep'
import IngredientsItem from './IngredientsItem'
import ContactForm from './ContactForm'

function ViewRecipe( props ) {
  const { id } = useParams()
  const [ isLoading, setIsLoading ] = useState( true )
  const [ recipe, setRecipe ] = useState( {} )

  useEffect( () => {
    async function fetchRecipe() {
      try {
        const response = await Axios( `/recipes/${ id }` )
        if ( response.data ) {
          setIsLoading( false )
          console.log( response.data )
          setRecipe( response.data )
        }
      } catch ( e ) {
        console.log( 'There was a problem.' )
      }
    }

    fetchRecipe()
  }, [] )

  if ( isLoading ) {
    return (
      <Page>
        <div className="loading-container text-center pt-5">
          <Spinner animation="border" />
          <h4 style={ { display: "inline-block", marginLeft: "1rem" } }>Loading...</h4>
        </div>
      </Page >
    )
  }
  return (
    <Page>
      <Jumbotron fluid className="view-recipe-jumbotron text-center h-100">
        <h1>Recipe</h1>
      </Jumbotron>
      <div className="recipe-post-area section-padding-80">
        <div className="recipe-content-area">
          <Container>
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="recipe-headline my-5">
                  <h2>{ recipe.title }</h2>
                  <div className="recipe-duration">
                    <h6>Cook: { recipe.time }</h6>
                    <h6>Calories: { recipe.calories }</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="recipe-ratings text-right mt-5 mb-3">
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="recipe-category text-right">
                  <h3 className="text-success">{ recipe.category }</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8">
                <SinglePreparationStep instructions={ recipe.instructions } />
              </div>
              <div className="col-12 col-lg-4">
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  {
                    recipe.ingredients && recipe.ingredients.map( ( ingredient, index ) => {
                      return <IngredientsItem key={ index } ingredient={ ingredient } />
                    } )
                  }
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="section-heading text-left">
                  <h3>Leave a comment</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ContactForm />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Page>
  )
}

export default ViewRecipe