const express = require('express')

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"))

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8000);
