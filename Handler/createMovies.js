const { default: mongoose } = require("mongoose");

const createMovies = async (req, res) => {
  const movieModel = mongoose.model("Movies");

  const { name, info, image, rating } = req.body;

  let createdMOvie;

  try {
    createdMovie = await movieModel.create({
      name,
      info,
      image,
      rating,
    });
  } catch (error) {
    res.status(400).json({
      status: "failes",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    status: "sucess",
    messege: "movie created sucessfully!",
    createdMovie: createdMovie,
  });
};
module.exports = createMovies;
