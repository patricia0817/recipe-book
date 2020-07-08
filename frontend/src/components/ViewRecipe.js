import React, { useEffect } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Page from './Page'
import SinglePreparationStep from './SinglePreparationStep'
import IngredientsItem from './IngredientsItem'
import ContactForm from './ContactForm'

function ViewRecipe() {


  return (
    <Page>
      <Jumbotron fluid className="view-recipe-jumbotron text-center h-100">
        <h1>Recipe</h1>
      </Jumbotron>
      <div className="recipe-post-area section-padding-80">
        <div className="recipe-content-area">
          <Container>
            <div className="row">
              <div class="col-12 col-md-8">
                <div class="receipe-headline my-5">
                  <span>April 05, 2018</span>
                  <h2>Vegetarian cheese salad</h2>
                  <div class="receipe-duration">
                    <h6>Prep: 15 mins</h6>
                    <h6>Cook: 30 mins</h6>
                    <h6>Yields: 8 Servings</h6>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="receipe-ratings text-right my-5">
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-12 col-lg-8">

                <SinglePreparationStep />
                <SinglePreparationStep />
                <SinglePreparationStep />

              </div>
              <div className="col-12 col-lg-4">
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  <IngredientsItem />
                  <IngredientsItem />
                  <IngredientsItem />
                  <IngredientsItem />
                  <IngredientsItem />
                  <IngredientsItem />
                  <IngredientsItem />
                  <IngredientsItem />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="section-heading text-left">
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