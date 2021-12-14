const { ProductsModel } = require('../models');

const createProduct = (req, res) => {
  const { body } = req;
  return ProductsModel.create(body)
    .then(newProduct => {
      res.status(201).send({ message: 'Producto creado!', newProduct });
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error al crear producto!', error: err.message });
    });
};

const findAllProducts = (req, res) => {
  return ProductsModel.find({ isActive: true })
    .then(products => {
      res.status(200).send({ message: 'Lista de productos!', products });
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error al traer productos!', error: err.message });
    });
};

const findOneProduct = (req, res) => {
  const { id } = req.params;

  return ProductsModel.findById(id)
    .then(product => {
      res.status(200).send({ message: 'Producto encontrado!', product });
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error al traer producto!', error: err.message });
    });
};

const updateProduct = (req, res) => {
  const { body } = req;
  const { id } = req.params;

  return ProductsModel.findByIdAndUpdate(id, body, { new: true })
    .then(updatedProduct => {
      res
        .status(200)
        .send({ message: 'Producto actualizado!', updatedProduct });
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error al actualizar producto!', error: err.message });
    });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  return ProductsModel.findByIdAndUpdate(id, { isActive: false })
    .then(() => {
      res.status(204).send();
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error borrando producto!', error: err.message });
    });
};

const destroyProduct = (req, res) => {
  const { id } = req.params;

  return ProductsModel.findByIdAndDelete(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(err => {
      res
        .status(400)
        .send({ message: 'Error destruyendo producto!', error: err.message });
    });
};

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  deleteProduct,
  destroyProduct
};
