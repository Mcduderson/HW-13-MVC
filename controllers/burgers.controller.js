const express = require("express");

const router = express.Router();

const db = require("../models");
//const app = express();

router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(result){
        res.json({ id: result.insertId });
    })
})

router.patch("/:id", function(req, res) {
    db.Burger.update({
        devoured: req.body.devoured == 'true' || req.body.devoured === true
    },
    {
        id: req.params.id
    }).then(function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;