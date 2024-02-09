const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const movieModel = mongoose.model("Movies");

  const { _id } = req.query;
  try {
    if (!_id) throw "please enter id";
  } catch (error) {
    res.status(400).json({
      status: "failes",
      message: error,
    });
    return;
  }

  try {
    await movieModel.deleteOne({ _id: _id });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    data: "Movies updated sucessfully",
  });
};
module.exports = deleteMovie;
