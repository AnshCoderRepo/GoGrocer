const mongoose = require('mongoose');
const productSchema = require('../Schemas/productSchema');

module.exports = mongoose.model('Product', productSchema.schema ? productSchema.schema : productSchema);
