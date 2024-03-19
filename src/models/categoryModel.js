"use strict";

/* -------------------------------------------------------
    EXPRESS - STORE API - Product Model
------------------------------------------------------- */

const { mongoose } = require("../../db");

const CategorySchema = new mongoose.Schema(
  {
    // idyi kendisi veriyor

    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "category",
    timestamps: true,
    //createdAt, updatedAt eklendi.
  }
);

module.exports = mongoose.model("Products", CategorySchema);
