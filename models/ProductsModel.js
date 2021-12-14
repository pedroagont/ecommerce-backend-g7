const mongoose = require('mongoose');
const { Schema } = mongoose;

// PRODUCT SCHEMA
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['men', 'women', 'kids', 'accesories'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const ProductsModel = mongoose.model('ProductsModel', productSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = ProductsModel;
