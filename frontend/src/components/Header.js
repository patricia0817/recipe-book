import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, InputGroup, Button } from 'react-bootstrap'

function Header() {
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
      <Form className="login-form" inline>
        <InputGroup className="login-form__input py-1">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="login-form__input py-1">
          <FormControl
            placeholder="Password"
            aria-label="Password"
            type="password"
          />
        </InputGroup>
        <InputGroup className="login-form__submit py-1">
          <Button variant="dark">Login</Button>{ " " }
        </InputGroup>
      </Form>
    </Navbar>
  )
}

export default Header