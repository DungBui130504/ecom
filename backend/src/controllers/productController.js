const ProductModel = require('../model/productModel');

exports.products = async (req, res) => {
    try {
        const userID = req.user ? req.user.UserID : null;
        const products = await ProductModel.products(userID);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.productsOfCategory = async (req, res) => {
    try {
        const products = await ProductModel.getProductByCategoriy();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.setFav = async (req, res) => {
    try {
        const ID = req.body.ID;
        const UserID = req.user.UserID;
        // console.log(ID);

        const favProducts = await ProductModel.setFavProduct(ID, UserID);
        res.json(favProducts);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.resetFav = async (req, res) => {
    try {
        const ID = req.body.ID;
        const UserID = req.user.UserID;
        const favProducts = await ProductModel.resetFavProduct(ID, UserID);
        res.json(favProducts);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getFavProduct = async (req, res) => {
    try {
        const UserID = req.user.UserID;
        const favProducts = await ProductModel.getFavProduct(UserID);
        res.json(favProducts);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}