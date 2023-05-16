const mysql = require('mysql2/promise');

exports.handler = async () => {
  const dbConfig = {
    host: 'aws.connect.psdb.cloud',
    port: 3306,
    user: 'it4g67yoskyjxmk6rjc6',
    password: 'pscale_pw_cykUTCkqvlmoVjseeeQrUWsmJcY3NXOQpUGqNSxdLi2',
    database: 'test-database',
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