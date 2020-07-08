import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Card } from 'react-bootstrap'
import Rating from './Rating'

function ReviewHomeCard() {
  return (
    <div className="single-small-recipe-area d-flex mb-4">
      <div className="recipe-thumb">
        <img src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      </div>
      <div class="recipe-content">
        <span>January 04, 2018</span>
        <NavLink className="recipe-content-title" to="/">
          <h5>Homemade italian pasta</h5>
        </NavLink>
        <div class="ratings">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <NavLink className="recipe-content-comments" to="/">2 Comments</NavLink>
      </div>
    </div>
  )
}

export default ReviewHomeCard