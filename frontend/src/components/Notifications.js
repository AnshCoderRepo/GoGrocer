import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      // For demo, fetch all orders as notifications
      const res = await axios.get('/orders');
      setNotifications(res.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Vendor Notifications
      </Typography>
      <List>
        {notifications.map((order) => (
          <ListItem key={order._id}>
            <ListItemText
              primary={`Order ID: ${order._id}`}
              secondary={`Status: ${order.status} - Total Price: $${order.totalPrice}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Notifications;
