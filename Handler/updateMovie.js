const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const movieModel = mongoose.model("Movies");
  let { _id, name } = req.body;

  //validating
  try {
    if (!_id) throw "please enter valid movie id";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
    return;
  }

  //updating the api
  try {
    await movieModel.updateOne(
      {
        _id: _id,
      },
      {
        name: name,
      },
      {
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(400).json({
      status: "failed",
      messege: error.message,
    });
    return;
  }

  //sucessfully updated data
  res.status(200).json({
    data: "Movies updated sucessfully",
  });
};
module.exports = editMovie;
