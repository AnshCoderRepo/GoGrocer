import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import axios from 'axios';

const Buyer = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const buyProduct = async (product) => {
    try {
      await axios.post('/orders', {
        productId: product._id,
        quantity: 1,
        buyerAddress: 'Sample Address',
        status: 'pending',
      });
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Buyer - Search and Buy Products
      </Typography>
      <TextField
        label="Search Products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <List>
        {filteredProducts.map((product) => (
          <ListItem key={product._id} button onClick={() => buyProduct(product)}>
            <ListItemText
              primary={product.name}
              secondary={`Price: $${product.price} - ${product.available ? 'Available' : 'Unavailable'}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Buyer;
