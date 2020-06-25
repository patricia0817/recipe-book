import React, { useEffect } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import SignInForm from './SignInForm'

function SignInContainer() {
  return (
    <Accordion className="signin-container text-center" defaultActiveKey="0">
      <Card>
        <Card.Header className="signin-container__header">
          <Accordion.Toggle as={ Button } variant="link" eventKey="0">
            <Button className="signin-button" variant="outline-dark">Sign In</Button>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className='signin-container__body mt-2 text-left'>
            <SignInForm />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default SignInContainer