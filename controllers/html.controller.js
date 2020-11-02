const express = require("express");

const views = require("../views");

const router = express.Router();

const db = require("../models");
//const app = express();

router.get('/', function(req, res) {
    db.Burger.findAll().then(function(burgers){
        res.send(views.layout({
            children: views.burgers({ burgers })
          }));
    })
})

module.exports = router;