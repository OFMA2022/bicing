const express = require("express");
const app = express.Router();
var data = require("../data.json");

app.get("/data/:id", (req, res) => {
  let foundInsti = data.find((x) => x.id === parseInt(req.params.id));
  let jsonString = JSON.stringify(foundInsti);
  res.send(jsonString);
});
export default app;
