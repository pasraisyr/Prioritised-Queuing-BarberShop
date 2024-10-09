import React, { useState } from 'react';
import {
    Container,
    TextField,
    MenuItem,
    Button,
    Box,
    Typography,
} from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import AuthService from '../../Auth/AuthService';



const timeSlots = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
];

const packages = [
  { label: 'Basic Haircut', value: 'basic' },
  { label: 'Haircut + Beard Trim', value: 'haircut_beard' },
  { label: 'Deluxe Grooming Package', value: 'deluxe' },
];

const styles = [
  { label: 'Buzz Cut', value: 'buzz' },
  { label: 'Pompadour', value: 'pompadour' },
  { label: 'Undercut', value: 'undercut' },
  { label: 'Fade', value: 'fade' },
];

export default function NewBooking(){
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
          event.preventDefault(); // Prevent the default form submission behavior
        
          try {
            const success = await AuthService.book(selectedDate, selectedSlot, selectedPackage, selectedStyle);
            
            if (success) {
              navigate("/");
            } else {
              // Handle login failure and display an error message to the user
              alert("Error Saving data");
            }
          } catch (error) {
            // Handle network or other errors
            console.error("Saving Error:", error);
            alert("An error occurred while saving.");
          }
        }
return (
    <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        <Typography variant="h3" gutterBottom>
            Barber Booking System
        </Typography>
        <form onSubmit={handleSubmit}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField fullWidth {...params} />}
                />
                </LocalizationProvider>
            
              <TextField
                select
                label="Select Time Slot"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                margin="normal"
                required
                fullWidth
                >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Select Package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                margin="normal"
                required
                fullWidth
                >
                {packages.map((pkg) => (
                  <MenuItem key={pkg.value} value={pkg.value}>
                    {pkg.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Select Style"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                margin="normal"
                required
                fullWidth
                >
                {styles.map((style) => (
                  <MenuItem key={style.value} value={style.value}>
                    {style.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button type="submit" variant="contained" color="primary" fullWidth>
              Confirm Booking
            </Button>
    </form>
    </Box>
    </Container>
  );
}