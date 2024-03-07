import React, { useState } from 'react';
import './Header.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Registro, Login, Catalogo, SearchBar, Infomarca, Carrito } from './index';


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();


    console.log(`Realizar búsqueda con el término: ${searchQuery}`);
  };

  return (
    <BrowserRouter>


      <header>
        {/* LOGO */}

        <section className="sec1">
          <div className="logo">
            <h1><img src="./src/img/Logo1.png" alt="E-bike" className='ebike' /></h1>
          </div>
          {/* NAV */}
          <div className="navigate">
            <NavLink to="catalogo" className="margin">
              Bicicletas 
            </NavLink>
            <NavLink to="catalogo" className="margin">
              Accesorios 
            </NavLink>
            
            {/* SEARCHBAR */}
            <div className="margenbtn">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="search"
                  className="form1"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <NavLink className="lupa">
                  <i className="bi bi-search"></i>
                </NavLink>
              </form>
            </div>
          </div>

          {/* Login */}
          <div className="divlogi">
            <NavLink to="login" className='inisesi'>Iniciar Sesión</NavLink>
            <NavLink to="registro" className='inisesi'>Regístrate</NavLink>
          </div>
          {/* FAVORITOS - USER - CART */}
          <div className="icons1">
            <NavLink className='iconstyle'>
              
            </NavLink>
            
            <NavLink to="carrito" className="margin">
              <i className="bi bi-cart"></i> Carrito
            </NavLink>
          </div>
        </section>
        <section className="sec2"></section>
      </header>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />}/>
        <Route path="catalogo" element={<Catalogo />}/>
        <Route path="carrito" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Header;


