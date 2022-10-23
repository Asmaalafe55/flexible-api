const db = require('../database/connection');

const getUserById = (id) => {
  return db
    .query(`SELECT * FROM users WHERE user_id = $1 `, [id])
    .then(({ rows }) => rows[0]);
};

const getUserByEmail = (email) => {
  return db
    .query(`SELECT * FROM users WHERE email = $1 `, [email])
    .then(({ rows }) => rows[0]);
};

const updateUsersDetails = (first_name, last_name, email, password) => {
  return db
    .query(
      `UPDATE users SET first_name=$1, last_name=$2, password=$4 WHERE email=$3 RETURNING user_id`,
      [first_name, last_name, email, password]
    )
    .then(({ rows }) => rows[0]);
};

const createNewUser = (first_name, last_name, password, email) => {
  return db
    .query(
      `INSERT INTO users (first_name, last_name, password, email) VALUES ($1,$2,$3,$4) RETURNING user_id`,
      [first_name, last_name, password, email]
    )
    .then(({ rows }) => rows[0]);
};

module.exports = {
  getUserById,
  getUserByEmail,
  updateUsersDetails,
  createNewUser,
};
