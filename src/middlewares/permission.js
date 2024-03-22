module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      console.log(req.user.isAdmin);
      next();
    } else {
      // res.errorStatusCode = 403;
      console.log(req.user.isAdmin);
      throw new Error("No Permission: You must admin");
    }
  },
};
