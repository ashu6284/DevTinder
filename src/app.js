const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
const app = express();
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "shailendra",
    lastName: "jaiswal",
    emailId: "ashu6284@gmail.com",
    password: "12345678",
    age: 19,
    gender: "male",
  });
  await user.save();
  res.send("data is posted succesfully");
});
connectDB()
  .then(() => {
    console.log("DataBase is connected succesfully");
    app.listen(3000, () => {
      console.log("port is listening");
    });
  })
  .catch((error) => console.log("DataBase is not connected"));
