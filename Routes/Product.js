const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

router.post("/product", async (req, res) => {
  console.log("hghjghjh");
  const { name, image, price, quantity, size ,catagory,description} = req.body;
  console.log(req);
  if (!name || !image || !price || !quantity || !size || !catagory||!description) {
    res.send("make sure you fill all the field corecctly");
  }
  try {
    console.log("i am in");
    const product = new Product({ name, image, price, quantity, size,catagory,description });
    console.log(product);
    console.log("i am going to be save");
    await product.save();
    console.log("i am saved");
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
});
module.exports = router;
