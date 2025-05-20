const { poolPromise, sql } = require('../database/dbConfig');

exports.carts = async (userID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input('userID', sql.Int, userID)
            .query(
                `SELECT 
                Cart.CartID,
                Cart.UserID,
                Cart.ProductID,
                Cart.Quantity,
                Cart.AddedAt,
                Products.ProductName,
                Products.Description,
                Products.Price,
                Products.Sales,
                Products.ImageUrl
                FROM Cart
                JOIN Products ON Cart.ProductID = Products.ProductID
                WHERE Cart.UserID = @UserID;  `
            );

        console.log("Get products from cart");
        return result.recordsets;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.addCart = async (data) => {
    try {
        // console.log(data);

        const pool = await poolPromise;

        const result = await pool.request()
            .input('UserID', sql.Int, data.userID)
            .input('ProductID', sql.Int, data.product.ID)
            .input('Quantity', sql.Int, data.product.productQuantity)
            .query(
                `MERGE Cart AS target 
                USING (SELECT @UserID AS UserID, @ProductID AS ProductID, @Quantity AS Quantity) AS source 
                ON target.UserID = source.UserID AND target.ProductID = source.ProductID 
                WHEN MATCHED 
                    THEN UPDATE SET Quantity = target.Quantity + source.Quantity 
                WHEN NOT MATCHED 
                    THEN INSERT (UserID, ProductID, Quantity) 
                        VALUES (source.UserID, source.ProductID, source.Quantity); `
            );

        console.log("Add product to cart");
        return result.recordset;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.delCart = async (data) => {
    try {
        // console.log(data);

        const pool = await poolPromise;

        const result = await pool.request()
            .input('UserID', sql.Int, data.userID)
            .input('ProductID', sql.Int, data.product.ID)
            .query(
                `DELETE FROM Cart
                    WHERE UserID = @UserID AND ProductID = @ProductID; `
            );

        console.log("Delete a product from cart");
        return result.recordset;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
