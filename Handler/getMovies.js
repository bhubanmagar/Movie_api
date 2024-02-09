const { default: mongoose } = require("mongoose");

const getMovies = async (req, res) => {
  const movieModel = mongoose.model("Movies");
  let movies = await movieModel.find({});
  res.status(200).json({
    movies: movies,
  });
};
module.exports = getMovies;
