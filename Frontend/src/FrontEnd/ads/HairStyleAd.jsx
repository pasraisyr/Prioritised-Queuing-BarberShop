
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box, Container } from '@mui/material';
import { fade, manBun, pompadour, undercut, buzzCut } from "../../assets/images";

//JAP
// Array of hair styles with name, image, and description
const hairStyles = [
  {
    name: "Classic Pompadour",
    image: pompadour,
    description: "A timeless style with volume and slicked-back elegance, perfect for formal occasions."
  },
  {
    name: "Buzz Cut",
    image: buzzCut,
    description: "A low-maintenance, sharp cut that emphasizes facial features. Ideal for an easy-going, clean look."
  },
  {
    name: "Undercut",
    image: undercut,
    description: "A trendy, modern style with short sides and longer top, offering a bold contrast."
  },
  {
    name: "Fade",
    image: fade,
    description: "Smoothly tapered from the sides to the skin, this haircut is great for a fresh, modern vibe."
  },
  {
    name: "Man Bun",
    image: manBun,
    description: "A longer style where hair is pulled into a bun. It offers a relaxed yet stylish appearance."
  },
];

// Custom Left Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '2rem' }}
      onClick={onClick}
    >
      ←
    </div>
  );
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '2rem' }}
      onClick={onClick}
    >
      →
    </div>
  );
};

const HairStyleAd = () => {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 pictures at a time
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Include custom right arrow
    prevArrow: <PrevArrow />, // Include custom left arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 picture on smaller screens
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container maxWidth="md" sx={{ padding: '2rem 0', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom sx={{ marginBottom: '3cm' }}>
        Hair Style List Available
      </Typography>
      <Slider {...settings}>
        {hairStyles.map((style, index) => (
          <Box key={index} sx={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={style.image}
                alt={style.name}
                style={{
                  width: '300px',  // Set a fixed width
                  height: '300px', // Set a fixed height to make all images uniform
                  objectFit: 'cover', // Ensure the image covers the set size without distortion
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}
              />
            </Box>
            <Typography variant="h5" gutterBottom>
              {style.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {style.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default HairStyleAd;

