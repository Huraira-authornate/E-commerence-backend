const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userid: { type: String, require: true },
  productid: { type: String, require: true },
});

mongoose.model("Cart", cartSchema);
