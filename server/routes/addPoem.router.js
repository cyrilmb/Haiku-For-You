const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    const userID = req.user.id;
    const newPoem = req.body;
    const queryText = `INSERT INTO "poems" ("title", "line_1", "line_2", "line_3", "user_id") 
                        VALUES ($1, $2, $3, $4, $5)
                        ;`;
    const queryValues = [
        newPoem.title,
        newPoem.line_1,
        newPoem.line_2,
        newPoem.line_3,
        userID
    ];
    pool
        .query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.error('error in router POST:', error);
            res.sendStatus(500);
        });
});

module.exports = router;
