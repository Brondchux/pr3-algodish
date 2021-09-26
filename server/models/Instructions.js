const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const instructionsSchema = new Schema({
  steps: [
    {
      time: {
        type: Number,
      },
      step: {
        type: String,
      },
    },
  ],
  total_time: {
    type: Number,
  },
});



const Instructions = mongoose.model("Instructions", instructionsSchema);
module.exports = Instructions;
