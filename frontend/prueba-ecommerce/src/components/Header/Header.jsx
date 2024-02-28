import React, { useState } from 'react';
import './Header.css';

const App = () => {
  const [bicicletasDropdown, setBicicletasDropdown] = useState(false);
  const [accesoriosDropdown, setAccesoriosDropdown] = useState(false);

  const toggleBicicletasDropdown = () => {
    setBicicletasDropdown(!bicicletasDropdown);
    setAccesoriosDropdown(false);
  };

  const toggleAccesoriosDropdown = () => {
    setAccesoriosDropdown(!accesoriosDropdown);
    setBicicletasDropdown(false);
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

