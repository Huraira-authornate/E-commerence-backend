const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

router.get("/getProduct", (req, res) => {
  console.log("yes i am in get route");
  Product.find()
    .then((result) => {
      res.status(200).send({
        result,
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
