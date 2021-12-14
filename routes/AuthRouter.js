const express = require('express');
const router = express.Router();

// AUTH Usuarios
// Register - POST
router.post('/register', (req, res) => {
  return res.send({ message: 'Hola desde register!' });
});

// Login - POST
router.post('/login', (req, res) => {
  return res.send({ message: 'Hola desde login!' });
});

// Logout - POST
router.post('/logout', (req, res) => {
  return res.send({ message: 'Hola desde logout!' });
});

module.exports = router;
