const fs = require("fs");

fs.stat("./index.js", (err, stats) => {
  if (err) console.log("got err: ", err);

  console.log("show stats: ", stats);
});
