// const cors = require('cors');

// const postCorsOptions = {
//   methods: 'POST', // Sadece POST isteklerine izin ver
//   origin: '*', // Tüm kaynaklardan gelen isteklere izin ver
//   optionsSuccessStatus: 200 // Bazı tarayıcılar için
// };

// module.exports = cors(postCorsOptions);

const cors = require("cors");
module.exports = function (req, res, next) {
  const corsOptions = {
    origin: "*",
    methods: "POST",
    optionsSuccessStatus: 204,
  };

  cors(corsOptions);
  next();
};
