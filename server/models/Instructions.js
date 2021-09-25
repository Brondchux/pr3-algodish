const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Dish = require("./Dish");

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

// dishSchema.methods.totalTime = async function () {
//     let totalTime,
//     grab times from Instructions schema
//     add them together
//   return totalTime;
// };

const Instructions = mongoose.model("Instructions", instructionsSchema);
module.exports = Instructions;
