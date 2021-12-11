const { Router } = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../../controllers/api/products");

const router = Router();

// /api/products endpoints

// get all products
router.get("/", getAllProducts);

// get one product
router.get("/:id", getProductById);

// create new product
router.post("/", createProduct);

// update product
router.put("/:id", updateProductById);

// delete product
router.delete("/:id", deleteProductById);

module.exports = router;
