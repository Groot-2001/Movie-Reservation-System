const router = require("express").Router();
const userSignIn = require("../../controller/Authentication/login");

router.get("/", (req, res, next) => {
  return res.send(
    "<center><h1>Welcome, to the Movie Reservation System</h1></center>"
  );
});
router.get("/login", userSignIn);

module.exports = router;
