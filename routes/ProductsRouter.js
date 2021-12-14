const express = require('express');
const router = express.Router();

// CRUD Productos
// Create - POST
router.post('/', (req, res) => {
  return res.send({ message: 'Hola desde CREATE products!' });
});

// Read All - GET
router.get('/', (req, res) => {
  return res.send({ message: 'Hola desde READ ALL products!' });
});

// Read One - GET
router.get('/:id', (req, res) => {
  return res.send({ message: 'Hola desde READ ONE products!' });
});

// Update - PUT
router.put('/:id', (req, res) => {
  return res.send({ message: 'Hola desde UPDATE products!' });
});

// Delete - DELETE
router.delete('/:id', (req, res) => {
  return res.send({ message: 'Hola desde DELETE products!' });
});

// Destroy - DELETE
router.delete('/:id/destroy', (req, res) => {
  return res.send({ message: 'Hola desde DESTROY products!' });
});

module.exports = router;
