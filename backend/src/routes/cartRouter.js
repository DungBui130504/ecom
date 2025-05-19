const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

router.post('/addCart', CartController.addCart);

module.exports = router;