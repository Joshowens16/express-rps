const express = require("express");
const morgan = require("morgan");
const client = require("./db");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use("/players", require("./routes/playerRoute"));
app.use("/", require("./routes/updateUserName"));
app.use("/", require("./routes/game"));

app.get("/", (req, res) => {
  res.send("in progress");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
