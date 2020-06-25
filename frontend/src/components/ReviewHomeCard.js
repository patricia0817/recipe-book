import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Card } from 'react-bootstrap'
import Rating from './Rating'

function ReviewHomeCard() {
  return (
    <div className="review-home-card-container col-xs-12 col-lg-4">
      <div className="review-home-card-image col-5">
        <Image src="https://images.pexels.com/photos/6747/food-dessert-sweet-color.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" thumbnail />
      </div>
      <div className="review-home-card-content col-7">
        <Card style={ { width: '18rem' } }>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">January 04, 2018</Card.Subtitle>
            <Card.Title><NavLink to="recipes/:id">Macaroons</NavLink></Card.Title>
            <Card.Text>
              <Rating />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            2 Comments
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default ReviewHomeCard