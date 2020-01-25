const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: String,
  life: Number,
  kind: String,
  race: String,
  attrs: {
    attack: Number,
    defense: Number,
    magic: Number
  }
});

module.exports = mongoose.model("character", CharacterSchema);
