const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const { authenticateToken, optinalAuthenticateToken } = require('../middleware/authMiddleware');

router.get('/products', optinalAuthenticateToken, ProductController.products);

router.get('/productsByCategory', ProductController.productsOfCategory);

router.put('/favProduct', authenticateToken, ProductController.setFav);

router.put('/resetFavProduct', authenticateToken, ProductController.resetFav);

router.get("/favProducts", authenticateToken, ProductController.getFavProduct);

module.exports = router;