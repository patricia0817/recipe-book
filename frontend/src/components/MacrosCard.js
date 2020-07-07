import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function MacrosCard() {
  return (
    <Card className="macros-card col-xs-12 col-lg-5 offset-lg-1">
      <Card.Body>
        <Card.Text>
          <span className="macro-info-container">
            <span><b><i className="fas fa-utensils"></i></b></span>
            <span className="macros">
              <span className="macro-info-description text-success"><b>Category</b></span>
              <span className="macro-info-value">Soups</span>
            </span>
          </span>
          <span className="macro-info-container">
            <span><b><i className="fas fa-hamburger"></i></b></span>
            <span className="macros">
              <span className="macro-info-description text-success"><b>Category</b></span>
              <span className="macro-info-value">Calories</span>
            </span>
          </span>
          <span className="macro-info-container">
            <span><b><i className="fas fa-clock"></i></b></span>
            <span className="macros">
              <span className="macro-info-description text-success"><b>Category</b></span>
              <span className="macro-info-value">Time</span>
            </span>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MacrosCard