"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();
const categories = require("../controllers/categoryController");

router.route("/").get(categories.list).post(categories.create);
router.route("/:id").get(categories.read);
module.exports = router;
