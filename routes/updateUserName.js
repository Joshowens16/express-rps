const express = require("express");
const router = express.Router();
const { Games, Player } = require("../db");
const updateName = require("../views/updateProfile");

router.get("/update-user/:id", async (req, res) => {
  const userId = req.params.id;
  const player = await Player.findAll({
    where: {
      id: userId,
    },
  });
  res.send(updateName(player));
});
// takes in a new username via the body and updates it in the database
router.put("/update-user/:id", async (req, res, next) => {
  try {
    await Player.update(
      { username: req.body.newName },
      { where: { id: req.params.id } }
    );
    res.send("Username Updated!");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
