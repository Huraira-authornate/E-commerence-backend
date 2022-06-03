const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.post("/singup", async (req, res) => {
  const { email, name, password } = req.body;
  console.log(req.body);
  try {
    const user = new User({ email, name, password });
    await user.save();
    res.send("hello");
  } catch (err) {
    res.status(422).send(error.message);
  }
});

module.exports = router;
