"use strict";

var express = require("express");

var app = express();
app.use(express["static"]("public"));
app.get("/", function (req, res) {
  res.send("Jaethem8 image server");
});
app.listen(8000, function () {
  console.log("Server is running at 8000");
});