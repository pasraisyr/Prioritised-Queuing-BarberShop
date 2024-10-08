import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const hairStyles = [
  {
    name: "Classic Pompadour",
    image: "/images/pompadour.jpg",
    description: "A timeless style with volume and slicked-back elegance, perfect for formal occasions."
  },
  {
    name: "Buzz Cut",
    image: "/images/buzzcut.jpg",
    description: "A low-maintenance, sharp cut that emphasizes facial features. Ideal for an easy-going, clean look."
  },
  {
    name: "Undercut",
    image: "/images/undercut.jpg",
    description: "A trendy, modern style with short sides and longer top, offering a bold contrast."
  },
  {
    name: "Fade",
    image: "/images/fade.jpg",
    description: "Smoothly tapered from the sides to the skin, this haircut is great for a fresh, modern vibe."
  },
  {
    name: "Man Bun",
    image: "/images/manbun.jpg",
    description: "A longer style where hair is pulled into a bun. It offers a relaxed yet stylish appearance."
  },
];

const HairStyleAd = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '2rem 0' }}>
      {hairStyles.map((style, index) => (
        <Box key={index} sx={{ marginBottom: '3rem' }}>
          <img
            src={style.image}
            alt={style.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '1rem',
            }}
          />
          <Typography variant="h4" gutterBottom>
            {style.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {style.description}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default HairStyleAd;
