// REQUIREMENTS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const routes = require('./routes');
require('./db');

// SERVER SETTINGS + MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

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
