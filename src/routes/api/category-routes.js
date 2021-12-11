const { Router } = require("express");
const {
  deleteCategoryById,
  updateCategoryById,
  createCategory,
  getCategoryById,
  getAllCategories,
} = require("../../controllers/api/categories");

const router = Router();

// /api/categories endpoints

router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

router.post("/", createCategory);

router.put("/:id", updateCategoryById);

router.delete("/:id", deleteCategoryById);

module.exports = router;
