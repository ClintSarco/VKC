import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current) => setCurrentSlide(current), // Update the current slide index
  };

  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/images/img1.jpg`,
      text: 'Harvard Business School',
    },
    {
      image: `${process.env.PUBLIC_URL}/images/img2.jpeg`,
      text: 'Business Meeting',
    },
    {
      image: `${process.env.PUBLIC_URL}/images/img3.jpeg`,
      text: 'Business Analysis',
    },
  ];

  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
          </Box>
        ))}
      </Slider>
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        {slides[currentSlide].text}
      </Typography>
    </Box>
  );
};

export default ImageSlider;
