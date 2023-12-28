const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    Title: String,
    Director: String,
    Release_Year: Number,
    Description: String,
    Genre: String,
    duration: Number,
    Rating: float,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MovieModel", MovieSchema);
