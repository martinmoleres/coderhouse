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
          <Link to={'/'}>
            <Navbar.Brand href="#home"><FontAwesomeIcon icon={faComputerMouse} /> Ecomm</Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
          <Link to= {"/category/shirt"} className='nav-link' >Shirts</Link>
          <Link to= {"/category/short"} className='nav-link' >Shorts</Link>
          <Link to= {"/category/shoe"} className='nav-link' >Shoes</Link>
          <Link className='nav-link' >
            <CartWidget />
          </Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  )
}
