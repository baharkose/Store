module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403);
      next(new Error("NoPermission: You must be Admin."));
    }
  },
};
