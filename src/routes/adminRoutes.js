"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();

const products = require("../controllers/productsController");
const categories = require("../controllers/categoryController");




router.route("/").get(products.list).post(products.create);
// sadece is Admin silebilir.
// router.route("/:id").get(products.read).delete(isAdmin,products.delete); user da ise cookiedeki id ve userid aynı olmalı. Bunun içinde ayrı bir middleware yazılmalı.
router.route("/:id").get(products.read).delete(products.delete);

router.route("/").get(categories.list).post(categories.create);
router.route("/:id").get(categories.read);

module.exports = router;
