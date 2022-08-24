const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  products: [
    {
      amount: {
        type: Number,
      },
      productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product",
      },
    },
  ],
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

// const Product = mongoose.model("Product", productSchema);

// module.exports = Product;
