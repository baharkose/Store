"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

require("express-async-errors");

const User = require("../models/userModel");
const passwordEncrypt = require("../helpers/passwordEncrypte");

module.exports = {
  list: async (req, res) => {
    const data = await User.find();
    res.status(200).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });
    res.status(202).send({
      error: false,
      data,
    });
  },

  // ***  login - logout ***

  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });

      if (user && user.password == passwordEncrypt(password)) {
        // SESSION
        req.session.id = user.id;
        req.session.password = user.password;
        // burada role tanımlama işlemleri yapılacak. req.session.isAdmin = true -> cookie'i çözümlediğimiz yerde kullanıcı bilgilerine ekleyeceğiz. Permission middlewareı olacak admin mi değil mi ona bakacağız.
        // burada password ve id almak yerine kullanıcın diğer bilgilerini almak daha güvenlidir. Sonra istek attığımızda headers kısmından bu bilgileri tekrar çekip kullanabiliriz. Cookie vs. işlemleri için.

        // req.session.role -> o esnadaki kullanıcın rolü buraya eklenecek.

        if (req.body?.remindMe) {
          req.session.remindMe = req.body.remindMe;
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 days
        }

        // COOKIE
        res.status(200).send({
          error: false,
          message: "Login Ok",
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters are not true");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are not true");
    }
  },

  logout: async (req, res) => {
    // Session destroying
    req.session = null;
    res.status(200).send({
      error: false,
      message: "Logout Ok",
    });
  },
};
