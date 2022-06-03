const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Cart = mongoose.model("Cart");
router.post("/cart", async (req, res) => {
  console.log(req.body);
  const { userid, productid } = req.body;
  console.log({ userid, productid });

  try {
    const cart = new Cart({ userid, productid });
    console.log(cart);
    console.log("i am going to be save");
    await cart.save();
    console.log("yes i am saved");
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
});
module.exports = router;
