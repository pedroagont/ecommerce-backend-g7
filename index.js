const app = require('./app');
const PORT = process.env.PORT || 3000;

// LISTENER
app.listen(PORT, () =>
  console.log('Servidor corriendo en http://localhost:' + PORT)
);
