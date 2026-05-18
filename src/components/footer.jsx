import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ width: '100%', zIndex: 500, marginTop: '2rem', backgroundColor: '#064D2A' }}>
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Dietetica Verde Vida</h5>
            <p>
              Productos naturales, suplementos, alimentos saludables y asesoramiento para tu bienestar diario.
            </p>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Servicios</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-white">Asesoría nutricional</a></li>
              <li><a href="#!" className="text-white">Suplementos naturales</a></li>
              <li><a href="#!" className="text-white">Alimentos orgánicos</a></li>
              <li><a href="#!" className="text-white">Envíos a domicilio</a></li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="https://wa.me/5491123456789" className="text-white">WhatsApp</a></li>
              <li><a href="" className="text-white">Instagram</a></li>
              <li><a href="" className="text-white">Facebook</a></li>
              <li><a href="" className="text-white">Correo electrónico</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Dietetica Verde Vida
      </div>
    </footer>
  );
}

export default Footer;