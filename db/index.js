const Sequelize = require("sequelize");
const client = new Sequelize("postgres://localhost/rps_db");

const Games = client.define("games", {
  result: Sequelize.STRING,
});

const Player = client.define("player", {
  username: Sequelize.STRING,
});

//Player can have many games, but a game can only have 1 human player.
Player.hasMany(Games);
Games.belongsTo(Player);

module.exports = {
  client,
  Games,
  Player,
};
