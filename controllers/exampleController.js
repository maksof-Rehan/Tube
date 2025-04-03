const { poolPromise } = require('../config/db');

const exampleMethod = async (req, res) => {
  try {
    const pool = await poolPromise;
    // Example database query
    const result = await pool.request().query('SELECT * FROM YourTable');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  exampleMethod
};