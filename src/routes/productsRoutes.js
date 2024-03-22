"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();

const products = require("../controllers/productsController");
const categories = require("../controllers/categoryController");

// ! uzun yol
const permissions = require("../middlewares/permission");
const userControl = require("../middlewares/userControl");

// ! kısayol
// const { isAdmin } = require("../middlewares/permission");
// + direk isAdmini çağırabiliyoruz. ya da üsttekinden de direk routera çağırabiliriz
// router.use(isAdmin);
// ! en kısa yol direk router.use yazdık. önce
// router.use(permissions.isAdmin)
// router
//   .route("/")
//   .get( products.list)
//   .post( products.create);

// !uzun yol
router.route("/").get(products.list);

// router.route("/:id").get(products.read).delete(isAdmin,products.delete); user da ise cookiedeki id ve userid aynı olmalı. Bunun içinde ayrı bir middleware yazılmalı.
router.route("/:id").get(products.read);
router.route("/categories").get(categories.list);
router.route("/categories/:id");

module.exports = router;
