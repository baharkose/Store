"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();

const products = require("../controllers/productsController");
const categories = require("../controllers/categoryController");

// ! uzun yol
const permissions = require("../middlewares/permission");

// ! kısayol
const { isAdmin } = require("../middlewares/permission");
// + direk isAdmini çağırabiliyoruz. ya da üsttekinden de direk routera çağırabiliriz
// router.use(isAdmin);
// router.use(permissions.isAdmin)

// !uzun yol
router
  .route("/")
  .get(permissions.isAdmin && products.list)
  .post(permissions.isAdmin && products.create);
// sadece is Admin silebilir.
// router.route("/:id").get(products.read).delete(isAdmin,products.delete); user da ise cookiedeki id ve userid aynı olmalı. Bunun içinde ayrı bir middleware yazılmalı.
router
  .route("/:id")
  .get(permissions.isAdmin && products.read)
  .delete(permissions.isAdmin && products.delete);

router
  .route("/")
  .get(permissions.isAdmin && categories.list)
  .post(permissions.isAdmin && categories.create);
router.route("/:id").get(permissions.isAdmin && categories.read);

module.exports = router;
