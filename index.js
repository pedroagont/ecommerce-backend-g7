// REQUIREMENTS
const express = require('express');
const app = express();
const PORT = 3000;

// SERVER SETTINGS + MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES/ENDPOINTS
app.get('/', (req, res) => {
  return res.send('Hola!');
});

// LISTENER
app.listen(PORT, () =>
  console.log('Servidor corriendo en http://localhost:' + PORT)
);
