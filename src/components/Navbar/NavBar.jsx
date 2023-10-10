import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
export const NavBar = () => {
  return (
    <>
      <Navbar fixed='top'  fluid bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faComputerMouse} /> Ecomm</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
          <Link to= "/" className='nav-link' >Shop</Link>
          <Link to="/" className='nav-link' >
            <CartWidget />
          </Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  )
}
