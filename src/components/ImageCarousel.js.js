// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './carousel.module.css'; // Import the CSS module

const CarouselComponent = ({ selectedPath }) => {
  // Function to get image data based on selected path
  const getImageData = (pathId) => {
    switch (pathId) {
      case 'path1':
        return [
          { src: '/colombo.jpg', caption: 'Beautiful landscape' },
          { src: '/colombo2.jpg', caption: 'Colorful sunset' },
          { src: '/colombo3.jpg', caption: 'Snow-capped mountains' },
          { src: '/colombo4.jpg', caption: 'Snow-capped mountains' }
        ];
      case 'trinco':
        return [
          { src: '/trinco.jpg', caption: 'koneshwaran kovil' },
          { src: '/trinco2.jpg', caption: 'Tropical beach' },
          { src: '/trinco3.jpg', caption: 'Wishes of Nature' }
        ];
      case 'kandy':
        return [
          { src: '/kandy.jpg', caption: 'Sri dalada maligawa' },
          { src: '/kandy3.jpg', caption: 'dalada maligawa perahara' },
          { src: '/kandy2.jpg', caption: 'Forest trail' }
        ];
      case 'galle':
        return [
          { src: '/galle.jpg', caption: 'City skyline' },
          { src: '/galle4.jpg', caption: 'Tropical beach' },
          { src: '/galle2.jpg', caption: 'Forest trail' }
        ];
      case 'badulla':
        return [
          { src: '/ella.jpg', caption: 'Train view in nine arch' },
          { src: '/ella2.jpg', caption: 'nine arch' },
          { src: '/ella3.jpg', caption: 'Station View' },
          { src: '/ella4.jpg', caption: 'waterfall view' },
        ];
      default:
        return [
          { src: '/colombo.jpg', caption: 'Beautiful landscape' },
          { src: '/colombo2.jpg', caption: 'Colorful sunset' },
          { src: '/colombo3.jpg', caption: 'Snow-capped mountains' },
        ];
    }
  };

  // Get image data based on selected path
  const imageData = getImageData(selectedPath);
  const shouldShowImages = imageData.length > 0;

  return (
    <div className="carousel-container w-full h-full flex justify-center items-center">
      {/* Render carousel if there are images, otherwise show Colombo images */}
      {shouldShowImages ? (
        <Carousel
         showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showThumbs={false}
          autoFocus={true}
          className={styles.carousel}
          stopOnHover={true}
          showStatus={false}
        
        >
          {/* Map through image data to render each image slide */}
          {imageData.map((item, index) => (
            <div key={index} className="carousel-item mr-4">
              {/* Display image */}
              <img
                src={item.src}
                alt={`Image ${index + 1}`}
                style={{ height: '450px', objectFit: 'cover' }}
                className="carousel-image rounded-3xl"
              />
              {/* Display image caption */}
              <p className="legend bg-none uppercase">{item.caption}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        // Default to displaying Colombo images if no specific path matches or no images are found
        <div className="default-image-container">
          <img
            src="/colombo.jpg"
            alt="Default Colombo Image"
            style={{ height: '450px', objectFit: 'cover' }}
            className="default-image rounded-3xl"
          />
          <p className="default-caption">Beautiful landscape</p>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
