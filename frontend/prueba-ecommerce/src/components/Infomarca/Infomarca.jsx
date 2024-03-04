import React from 'react';
import './Infomarca.css';

const InfoMarca = () => {
    return (
        <section className='InfoMarca-container'>
            {/* Sección superior */}
            <div className='marca-arriba'>
                <div className='info-nos'>
                    <h2 className='title-nos'>
                        UNA NUEVA <span className='green-text'>HISTORIA</span> EN EL <span className='green-text'>CICLISMO</span> LATINOAMERICANO
                    </h2>
                    <p className='para-nos'>
                        Si hay algo que une a las personas que trabajan aquí,
                        es que creemos que las bicicletas pueden cambiar vidas,
                        es por eso que buscamos gente apasionada que comparta nuestros principios.
                    </p>
                </div>
                <div className='fuerza'>
                    <h2 className='title-fuerza'>
                        FUERZA
                    </h2>
                </div>
            </div>

            {/* Slogan */}
            <div className='slogan'>
                <h2><span className='green-text'>E</span>-BIKE = <span className='green-text'>VELOCIDAD</span></h2>
            </div>
        </section>
    );
};

export default InfoMarca;