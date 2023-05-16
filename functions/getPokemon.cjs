const mysql = require('mysql2/promise');

exports.handler = async () => {
  const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      rejectUnauthorized: true,
    },
  };
  const pool = mysql.createPool(dbConfig);
  const connection = await pool.getConnection();
  const [rows] = await connection.query('SELECT * FROM MOCK_DATA');
  connection.release();

  const response = {
    statusCode: 200,
    body: JSON.stringify({ data: rows }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return response;
}