const express = require('express');
const router = express.Router();
const categoryController = require('../contollers/categoryController');
const auth = require('../middlewares/auth');

// Create a new category (protected)
router.post('/', auth, categoryController.createCategory);

// Get category by ID
router.get('/:id', categoryController.getCategory);

// Update category by ID (protected)
router.put('/:id', auth, categoryController.updateCategory);

// Delete category by ID (protected)
router.delete('/:id', auth, categoryController.deleteCategory);

module.exports = router;
