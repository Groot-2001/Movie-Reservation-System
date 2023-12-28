const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WatchListSchema = new Schema(
  {
    User_Id: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
    },
    Movie_Id: {
      type: Schema.Types.ObjectId,
      ref: "MovieModel",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WatchListModel", WatchListSchema);
