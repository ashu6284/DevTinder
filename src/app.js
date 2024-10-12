const { dbConnect } = require("./config/database");
const User = require("./models/user");
const express = require("express");
const app = express();
app.use(express.json());
// adding new field
app.post("/signup", async (req, res) => {
  const details = req.body;
  const user = new User(details);
  try {
    await user.save();
    res.send("Data is added succesfully");
  } catch (e) {
    console.log(e.message);
  }
});

// get all fields
app.get("/users", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (e) {
    console.log("something went wrong");
  }
});

// get field with condition
app.get("/user", async (req, res) => {
  const name = req.body.firstName;
  try {
    const data = await User.find({ firstName: name });
    res.send(data);
  } catch (e) {
    console.log("something went wrong");
  }
});
// find the particular field and update
app.patch("/user", async (req, res) => {
  //   finding condition
  const firstName = req.body.firstName;
  // updation anything
  const data = req.body;
  try {
    await User.findOneAndUpdate({ firstName: firstName }, data);
    res.send("updated succesfully");
  } catch (e) {
    console.log("something went wrong");
  }
});

// for deleting one data
app.delete("/user", async (req, res) => {
  const data = req.body.firstName;
  try {
    await User.deleteOne({ firstName: data });
    res.send("deleted");
  } catch (e) {
    console.log("something went wrong");
  }
});
dbConnect()
  .then(() => {
    console.log("database is connected");
    app.listen(3000, () => {
      console.log("port is connected");
    });
  })
  .catch((err) => {
    console.log("database is not connected");
  });
