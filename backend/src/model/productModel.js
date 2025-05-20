const { poolPromise, sql } = require('../database/dbConfig');
exports.products = async (userID) => {
    try {
        const pool = await poolPromise;

        let result;
        if (userID) {
            result = await pool.request()
                .input('UserID', userID)
                .query(`
                    SELECT 
                        p.*,
                        CASE 
                            WHEN uf.UserID IS NOT NULL THEN 1 
                            ELSE 0 
                        END AS isFav
                    FROM Products p
                    LEFT JOIN UserFavorites uf
                        ON p.ProductID = uf.ProductID AND uf.UserID = @UserID;
                `);
        } else {
            result = await pool.request()
                .query(`SELECT * FROM Products`);
        }

        console.log("Getting all products");
        return result.recordset;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


exports.getProductByCategoriy = async (ID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("CategoryID", sql.Int, ID)
            .query("select * from products join Categories on Products.CategoryID = Categories.CategoryID where Categories.CategoryID = @CatagoryID");

        console.log("Getting products from category");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

exports.setFavProduct = async (ID, UserID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("ProductID", sql.Int, ID)
            .input("UserID", sql.Int, UserID)
            .query(`
                INSERT INTO UserFavorites (UserID, ProductID)
                VALUES (@UserID, @ProductID);
            `);

        console.log("Set favorite products from products");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

exports.resetFavProduct = async (ID, UserID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("ProductID", sql.Int, ID)
            .input("UserID", sql.Int, UserID)
            .query(`
                DELETE FROM UserFavorites
                WHERE UserID = @UserID AND ProductID = @ProductID;
            `);

        console.log("Reset favorite products from products");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getFavProduct = async (UserID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("UserID", sql.Int, UserID)
            .query(`
            SELECT p.*
            FROM Products p
            INNER JOIN UserFavorites uf ON p.ProductID = uf.ProductID
            WHERE uf.UserID = @UserID;
            `);

        console.log("Getting favorite products");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}