const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});
app.get("/test", (req, res) => {
  res.send("TEST");
});
app.listen(3000, () => {
  console.log("port is listening");
});
