const CartModel = require('../model/cartModel');

exports.addCart = async (req, res) => {
    try {
        const userID = req.cookies.ID;
        const product = req.body;
        const data = { userID, product };
        // console.log(data);
        const cart = await CartModel.addCart(data);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}