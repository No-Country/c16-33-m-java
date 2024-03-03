// Destacados.jsx
import React from 'react';
import './Destacados.css';

const Destacados = ({ onAgregarAlCarrito, onAgregarAFavoritos }) => {
  const destacadosItems = [
    { id: 1, nombre: 'Destacado 1', descripcion: 'Descripción del Destacado 1', precio: 19.99 },
    { id: 2, nombre: 'Destacado 2', descripcion: 'Descripción del Destacado 2', precio: 25.99 },
    { id: 3, nombre: 'Destacado 3', descripcion: 'Descripción del Destacado 3', precio: 29.99 },
    { id: 4, nombre: 'Destacado 4', descripcion: 'Descripción del Destacado 4', precio: 39.99 },
  ];

  return (
    <div className="destacados-container">
      <div className='preparate'>
        <h2>Prepárate para la temporada</h2>
      </div>
      <div className="destacados-list">
        {destacadosItems.map((item) => (
          <div key={item.id} className="destacado-item">
            <div className='destacadosorder'>
              <h3>{item.nombre}</h3>
              <a href="" className='iconstyle'>
                <i className="bi bi-bookmark-plus"></i>
              </a>
            </div>
            <div><img src="./src/img/bike1.png" className='img-bike' alt="" /></div>
            <div className="descri-precio">
              <p>{item.descripcion}</p>
              <p>Precio: ${item.precio}</p>
              <div className='destacados-btn'>
                <button onClick={() => onAgregarAlCarrito(item)} className="agregar-btn">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destacados;

