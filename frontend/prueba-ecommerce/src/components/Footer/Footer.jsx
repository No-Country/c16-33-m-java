import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand-name">
          <a href=""><h1><img src="./src/img/Logo1.png" alt="" className='imglogo'/></h1></a>
        </div>
        <div className="important-elements">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="social-media">
          {/* Puedes agregar iconos de redes sociales u otros elementos aquí */}
          <a href="https://facebook.com"><i class="bi bi-instagram"></i></a>
          <a href="https://twitter.com"><i class="bi bi-facebook"></i></a>
          <a href="https://instagram.com"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 E-Bike. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
