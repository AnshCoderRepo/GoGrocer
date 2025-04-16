const express = require('express');
const router = express.Router();
const productController = require('../contollers/productController');
const auth = require('../middlewares/auth');

// Create a new product (protected)
router.post('/', auth, productController.createProduct);

// Get product by ID
router.get('/:id', productController.getProduct);

// Update product by ID (protected)
router.put('/:id', auth, productController.updateProduct);

// Delete product by ID (protected)
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
