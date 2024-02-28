// App.jsx
import React, { useState } from 'react';
import Tarjetas from './components/Tarjetas/Tarjetas.jsx';
import Header from './components/Header/Header.jsx';
import Destacados from './components/Destacados/Destacados.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Login/Login.jsx';
import Carrussel from './components/Carrussel/Carrussel.jsx';
const App = () => {
  

  return (

    <div>
      <Header />
      <Carrussel />
      <Destacados />
      <Tarjetas />
      <Footer />
      
      <Login />  
      
    </div>
      
  );
};

export default App;
