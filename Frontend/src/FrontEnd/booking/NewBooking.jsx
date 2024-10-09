import React, { useState } from 'react';
import {
    Container,
    TextField,
    MenuItem,
    Button,
    Box,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import AuthService from '../../Auth/AuthService';


const defaultTheme = createTheme();
const packages = [
    { label: 'Basic Haircut', value: 'basic', price: 20 },
    { label: 'Haircut + Beard Trim', value: 'haircut_beard', price: 30 },
    { label: 'Deluxe Grooming Package', value: 'deluxe', price: 100 },
];

const styles = [
    { label: 'Buzz Cut', value: 'buzz'},
    { label: 'Pompadour', value: 'pompadour'},
    { label: 'Undercut', value: 'undercut' },
    { label: 'Fade', value: 'fade'},
];

export default function NewBooking() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState(dayjs());
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const success = await AuthService.bookings(selectedDate, selectedTime, selectedPackage, selectedStyle);
            if (success) {
                navigate('/');
            } else {
                alert('Error saving data');
            }
        } catch (error) {
            console.error('Saving Error:', error);
            alert('An error occurred while saving.');
        }
    };
        // Handle the date and time change
    const handleDateTimeChange = (newValue) => {
      setSelectedDate(newValue);
      setSelectedTime(newValue);

      // Extract the date and time separately
      const date = newValue.format('DD-MM-YYYY'); 
      const time = newValue.format('HH:mm'); 
    };
      // Handle package change
    const handlePackageChange = (event) => {
      const selectedPackageValue = event.target.value;
      const selectedPackageObj = packages.find((pkg) => pkg.value === selectedPackageValue);

      setSelectedPackage(selectedPackageValue);
      setTotalPrice(selectedPackageObj ? selectedPackageObj.price : 0);
    };

    // Handle style change
    const handleStyleChange = (event) => {
      setSelectedStyle(event.target.value);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="md">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                    <Typography variant="h3" gutterBottom>
                        Book Available Slot
                    </Typography>
                    <form onSubmit={handleSubmit}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Choose Date & Time"
                      value={selectedDate}
                      onChange={handleDateTimeChange}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                    <p>Selected Date: {selectedDate.format('DD-MM-YYYY')}</p>
                    <p>Selected Time: {selectedTime.format('HH:mm')}</p>
                  </LocalizationProvider>
                        {/* Package selection */}
                    <TextField
                      select
                      label="Select Package"
                      value={selectedPackage}
                      onChange={handlePackageChange}
                      margin="normal"
                      fullWidth
                    >
                      {packages.map((pkg) => (
                        <MenuItem key={pkg.value} value={pkg.value}>
                          {pkg.label} - ${pkg.price}
                        </MenuItem>
                      ))}
                    </TextField>

                    {/* Style selection */}
                    <TextField
                      select
                      label="Select Haircut Style"
                      value={selectedStyle}
                      onChange={handleStyleChange}
                      margin="normal"
                      fullWidth
                    >
                      {styles.map((style) => (
                        <MenuItem key={style.value} value={style.value}>
                          {style.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                      Total Price: ${totalPrice}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: '20px' }}
                      disabled={totalPrice === 0 || !selectedStyle}
                      
                    >
                      Proceed Booking
                    </Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
