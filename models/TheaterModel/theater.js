const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TheaterSchema = new Schema(
  {
    Name: String,
    Total_Screens: Number,
    Address: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "TheaterModel",
  TheaterSchema
);
