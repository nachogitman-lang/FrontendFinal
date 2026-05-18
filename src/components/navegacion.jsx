import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function Navegacion() {
    return (    
      <>
        <Navbar bg="success" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Dietetica verde vida</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/producto">Producto</Nav.Link>
          <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/formulario">Formulario</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

      </>
    );
  }