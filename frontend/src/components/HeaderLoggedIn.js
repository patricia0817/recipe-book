import React, { useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import Axios from 'axios'

function HeaderLoggedIn( props ) {
  const appState = useContext( StateContext )
  const appDispatch = useContext( DispatchContext )

  async function handleLogout() {
    const AUTH_TOKEN = appState.user.token
    Axios.defaults.headers.common[ 'Authorization' ] = AUTH_TOKEN;
    Axios.post( '/logout' )
    localStorage.removeItem( 'recipeBookToken' )
    localStorage.removeItem( 'recipeBookEmail' )
    localStorage.removeItem( 'recipeBookUsername' )
    appDispatch( { type: 'logout' } )
    props.history.push( '/' )
  }

  return (
    <div className="pr-3 py-3 logged-in-controls text-right">
      <Link to="/myProfile"><i className="fa fa-user my-profile-control"></i></Link>
      <Link to="/addRecipe" className="btn btn-light add-recipe-control">Add Recipe</Link>

      <Button onClick={ handleLogout } className="sign-out-control" variant="outline-light">Sign Out</Button>
    </div>
  )
}

export default withRouter( HeaderLoggedIn ) 