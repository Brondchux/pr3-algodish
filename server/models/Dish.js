const mongoose = require("mongoose");
const { Schema } = mongoose;
const Instructions = require("./Instructions");

const dishSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  total_time: {
    type: Number,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  instructions: [Instructions.Schema],
});

dishSchema.methods.totalTime = async function () {
    let totalTime,
    //grab times from Instructions schema
    //add them together
  return totalTime;
};

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;


