const express = require("express");
const router = express.Router();
const { Games, Player } = require("../db");
const gameView = require("../views/gameView");

//Still working on this but this is supposed to be for playing the game:)
router.get("/game", (req, res, next) => {
  try {
    res.send(gameView());
  } catch (error) {
    next(error);
  }
});

router.post("/game", async (req, res, next) => {
  try {
    const playerChoice = req.body.choice;
    console.log(playerChoice);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
