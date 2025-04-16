const express = require('express');
const router = express.Router();
const userController = require('../contollers/userController');
const auth = require('../middlewares/auth');

// Create a new user (signup)
router.post('/', userController.createUser);

// Get user by ID (protected)
router.get('/:id', auth, userController.getUser);

// Update user by ID (protected)
router.put('/:id', auth, userController.updateUser);

// Delete user by ID (protected)
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;
