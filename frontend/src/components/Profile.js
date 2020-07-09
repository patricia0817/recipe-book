import React, { useEffect, useContext } from 'react'
import { Nav } from 'react-bootstrap'
import StateContext from '../StateContext'
import Axios from 'axios'
import Page from './Page'

function Profile() {
  const appState = useContext( StateContext )

  const username = appState.user.username


  useEffect( () => {
    async function fetchData() {
      try {
        const AUTH_TOKEN = appState.user.token
        Axios.defaults.headers.common[ 'Authorization' ] = AUTH_TOKEN;
        const response = await Axios.get( '/myRecipes' )
        console.log( response.data )
      } catch ( e ) {
        console.log( 'There was a problem.' )
      }
    }
    fetchData()
  }, [] )

  return (
    <Page>
      <div className="text-center py-5 profile-welcome-screen">
        <h2>Welcome { username }</h2>
      </div>
      <div className="row">
        <Nav className="col-12 col-lg-8 offset-lg-2" variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#">My recipes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">My reviews</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Page>
  )
}

export default Profile