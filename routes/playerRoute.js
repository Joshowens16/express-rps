const express = require("express");
const router = express.Router();
const { Games, Player } = require("../db");
const players = require("../views/players.js");
const playersGames = require("../views/playersGames.js");

router.get("/", async (req, res) => {
  const playersDb = await Player.findAll();
  res.send(players(playersDb));
});
router.get("/games/:id", async (req, res) => {
  const playId = req.params.id;
  const playerStats = await Player.findAll({
    include: Games,
    where: {
      id: playId,
    },
  });
  res.send(playersGames(playerStats));
});

module.exports = router;
