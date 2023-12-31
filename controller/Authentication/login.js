const User = require("../../models/UserModel/user.model");

//user story
// users gonna provide there email id and password
// if both the detail exists in db then they should be
// a valid user.

const userSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //check if its existed or not
    if (!email || !password) {
      return res.status(404).json("Invalid credentials");
    }

    //if it existed then we need to fetch the details from the db
    const isUser = await User.findOne({ email, password });

    //isUser is existed or not
    if (!isUser) {
      return res.status(400).json("User not found");
    }

    //if all gone well then we need to return success
    return res.status(200).json("Login successfully");
  } catch (error) {
    return res.status(500).json("Internal Server Error!");
  }
};

module.exports = userSignIn;
