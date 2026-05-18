import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Dietetica verde vida </h1>

      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="mb-4 shadow-sm bg-success text-white">
            <Card.Body>
              <Card.Title>Bienvenidos a La Dietetica verde vida</Card.Title>
              <Card.Text>
                Aquí encontrarás productos artesanales, alimentos orgánicos y artículos ecológicos seleccionados con cuidado para promover un estilo de vida saludable y sostenible. Nuestra misión es ofrecer productos de calidad que respeten el medio ambiente y apoyen a pequeños productores locales.
              </Card.Text>

              <Card.Text>
                Navega por nuestras secciones: alimentos frescos y secos, cosmética natural, productos de limpieza ecológicos, textiles y accesorios hechos a mano. Cada producto incluye información detallada sobre su origen, proceso de elaboración, y recomendaciones de uso. Además, publicamos recetas, guías de sostenibilidad y consejos para reducir el desperdicio en el hogar.
              </Card.Text>

              <Card.Text>
                Para quienes buscan opciones especiales, contamos con una selección de productos sin gluten, veganos, y opciones aptas para celíacos. Si tienes una petición específica, nuestro equipo está disponible para ayudarte a encontrar alternativas y sugerencias personalizadas.
              </Card.Text>

              <ListGroup className="mb-3">
                <ListGroup.Item>
                  <strong>Categorías destacadas:</strong>
                  <Badge bg="success" className="ms-2">Orgánicos</Badge>
                  <Badge bg="info" className="ms-2">Artesanal</Badge>
                  <Badge bg="warning" text="dark" className="ms-2">Ecológico</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Servicios:</strong> Envíos nacionales, suscripción mensual de productos seleccionados, y empaques reciclables.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Compromiso:</strong> Donamos parte de nuestras ganancias a proyectos de reforestación y educación ambiental.
                </ListGroup.Item>
              </ListGroup>

              <div className="d-flex gap-2">
                <Button variant="light">Explorar Productos</Button>
                <Button variant="outline-light">Ver Categorías</Button>
                <Button variant="outline-light">Contacto</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4 bg-success text-white">
            <Card.Header>Detalles y recomendaciones</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Consejos de uso</h6>
                  <ul>
                    <li>Lee las etiquetas cuidadosamente para conocer ingredientes y fechas de caducidad.</li>
                    <li>Conserva los productos orgánicos en lugar fresco y seco para prolongar su vida útil.</li>
                    <li>Reutiliza los envases cuando sea posible para reducir residuos.</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>Sobre nuestros productores</h6>
                  <p>
                    Trabajamos con productores locales que aplican prácticas sostenibles y artesanales. Cada compra ayuda a sostener economías pequeñas y a promover técnicas de cultivo y producción respetuosas con el entorno.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4 bg-success text-white">
            <Card.Body>
              <Card.Title>Preguntas frecuentes</Card.Title>
              <Card.Text>
                ¿Tienes dudas? Consulta nuestra sección de FAQ o escribe a soporte@laesquinaverde.example. Responderemos en menos de 48 horas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}