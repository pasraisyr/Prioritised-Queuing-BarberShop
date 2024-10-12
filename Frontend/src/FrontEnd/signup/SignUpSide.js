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
import MenuItem from '@mui/material/MenuItem'; // For the role dropdown
import Card from '@mui/material/Card'; // Import Card
import CardContent from '@mui/material/CardContent'; // Import CardContent
import CardActions from '@mui/material/CardActions'; // Import CardActions
import AuthService from '../../Auth/AuthService'; // Adjust the path to your AuthService file
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Import RouterLink

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

export default function SignUpSide() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState(""); // Default to customer role (2)
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const success = await AuthService.register(username, password, phoneNumber, role, name);
      
      if (success) {
        alert("Registration successful! You can now sign in.");
        navigate("/signin");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Username already taken. Please choose a different username.");
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CssBaseline />
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} className="mx-auto">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" margin="30px" textAlign="center">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
              />
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="tel"
              />
              <TextField
                select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                helperText="Please select your role"
              >
                <MenuItem value="Staff">Staff</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
              </TextField>
              <CardActions>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </CardActions>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/signin" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
