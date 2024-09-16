const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TicketSchema = new Schema(
  {
    Movie_Name: String,
    Duration: Number,
    Price: Number,
    Screen: Number,
    Seat: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "TicketModel",
  TicketSchema
);
