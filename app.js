const express = require("express");
const mongoose = require("mongoose");
const { stringify } = require("querystring");
require("dotenv").config();
const model = require("./Models/movies.models");
const indexHandler = require("./Handler/indexHandler");
const getMovies = require("./Handler/getMovies");
const createMovies = require("./Handler/createMovies");
const editMovie = require("./Handler/updateMovie");
const deleteMovie = require("./Handler/deleteMovie");

//import all models
require("./Models/movies.models");

const app = express();
//for supporting json file
app.use(express.json());

// console.log(process.env.mongo_connect);
const mongo_connect = process.env.mongo_connect;

//connection code to datatbase
mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("mongo connection was sucessfull !");
  })
  .catch((err) => {
    console.log("mongo conection failed!");
  }); //connection code end

//Routes
app.get("/", indexHandler);

//create
app.post("/movies", createMovies);

//Read
app.get("/movies", getMovies);

//update
app.patch("/movies", editMovie);

//delete
app.delete("/movies", deleteMovie);

app.listen(8000, () => {
  console.log("server started!");
});
