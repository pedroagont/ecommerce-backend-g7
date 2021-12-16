const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(
    `Lo sentimos, no encontramos lo que estás buscando: ${req.originalUrl}`
  );
  return next(error);
};

module.exports = notFound;
