const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/product.controller");

router.post("", productControllers.createProduct);
router.get("", productControllers.findAllProducts);
router.get("/:id", productControllers.findProductById);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

module.exports = router;