const pool = require('../config/db');

const createUser = async (username, email, hashedPassword, RoleID) => {
    const result = await pool.query(
        'INSERT INTO users.users (Username, Email, PasswordHash, RoleID) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, email, hashedPassword, RoleID]
    );
    return result.rows[0];
};

const getUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users.users WHERE email = $1', [email]);
    return result.rows[0];
};
const getAllUsers = async () => {
    const result = await pool.query('SELECT users.users.id, users.users.username, users.users.email, roles.role_name AS role, roles.id AS role_id FROM users.users INNER JOIN users.roles ON role_id = roles.id');
    console.log(result);
    return result.rows;
};

module.exports = {
    createUser,
    getUserByEmail,
    getAllUsers
};
