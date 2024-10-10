import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import AuthService from '../../Auth/AuthService';

export default function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await AuthService.requestPasswordReset(username);
      setMessage('Password reset link has been sent to your account.');
    } catch (error) {
      console.error('Password reset error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Box sx={{ mt: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5" margin="30px">
        Forgot Password
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Reset Link
        </Button>
        {message && <Typography variant="body2" color="text.secondary">{message}</Typography>}
      </Box>
    </Box>
  );
}
