const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const controllers = require("./controllers");

app.use("/", controllers.html);
app.use("/api/burgers", controllers.burger);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});