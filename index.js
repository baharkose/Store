// npm init -y
// $ npm i express dotenv express-async-errors cors
// $ npm i mongoose
//  npm i cookie-session

// required modules
// ! 1 gruplandırarak yazalım
// - appin ayağa kalkması için en yukarıda requirementları yapalım. env ve portumuzu oladık. ve errorhandler tabi

// oturum işlemi için - login logout işlemleri için cookie session kullanmamız gerekir.
const cookieSession = require('cookie-session');

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
require("express-async-errors");


app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'], // Güvenliği sağlamak için rastgele anahtarlar kullanın
  maxAge: 24 * 60 * 60 * 1000 // 24 saatlik session süresi
}));

// Cors integration
const getCors = require("./src/middlewares/getCors");
const postCors = require("./src/middlewares/postCors");
const auth = require("./src/middlewares/auth");

app.use("/", getCors);

// ! 2
// Configurations - dbconnection
// connect to db

const { dbConnection } = require("./db");
dbConnection();

// ! 3 Şimdi sıra middleware kullanımında
app.use(express.json());

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Store API",
    // session: req.session,
    // isLogin: req.isLogin
  });
});

// Route işlemleri
app.use("/products", require("./src/routes/productsRoutes"));
app.use("/categories", require("./src/routes/categoryRoutes"));
app.use("/users", require("./src/routes/userRoutes"));

// ! errorHandler
app.use(require("./errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

// Syncronization
// require("./src/helpers/sync");

// app.use tamamen req ve res arasında gerçekleşir ama diğerleri normal fonksiyon middleware değil bir kez çalışır. ama middlewarelerda req ve res işlemlerinde tekrar tekrar çalışır.
