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
    // burda mongoose kendi hata forlatıyor. Bizim yazmamıza gerek yok. 
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

  update: async (req, res) => {
    // süslü içerisinde olmaz. default hali süslü, ilk alan koşul, ikinci alan yeni veri - süslü parantezler sırası ile filter, query, options
    const data = await Categories.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
      //- update işlemini şemaya uygun olarak yapar. Validasyon işlemi yapar. yoksa hata fırlatır.
    });
    // modified data,
    const newData = await Categories.findOne({ _id: req.params.id });
    // modifiedCount bu kısımlar datanın içeriisnden kendisi geliyor. 209 hata vermesine , eğer güncellerse 1 güncellemezse 0 ama hata değil o nedenle aynı data gelmişse 209 hiç bişey olmadı. conflictsler 209
    res.status(data.modifiedCount ? 202 : 209).send({
      error: false,
      newData,
      data,
    });
  },
  delete: async (req, res) => {
    // ! modellerin isimlerini tekil vermek daha iyi

    const data = await Categories.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
