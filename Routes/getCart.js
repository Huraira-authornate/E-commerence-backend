const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const cart = mongoose.model("Cart");

router.get("/getCart", (req, res) => {
  console.log("yes i am in get route");
  cart
    .find()
    .then((result) => {
      res.status(200).send({
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
