import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import AuthService from '../../Auth/AuthService';
import dayjs from 'dayjs';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state;

  const handlePayment = async () => {
    try {
      console.log("Attempting to store booking in database...");
      const formattedDate = dayjs(bookingDetails.formattedDate).format('YYYY-MM-DD');
      const success = await AuthService.bookings(
        bookingDetails.style,
        bookingDetails.packageType,
        bookingDetails.totalPrice,
        formattedDate,
        bookingDetails.time,
        bookingDetails.status,
        bookingDetails.username,
      );
      console.log("Booking response:", success);
      if (success) {
        console.log("Booking stored successfully!");
        alert("Booking confirmed and stored in the database!");
        navigate('/'); // Navigate to home or another page after successful payment
      } else {
        console.log("Booking was not successful.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Payment error:", error.response.data);
        alert(`An error occurred: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("Payment error:", error.request);
        alert("No response received from the server.");
      } else {
        console.error("Payment error:", error.message);
        alert("An error occurred during payment.");
      }
    }
  };
  
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Confirm Your Booking
      </Typography>
      <Typography variant="body1">
        Total Price: ${bookingDetails.totalPrice}
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePayment} sx={{ mt: 3 }}>
        Confirm and Pay
      </Button>
    </Box>
  );
};

export default PaymentPage;
