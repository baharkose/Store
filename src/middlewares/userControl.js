"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const User = require("../models/userModel")

module.exports = async (req, res, next) => {

    if (req?.session?.id) {

        const { id, password } = req.session

        const user = await User.findOne({ _id: id })

        if (user && user.password == password) {

            // ? başına req yazınca otomatik olarak her yerden ulaşılabilir hale geldi demektir.
            req.user = user
            req.isLogin = true

        } else {

            req.session = null
            req.isLogin = false
        }
    }
    next()
}