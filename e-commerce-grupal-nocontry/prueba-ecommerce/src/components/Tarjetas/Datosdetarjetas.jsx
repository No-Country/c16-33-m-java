// TarjetaEcommerce.jsx
import React from 'react';


const TarjetaEcommerce = ({ nombre, tipo, precio, onAgregarAlCarrito }) => (
  <div className="tarjeta-ecommerce">
    <h3>{nombre}</h3>
    <div className='tipoyprecio'>
    <p>Tipo: {tipo}</p>
    <p>Precio: ${precio}</p>
   
    </div>
    <div className='agregart'>
    <button onClick={onAgregarAlCarrito}>Agregar al Carrito</button>
    </div>
  </div>
);

export default TarjetaEcommerce;
