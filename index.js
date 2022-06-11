const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const res = require("express/lib/response");
const app = express();
var cors = require("cors");

const corsOptions = {
  origin: "https://e-commerence-backend.vercel.app",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const PORT = 8080;
const { MongoDB } = require("./Db");

require("./modals/User");
require("./modals/Product");
require("./modals/Cart");
require("./modals/Favrout");
// app.use(bodyParser.json({limit: '25mb'}));
// app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

const authAuthor = require("./Routes/authAuthor");
const singin = require("./Routes/singin");
const product = require("./Routes/Product");
const cart = require("./Routes/Cart");
const fav = require("./Routes/Favrout");
const getProduct = require("./Routes/getProduct");
const getCart = require("./Routes/getCart");
app.use(cors());
// app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

app.use(authAuthor);
app.use(singin);
app.use(product);
app.use(cart);
app.use(fav);
app.use(getProduct);
app.use(getCart);

mongoose.connect(MongoDB);
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (err) => {
  console.log("connected to error", err);
});

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
