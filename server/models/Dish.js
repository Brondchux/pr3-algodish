const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Instructions = require("./Instructions");

const dishSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    trim: true,
  },
  instructions: [
    {
      step: {
        type: String,
        trim: true,
        required: true,
      },
      time: {
        type: Number
      },
    }
],
  cook_time: {
    type: Number,
  },
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
