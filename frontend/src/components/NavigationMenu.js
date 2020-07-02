import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="/" className="logo">Recipe Book
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/allrecipes" exact className="navbar-link" activeClassName="navbar-link__active">All Recipes</NavLink>
            <NavLink to="/favorites" className="navbar-link" activeClassName="navbar-link__active">Favorites</NavLink>
            <Button variant="outline-warning">View All Categories</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationMenu