// src/components/FrontEnd/MainPage.jsx

import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ImgSlider } from './signup/ImgSlider';
import Paper from '@mui/material/Paper';

const MainPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    if (isAuthenticated) {
      navigate("/booking-form"); // Navigate to booking form
    } else {
      navigate("/signin"); // Navigate to sign-in if not authenticated
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="80vh" bgcolor={'secondary.main'}>
      <Typography variant="h2" gutterBottom>
        Welcome to AR BarberShop
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your premium barbershop booking system
      </Typography>

      <Box width="80%" maxWidth="700px" mx="auto" sx={{ boxShadow: '0 8px 8px rgba(0, 0, 0, 20)' }}>
        <ImgSlider />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBooking}
        sx={{ mt: 6 }}
      >
        Book Your Slot Now!
      </Button>
    </Box>
  );
};

export default MainPage;
