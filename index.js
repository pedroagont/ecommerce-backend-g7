// REQUIREMENTS
const express = require('express');
const app = express();
const PORT = 3000;

// SERVER SETTINGS + MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES/ENDPOINTS
// Homepage
app.get('/', (req, res) => {
  return res.send({ message: 'Hola!' });
});

// AUTH Usuarios
// Register - POST
app.post('/api/v1/auth/register', (req, res) => {
  return res.send({ message: 'Hola desde register!' });
});

// Login - POST
app.post('/api/v1/auth/login', (req, res) => {
  return res.send({ message: 'Hola desde login!' });
});

// Logout - POST
app.post('/api/v1/auth/logout', (req, res) => {
  return res.send({ message: 'Hola desde logout!' });
});

// CRUD Productos
// Create - POST
app.post('/api/v1/products', (req, res) => {
  return res.send({ message: 'Hola desde CREATE products!' });
});

// Read All - GET
app.get('/api/v1/products', (req, res) => {
  return res.send({ message: 'Hola desde READ ALL products!' });
});

// Read One - GET
app.get('/api/v1/products/:id', (req, res) => {
  return res.send({ message: 'Hola desde READ ONE products!' });
});

// Update - PUT
app.put('/api/v1/products/:id', (req, res) => {
  return res.send({ message: 'Hola desde UPDATE products!' });
});

// Delete - DELETE
app.delete('/api/v1/products/:id', (req, res) => {
  return res.send({ message: 'Hola desde DELETE products!' });
});

// Destroy - DELETE
app.delete('/api/v1/products/:id/destroy', (req, res) => {
  return res.send({ message: 'Hola desde DESTROY products!' });
});

// LISTENER
app.listen(PORT, () =>
  console.log('Servidor corriendo en http://localhost:' + PORT)
);
