const express = require('express');
const productsController = require('../controllers/products.controller');
const productsRouter = express.Router();

productsRouter.get('/getAllProducts', productsController.getAllProducts);

module.exports = productsRouter;