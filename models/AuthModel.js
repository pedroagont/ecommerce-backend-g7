const mongoose = require('mongoose');
const { Schema } = mongoose;

// AUTH SCHEMA
const authSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
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
const AuthModel = mongoose.model('AuthModel', authSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = AuthModel;
