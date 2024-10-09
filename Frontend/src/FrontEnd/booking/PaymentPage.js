// PaymentPage.js
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
    const navigate = useNavigate();

    const handlePayment = () => {
        // Simulate payment process
        setTimeout(() => {
            alert('Payment successful!');
            // Navigate back to home or another page after payment
            navigate('/');
        }, 1000);
    };

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                <Typography variant="h3" gutterBottom>
                    Payment Page
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Total Amount: $100 {/* You can pass the actual amount here */}
                </Typography>
                <Button variant="contained" color="primary" onClick={handlePayment}>
                    Proceed with Payment
                </Button>
            </Box>
        </Container>
    );
}
