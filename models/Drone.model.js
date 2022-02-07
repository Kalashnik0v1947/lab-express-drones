// Model requirements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model/Schema structure

const droneSchema = new Schema({
  name: {
    type: String,
  },
  propellers: Number,

  maxSpeed: Number,
  image: {
    type: String,
  }
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;
