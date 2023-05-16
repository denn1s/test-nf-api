const mysql = require('mysql2/promise');

exports.handler = async (event) => {
  const dbConfig = {
    host: 'aws.connect.psdb.cloud',
    port: 3306,
    user: 'nyzw8b2gv4zxmv08mrpo',
    password: 'pscale_pw_zK9Mxqq55opNT6W7kY9RauXgEkkZQnvoIvgqZbvOOiA',
    database: 'test-database',
    ssl: {
      rejectUnauthorized: true,
    },
  };

  try {
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
  } catch (error) {
    console.error('Error executing MySQL query:', error);

    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return response;
  }
}