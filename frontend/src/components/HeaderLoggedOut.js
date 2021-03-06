import React, { useEffect, useState, useContext } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import Axios from 'axios'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'

function HeaderLoggedOut() {
  const appState = useContext( StateContext )
  const appDispatch = useContext( DispatchContext )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  async function handleSubmit( e ) {
    e.preventDefault()

    try {
      const response = await Axios.post( '/login', { email, password } )
      if ( response.data ) {
        localStorage.setItem( 'recipeBookToken', response.data.token )
        localStorage.setItem( 'recipeBookEmail', response.data.user.email )
        localStorage.setItem( 'recipeBookUsername', response.data.user.username )
        appDispatch( { type: 'login', data: response.data } )
      } else {
        console.log( 'Incorrect email / password.' )
      }
    } catch ( e ) {
      console.log( 'There was a problem.', e )
    }
    setEmail( '' )
    setPassword( '' )
  }

  return (
    <Form onSubmit={ handleSubmit } className="login-form pr-3 px-3 text-right" inline>
      <InputGroup className="login-form__input py-1">
        <FormControl
          onChange={ e => setEmail( e.target.value ) }
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          value={ email }
        />
      </InputGroup>
      <InputGroup className="login-form__input py-1">
        <FormControl
          onChange={ e => setPassword( e.target.value ) }
          placeholder="Password"
          aria-label="Password"
          type="password"
          value={ password }
        />
      </InputGroup>
      <InputGroup className="login-form__submit py-1">
        <Button type="submit" variant="outline-light">Login</Button>{ " " }
      </InputGroup>
    </Form>
  )
}

export default HeaderLoggedOut