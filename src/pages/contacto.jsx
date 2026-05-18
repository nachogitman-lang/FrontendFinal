import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function Contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setNombre("");
        setEmail("");
        setMensaje("");
        setEnviado(true);
    };

    return (
        <Container className="py-5" style={{ minHeight: "80vh" }}>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "#1f7a1f" }}>
                        <h2 className="text-white mb-4">Contacto</h2>
                        {enviado && (
                            <Alert variant="info" onClose={() => setEnviado(false)} dismissible>
                                Se envió con éxito.
                            </Alert>
                        )}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label className="text-white">Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-white">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMensaje">
                                <Form.Label className="text-white">Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Escribe tu mensaje"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="light" type="submit" className="w-100 fw-bold">
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
     
      