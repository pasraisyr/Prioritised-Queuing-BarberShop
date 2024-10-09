import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box, Container } from '@mui/material';
import { basicHaircut, haircutBeardTrim, deluxeGroom } from '../../assets/images';

// Array of grooming packages with name, image, and description
const groomingPackages = [
  {
    name: 'Basic Haircut',
    image: basicHaircut,
    description: 'A classic haircut that keeps it simple and stylish. Perfect for a clean and professional look.',
  },
  {
    name: 'Haircut + Beard Trim',
    image: haircutBeardTrim,
    description: 'Get your haircut and beard perfectly groomed in one go. Ideal for maintaining a sharp, well-kept appearance.',
  },
  {
    name: 'Deluxe Grooming Package',
    image: deluxeGroom,
    description: 'An all-in-one grooming experience that includes a haircut, beard trim, and luxury treatment for the ultimate look.',
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

const PackageAd = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 pictures at a time
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        Package List Available
      </Typography>
      <Slider {...settings}>
        {groomingPackages.map((pkg, index) => (
          <Box key={index} sx={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={pkg.image}
                alt={pkg.name}
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
              {pkg.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {pkg.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PackageAd;
