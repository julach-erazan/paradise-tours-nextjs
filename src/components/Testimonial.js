import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ testimonials }) => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Enable looping
    slidesToShow: 1, // Show one testimonial at a time
    slidesToScroll: 1, // Scroll one testimonial at a time
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 3000, // Autoplay speed in milliseconds (optional)
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col justify-center items-center p-8 md:p-12 bg-gray-100 rounded-lg shadow-md">
            <p className="text-xl font-medium text-gray-800 mb-4">
              {testimonial.quote}
            </p>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={testimonial.avatar} // Use avatar prop
                alt="Avatar"
              />
              <div className="text-sm font-medium text-gray-800">
                {testimonial.name} <br />
                <span className="text-gray-500">{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
  }
  
  export default Testimonial;
  