const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
  userid: { type: String, require: true },
  productid: { type: String, require: true },
});

mongoose.model("Favrout", favSchema);
