const { AuthModel } = require('../models');

const register = (req, res) => {
  // destructurar email y password
  // buscar email en base de datos para validar que existe
  // // si ya existe, retornar y responder con mensaje de error
  // ya validado el email, crear usuario y responder
  const { body } = req;
  return AuthModel.create(body)
    .then(newUser => {
      res.status(200).send({ message: 'Usuario creado!', newUser });
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error creando usuario!', error: err.message });
    });
};

const login = (req, res) => {
  // destructurar email y password
  // // si no existen, retornar y responder con mensaje de error
  // buscar email en base de datos para validar que existe
  // // si no existe, retornar y responder con mensaje de error
  // ya validado el email, comparar contraseñas
  // // si no son iguales, retornar y responder con mensaje de error
  // ya validado el password, crear token de autenticación
  // agregar token a petición y responder
  return res.send({ message: 'Hola desde login!' });
};

const logout = (req, res) => {
  // eliminar token de petición
  return res.send({ message: 'Hola desde logout!' });
};

module.exports = { register, login, logout };
