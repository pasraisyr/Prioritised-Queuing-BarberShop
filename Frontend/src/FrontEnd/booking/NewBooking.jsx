import React, { useState, Component } from 'react';
import { AppointmentPicker } from 'react-appointment-picker';
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
import { GridRow } from '@mui/x-data-grid';


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

export default function NewBooking() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [continuousLoading, setContinuousLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const success = await AuthService.book(selectedDate, selectedSlot, selectedPackage, selectedStyle);
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

    const addAppointmentCallback = ({ addedAppointment: { day, number, time, id }, addCb }) => {
        setLoading(true);
        setTimeout(() => {
            console.log(`Added appointment ${number}, day ${day}, time ${time}, id ${id}`);
            addCb(day, number, time, id);
            setLoading(false);
        }, 1000);
    };

    const removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
        setLoading(true);
        setTimeout(() => {
            console.log(`Removed appointment ${number}, day ${day}, time ${time}, id ${id}`);
            removeCb(day, number);
            setLoading(false);
        }, 1000);
    };

    const days = [
        [
            { id: 1, number: 1, isSelected: true, periods: 2 },
            { id: 2, number: 2 },
            null,
            { id: 3, number: '3', isReserved: true },
            { id: 4, number: '4' },
            null,
            { id: 5, number: 5 },
            { id: 6, number: 6 },
        ],
        // Add other days as needed...
    ];

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="md">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                    <Typography variant="h3" gutterBottom>
                        Book Available Timeslot
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px'}}>
                    <form onSubmit={handleSubmit}>
                      <div className='flex flex-row container'> 
                    <AppointmentPicker
                        
                        addAppointmentCallback={addAppointmentCallback}
                        removeAppointmentCallback={removeAppointmentCallback}
                        initialDay={new Date()}
                        
                        days={days}
                        maxReservableAppointments={1}
                        visible
                        loading={loading}
                    />
                    </div>
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
                            Proceed Booking
                        </Button>
                    </form>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
