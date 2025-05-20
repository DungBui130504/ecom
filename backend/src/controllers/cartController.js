const CartModel = require('../model/cartModel');

exports.carts = async (req, res) => {
    try {
        const userID = req.user.UserID;
        const cart = await CartModel.carts(userID);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addCart = async (req, res) => {
    try {
        const userID = req.user.UserID;

        if (!userID) {
            return res.status(401).json({ message: 'Bạn chưa đăng nhập hoặc phiên đã hết hạn (cannot found user id)' });
        }

        const product = req.body;
        const data = { userID, product };
        console.log(data);
        const cart = await CartModel.addCart(data);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delCart = async (req, res) => {
    try {
        const userID = req.user.UserID;

        if (!userID) {
            return res.status(401).json({ message: 'Bạn chưa đăng nhập hoặc phiên đã hết hạn (cannot found user id)' });
        }

        const product = req.body;
        const data = { userID, product };
        console.log(data);
        const cart = await CartModel.delCart(data);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}