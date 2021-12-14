// REQUIREMENTS
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

// SERVER SETTINGS + MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES/ENDPOINTS
// Homepage
app.get('/', (req, res) => {
  return res.send({ message: 'Hola!' });
});

app.use('/api/v1', routes);

// LISTENER
app.listen(PORT, () =>
  console.log('Servidor corriendo en http://localhost:' + PORT)
);
