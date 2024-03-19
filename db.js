"use strict";

/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

// MongoDB Connection

const mongoose = require("mongoose");

const dbConnection = function () {
  // connect
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("* DB Connected"))
    .catch((err) => console.log("*DB not connected"));
};

module.exports = {
  mongoose,
  dbConnection,
};
