//importing dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();

//implicit imports
const db = require("../database/db");
const router = require("../routes/User/user_routes");
db();

//basic port setup
const PORT = process.env.PORT || 5000;

//setting up middlewares
app.use(morgan("tiny"));

//setting up with routes
app.use(router);

//setting up with servers
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
