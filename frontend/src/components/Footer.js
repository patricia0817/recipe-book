import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Recipe Book</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer