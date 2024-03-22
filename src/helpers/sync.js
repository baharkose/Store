"use strict";
/* -------------------------------------------------------
    EXPRESS - STORE API
------------------------------------------------------- */
// Kategori, Kullanıcı ve Ürün modellerini içe aktarın
// const mongoose = require("mongoose");
const { mongoose } = require("../../db");
const Categories = require("../models/categoryModel");
const Products = require("../models/productsModel");
const User = require("../models/userModel");
async function seedDatabase() {
  // return null;
  // REMOVE DATABASE
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED");
  // Kategorileri ve ürünleri oluşturun
  const categories = ["Elektronik", "Kıyafet", "Yiyecek", "Mobilya"];
  // const users = [
  //   { email: "admin@aa.com", password: "admin", isAdmin: true },
  //   { email: "kullanici2@example.com", password: "sifre2" },
  //   { email: "kullanici3@example.com", password: "sifre3" },
  //   { email: "kullanici4@example.com", password: "sifre4" },
  //   { email: "kullanici5@example.com", password: "sifre5" },
  //   { email: "kullanici6@example.com", password: "sifre6" },
  //   { email: "kullanici7@example.com", password: "sifre7" },
  //   { email: "kullanici8@example.com", password: "sifre8" },
  //   { email: "kullanici9@example.com", password: "sifre9" },
  //   { email: "kullanici10@example.com", password: "sifre10" },
  //   { email: "kullanici11@example.com", password: "sifre11" },
  //   { email: "kullanici12@example.com", password: "sifre12" },
  //   { email: "kullanici13@example.com", password: "sifre13" },
  //   { email: "kullanici14@example.com", password: "sifre14" },
  //   { email: "kullanici15@example.com", password: "sifre15" },
  //   { email: "kullanici16@example.com", password: "sifre16" },
  //   { email: "kullanici17@example.com", password: "sifre17" },
  //   { email: "kullanici18@example.com", password: "sifre18" },
  //   { email: "kullanici19@example.com", password: "sifre19" },
  //   { email: "kullanici20@example.com", password: "sifre20" },
  // ];

  const users = [];
  for (let i = 1; i <= 20; i++) {
    const email = `kullanici${i}@example.com`;
    const password = `sifre${i}`;
    users.push({ email, password });
  }
  // admin kullanıcısını da ekleyelim
  users.push({ email: "admin@aa.com", password: "admin", isAdmin: true });
  console.log(users);

  // Kategorileri oluşturun
  for (const categoryName of categories) {
    const category = await Categories.create({ name: categoryName });
    console.log("Category added:", category.name);
    // Her kategori için 10 ürün oluşturun
    for (let i = 0; i < 10; i++) {
      await Products.create({
        category: category._id,
        title: `${categoryName}_${i}`,
        description: "description",
        price: 2500,
        discountPercentage: 10,
        rating: 50,
        stock: 210,
        brand: "Abc",
        thumbnail: "resim",
        images: ["resim1", "resim2", "resim3"],
      });
      console.log(category.name + "e ait ürünler eklendi");
    }
  }
  // Kullanıcıları oluşturun
  for (const user of users) {
    await User.create({
      email: user.email,
      password: user.password,
    });
    console.log("User added:", user.email);
  }
  // Senkronizasyon tamamlandı
  console.log("* Synchronized *");
}
seedDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});
