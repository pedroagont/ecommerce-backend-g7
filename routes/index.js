const express = require('express');
const router = express.Router();
const AuthRouter = require('./AuthRouter');
const ProductsRouter = require('./ProductsRouter');
const validators = require('celebrate');

router.use('/auth', AuthRouter);
router.use('/products', ProductsRouter);

router.use(validators.errors());

module.exports = router;
