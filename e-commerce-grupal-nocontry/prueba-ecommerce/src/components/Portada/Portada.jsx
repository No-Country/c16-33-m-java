import React from 'react';
import './Portada.css';
const Portada = () => {
    return (
        <div>
            <div className='box-space'>
                <div className='org-div1'>
                    <div className='box1-order'>
                        <h2>SIENTE LA <br />
                        VELOCIDAD</h2>
                        <a href="" className='btn-ver'>Ver el catálogo</a>
                    </div>

                    <div>
                        <img src="./src/img/bike1.png" className="imgbike1" alt="" />
                    </div>
                </div>
            </div>

            {/* <div className="background-img">
                <div className='org-container'>
                    <div className='brand'>
                        <h2>E-bike</h2>
                    </div>
                    <div>
                        <h2 className='title2'>Encuentra tu estilo</h2>
                        <a href="" className='btn-catalogo'>Ver el catálogo</a>
                    </div>
                </div>
            </div> */}



        </div>
    );
};

export default Portada;
