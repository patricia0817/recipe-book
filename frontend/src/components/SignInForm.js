import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

function SignInForm() {
  return (
    <Form className="signin-form col-xs-12 col-lg-6 col-lg-offset-3">
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group controlId='formRetypeBasicPassword'>
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control type='password' placeholder='Re-eneter Password' />
      </Form.Group>
      <Button variant='outline-dark' type='submit'>
        Submit
    </Button>
    </Form>
  )
}

export default SignInForm