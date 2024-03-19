const cors = require("cors");

const getCorsOptions = {
  methods: "GET", // Sadece GET isteklerine izin ver
  origin: "*", // Tüm kaynaklardan gelen isteklere izin ver
  optionsSuccessStatus: 200, // Bazı tarayıcılar için
};

module.exports = cors(getCorsOptions);
