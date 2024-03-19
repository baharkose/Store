// npm init -y
// $ npm i express dotenv express-async-errors
// $ npm i mongoose
//  npm i cookie-session

// required modules
// ! 1 gruplandırarak yazalım
// - appin ayağa kalkması için en yukarıda requirementları yapalım. env ve portumuzu oladık. ve errorhandler tabi

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
require("express-async-errors");

// ! 2
// Configurations - dbconnection
// connect to db

const { dbConnection } = require("./db");
dbConnection();

// ! 3 Şimdi sıra middleware kullanımında
app.use(express.json());
