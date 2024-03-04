import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand-name">
          <a href=""><img src="./src/img/logo-footer.png"  alt="" className='imglogo'/></a>
        </div>
        <div className="important-elements">
          <ul>
            <li ><a  className='li-head' href="/productos">Bicicletas</a></li>
            <li><a className='li-a' href="/montaña">Montaña</a></li>
            <li><a className='li-a' href="/carretera">Carretera</a></li>
            <li><a className='li-a' href="/ciudad">Ciudad</a></li>
          </ul>
          <ul>
            <li><a className='li-head' href="/">Accesorios</a></li>
            <li><a className='li-a' href="/productos">Cascos</a></li>
            <li><a className='li-a' href="/contacto">Guantes</a></li>
            <li><a className='li-a' href="/productos">Pedales</a></li>
            <li><a className='li-a' href="/contacto">Rodilleras</a></li>
          </ul>
          <ul>
            <li><a className='li-head' href="/">Quienes somos</a></li>
            <li><a className='li-a' href="/productos">Nuestra historia</a></li>
            <li><a className='li-a' href="/contacto">Contacto</a></li>
          </ul>
        </div>
      
      </div>
      <div className="social-media">
          {/* Puedes agregar iconos de redes sociales u otros elementos aquí */}
          <a href="https://facebook.com"><i class="bi bi-instagram"></i></a>
          <a href="https://twitter.com"><i class="bi bi-facebook"></i></a>
          <a href="https://instagram.com"><i class="bi bi-twitter-x"></i></a>
        </div>
      <div className="copyright">
        <p>&copy; 2024 E-Bike. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;