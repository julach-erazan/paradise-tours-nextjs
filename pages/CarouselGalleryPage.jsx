// pages/CarouselGalleryPage.js
import React from 'react';
import CarouselGallery from '../src/components/CarouselGallery';

const CarouselGalleryPage = () => {
  // Assuming you have some images data
  const images = [
    { url: 'colombo.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { url: 'colombo.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { url: 'colombo.jpg', alt: 'Image 3', caption: 'Caption 3' },
    // Add more images as needed
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Carousel Gallery</h1>
      <CarouselGallery images={images} />
    </div>
  );
};

export default CarouselGalleryPage;
