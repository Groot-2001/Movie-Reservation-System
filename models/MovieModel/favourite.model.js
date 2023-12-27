const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema(
  {
    Movie_Id: {
      type: Schema.Types.ObjectId,
      ref: "MovieModel",
    },
    User_Id: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("FavouriteModel", FavouriteSchema);
