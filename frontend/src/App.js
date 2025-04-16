import React from 'react';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import Notifications from './components/Notifications';

function App() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        GoGrocer Utility Tool
      </Typography>
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Seller" />
        <Tab label="Buyer" />
        <Tab label="Notifications" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {tabIndex === 0 && <Seller />}
        {tabIndex === 1 && <Buyer />}
        {tabIndex === 2 && <Notifications />}
      </Box>
    </Container>
  );
}

export default App;
