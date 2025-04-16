const mongoose = require('mongoose');
const categorySchema = require('../Schemas/categorySchema');

module.exports = mongoose.model('Category', categorySchema.schema ? categorySchema.schema : categorySchema);
