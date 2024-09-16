const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    Movie_Id: {
      type: Schema.Types.ObjectId,
      ref: "MovieModel",
    },
    User_Id: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
    },
    Rating: float,
    Comment: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ReviewModel", ReviewSchema);
