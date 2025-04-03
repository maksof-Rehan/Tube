const { poolPromise } = require('../config/db');

class ExampleModel {
  static async getAll() {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('SELECT * FROM YourTable');
      return result.recordset;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // Add more model methods here
}

module.exports = ExampleModel;