// components/Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={image.alt} className="w-full h-auto" />
      ))}
    </div>
  );
};

export default Gallery;
