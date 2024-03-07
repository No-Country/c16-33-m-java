//LOGIN
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  

  return (
    
    <section>

      {/* Login */}

      <div className="login-contenedor" >
        <div className='ordencaja1'>
          {/* caja imagen */}
          <div className='divciclista'>
            <img src="./src/img/imgregistro.png" className="ciclista" alt="" />
          </div>


          {/* caja login */}
          <div className="order-container2">
            <div >
              <div className='logoybtn1'>
                <h2><a href="#"><img src="./src/img/Logo1.png" alt="" className="tamaño" /></a></h2>
                <button className='create-account'>Crear cuenta</button>
              </div>

              <div className='border-login'>
                <div className='divtxt'>
                  <h2>Bienvenido de vuelta!</h2>
                  <p> Tu experiencia de compra comienza aquí</p>
                </div>

                <div className='order-form'>
                  <form action="" className='orderform'>
                    <input type="email" name="" id="" className='style-input' />
                    <input type="password" name="" id="" className='style-input' />
                  </form>

                  <a href="#" className="forgot-password">Olvidé mi contraseña</a>

                  <div>
                    <button className='btn2i'>Login</button>
                    <p className='line'></p>
                    <a href="#" className='login-fb'>Login con Facebook</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Login;

