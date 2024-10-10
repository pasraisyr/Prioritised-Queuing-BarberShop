import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import AuthService from '../../Auth/AuthService';
import ContentCutIcon from '@mui/icons-material/ContentCut';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const packages = [
  { label: 'Basic Haircut', value: 'basic', price: 20 },
  { label: 'Haircut + Beard Trim', value: 'haircut_beard', price: 30 },
  { label: 'Deluxe Grooming Package', value: 'deluxe', price: 100 },
];

const styles = [
  { label: 'Buzz Cut', value: 'buzz' },
  { label: 'Pompadour', value: 'pompadour' },
  { label: 'Undercut', value: 'undercut' },
  { label: 'Fade', value: 'fade' },
];

export default function NewBooking() {
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());
  const [packageType, setPackageType] = useState('');
  const [style, setStyle] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handlePackageChange = (event) => {
    const selectedPackage = packages.find(pkg => pkg.value === event.target.value);
    setPackageType(event.target.value);
    setTotalPrice(selectedPackage ? selectedPackage.price : 0);
  };

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBooking = {
      date: date.format('YYYY-MM-DD'),
      time: time.format('HH:mm:ss'),
      packageType,
      style,
      totalPrice,
    };
    try {
      await AuthService.bookings(newBooking);
      alert("Booking successful!");
      navigate("/"); // Navigate to home or another page after booking
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred during booking.");
    }
  };

  return (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
       
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey : t.palette.grey,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <ContentCutIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5" margin = "30px">
              New Booking
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Choose Date & Time"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                    setTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
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
                    {style.label}
                  </MenuItem>
                ))}
              </TextField>
              <Typography variant="h6" style={{ marginTop: '20px' }}>
                            Total Price: ${totalPrice}
                        </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Proceed Booking
              </Button>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/" variant="body2">
                    {"Back to Home"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
  
  );
}
