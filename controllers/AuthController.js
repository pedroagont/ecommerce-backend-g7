const register = (req, res) => {
  return res.send({ message: 'Hola desde register!' });
};

const login = (req, res) => {
  return res.send({ message: 'Hola desde login!' });
};

const logout = (req, res) => {
  return res.send({ message: 'Hola desde logout!' });
};

module.exports = { register, login, logout };
