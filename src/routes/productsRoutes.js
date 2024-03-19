"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();

const products = require("../controllers/productsController");

router.route("/").get(products.list).post(products.create);
router.route("/:id").get(products.read);

module.exports = router;
