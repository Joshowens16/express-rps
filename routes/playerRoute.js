const express = require("express");
const router = express.Router();
const { Games, Player } = require("../db");
const players = require("../views/players.js");
const playersGames = require("../views/playersGames.js");

// localhost:3000/players
router.get("/", async (req, res) => {
  const playersDb = await Player.findAll();
  res.send(players(playersDb));
});
// localhost:3000/players/games/:id ... gives you back the data on a particular game
router.get("/games/:id", async (req, res) => {
  const gameId = req.params.id;
  const gameStats = await Games.findAll({
    include: Player,
    where: {
      id: gameId,
    },
  });
  res.send(gameStats);
});

// localhost:3000/players/:id ... gives you back individual player stats by playerId
router.get("/:id", async (req, res) => {
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
