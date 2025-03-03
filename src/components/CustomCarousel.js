import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './carousel1.module.css';
import { Thumbs } from 'react-responsive-carousel';

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    
  };

  const images = [
    '/galle.jpg',
    '/ella.jpg',
    '/ella2.jpg',
    '/sigiriya.jpg',
  ];

  return (
    <div className={`carousel-container ${styles.carouselContainer}`}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={`carousel-slide ${styles.carouselSlide}`}>
            <Image src={src} alt={`Image ${index + 1}`} width={800} height={600} className="rounded-lg" />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
