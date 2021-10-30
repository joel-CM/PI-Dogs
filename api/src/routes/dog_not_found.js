const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const route = Router();

// const { API_KEY } = process.env;

const axios = require("axios");

route.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/img/interrogante.png");
});
module.exports = route;
