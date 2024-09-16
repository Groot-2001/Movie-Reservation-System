const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    street1: String,
    street2: String,
    city: String,
    state: String,
    country: String,
    phone: Number,
    zip: String,
    location: {
      type: Point,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AddressModel", AddressSchema);
