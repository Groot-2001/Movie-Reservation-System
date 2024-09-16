const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeatSchema = new Schema(
  {
    Seat_Number: String,
    isReserved: Boolean,
    slot: {
      type: String,
      enum: ["front_slot", "middle_slot", "balcony_slot"],
      default: "middle_slot",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SeatModel", SeatSchema);
