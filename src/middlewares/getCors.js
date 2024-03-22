// const cors = require("cors");

// const getCorsOptions = {
//   methods: "GET", // Sadece GET isteklerine izin ver
//   origin: "*", // Tüm kaynaklardan gelen isteklere izin ver
//   optionsSuccessStatus: 200, // Bazı tarayıcılar için
// };

// module.exports = cors(getCorsOptions);
const cors = require("cors");
module.exports = function (req, res, next) {
  const corsOptions = {
    origin: "*",
    methods: "GET",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  if (req.user && req.user.isAdmin) {
    corsOptions.methods = "GET,HEAD,PUT,PATCH,POST,DELETE";
  }
  cors(corsOptions);
  next();
};
