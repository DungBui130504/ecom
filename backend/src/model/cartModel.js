const { poolPromise, sql } = require('../database/dbConfig');

exports.addCart = async (data) => {
    try {
        // console.log(data);

        const pool = await poolPromise;

        const result = await pool.request()
            .input('UserID', sql.Int, data.userID)
            .input('ProductID', sql.Int, data.product.ID)
            .input('Quantity', sql.Int, data.product.productQuantity)
            .query("INSERT INTO Cart (UserID, ProductID, Quantity) VALUES(@UserID, @ProductID, @Quantity)");

        console.log("Add product to cart");
        return result.recordset;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
