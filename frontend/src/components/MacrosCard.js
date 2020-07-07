import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function MacrosCard() {
  return (
    <Card className="macros-card col-xs-12 col-lg-5 offset-lg-1">
      <Card.Body>
        <Card.Text>
          <div className="macro-info-container">
            <span><b><i className="fas fa-utensils"></i></b></span>
            <span className="macros">
              <div className="macro-info-description text-success"><b>Category</b></div>
              <div class="macro-info-value">Soups</div>
            </span>
          </div>
          <div className="macro-info-container">
            <span><b><i className="fas fa-hamburger"></i></b></span>
            <span className="macros">
              <div className="macro-info-description text-success"><b>Category</b></div>
              <div class="macro-info-value">Calories</div>
            </span>
          </div>
          <div className="macro-info-container">
            <span><b><i className="fas fa-clock"></i></b></span>
            <span className="macros">
              <div className="macro-info-description text-success"><b>Category</b></div>
              <div class="macro-info-value">Time</div>
            </span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MacrosCard