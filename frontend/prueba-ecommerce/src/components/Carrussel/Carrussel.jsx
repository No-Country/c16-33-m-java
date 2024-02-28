import React, { useEffect, useRef, useState } from 'react';
import { data } from "./data.jsx";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import './Carrousel.css';

// Importar imágenes directamente desde data
import Crsl_001 from './assets/Crsl_001.jpg';
import Crsl_002 from './assets/Crsl_002.jpg';
import Crsl_003 from './assets/Crsl_003.jpg';
import Crsl_004 from './assets/Crsl_004.jpg';
import Crsl_005 from './assets/Crsl_005.jpg';

const Carrousel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth", 
        block: "center"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) => {
      const isFirstSlide = currentIndex === 0;
      const lastIndex = data.length - 1;

      if (direction === 'prev') {
        return isFirstSlide ? lastIndex : curr - 1;
      } else {
        return curr < lastIndex ? curr + 1 : 0;
      }
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className='carrouselContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='sliderContainer'>
        <div className='leftArrow' onClick={() => scrollToImage('prev')}><IoIosArrowDropleftCircle /></div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}><IoIosArrowDroprightCircle /></div>
        <div className="imageContainer">
          <ul ref={listRef}>
            {data.map((item) => (
              <li className='liCr' key={item.id}>
                {/* Utilizar las variables importadas directamente desde data */}
                <img src={getImgSrc(item.id)} alt={`Slide ${item.id}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="dotsContainer">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}>
              <FaCircle />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Función para obtener la ruta de la imagen según el ID
const getImgSrc = (id) => {
  switch (id) {
    case 1:
      return Crsl_001;
    case 2:
      return Crsl_002;
    case 3:
      return Crsl_003;
    case 4:
      return Crsl_004;
    case 5:
      return Crsl_005;
    default:
      return '';
  }
};

export default Carrousel;
