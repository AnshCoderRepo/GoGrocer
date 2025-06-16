import React, { useState } from 'react';
import { Container, Typography, Tabs, Tab, Box, Paper, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import Notifications from './components/Notifications';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [userRole, setUserRole] = useState('buyer'); // 'buyer' or 'seller'
  const [user, setUser] = useState(null);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleRoleChange = (event, newRole) => {
    if (newRole !== null) {
      setUserRole(newRole);
    }
  };

  const handleLoginSuccess = (user) => {
    setUser(user);
    setTabIndex(0); // Redirect to main tab after login
  };

  const handleSignupSuccess = (user) => {
    setUser(user);
    setTabIndex(0); // Redirect to main tab after signup
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          GoGrocer Utility Tool
        </Typography>

        {!user ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <ToggleButtonGroup
                value={userRole}
                exclusive
                onChange={handleRoleChange}
                aria-label="user role"
              >
                <ToggleButton value="buyer" aria-label="buyer">
                  Buyer
                </ToggleButton>
                <ToggleButton value="seller" aria-label="seller">
                  Seller
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Tabs value={tabIndex} onChange={handleChange} centered textColor="primary" indicatorColor="primary" sx={{ mb: 3 }}>
              <Tab label="Login" />
              <Tab label="Signup" />
            </Tabs>
            <Box>
              {tabIndex === 0 && <Login onLoginSuccess={handleLoginSuccess} />}
              {tabIndex === 1 && <Signup onSignupSuccess={handleSignupSuccess} />}
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                Logged in as {user.name} ({userRole})
              </Typography>
              <Button variant="outlined" color="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
            <Tabs value={tabIndex} onChange={handleChange} centered textColor="primary" indicatorColor="primary" sx={{ mb: 3 }}>
              <Tab label="Seller" />
              <Tab label="Buyer" />
              <Tab label="Notifications" />
            </Tabs>
            <Box>
              {tabIndex === 0 && userRole === 'seller' && <Seller />}
              {tabIndex === 1 && userRole === 'buyer' && <Buyer />}
              {tabIndex === 2 && <Notifications />}
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default App;
