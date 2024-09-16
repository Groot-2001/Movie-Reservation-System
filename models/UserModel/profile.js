const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String,
    address: {
      type: Schema.Types.ObjectId,
      ref: "AddressModel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProfileModel", ProfileSchema);
