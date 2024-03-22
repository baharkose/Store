// npm init -y
// $ npm i express dotenv express-async-errors cors
// $ npm i mongoose
//  npm i cookie-session

// required modules
// ! 1 gruplandırarak yazalım
// ! bütün model isimleri tekil isimlendirilir.
//! boolean ifadelerde değişken isimleri is ön eki ile isimlendirilir.
// - appin ayağa kalkması için en yukarıda requirementları yapalım. env ve portumuzu oladık. ve errorhandler tabi

// oturum işlemi için - login logout işlemleri için cookie session kullanmamız gerekir.
const cookieSession = require("cookie-session");

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
require("express-async-errors");

const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY, // Şifreleme anahtarı
    // maxAge: 1000 * 60 * 60 * 24 * 3  // miliseconds // 3 days
  })
);

// Cors integration
const getCors = require("./src/middlewares/getCors");
// const postCors = require("./src/middlewares/postCors");
// const auth = require("./src/middlewares/auth");
app.use(require("./src/middlewares/userControl"));

app.use("/", getCors);

// ! 2
// Configurations - dbconnection
// connect to db

const { dbConnection } = require("./db");
dbConnection();

// ! 3 Şimdi sıra middleware kullanımında
app.use(express.json());

app.all("/", (req, res) => {
  if (req.isLogin) {
    res.send({
      error: false,
      message: "WELCOME STORE API PROJECT",
      session: req.session,
      user: req.user,
    });
  } else {
    res.send({
      error: true,
      message: "WELCOME STORE API PROJECT",
      session: req.session,
    });
  }
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
