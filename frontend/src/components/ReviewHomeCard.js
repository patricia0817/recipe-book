import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Card } from 'react-bootstrap'
import Rating from './Rating'

function ReviewHomeCard() {
  return (
    <div className="review-home-card-container col-xs-12 col-lg-4 mb-5">
      <div className="row">
        <div className="col-5 review-home-card-thumbnail">
        </div>
        <div className="col-7">
          <p className="review-home-card-date">January 04, 2018</p>
          <NavLink to="/" className="review-home-card-title">Primavera Soup</NavLink>
          <Rating className="review-home-card-rating" />
          <NavLink to="/" className="review-home-card-comments">2 Comments</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ReviewHomeCard