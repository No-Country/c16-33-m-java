import React, { useState, useEffect  } from 'react';
import './Tarjetas.css';
import TarjetaEcommerce from './Datosdetarjetas.jsx';

const Tarjetas = () => {
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/product/findAll', {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProductos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const agregarAlCarrito = (productId) => {
        // Add product to cart on the backend
        fetch('http://localhost:8080/api/cart/?customerId=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: productId,
                quantity: 1,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Producto agregado al carrito:', data);
                // Optionally, you can update the cart state here if needed
            })
            .catch(error => console.error('Error adding product to cart:', error));
    };

    const quitarDelCarrito = (nombre) => {
        const nuevoCarrito = carrito.filter((item) => item !== nombre);
        setCarrito(nuevoCarrito);
    };

    return (
        <div className="org">
            <div className="carrito">
                <h2 className="exclusivo">E-xclusivos</h2>
                <ul>
                    {carrito.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => quitarDelCarrito(item)}>Quitar del Carrito</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="contenedor-ecommerce">
                {productos.map(producto => (
                    <TarjetaEcommerce
                        key={producto.id}
                        nombre={producto.name}
                        tipo={producto.category.name}
                        precio={producto.price}
                        onAgregarAlCarrito={() => agregarAlCarrito(producto.id)}
                        onQuitarDelCarrito={() => quitarDelCarrito(producto.id)}
                    />
                ))}
            </div>


        </div>
    );
};




export default Tarjetas;
