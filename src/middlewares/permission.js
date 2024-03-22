module.exports = {
  isAdmin: (req, res, next) => {
    // ? req.user bizim userControl middlewareinden global olarak geliyor. Orda findOne ile bulduk onu.
    if (req.user && req.user.isAdmin) {
      console.log(req.user.isAdmin);
      next();
    } else {
      // res.errorStatusCode = 403;
      throw new Error("No Permission: You must be admin");
    }
  },
};
