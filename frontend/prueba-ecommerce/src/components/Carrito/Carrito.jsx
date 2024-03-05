import React, { useState, useEffect } from 'react';
import './Carrito.css';
import Swal from 'sweetalert2';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [resumenPago, setResumenPago] = useState(0);

  useEffect(() => {
    fetch('http://test-1-env.eba-fpifxch7.us-east-1.elasticbeanstalk.com/api/product/findAll', {
      method: 'GET',
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

  const agregarAlCarrito = async (producto) => {
    setCarrito([...carrito, producto]);
    setResumenPago(resumenPago + producto.price);

    // Simulación de una operación asincrónica, por ejemplo, una llamada a una API
    try {
      const response = await fetch('http://example.com/api/operation', {
        method: 'POST',
        body: JSON.stringify({ productId: producto.id, quantity: 1 }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Aquí puedes manejar la respuesta de la operación asincrónica si es necesario
      const result = await response.json();
      console.log('Operación asincrónica completada:', result);
    } catch (error) {
      console.error('Error en la operación asincrónica:', error);
    }
  };

  const quitarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter(item => item.id !== producto.id);
    setCarrito(nuevoCarrito);
    setResumenPago(resumenPago - producto.price);

    // Oculta el elemento visualmente
    const carritoItem = document.getElementById(`carrito-item-${producto.id}`);
    if (carritoItem) {
      carritoItem.classList.add('ocultar');
    }
  };

  const handleCantidadChange = async (productoId, cantidad) => {
    // Aquí puedes manejar la lógica de cambio de cantidad si es necesario
    console.log(`Cantidad cambiada para el producto ${productoId}: ${cantidad}`);
  };

  const handlePagar = () => {
    Swal.fire({
      title: 'Confirmación de compra',
      text: '¿Estás seguro que quieres continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, claro!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Tu compra ha sido exitosa!',
          text: 'Continúa navegando por E-bike!',
          icon: 'success'
        });
        // Aquí podrías realizar la lógica de confirmación de pago y limpiar el carrito si es necesario
      }
    });
  };

  return (
    <section className="section-carrito">
      <div className="carrito-header">
        <h2>Tu Carro</h2>
      </div>

      <ul className="carrito-list">
        {productos.map(producto => (
          <li key={producto.id} id={`carrito-item-${producto.id}`} className="carrito-item">
            <img
              src={producto.image_url}
              alt={producto.name}
            />

            <div className="carrito-item-details">
              <h3>{producto.name}</h3>

              <dl>
                <div>
                  <dt>Precio:</dt>
                  <dd>${producto.price.toFixed(2)}</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-center justify-end gap-2">
              <form>
                <label htmlFor={`Qty${producto.id}`} className="sr-only">
                  Cantidad
                </label>
                <input
                  type="number"
                  min="1"
                  value="1"
                  id={`Qty${producto.id}`}
                  className="carrito-quantity-input"
                  onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                  placeholder="Cantidad"
                />
              </form>

              <button
                className="carrito-remove-button"
                onClick={() => quitarDelCarrito(producto)}
              >
                <span className="sr-only">Quitar del carrito</span>
                {/* Agrega el contenido del icono de quitar del carrito */}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="carrito-subtotal">
        <span>Subtotal: ${resumenPago.toFixed(2)}</span>
      </div>

      <div className="flex justify-end">
        <button onClick={handlePagar} className="carrito-checkout-button">
          Pagar
        </button>
      </div>
    </section>
  );
};

export default Carrito;


