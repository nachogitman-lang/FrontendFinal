import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Producto() {
    // 1. Estados de tu componente
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    
    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/productos`);
                
                if (!response.ok) {
                    throw new Error("No se pudieron cargar los productos");
                }
                
                const data = await response.json();
                setProductos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);

    
    const agregarAlCarrito = (producto) => {
      
        const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
        
        
        const existe = carritoActual.find(item => item._id === producto._id);
        
        let nuevoCarrito;
        if (existe) {
            
            nuevoCarrito = carritoActual.map(item => 
                item._id === producto._id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
        } else {
         
            nuevoCarrito = [...carritoActual, { ...producto, cantidad: 1 }];
        }
        
  
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        alert(`¡${producto.nombre} agregado al carrito!`);
    };


    if (cargando) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="success" />
                <p className="mt-2">Cargando productos de la dietética...</p>
            </Container>
        );
    }

   
    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger">Error: {error}</Alert>
            </Container>
        );
    }


    return (
        <Container className="py-5">
            <h2 className="text-center text-success mb-5 fw-bold">
                Nuestros Productos
            </h2>
            
            {productos.length === 0 ? (
                <p className="text-center text-muted">No hay productos disponibles en este momento.</p>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {productos.map((prod) => (
                        <Col key={prod._id}>
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img 
                                    variant="top" 
                                    src={prod.imagen} 
                                    alt={prod.nombre}
                                    style={{ height: "220px", objectFit: "cover" }} 
                                />
                                
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold text-dark">
                                        {prod.nombre}
                                    </Card.Title>
                                    
                                    <Card.Text className="text-muted flex-grow-1">
                                        {prod.descripcion}
                                    </Card.Text>
                                    
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fs-4 fw-bold text-success">
                                            ${Number(prod.precio).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                                        </span>
                                     
                                        <Button 
                                            variant="success" 
                                            className="px-3"
                                            onClick={() => agregarAlCarrito(prod)}
                                        >
                                            Comprar
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}