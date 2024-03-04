import React, { useState } from 'react';
import './Header.css';

<<<<<<< HEAD
const App = () => {
  const [bicicletasDropdown, setBicicletasDropdown] = useState(false);
  const [accesoriosDropdown, setAccesoriosDropdown] = useState(false);
=======
const Header = ({carrito}) => {
  const [bicicletasDropdown, setBicicletasDropdown] = useState(false);
  const [accesoriosDropdown, setAccesoriosDropdown] = useState(false);
  const [carritoDropdown, setCarritoDropdown] = useState(false);
 
>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3

  const toggleBicicletasDropdown = () => {
    setBicicletasDropdown(!bicicletasDropdown);
    setAccesoriosDropdown(false);
<<<<<<< HEAD
=======
    setCarritoDropdown(false);
>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3
  };

  const toggleAccesoriosDropdown = () => {
    setAccesoriosDropdown(!accesoriosDropdown);
    setBicicletasDropdown(false);
<<<<<<< HEAD
  };

  return (
    <body>
      <section>
        {/* HEADER */}
        <header>
          <section className="sec1">
            <div className="logo">
              <h1><img src="./src/img/Logo1.png" alt="E-bike" className='ebike' /></h1>
            </div>
            <div className="navigate">
              <a href="#" className="margin" onClick={toggleBicicletasDropdown}>
                Bicicletas <i className="bi bi-caret-down"></i>
              </a>
              {bicicletasDropdown && (
                <div className="dropdown-content">
                  <a href="#">Bicicleta 1</a>
                  <a href="#">Bicicleta 2</a>
                </div>
              )}
              <a href="#" className="margin" onClick={toggleAccesoriosDropdown}>
                Accesorios <i className="bi bi-caret-down"></i>
              </a>
              {accesoriosDropdown && (
                <div className="dropdown-content">
                  <a href="#">Accesorio 1</a>
                  <a href="#">Accesorio 2</a>
                </div>
              )}
              <div className="margenbtn">
                <form action="">
                  <input type="search" className="form1" name="" id="" />
                  <a href="#" className="lupa">
                    <i className="bi bi-search"></i>
                  </a>
                </form>
              </div>
            </div>
            {/* Login */}
            <div className="divlog">
              <a href="" className='inises'>Iniciar Sesión </a>
            </div>
            <div className="icons1">
              <a href="" className='iconstyle'>
                <i className="bi bi-heart"></i>
              </a>
              <a href="" className='iconstyle'>
                <i className="bi bi-person"></i>
              </a>
              <a href="" className='iconstyle'>
                <i className="bi bi-cart3"></i>
              </a>
            </div>
          </section>
          <section className="sec2"></section>
        </header>
        {/* COMIENZO MAIN */}
      </section>
    </body>
  );
};

export default App;
=======
    setCarritoDropdown(false);
  };

  const toggleCarritoDropdown = () => {
    setCarritoDropdown(!carritoDropdown);
    setBicicletasDropdown(false);
    setAccesoriosDropdown(false);
  };

  
  

  return (
    <header>
      <section className="sec1">
        <div className="logo">
          <h1><img src="./src/img/Logo1.png" alt="E-bike" className='ebike' /></h1>
        </div>
        <div className="navigate">
          <a href="#" className="margin" onClick={toggleBicicletasDropdown}>
            Bicicletas <i className="bi bi-caret-down"></i>
          </a>
          {bicicletasDropdown && (
            <div className="dropdown-content">
              <a href="#">Bicicleta 1</a>
              <a href="#">Bicicleta 2</a>
            </div>
          )}

          <a href="#" className="margin" onClick={toggleAccesoriosDropdown}>
            Accesorios <i className="bi bi-caret-down"></i>
          </a>
          {accesoriosDropdown && (
            <div className="dropdown-content">
              <a href="#">Accesorio 1</a>
              <a href="#">Accesorio 2</a>
            </div>
          )}
          <div className="margenbtn">
            <form action="">
              <input type="search" className="form1" name="" id="" />
              <a href="#" className="lupa">
                <i className="bi bi-search"></i>
              </a>
            </form>
          </div>
        </div>
        {/* Login */}
        <div className="divlog">
          <a href="#" className='inises'>Iniciar Sesión </a>
        </div>
        <div className="icons1">
          <a href="" className='iconstyle'>
            <i className="bi bi-heart"></i>
          </a>
          <a href="" className='iconstyle'>
            <i className="bi bi-person"></i>
          </a>
          <a href="#" className="margin" onClick={toggleCarritoDropdown}>
            <i className="bi bi-cart"></i> Carrito
          </a>
          {carritoDropdown && (
            <div className="dropdown-content1">
              {/* Mostrar elementos del carrito */}
              {carrito.map((item) => (
                <div key={item.id}>
                  <p>{item.nombre}</p>
                  <p>Precio: ${item.precio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="sec2"></section>
    </header>
  );
};

export default Header;

>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3

