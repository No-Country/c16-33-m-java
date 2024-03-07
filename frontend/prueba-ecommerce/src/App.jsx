// App.jsx
import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import Tarjetas from './components/Tarjetas/Tarjetas.jsx';
import Header from './components/Header/Header.jsx';
import Destacados from './components/Destacados/Destacados.jsx';
import Footer from './components/Footer/Footer.jsx';
import Registro from './components/Registro/Registro.jsx';
import Portada from './components/Portada/Portada.jsx';
import Login from './components/Login/Login.jsx';
import InfoMarca from './components/Infomarca/Infomarca.jsx';
import Carrito from './components/Carrito/Carrito.jsx';
import Catalogo from './components/Catalogo/Catalogo.jsx';
const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  return (

    <div>
      {/* <SearchBar /> */}
      <Header  />
      <Portada />
      <Destacados  />
      <Tarjetas />
      <InfoMarca />  
      
      <Footer />
       {/* <Catalogo /> */}

    </div>

  );
};

export default App;

