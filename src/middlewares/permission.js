"use strict";
/* -------------------------------------------------------
    EXPRESS - STORE API
------------------------------------------------------- */

module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      nrext();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must be Admin.");
    }
  },
};
