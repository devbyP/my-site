const express = require("express");
const port = require("./configs").env.port;
const cp = require("child_process");

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("pub/index", {title: "index"});
});

app.get("/gallery", (req, res) => {
    res.render("pub/gallery", {title: "this is test data."});
});

app.get("/board", (req, res) => {
    res.render("pub/board", {title: "this is also test data."});
});

const adminRouter = require("./routers/admin");

app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log("server is runing on port " + port);
  // start a web browser when in dev.
  if (process.env.NODE_ENV !== "production") {
    const start = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? start: 'xdg-open';
    const url = "http://localhost";
    cp.exec(`${start} ${url}:${port}`);
  }
});
