import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Call backend login API (assuming /users/login)
      const response = await axios.post('/users/login', { email, password });
      // Assuming response contains token and user info
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      onLoginSuccess(user);
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
