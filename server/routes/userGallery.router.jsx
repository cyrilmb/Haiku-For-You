const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//GET all poems by user id for user-gallery page
router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "user".username, "poems".id, "title", "line_1", "line_2", "line_3", "date" FROM "poems"
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

//DELETE poem by poem id, if user created poem
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "poems" WHERE "id" = $1 and "user_id" = $2;`;
    const queryParams = [req.params.id, req.user.id];
    pool
        .query(queryText, queryParams)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error('Error in DELETE router', error);
            res.sendStatus(500);
        });
});

//PUT poem, sends edited poem to replace poem in database by id
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.body', req.body);

    const queryText = `UPDATE "poems" 
                        SET "title" = $1, "line_1" = $2, "line_2" = $3, "line_3" = $4 
                        WHERE "id" = $5 AND "user_id" = $6;
                        `;
    const queryParams = [req.body.payload.title,
    req.body.payload.line_1,
    req.body.payload.line_2,
    req.body.payload.line_3,
    req.params.id,
    req.user.id];
    pool
        .query(queryText, queryParams)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((error) => {
            console.error('Error in edit user poem PUT router', error);
            res.sendStatus(500);
        });
});

module.exports = router;
