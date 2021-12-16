const express = require('express');
const router = express.Router();
const { ProductsController } = require('../controllers');
const { ProductsValidator } = require('../validators');
const { verifyToken } = require('../middlewares');

// CRUD Productos
// Create - POST
router.post(
  '/',
  verifyToken,
  ProductsValidator,
  ProductsController.createProduct
);

// Read All - GET
router.get('/', ProductsController.findAllProducts);

// Read One - GET
router.get('/:id', ProductsController.findOneProduct);

// Update - PUT
router.put('/:id', verifyToken, ProductsController.updateProduct);

// Delete - DELETE
router.delete('/:id', verifyToken, ProductsController.deleteProduct);

// Destroy - DELETE
router.delete('/:id/destroy', verifyToken, ProductsController.destroyProduct);

module.exports = router;
