import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box, Container, Button } from '@mui/material';

// Custom Left Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '2rem', zIndex: 1 }}
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
      style={{ ...style, display: 'block', color: 'black', fontSize: '2rem', zIndex: 1 }}
      onClick={onClick}
    >
      →
    </div>
  );
};

const PackageStylesAd = () => {
  const [packageStyles, setPackageStyles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/packages')
      .then(response => response.json())
      .then(data => {
        setPackageStyles(data);
      })
      .catch(error => {
        console.error('There was an error fetching the package styles!', error);
      });
  }, []);

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
        Package Styles Available
      </Typography>
      <Slider {...settings}>
        {packageStyles.map((style, index) => (
          <Box key={index} sx={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={style.imageUrl} // Assuming your API returns imageUrl
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
      <Button 
      variant="contained" 
      color="primary"
      sx={{ position: 'absolute', right: '10px', bottom: '10px' }}
      onClick={() => window.location.href = '/dashboard-staff'}
      >
        Back
      </Button>
    </Container>
  );
};

export default PackageStylesAd;
