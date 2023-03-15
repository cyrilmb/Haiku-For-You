const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT "user".username, "title", "line_1", "line_2", "line_3", "date" FROM "poems"
                    JOIN "user" ON "poems".user_id = "user".id
                    ORDER BY date;
                    `;
    pool
        .query(query)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.error('error in home poem router GET', error);
            res.sendStatus(500);
        });
});

module.exports = router;