// npm init -y
// $ npm i express dotenv express-async-errors
// $ npm i mongoose
//  npm i cookie-session

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
require("express-async-errors");


