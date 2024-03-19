"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const Products = require("../models/productsModel");

module.exports = {
  list: async (req, res) => {
    const data = await Products.find();
    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    const data = await Products.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Products.findOne({ _id: req.params.id });
    res.status(202).send({
      error: false,
      data,
    });
  },
};
