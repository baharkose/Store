"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  if (req?.session?.id) {
    // ? session bizim verilerimizi saklamamızı sağlan yapı. Oturum bilgilerinin otomatik olark saklanmasını sağlar.
    const { id, password } = req.session;

    // - sesiondaki id userModelde varsa onu user yap. İkincisi sessiondan gelen, ilk yerde modelden gelen id. Artık bu user bizim aradığımız kişi.
    const user = await User.findOne({ _id: id });

    // - userModelde password field'ında set işlemi ile kriptolama işlemi yapıldığı için tekrar şifreleme işlemine ihtiyaç duymadık
    if (user && user.password == password) {
      // ? başına req yazınca otomatik olarak her yerden ulaşılabilir hale geldi demektir.
      //  ! artık req.user -> user, isLogin, true.... hem global hem yeni veri ataması
      req.user = user;
      req.isLogin = true;
    } else {
      // ! eğer bilgiler yanlışsa sessionu boşalt ve logini false yap.
      req.session = null;
      req.isLogin = false;
    }
  }
  next();
};
