
// REGISTRO
import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [bicicletasDropdown, setBicicletasDropdown] = useState(false);
  const [accesoriosDropdown, setAccesoriosDropdown] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const toggleBicicletasDropdown = () => {
    setBicicletasDropdown(!bicicletasDropdown);
  };

  const toggleAccesoriosDropdown = () => {
    setAccesoriosDropdown(!accesoriosDropdown);
  };

  const handleRegistro = async () => {
    // Validar que todos los campos estén completos
    if (!username || !email || !password || !confirmPassword || !name || !lastName || !cellPhone || !birthday) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      // Enviar datos al endpoint de registro
      const response = await fetch('http://localhost:8080/api/customer/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: '', // Puedes asignar un ID o dejarlo vacío para que se genere automáticamente en el backend
          name,
          lastName,
          cellPhone,
          email,
          birthday,
        }),
      });

      if (response.ok) {
        // Registro exitoso, puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones
        alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');
      } else {
        // Manejar errores del servidor
        alert('Hubo un problema durante el registro. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un problema durante el registro. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section>
      
      {/* Login */}
      <div className="login-contenedor">
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
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} className='style-input' />
                <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} className='style-input' />
                <input type="text" placeholder="Teléfono" value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} className='style-input' />
                <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className='style-input' />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className='style-input' />
                <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='style-input' />
              </form>
              <div>
                <button className='btn2' onClick={handleRegistro}>Crear cuenta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registro;
