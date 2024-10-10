const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("data is posted succesfully");
});
app.get("/user", async (req, res) => {
  const findAge = req.body.age;
  try {
    const detail = await User.find({ age: findAge });
    res.send(detail);
  } catch (err) {
    console.log("something went wrong");
  }
});
connectDB()
  .then(() => {
    console.log("DataBase is connected succesfully");
    app.listen(3000, () => {
      console.log("port is listening");
    });
  })
  .catch((error) => console.log("DataBase is not connected"));
