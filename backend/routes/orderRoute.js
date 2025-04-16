const express = require('express');
const router = express.Router();
const orderController = require('../contollers/orderController');
const auth = require('../middlewares/auth');

// Create a new order (protected)
router.post('/', auth, orderController.createOrder);

// Get order by ID (protected)
router.get('/:id', auth, orderController.getOrder);

// Update order by ID (protected)
router.put('/:id', auth, orderController.updateOrder);

// Delete order by ID (protected)
router.delete('/:id', auth, orderController.deleteOrder);

module.exports = router;
