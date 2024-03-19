"use strict";

/* -------------------------------------------------------
    EXPRESS - STORE API - Product Model
------------------------------------------------------- */

const { mongoose } = require("../../db");
const passwordEncrypt = require("../helpers/passwordEncrypte");

const UsersSchema = new mongoose.Schema(
  {
    // idyi kendisi veriyor
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: (email) => email.includes("@") && email.includes("."),
    },
    __v: Number,
    pass: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },
  },
  {
    collection: "users",
    timestamps: true,
    //createdAt, updatedAt eklendi.
  }
);

module.exports = mongoose.model("Users", UsersSchema);
