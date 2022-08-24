const Product = require("../models/Product.model");

module.exports.productsController = {
  getProducts: async (req, res) => {
    try {
      const prod = await Product.find().populate("catProd");
      return res.json(prod);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе: " + error.toString(),
      });
    }
  },

  postProduct: async (req, res) => {
    try {
      const p = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        count: req.body.count,
        catProd: req.body.catProd,
      });
      return res.json(p);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении: " + error.toString(),
      });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const del = await Product.findByIdAndDelete(req.params.id);
      return res.json(del);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении: " + error.toString(),
      });
    }
  },
};
