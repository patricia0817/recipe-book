import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

function HeaderLoggedIn( props ) {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-12 logged-in-controls">
        <Button variant="dark">Add Recipe</Button>
        <Button onClick={ () => props.setLoggedIn( false ) } className="sign-out-button" variant="outline-dark">Sign Out</Button>
      </div>
    </div>
  )
}

export default HeaderLoggedIn