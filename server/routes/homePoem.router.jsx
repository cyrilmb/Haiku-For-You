const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const query = `SELECT * FROM "poems" ORDER BY random() LIMIT 1;`;
    pool
        .query(query)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((errr) => {
            console.error('error in home poem router GET', error);
            res.sendStatus(500);
        });
});