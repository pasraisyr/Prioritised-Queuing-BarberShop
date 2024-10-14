import React, { useState } from 'react';
import { Button, TextField, Grid, Box, Typography, Paper, MenuItem, Card, CardContent, CardActions } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import dayjs from 'dayjs';
import Link from '@mui/material/Link';

const packages = [
  { label: 'Basic Haircut', value: 'basic', price: 20 },
  { label: 'Haircut + Beard Trim', value: 'haircut_beard', price: 30 },
  { label: 'Deluxe Grooming Package', value: 'deluxe', price: 100 },
];

const styles = [
  { label: 'Buzz Cut', value: 'buzz', price: 10 },
  { label: 'Pompadour', value: 'pompadour', price: 15 },
  { label: 'Undercut', value: 'undercut', price: 20 },
  { label: 'Fade', value: 'fade', price: 25 },
];

const timeSlots = [];
for (let hour = 10; hour <= 21; hour++) {
  timeSlots.push({ time: `${hour}:00`, available: true });
  timeSlots.push({ time: `${hour}:30`, available: true });
}
timeSlots.push({ time: '22:00', available: true });

const Booking = () => {
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState('');
  const [packageType, setPackageType] = useState('');
  const [style, setStyle] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState('');
  const status = 0;
  const navigate = useNavigate();

  const handlePackageChange = (event) => {
    const selectedPackage = packages.find(pkg => pkg.value === event.target.value);
    setPackageType(event.target.value);
    setTotalPrice(selectedPackage ? selectedPackage.price : 0);
  };

  const handleStyleChange = (event) => {
    const selectedStyle = styles.find(sty => sty.value === event.target.value);
    setStyle(event.target.value);
    setTotalPrice((prevPrice) => selectedStyle ? prevPrice + selectedStyle.price : prevPrice);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = date.format('YYYY-MM-DD');
    const deposit = totalPrice * 0.5;
    const bookingDetails = {
      style,
      packageType,
      totalPrice,
      deposit,
      date: formattedDate,
      time,
      status,
      username,
    };
    console.log("Booking details:", bookingDetails); // Debugging: Check if username is present
    navigate('/payment', { state: { bookingDetails } });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid
        item
        xs={false}
        sm={5}
        md={15}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey : t.palette.grey,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid 
        item 
        xs={12} 
        sm={8} 
        md={5} 
        component={Paper} 
        elevation={6} 
        square 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%', // Ensure the Grid item takes full height
        }}
      >
        <Card sx={{ minWidth: 275, padding: 2 }}>
          <CardContent>
            <Typography component="h1" variant="h5" margin="30px" textAlign="center">
              New Booking
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Choose Date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Your Username"
                name="username"
                autoComplete="username"
              />
              <TextField
                select
                margin="normal"
                required
                fullWidth
                id="time"
                label="Choose Time"
                name="time"
                value={time}
                onChange={handleTimeChange}
              >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot.time} value={slot.time} disabled={!slot.available}>
                    {slot.time} {slot.available ? '' : '(Unavailable)'}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                margin="normal"
                required
                fullWidth
                id="packageType"
                label="Package Type"
                name="packageType"
                value={packageType}
                onChange={handlePackageChange}
              >
                {packages.map((pkg) => (
                  <MenuItem key={pkg.value} value={pkg.value}>
                    {pkg.label} - ${pkg.price}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                margin="normal"
                required
                fullWidth
                id="style"
                label="Style"
                name="style"
                value={style}
                onChange={handleStyleChange}
              >
                {styles.map((style) => (
                  <MenuItem key={style.value} value={style.value}>
                    {style.label} - ${style.price}
                  </MenuItem>
                ))}
              </TextField>
              <Typography variant="h6" style={{ marginTop: '20px' }}>
                Total Price: ${totalPrice}
              </Typography>
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Deposit: ${totalPrice * 0.5}
              </Typography>
              <CardActions>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Proceed Booking
                </Button>
              </CardActions>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/" variant="body2">
                    {"Back to Home"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Booking;
