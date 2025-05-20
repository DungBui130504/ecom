const express = require('express');
const api = express.Router();
const userRouter = require('../routes/userRouter.js');
const authRouter = require('../routes/authRouter.js');
const productRouter = require('../routes/productRouter.js');
const categoryRouter = require('../routes/categoryRouter.js');
const cartRouter = require('../routes/cartRouter.js');
const { authenticateToken } = require('../middleware/authMiddleware.js');

api.get('/', (req, res) => {
    const forwardedIp = req.headers['x-forwarded-for'] || req.ip
    res.status(200).json(
        {
            message: "your ip address : " + forwardedIp
        }
    )
});

api.get("/ping", (req, res) => {
    res.status(200).json({
        message: "ok from backend!"
    });
})

api.use('/cart', authenticateToken, cartRouter);

api.use('/category', categoryRouter);

api.use('/product', productRouter);

api.use('/user', userRouter);

api.use('/auth', authRouter);

module.exports = api;