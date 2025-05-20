const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware.js');

router.get('/users', userController.getAllUsers);

router.get('/user', authenticateToken, userController.getUser);

router.delete('/delUser', authenticateToken, userController.delUser);

router.post('/changeUserInfor', authenticateToken, userController.changeInfor);

router.post('/changeAccountInfor', authenticateToken, userController.changeAccountInfor);

router.post('/changeAddress', authenticateToken, userController.changeAddress);


module.exports = router;
