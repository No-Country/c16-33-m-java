// App.jsx
import React, { useState } from 'react';

import Tarjetas from './components/Tarjetas/Tarjetas.jsx';
import Header from './components/Header/Header.jsx';
import Destacados from './components/Destacados/Destacados.jsx';
import Footer from './components/Footer/Footer.jsx';
import Registro from './components/Registro/Registro.jsx';
import Portada from './components/Portada/Portada.jsx';
import Login from './components/Login/Login.jsx';
import InfoMarca from './components/Infomarca/Infomarca.jsx';
import Carrito from './components/Carrito/Carrito.jsx';
const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };

  return (

    <div>
      <Header carrito={carrito} />


      <Portada />
      <Destacados onAgregarAlCarrito={agregarAlCarrito} />
      <Tarjetas />
      <InfoMarca />
      <Carrito />



      <Footer />
    </div>

  );
};

export default App;

