const mongoose = require("mongoose");
const { Schema } = mongoose;
const Instructions = require("./Instructions");

const dishSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  dishAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },

  ingredients: [
    {
      ingredient: {
        type: String,
        required: true,
      },
    },
  ],
  instructions: [Instructions.schema],
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
