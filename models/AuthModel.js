const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

authSchema.pre('save', function(next) {
  const user = this;
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashedPassword;
  next();
});

authSchema.method('comparePassword', function(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const AuthModel = mongoose.model('AuthModel', authSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = AuthModel;
