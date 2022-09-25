const html = require("html-template-tag");

module.exports = (player) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Player Stats</title>
    </head>
    <body>
      ${player.map((player) => html` <h1>${player.username}'s Stats</h1> `)}
      ${player.map(
        (player) => html`Number of games player: ${player.games.length} Recent
        Results:
        ${player.games.map(
          (game) =>
            html`<p>Winner: ${game.result}</p>
              <p></p>`
        )}`
      )}
    </body>
  </html>
`;
