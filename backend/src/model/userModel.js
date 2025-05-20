const { poolPromise, sql } = require('../database/dbConfig');


// Lay danh sach users
exports.getAllUsers = async () => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        // Thực hiện truy vấn
        const result = await pool.request().query('Select * from users')

        // Trả về kết quả
        return result.recordset;  // `recordset` chứa dữ liệu trả về từ truy vấn
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};

// Lay thong tin 1 user
exports.getUser = async (ID) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('UserID', sql.Int, ID)
            .query('Select * from users where UserID = @UserID')

        // Trả về kết quả
        return result.recordset;  // `recordset` chứa dữ liệu trả về từ truy vấn
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};

// Them 1 user moi
exports.addUser = async (user) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        const { Username, PasswordHash, FullName, Email, Phone, Address, Role } = user;

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('Username', sql.NVarChar, Username)
            .input('PasswordHash', sql.NVarChar, PasswordHash)
            .input('FullName', sql.NVarChar, FullName)
            .input('Email', sql.NVarChar, Email)
            .input('Phone', sql.NVarChar, Phone)
            .input('Address', sql.NVarChar, Address)
            .input('Role', sql.NVarChar, Role || 'Customer')
            .query(`
                INSERT INTO Users (Username, PasswordHash, FullName, Email, Phone, Address, Role)
                VALUES (@Username, @PasswordHash, @FullName, @Email, @Phone, @Address, @Role)
            `);

        // Trả về kết quả
        console.log('Inserting a user...');
        return result.recordset;
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};

// Xoa 1 user
exports.delUser = async (UserID) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('UserID', sql.Int, UserID)
            .query(`
                DELETE FROM Users WHERE UserID = @UserID;
            `);

        // Trả về kết quả
        console.log('Deleting a user...');
        return result;
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};

// Xac thuc dang nhap user
exports.login = async (user) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        const { Username, PasswordHash } = user;

        // console.log(user);


        // Thực hiện truy vấn
        const result = await pool.request()
            .input('Username', sql.NVarChar, Username)
            .input('PasswordHash', sql.NVarChar, PasswordHash)
            .query(`
                SELECT *  FROM Users WHERE Username = @Username AND PasswordHash = @PasswordHash;
            `);

        // Trả về kết quả
        console.log('Checking user...');
        // console.log(result.recordset);
        return result.recordset;
    }
    catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
}

// Chinh sua thong tin nguoi dung
exports.changeInfor = async (newInfor, UserID) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        // console.log(newInfor.FullName);

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('UserID', sql.Int, UserID)
            .input('FullName', sql.NVarChar, newInfor.FullName)
            .input('Email', sql.NVarChar, newInfor.Email)
            .input('Phone', sql.NVarChar, newInfor.Phone)
            .query(`
                UPDATE Users SET FullName = @FullName, Email = @Email, Phone = @Phone WHERE UserID = @UserID;
            `);

        // Trả về kết quả
        console.log('Updating user infor...');
        return result.rowsAffected;
    }
    catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
}

// Chinh sua thong tin tai khoan nguoi dung
exports.changeAccountInfor = async (newInfor, UserID) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        const { Username, PasswordHash } = newInfor;

        const ID = UserID;

        console.log(ID);

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('UserID', sql.Int, ID)
            .input('Username', sql.NVarChar, Username)
            .input('PasswordHash', sql.NVarChar, PasswordHash)
            .query(`
                UPDATE Users SET Username = @Username, PasswordHash = @PasswordHash WHERE UserID = @UserID;
            `);

        // Trả về kết quả
        console.log('Updating account infor...');
        return result.rowsAffected;
    }
    catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
}

// Chinh sua thong tin dia chi
exports.changeAddress = async (newInfor, UserID) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        const { Address } = newInfor;

        const ID = UserID;

        console.log(ID);

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('UserID', sql.Int, ID)
            .input('Address', sql.NVarChar, Address)
            .query(`
                UPDATE Users SET Address = @Address WHERE UserID = @UserID;
            `);

        // Trả về kết quả
        console.log('Updating address infor...');
        return result.rowsAffected;
    }
    catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
}





