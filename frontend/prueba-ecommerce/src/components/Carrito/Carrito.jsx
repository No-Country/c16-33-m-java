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


// import React, { useState, useEffect } from 'react';

// const Carrito = ({ customerId }) => {
//   const [carrito, setCarrito] = useState([]);

//   useEffect(() => {
//     // Función para obtener el contenido del carrito del servidor
//     const fetchCarrito = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/cart/${customerId}`);
//         const data = await response.json();
//         setCarrito(data); // Actualiza el estado del carrito con la respuesta del servidor
//       } catch (error) {
//         console.error('Error al obtener el carrito:', error);
//       }
//     };

//     // Llama a la función para obtener el carrito cuando el componente se monta
//     fetchCarrito();
//   }, [customerId]);

//   const addToCart = async (productId, quantity) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/cart/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `customerId=${customerId}&productId=${productId}&quantity=${quantity}`,
//       });

//       const data = await response.json();
//       // Actualizar el estado del carrito después de agregar un producto
//       setCarrito(data);
//     } catch (error) {
//       console.error('Error al agregar al carrito:', error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/cart/remove', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `itemId=${itemId}`,
//       });

//       const data = await response.json();
//       // Actualizar el estado del carrito después de quitar un producto
//       setCarrito(data);
//     } catch (error) {
//       console.error('Error al quitar del carrito:', error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/cart/clear', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `customerId=${customerId}`,
//       });

//       const data = await response.json();
//       // Actualizar el estado del carrito después de vaciarlo
//       setCarrito(data);
//     } catch (error) {
//       console.error('Error al vaciar el carrito:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Carrito del Cliente {customerId}</h2>
//       <ul>
//         {carrito.map((item) => (
//           <li key={item.id}>
//             {/* Mostrar detalles del producto en el carrito */}
//             Nombre: {item.product.name}, Cantidad: {item.quantity}, Precio: ${item.total}
//             <button onClick={() => removeFromCart(item.id)}>Quitar del Carrito</button>
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => clearCart()}>Vaciar Carrito</button>
//     </div>
//   );
// };

// export default Carrito;

