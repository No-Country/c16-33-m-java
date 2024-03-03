import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [bicicletasDropdown, setBicicletasDropdown] = useState(false);
  const toggleBicicletasDropdown = () => {
    setBicicletasDropdown(!bicicletasDropdown);
  };

  const [accesoriosDropdown, setAccesoriosDropdown] = useState(false);
  const toggleAccesoriosDropdown = () => {
    setAccesoriosDropdown(!accesoriosDropdown);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para autenticar al usuario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <section>
      {/* Header */}
      < header >
        <section className="sec1">
          <div className="logo">
            <h1>
              <img src="./src/img/Logo1.png" alt="" className='imglogo' />
            </h1>
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


      {/* Login */}

      <div className="login-contenedor" >
        <div className='ordencaja1'>
          {/* caja imagen */}
          <div className='divciclista'>
            <img src="./src/img/ciclista.png" className="ciclista" alt="" />
          </div>
          {/* caja login */}
          <div>
            <div className='logoybtn'>
              <h2><a href="#"><img src="./src/img/Logo1.png" alt="" className='imglogo' /></a></h2>
              <button>Ir al Login</button>
            </div>

            <div className='divtxt'>
              <h2>Crea tu cuenta ahora!</h2>
              <p>Únete y descubre un mundo de compras personalizadas. <br />
                Regístrate ahora!</p>
            </div>

            <div>
              <form action="" className='orderform'>
                <input type="text" className='style-input' />
                <input type="email" name="" id="" className='style-input' />
                <input type="password" name="" id="" className='style-input' />
                <input type="password" name="" id="" className='style-input' />
              </form>
              <div>
                <button className='btn2'>Crear cuenta</button>
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
    

      );
};

export default Login;
