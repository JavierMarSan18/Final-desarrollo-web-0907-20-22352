const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;