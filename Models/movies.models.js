const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minlength: [3, "name should be more than 3 letter"],
  },
  info: {
    type: String,
    required: [true, "please provide information"],
    minlength: [3, "please provide descriptive info"],
  },
  image: {
    type: String,
    required: [true, "image must be included"],
  },
  rating: {
    type: Number,
    require: [true, "rating must be provided"],
    min: [0, "rating must be between 0-10"],
    max: [10, "rating must be between 0-10"],
  },
});
const movieModel = mongoose.model("Movies", MovieSchema);

module.exports = movieModel;
