import React, { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import Axios from 'axios'

function HeaderLoggedIn() {
  const appState = useContext( StateContext )
  const appDispatch = useContext( DispatchContext )

  async function handleLogout() {
    const AUTH_TOKEN = appState.user.token
    Axios.defaults.headers.common[ 'Authorization' ] = AUTH_TOKEN;
    Axios.post( 'http://localhost:3000/logout' )
    localStorage.removeItem( 'recipeBookToken' )
    localStorage.removeItem( 'recipeBookEmail' )
    localStorage.removeItem( 'recipeBookUsername' )
    appDispatch( { type: 'logout' } )
  }

  function handleAddRecipe() {
    console.log( 'Add recipe' )
  }

  return (
    <div className="pr-3 py-3 logged-in-controls text-right">
      <NavLink to="/myProfile"><i className="fa fa-user my-profile-control"></i></NavLink>
      <Button onClick={ handleAddRecipe } variant="light add-recipe-control">Add Recipe</Button>
      <Button onClick={ handleLogout } className="sign-out-control" variant="outline-light">Sign Out</Button>
    </div>
  )
}

export default HeaderLoggedIn