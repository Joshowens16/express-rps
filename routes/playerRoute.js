const express = require("express");
const router = express.Router();
const { Games, Player } = require("../db");
const players = require("../views/players.js");

router.get("/", async (req, res) => {
  const playersDb = await Player.findAll();
  res.send(players(playersDb));
});

module.exports = router;
