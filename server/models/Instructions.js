const mongoose = require("mongoose");
const { Schema } = mongoose;
const Dish = require("./Dish");

const instructionsSchema = new Schema({
  time: {
    type: Number,
  },
  step: {
    type: String,
  },
});

const Instructions = mongoose.model("Instructions", instructionsSchema);
module.exports = Instructions;
