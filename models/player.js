const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  team: { type: String, required: true },
  bye: { type: String, required: true },
  headshot: String
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
