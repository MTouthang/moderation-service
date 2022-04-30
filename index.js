const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/event", (req, res) => {});

app.listen(4003, () => {
  console.log("Moderation: Port 4003 runing ...");
});
