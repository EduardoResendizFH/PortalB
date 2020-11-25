const verifyToken = require('../middlewares/authJwt');
const express = require('express'),
      productsCtrl = require('../controllers/products.controller'),
      app = express();

    app.post('/', [verifyToken.verifyToken, verifyToken.isMoredator], productsCtrl.createProduct);
    app.get('/', productsCtrl.getProduct);
    app.get('/:id', productsCtrl.getProductById);
    app.put('/:id', [verifyToken.verifyToken, verifyToken.isAdmin], productsCtrl.updateProductById);
    app.delete('/:id', [verifyToken.verifyToken, verifyToken.isAdmin], productsCtrl.deleteProductById);

module.exports = app;