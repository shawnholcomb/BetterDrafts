const mongoose = require("mongoose");
const db = require("../models");
const fs = require("fs");
const path = require("path");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/betterdraft", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useUnifiedTopology', true);

const playerSeed = JSON.parse(fs.readFileSync(path.join(__dirname, "./players.JSON")));

db.Player.deleteMany({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });