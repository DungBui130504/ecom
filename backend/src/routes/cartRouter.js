const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/carts', authenticateToken, CartController.carts)

router.post('/addCart', authenticateToken, CartController.addCart);

router.post('/delCart', authenticateToken, CartController.delCart);

module.exports = router;