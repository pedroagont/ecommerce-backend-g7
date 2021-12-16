const jwt = require('jsonwebtoken');
const { AuthModel } = require('../models');
const SECRET = process.env.SECRET;

const register = async (req, res) => {
  // destructurar email y password
  const { email, password } = req.body;
  // si no existen, retornar y responder con mensaje de error
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresa email y password' });
  }

  try {
    // buscar email en base de datos para validar que existe
    const emailExists = await AuthModel.findOne({ email });
    // // si ya existe, retornar y responder con mensaje de error
    if (emailExists) {
      return res
        .status(400)
        .send({ message: 'Ya existe un usario con ese correo' });
    }

    // ya validado el email, crear usuario y responder
    const body = { email, password };
    const newUser = await AuthModel.create(body);
    return res.status(201).send({ message: 'Usuario creado!', user: newUser });
  } catch (err) {
    return res
      .status(400)
      .send({ message: 'Error creando usuario!', error: err.message });
  }
};

const login = async (req, res) => {
  // destructurar email y password
  const { email, password } = req.body;
  // si no existen, retornar y responder con mensaje de error
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresa email y password' });
  }

  try {
    // buscar email en base de datos para validar que existe
    const user = await AuthModel.findOne({ email });
    // // si no existe, retornar y responder con mensaje de error
    if (!user) {
      return res
        .status(400)
        .send({ message: 'No existe un usario con ese correo' });
    }

    // ya validado el email, comparar contraseñas
    const validPassword = await user.comparePassword(password);
    // // si no son iguales, retornar y responder con mensaje de error
    if (!validPassword) {
      return res.status(400).send({ message: 'Passwords no coinciden' });
    }

    // ya validado el password, crear token de autenticación
    const payload = {
      id: user._id,
      email: user.email
    };

    // Generamos un token con el payload y nuestro secreto
    const token = jwt.sign(payload, SECRET);

    return res.send({ message: 'Hola desde login!', token });
  } catch (err) {
    return res
      .status(400)
      .send({ message: 'Error al hacer login!', error: err.message });
  }
};

const logout = (req, res) => {
  // eliminar token de petición
  return res.send({ message: 'Hola desde logout!' });
};

module.exports = { register, login, logout };
