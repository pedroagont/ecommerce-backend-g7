// REQUIREMENTS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const middlewares = require('./middlewares');
require('./db');

// SERVER SETTINGS + MIDDLEWARES
app.use(cors());
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

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
