const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Jaethem8 image server");
});

app.listen(8000, () => {
  console.log("Server is running at 8000");
});
