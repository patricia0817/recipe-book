import React, { useEffect, useState } from 'react'
import { Form, Col, Button, ListGroup } from 'react-bootstrap'
import Page from './Page'

function AddRecipe() {
  const [ ingredients, setIngredients ] = useState( [] )
  const [ ingredient, setIngredient ] = useState( '' )
  const [ quantity, setQuantity ] = useState( '' )
  const [ units, setUnits ] = useState( '' )
  function handleAddRecipe( e ) {
    e.preventDefault();
    console.log( ingredient )
    console.log( quantity )
    console.log( units )
    setIngredients( ingredients.concat( { ingredient, quantity, units } ) )
    setIngredient( '' )
    setQuantity( '' )
    setUnits( '' )
  }

  console.log( ingredients )
  return (
    <Page>
      <div className="container">
        <Form className='add-recipe-form col-xs-12 col-lg-8 offset-lg-2'>
          <Form.Group controlId="recipeTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Title" />
          </Form.Group>
          <Form.Row>
            <Col xs={ 12 } lg={ 4 }>
              <Form.Group controlId="recipeCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue="Category">
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
                <Form.Control type="number" placeholder="Calories" />
              </Form.Group>
            </Col>

            <Col xs={ 12 } lg={ 4 }>
              <Form.Group controlId="recipeTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Time" />
              </Form.Group>
            </Col>
          </Form.Row>



          <Form.Group controlId="recipeIngredients">
            <Form.Row>
              <Col xs={ 12 } lg={ 4 }>
                <Form.Group controlId="recipeIngredientQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control onChange={ e => setQuantity( e.target.value ) } value={ quantity } type="number" placeholder="Quantity" />
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
                  <Form.Control onChange={ e => setIngredient( e.target.value ) } value={ ingredient } type="text" placeholder="Add Ingredient" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Button onClick={ handleAddRecipe } variant="outline-dark" type="submit">
              Add
            </Button>
          </Form.Group>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <span>Test hjgjhgsjhafgjdgfka</span>
              <Button>remove</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Test hjgjhgsjhafgjdgfka</span>
              <Button>remove</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Test hjgjhgsjhafgjdgfka</span>
              <Button>remove</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Test hjgjhgsjhafgjdgfka</span>
              <Button>remove</Button>
            </ListGroup.Item>
          </ListGroup>

          <Form.Group>
            <Form.Label>Instructions</Form.Label>
            <textarea placeholder="Add Instructions"></textarea>
          </Form.Group>
        </Form>
      </div>
    </Page>
  )
}

export default AddRecipe