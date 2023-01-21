const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET ROUTE
router.get('/', (req, res) => {
    let sqlQuery = `
    SELECT * from "feedback"
    ORDER BY "id"
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        res.send(dbRes);
    })
    .catch((dbErr) => {
        console.log('Error in GET ROUTE', dbErr)
        res.sendStatus(500);
    })
}) //END GET ROUTE

//POST ROUTE
router.post('/', (req, res) => {
    let feeling = req.body.feeling;
    let understanding = req.body.understanding;
    let support = req.body.support;
    let comments = req.body.comments;
    let sqlQuery = `
    INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
    `;
    let sqlValues = [feeling, understanding, support, comments];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201);
    }) 
    .catch((dbErr) => {
        console.log('Error in POST ROUTE', dbErr);
        res.sendStatus(500);
    })
}) //END POST ROUTE

//export router
module.exports = router;
