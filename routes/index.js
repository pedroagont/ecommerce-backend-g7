const express = require('express');
const router = express.Router();
const AuthRouter = require('./AuthRouter');
const ProductsRouter = require('./ProductsRouter');

router.use('/auth', AuthRouter);
router.use('/products', ProductsRouter);

module.exports = router;
