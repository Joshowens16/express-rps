const html = require("html-template-tag");

module.exports = (players) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Players</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div id="players">
        <h1>Players:</h1>
        ${players.map((player) => html` <h3>${player.username}</h3> `)}
      </div>
    </body>
  </html>
`;
