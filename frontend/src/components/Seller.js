import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, Checkbox, FormControlLabel, Paper, Box } from '@mui/material';
import axios from 'axios';

const Seller = () => {
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductAvailable, setNewProductAvailable] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('/products');
            setProducts(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProduct = async () => {
        if (!newProductName || !newProductPrice) return;
        try {
            await axios.post('/products', {
                name: newProductName,
                price: parseFloat(newProductPrice),
                available: newProductAvailable,
            });
            setNewProductName('');
            setNewProductPrice('');
            setNewProductAvailable(true);
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const toggleAvailability = async (product) => {
        try {
            await axios.put(`/products/${product._id}`, {
                available: !product.available,
            });
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Seller Inventory Management
            </Typography>
            <TextField
                label="Product Name"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Price"
                type="number"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={newProductAvailable}
                        onChange={(e) => setNewProductAvailable(e.target.checked)}
                    />
                }
                label="Available for sale"
            />
            <Button variant="contained" color="primary" onClick={addProduct} sx={{ mb: 2 }}>
                Add Product
            </Button>
            <List>
                {products.map((product) => (
                    <ListItem key={product._id} button onClick={() => toggleAvailability(product)}>
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

export default Seller;
