import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Axios from 'axios'

function SignInForm() {
  const [ username, setUsername ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  async function handleSubmit( e ) {
    e.preventDefault()
    try {
      await Axios.post( 'http://localhost:3000/register', { username, email, password } )
      setUsername( '' )
      setEmail( '' )
      setPassword( '' )
      console.log( 'User was succesfully created.' )
    } catch ( e ) {
      console.log( 'There was an error.' );
    }
  }

  return (
    <Form onSubmit={ handleSubmit } className="signin-form col-xs-12 col-lg-6 offset-lg-3">
      <Form.Group controlId='formRetypeBasicPassword'>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={ e => setUsername( e.target.value ) } type='text' placeholder='Enter name' value={ username } />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={ e => setEmail( e.target.value ) } type='email' placeholder='Enter email' value={ email } />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={ e => setPassword( e.target.value ) } type='password' placeholder='Password' value={ password } />
      </Form.Group>
      <Button variant='outline-dark' type='submit'>
        Submit
    </Button>
    </Form>
  )
}

export default SignInForm