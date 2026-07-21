const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()) // for making data dynamic

app.post("/signup", async (req, res) => {
  //creating a new instance of my user model
  // const user = new User({
  //   firstName: "Sachin",
  //   lastName: "Tendulkar",
  //   emailId: "sachin@tendulakr.com",
  //   password: "sachin@123",
  // });
  const user = new User(req.body) 

  try {
    await user.save();
    res.send("User Added Successfully")
  } catch (err) {
    res.status(400).send("Error saving the user: "+ err.message)
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database can not be connected");
    console.error(err);
  });
