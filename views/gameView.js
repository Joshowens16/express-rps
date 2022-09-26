const html = require("html-template-tag");

module.exports = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/rps-style.css" />
      <title>Rock, Paper, Scissors!</title>
    </head>
    <body>
      <div id="rps-game">
        <form method="post" action="">
          <input type="submit" name="choice" value="rock" />
          <input type="submit" name="choice" value="paper" />
          <input type="submit" name="choice" value="scissors" />
        </form>
      </div>
    </body>
  </html>
`;
