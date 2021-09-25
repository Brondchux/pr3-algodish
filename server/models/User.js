const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Dish = require("./Dish");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  created_dishes: [{
    type: Schema.Types.ObjectId,
    ref: "Dish",
  }],
  favorite_dishes: [{
    type: Schema.Types.ObjectId,
    ref: "Dish",
  }],
  history_dishes: [{
    type: Schema.Types.ObjectId,
    ref: "Dish",
  }],
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User