const express = require("express");
const router = express.Router();
const client = require("../db/index.js");

router.get("/test", (req, res) => {
  res.send("hello world");
});

module.exports = router;
