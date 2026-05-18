import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Formulario() {
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch(`${API_BASE_URL}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Error al enviar el producto");
            }

            setSuccess("Producto enviado correctamente");
            setFormData({ nombre: "", descripcion: "", precio: "", imagen: "" });
        } catch (err) {
            setError(err.message || "Error de conexión con el backend");
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="p-4 rounded" style={{ backgroundColor: "#e8f5e9", border: "1px solid #a5d6a7" }}>
                        <h2 className="text-center text-success mb-4">Enviar producto</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre del producto"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="descripcion">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    placeholder="Descripción del producto"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="precio">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    step="0.01"
                                    name="precio"
                                    value={formData.precio}
                                    onChange={handleChange}
                                    placeholder="Precio"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="imagen">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imagen"
                                    value={formData.imagen}
                                    onChange={handleChange}
                                    placeholder="URL de la imagen"
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="success" className="w-100">
                                Enviar producto
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}