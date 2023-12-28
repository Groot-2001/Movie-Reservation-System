const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 3,
      max: 10,
      required: true,
    },
    Address: {
      type: Schema.Types.ObjectId,
      ref: "AddressModel",
    },
    Profile: {
      type: Schema.Types.ObjectId,
      ref: "ProfileModel",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model("UserModel", UserSchema);
