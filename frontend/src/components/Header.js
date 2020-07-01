import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import HeaderLoggedOut from './HeaderLoggedOut'
import HeaderLoggedIn from './HeaderLoggedIn'

function Header() {
  const [ loggedIn, setLoggedIn ] = useState()

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <NavLink activeClassName="logo-active" className="logo" to="/" exact>Recipe Book</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" exact className="navbar-link" activeClassName="navbar-link__active">All Recipes</NavLink>
          <NavLink to="/favorites" className="navbar-link" activeClassName="navbar-link__active">Favorites</NavLink>
          <NavLink to="/appetizers" className="navbar-link" activeClassName="navbar-link__active">Appetizers</NavLink>
          <NavLink to="/salads" className="navbar-link" activeClassName="navbar-link__active">Salads</NavLink>
          <NavLink to="/soups" className="navbar-link" activeClassName="navbar-link__active">Soups</NavLink>
          <NavLink to="/desserts" className="navbar-link" activeClassName="navbar-link__active">Desserts</NavLink>
          <NavLink to="/main-dishes" className="navbar-link" activeClassName="navbar-link__active">Main Dishes</NavLink>
          <Button variant="outline-warning">View All Categories</Button>
        </Nav>
      </Navbar.Collapse>
      { loggedIn ? <HeaderLoggedIn setLoggedIn={ setLoggedIn } /> : <HeaderLoggedOut setLoggedIn={ setLoggedIn } /> }
    </Navbar>
  )
}

export default Header