const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "user".username, "title", "line_1", "line_2", "line_3", "date" FROM "poems"
                        JOIN "user" ON "poems".user_id = "user".id 
                        WHERE "poems".user_id = $1 AND "user".id = $2;
                        `;
    const queryParams = [req.user.id, req.params.id];
    pool
        .query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.error('Error in user-gallery GET', error);
            res.sendStatus(500);
        });
});

module.exports = router;
