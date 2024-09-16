const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShowSchema = new Schema(
  {
    Movie_Name: String,
    Start_Time: Number,
    End_Time: Number,
    createdOn: Date.now(),
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShowModel", ShowSchema);
