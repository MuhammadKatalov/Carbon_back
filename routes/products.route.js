const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");
const router = Router();

router.post("/product", productsController.postProduct);
router.get("/products", productsController.getProducts);
router.delete("/product/:id", productsController.deleteProduct);

module.exports = router;
