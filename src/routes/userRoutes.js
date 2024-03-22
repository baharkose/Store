"use strict";

/* -------------------------------------------------------
    EXPRESSJS - STORE API
------------------------------------------------------- */

const router = require("express").Router();
const User = require("../controllers/userController");
router.use(require("../middlewares/postCors"));

// User

// Login -logout
router.post("/login", User.login);
router.all("/logout", User.logout);

// List & Read
// router.route("/").get(User.list).post(User.create);
// router.route("/").get(User.list);
// router.route("/:id").get(User.read).put(User.update);

module.exports = router;
