import React, { useState, useEffect } from "react";
import { Container, Table, Button, Card, Row, Col, Alert } from "react-bootstrap";

export default function Cart() {
    const [items, setItems] = useState([]);

    // Cargar los productos del carrito al entrar a la página
    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        setItems(carritoGuardado);
    }, []);

    // Función para borrar un producto del carrito
    const eliminarItem = (id) => {
        const nuevoCarrito = items.filter(item => item._id !== id);
        setItems(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    };

    // Calcular el total de la compra
    const calcularTotal = () => {
        return items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    // Función de pago corregida
    const gestionarPago = async () => {
        try {
            const response = await fetch("https://backendfinal-production-1785.up.railway.app/api/checkout/create-preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // 🛠️ ¡FIXED!: Cambiamos 'cart' por 'items' que es tu variable real del useState
                body: JSON.stringify({ items: items }), 
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("🔴 Error que devolvió el Backend:", errorData);
                throw new Error(errorData.message || "Error en la respuesta del servidor");
            }

            const data = await response.json();
            
            if (data.id) {
                // Te redirige directo a Mercado Pago
                window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`;
            }

        } catch (error) {
            console.error("❌ ERROR COMPLETO EN EL FRONTEND:", error);
            alert("Hubo un problema al conectar con Mercado Pago. Mirá la consola.");
        }
    };

    return (
        <Container className="py-5">
            <h2 className="text-success mb-4">Tu Carrito de Compras</h2>

            {items.length === 0 ? (
                <Alert variant="info">Tu carrito está vacío. ¡Ve a la sección de productos para llenarlo!</Alert>
            ) : (
                <Row>
                    {/* Tabla de Productos */}
                    <Col lg={8}>
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <img src={item.imagen} alt={item.nombre} style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }} />
                                            {item.nombre}
                                        </td>
                                        <td>${Number(item.precio).toFixed(2)}</td>
                                        <td>{item.cantidad}</td>
                                        <td>${(item.precio * item.cantidad).toFixed(2)}</td>
                                        <td>
                                            <Button variant="danger" size="sm" onClick={() => eliminarItem(item._id)}>
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    {/* Resumen del Pedido */}
                    <Col lg={4}>
                        <Card className="p-3 shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3">Resumen del Pedido</Card.Title>
                                <hr />
                                <div className="d-flex justify-content-between fs-5 fw-bold text-dark mb-4">
                                    <span>Total:</span>
                                    <span className="text-success">${calcularTotal().toFixed(2)}</span>
                                </div>
                                <Button variant="success" className="w-100 py-2 fw-bold" onClick={gestionarPago}>
                                    Proceder al Pago
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
}