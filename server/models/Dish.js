const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
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
  description: {
    type: String,
    trim: true,
  },
  ingredients: [
    {
      type: String,
        required: true,
    },
  ],
  instructions: {
    type: Schema.Types.ObjectId,
    ref: "Instructions" 
  },
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
