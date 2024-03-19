"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const Categories = require("../models/categoryModel");

module.exports = {
  list: async (req, res) => {
    const data = await Categories.find();
    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    const data = await Categories.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Categories.findOne({ _id: req.params.id });
    res.status(202).send({
      error: false,
      data,
    });
  },
};
