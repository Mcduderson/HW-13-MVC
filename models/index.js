const connection = require("../config/connection");
const Burger = require("./burger.model");

module.exports = {
    Burger: new Burger(connection)
}