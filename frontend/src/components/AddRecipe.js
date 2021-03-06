import React, { useEffect, useState, useContext } from 'react'
import { Form, Col, Button, ListGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import StateContext from '../StateContext'
import Axios from 'axios'
import Page from './Page'
import IngredientsListItem from './IngredientsListItem'

function AddRecipe( props ) {
  const appState = useContext( StateContext )

  const [ ingredients, setIngredients ] = useState( [] )
  const [ ingredientName, setIngredientName ] = useState( '' )
  const [ quantity, setQuantity ] = useState( '' )
  const [ units, setUnits ] = useState( '' )
  const [ title, setTitle ] = useState( '' )
  const [ category, setCategory ] = useState( 'Appetizers' )
  const [ calories, setCalories ] = useState( '' )
  const [ time, setTime ] = useState( '' )
  const [ instructions, setInstructions ] = useState( '' )
  const [ error, setError ] = useState( '' )

  async function handleAddRecipe( e ) {
    e.preventDefault()
    const recipe = {
      title,
      category,
      calories,
      time,
      ingredients,
      instructions
    }

    try {
      const AUTH_TOKEN = appState.user.token
      Axios.defaults.headers.common[ 'Authorization' ] = AUTH_TOKEN;
      const response = await Axios.post( '/addRecipe', recipe )
      if ( response.data ) {
        //Redirect to view recipe
        props.history.push( `/viewRecipe/${ response.data._id } ` )

        setIngredients( '' )
        setIngredientName( '' )
        setQuantity( '' )
        setUnits( '' )
        setTitle( '' )
        setCategory( '' )
        setCalories( '' )
        setTime( '' )
        setInstructions( '' )
        console.log( 'Added' )
      } else {
        console.log( 'Something went wrong.' )
      }
    } catch ( e ) {
      console.log( 'There was a problem.' )
    }
  }

  function handleAddIngredient( e ) {
    e.preventDefault();
    if ( ingredientName && quantity && units ) {
      setIngredients( ingredients.concat( { ingredientName, quantity, units } ) )
      setIngredientName( '' )
      setQuantity( '' )
      setUnits( '' )
    } else {
      setError( 'Please fill all the fields' )
    }
  }

  function handleRemoveIngredient( ingredientId ) {
    console.log( 'remove' )
    const newIngredientsArray = ingredients.filter( ( item ) => item.id !== ingredientId )
    setIngredients( newIngredientsArray )
  }

  return (
    <Page>
      <div className="container pt-3">
        <Form onSubmit={ handleAddRecipe } className='add-recipe-form col-xs-12 col-lg-8 offset-lg-2'>
          <Form.Group controlId="recipeTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={ e => setTitle( e.target.value ) } value={ title } placeholder="Title" />
          </Form.Group>
          <Form.Row>
            <Col xs={ 12 } lg={ 4 }>
              <Form.Group controlId="recipeCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control onChange={ e => setCategory( e.target.value ) } as="select" defaultValue="Appetizers" placeholder="Choose category">
                  <option>Appetizers</option>
                  <option>Salads</option>
                  <option>Soups</option>
                  <option>Desserts</option>
                  <option>Main Dishes</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col xs={ 12 } lg={ 4 }>
              <Form.Group controlId="recipeCalories">
                <Form.Label>Calories</Form.Label>
                <Form.Control min="0" value={ calories } onChange={ e => setCalories( e.target.value ) } type="number" placeholder="Calories" />
              </Form.Group>
            </Col>

            <Col xs={ 12 } lg={ 4 }>
              <Form.Group controlId="recipeTime">
                <Form.Label>Time</Form.Label>
                <Form.Control value={ time } onChange={ e => setTime( e.target.value ) } type="time" placeholder="Time" />
              </Form.Group>
            </Col>
          </Form.Row>



          <Form.Group controlId="recipeIngredients">
            <Form.Row>
              <Col xs={ 12 } lg={ 4 }>
                <Form.Group controlId="recipeIngredientQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control onChange={ e => setQuantity( e.target.value ) } min="0" value={ quantity } type="number" placeholder="Quantity" />
                </Form.Group>
              </Col>

              <Col xs={ 12 } lg={ 4 }>
                <Form.Group controlId="recipeIngredientUnits">
                  <Form.Label>Units</Form.Label>
                  <Form.Control onChange={ e => setUnits( e.target.value ) } value={ units } type="text" placeholder="Units" />
                </Form.Group>
              </Col>

              <Col cs={ 12 } lg={ 4 }>
                <Form.Group controlId="recipeIngredientName">
                  <Form.Label>Ingredient</Form.Label>
                  <Form.Control onChange={ e => setIngredientName( e.target.value ) } value={ ingredientName } type="text" placeholder="Add Ingredient" />
                </Form.Group>
              </Col>
            </Form.Row>
            { error.length > 0 && <div className="text-danger pb-3">{ error }</div> }
            <Button onClick={ handleAddIngredient } variant="dark" type="submit">
              Add
            </Button>
          </Form.Group>

          { ingredients.length > 0 &&
            <ListGroup className="ingredientsListItem" variant="flush">
              { ingredients.map( ( ingredient, index ) => {
                return < IngredientsListItem key={ index } handleRemoveIngredient={ handleRemoveIngredient } ingredient={ { ...ingredient, id: index } } />
              } ) }
            </ListGroup>
          }

          <Form.Group className="instructions-container">
            <Form.Label className="instructions-label col-12 p-0">Instructions</Form.Label>
            <textarea onChange={ e => setInstructions( e.target.value ) } className="instructions col-12" value={ instructions } placeholder="Add Instructions"></textarea>
          </Form.Group>
          <Form.Group action="/profile" method="post" encType="multipart/form-data">
            <input type="file" name="recipePicture" />
          </Form.Group>
          <Button type="submit" variant="dark" className="add-recipe-button">Add Recipe</Button>
        </Form>
      </div>
    </Page>
  )
}

export default withRouter( AddRecipe )