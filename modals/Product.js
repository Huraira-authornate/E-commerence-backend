const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
  size: { type: String, require: true },
  catagory:{ type: String, require: true },
  description:{ type: String, require: true }
});

mongoose.model("Product", productSchema);
