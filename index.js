const express = require("express");
const morgan = require("morgan");
const client = require("./db");

const app = express();
const router = require("./routes/index.js");
app.use("/index", router);
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("hello world!");
});
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
