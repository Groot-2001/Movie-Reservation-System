let mongoose = require("mongoose");
require("dotenv").config();

//require database URL from environment file
let dbURL = process.env.DATABASE_URI;

//export this function and imported by server.js
module.exports = function dbconn() {
  //to ignore the deprecation warning
  mongoose.set("strictQuery", false);

  //? Connect Mongoose with Database URL
  mongoose.connect(dbURL);

  //* This event is fired when the connection is successfully connected.
  mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection is open!!!");
  });

  //! This event is fired when the connection gives some error.
  mongoose.connection.on("error", function (err) {
    console.error("Mongoose default connection has occured " + err + " error");
  });

  //TODO This event is fired when the connection is disconnected.
  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection is disconnected");
  });

  /*This event is fired when the process is closed. 
    When the process is closed, 
    it is a good habit to close all the opened connection of database. 
    */
  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
};
