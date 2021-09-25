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
  return;
};

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;

//          title
// image
// total_time
// ingredients
// instructions (array of  step ids)
//     custom method to populate total time
