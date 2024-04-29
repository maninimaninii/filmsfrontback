const mysql = require("mysql");
require ('dotenv').config();


const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('La connexion à la base de données a été fermée');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('La base de données a trop de connexions');
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('La connexion à la base de données a été refusée');
      }
    }
    if (connection) {
      console.log('Connexion à la base de données établie');
      connection.release();
    }
    return;
  });
  
  module.exports = pool;