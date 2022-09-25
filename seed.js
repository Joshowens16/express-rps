const { client, Games, Player } = require("./db/index.js");

const seedDb = async () => {
  await client.sync({ force: true, logging: false });
  const josh = await Player.create({
    username: "Josh",
  });
  const john = await Player.create({
    username: "John",
  });
  await Games.create({
    result: "player",
    playerId: josh.id,
  });
  await Games.create({
    result: "computer",
    playerId: john.id,
  });
  await Games.create({
    result: "player",
    playerId: josh.id,
  });
  await Games.create({
    result: "player",
    playerId: john.id,
  });
  await Games.create({
    result: "computer",
    playerId: josh.id,
  });
  await Games.create({
    result: "computer",
    playerId: john.id,
  });
};

seedDb();
