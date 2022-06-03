const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
// require("../modals/User");

router.post("/singin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send("have email");
    return res.status(422).send({ error: " email or pasword" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.send("have user");
    return res.status(422).send({ error: "must provide email or pasword" });
  }
  try {
    const isPassword = await user.authenticate(password);

    if (isPassword) {
      console.log("yes i am true");
    } else {
      console.log("ooops i am wrong");
    }
  } catch (err) {
    return res.status(422).send({ error: "must provide email or pasword" });
  }
});

module.exports = router;
