import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { SlArrowRightCircle ,SlArrowLeftCircle} from "react-icons/sl"; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './CarouselGallery.module.css'; 

const CarouselGallery = ({ images }) => {
  const customArrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    outline: 'none',
  };

  return (
    <Carousel
      className="bg-white"
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...customArrowStyles, left: 0 }}>
            <SlArrowLeftCircle size={30} color="#000" /> 
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...customArrowStyles, right: 0 }}>
            <SlArrowRightCircle size={30} color="#000" /> 
          </button>
        )
      }
    >
      {images.map((image, index) => (
        <div className='justify-center bg-white px-10 ' key={index}>
          <div className='text-black flex justify-center w-1/12'>
            <img style={{ width: '75px', height: '75px' }} src={image.url} className={styles.images} alt={image.caption} />
          </div>
          <div className='flex justify-center pb-5'>
            <h2 className={styles.caption}>{image.caption}</h2>
          </div>
          <div className='text-black flex justify-center w-1/12 pb-2'>
            <img style={{ width: '75px', height: '75px' }} src={image.url} className={styles.images} alt={image.caption} />
          </div>
          <div className='justify-center pb-10'>
            <h5 className={styles.caption2}>{image.caption2}</h5>
            <h5 className={styles.caption2}>{image.caption3}</h5>
          </div>
          
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselGallery;
