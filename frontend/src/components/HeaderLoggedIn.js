import React, { useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'

function HeaderLoggedIn() {
  const appState = useContext( StateContext )
  const appDispatch = useContext( DispatchContext )

  async function handleLogout() {
    localStorage.removeItem( 'recipeBookToken' )
    localStorage.removeItem( 'recipeBookEmail' )
    localStorage.removeItem( 'recipeBookUsername' )
    appDispatch( { type: 'logout' } )
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-12 logged-in-controls">
        <Button variant="dark">Add Recipe</Button>
        <Button onClick={ handleLogout } className="sign-out-button" variant="outline-dark">Sign Out</Button>
      </div>
    </div>
  )
}

export default HeaderLoggedIn