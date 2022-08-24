const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  count: Number,
  catProd: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
