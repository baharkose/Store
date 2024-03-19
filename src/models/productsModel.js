"use strict";

/* -------------------------------------------------------
    EXPRESS - STORE API - Product Model
------------------------------------------------------- */

const { mongoose } = require("../../db");

const ProductsSchema = new mongoose.Schema(
  {
    // idyi kendisi veriyor
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    images: {
      type: Array,
    },

    // ! burayı sor.
    _v: Number,
  },
  {
    collection: "products",
    timestamps: true,
    //createdAt, updatedAt eklendi.
  }
);

module.exports = mongoose.model("Products", ProductsSchema);
