require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_DATABASE_USERNAME = process.env.MONGODB_DATABASE_USERNAME;
const MONGODB_DATABASE_PASSWORD = process.env.MONGODB_DATABASE_PASSWORD;
const MONGODB_DATABASE_HOSTNAME = process.env.MONGODB_DATABASE_HOSTNAME;
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

const connectionString = `mongodb+srv://${MONGODB_DATABASE_USERNAME}:${MONGODB_DATABASE_PASSWORD}@${MONGODB_DATABASE_HOSTNAME}/${MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error conectando', err.message));
