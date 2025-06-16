import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import axios from 'axios';

const Signup = ({ onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Call backend signup API (assuming /users)
      const response = await axios.post('/users', { name, email, password });
      // Assuming response contains user info
      const user = response.data;
      onSignupSuccess(user);
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Signup
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
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
          Signup
        </Button>
      </Box>
    </Paper>
  );
};

export default Signup;
