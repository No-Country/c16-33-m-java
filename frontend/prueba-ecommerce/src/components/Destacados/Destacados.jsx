import React, { useState, useEffect } from 'react';
import './Destacados.css';

function Destacados() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://test-1-env.eba-fpifxch7.us-east-1.elasticbeanstalk.com/api/product/findAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Hubo un problema con la operación fetch:', error);
      });
  }, []);

  const onAgregarAlCarrito = (product) => {
    // Lógica para agregar el producto al carrito
    console.log('Agregado al carrito:', product);
  };

  return (
    <div className="destacados-container">
      <div className='preparate'>
        <h2>Prepárate para la temporada</h2>
      </div>
      <div className="destacados-list">
        {products.map((product) => (
          <div key={product.id} className="destacado-item">
            <div className='destacadosorder'>
              <h3>{product.name}</h3>
              <a href="" className='iconstyle'>
                <i className="bi bi-bookmark-plus"></i>
              </a>
            </div>
            {/* <div><img src="./src/img/bike1.png" className='img-bike' alt="" /></div> */}
            <div className="descri-precio">
              {/* <p>{product.descripcion}</p> */}
              <p>Precio: ${product.price}</p>
              <div className='destacados-btn'>
                {/* <button onClick={() => onAgregarAlCarrito(product)} className="agregar-btn">
                  Agregar al Carrito
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados;
