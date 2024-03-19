const cors = require('cors');

const postCorsOptions = {
  methods: 'POST', // Sadece POST isteklerine izin ver
  origin: '*', // Tüm kaynaklardan gelen isteklere izin ver
  optionsSuccessStatus: 200 // Bazı tarayıcılar için
};

module.exports = cors(postCorsOptions);
