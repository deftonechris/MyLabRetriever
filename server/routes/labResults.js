const express = require('express');
const router = express.Router();
const db = require('../connection/db');

router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM lab_results');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving lab results' });
  }
});

module.exports = router;
