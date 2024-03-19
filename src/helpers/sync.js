"use strict";
/* -------------------------------------------------------
    EXPRESS - STORE API
------------------------------------------------------- */
// SYCHRONIZATION:

module.exports = async function () {
  // return null;
  // REMOVE DATABASE
  const { mongoose } = require("../../db");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED");
  // REMOVE DATABASE

  //  CATEGORY & PRODUCTS & USERS
  //   ! öncelikle modellerimizi import ettik.
  const Categories = require("../models/categoryModel");
  const User = require("../models/userModel");
  const Products = require("../models/userModel");

  const categories = ["Elektronik", "Kıyafet", "Yiyecek", "Mobilya"];

  const users = [
    { email: "admin@aa.com", sifre: "admin" },
    { email: "kullanici2@example.com", sifre: "sifre2" },
    { email: "kullanici3@example.com", sifre: "sifre3" },
    { email: "kullanici4@example.com", sifre: "sifre4" },
    { email: "kullanici5@example.com", sifre: "sifre5" },
    { email: "kullanici6@example.com", sifre: "sifre6" },
    { email: "kullanici7@example.com", sifre: "sifre7" },
    { email: "kullanici8@example.com", sifre: "sifre8" },
    { email: "kullanici9@example.com", sifre: "sifre9" },
    { email: "kullanici10@example.com", sifre: "sifre10" },
    { email: "kullanici11@example.com", sifre: "sifre11" },
    { email: "kullanici12@example.com", sifre: "sifre12" },
    { email: "kullanici13@example.com", sifre: "sifre13" },
    { email: "kullanici14@example.com", sifre: "sifre14" },
    { email: "kullanici15@example.com", sifre: "sifre15" },
    { email: "kullanici16@example.com", sifre: "sifre16" },
    { email: "kullanici17@example.com", sifre: "sifre17" },
    { email: "kullanici18@example.com", sifre: "sifre18" },
    { email: "kullanici19@example.com", sifre: "sifre19" },
    { email: "kullanici20@example.com", sifre: "sifre20" },
  ];

  categories.forEach((value) => {
    Categories.create({ name: value }).then((categories) => {
      console.log("categories added");
      for (let i in [...Array(10)]) {
        Products.create({
          category: category,
          title: title + (value[0] + i),
          description: "description",
          price: 2500,
          discountPercentage: 10,
          rating: 50,
          stock: 210,
          brand: "Abc",
          thumbnail: "resim",
          images: ["resim1", "resim2", "resim3"],
        });
      }
    });
  });

  users.forEach((value) => {
    console.log("users added");
    User.create({
      email: value.email,
      pass: value.sifre,
    });
  });
};
