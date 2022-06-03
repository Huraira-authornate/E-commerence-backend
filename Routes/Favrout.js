const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Favrout = mongoose.model("Favrout");
router.post("/favrout", async (req, res) => {
  console.log(req.body);
  const { userid, productid } = req.body;
  console.log({ userid, productid });

  try {
    const favrout = new Favrout({ userid, productid });
    console.log(favrout);
    console.log("i am going to be save");
    await favrout.save();
    console.log("yes i am saved");
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
});
module.exports = router;
