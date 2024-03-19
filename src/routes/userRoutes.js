"use strict";

/* -------------------------------------------------------
    EXPRESSJS - STORE API
------------------------------------------------------- */

const router = require("express").Router();
const User = require("../controllers/userController");

// User

// Login -logout
router.post("/login", User.login);
router.all("/logout", User.logout);

// List & Read
router.route("/").get(User.list);
router.route("/:id").get(User.read);

module.exports = router;
