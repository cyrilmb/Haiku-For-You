const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const query = `SELECT * FROM "helping_verbs"
                    ORDER BY random() LIMIT 1;
                    `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows[0].helping_verb);
    })
    .catch((error) => {
      console.error('error in home poem router GET', error);
      res.sendStatus(500);
    });
});

module.exports = router;
