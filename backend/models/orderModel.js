const mongoose = require('mongoose');
const orderSchema = require('../Schemas/orderSchema');

module.exports = mongoose.model('Order', orderSchema.schema ? orderSchema.schema : orderSchema);
