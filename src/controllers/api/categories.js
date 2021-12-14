const { retry } = require("statuses");
const { Category, Product } = require("../../models");
const logError = require("../../utils/logger");

// api/categories endpoint

const getAllCategories = async (req, res) => {
  try {
    // find all categories
    const allCategories = await Category.findAll({
      // include associated Product data
      include: [{ model: Product }],
    });
    return res.json({ success: true, allCategories });
  } catch (error) {
    logError("GET categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const getCategoryById = async (req, res) => {
  try {
    // find one category by its `id` value
    const category = await Category.findByPk(req.params.id, {
      // include associated Products
      include: [{ model: Product }],
    });
    if (category) {
      return res.json({ success: true, category });
    }
    return res.status(404).json({
      success: false,
      error: `Category with id ${req.params.id} does not exist.`,
    });
  } catch (error) {
    logError("GET category by id", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const createCategory = (req, res) => {
  try {
    // create a new category
  } catch (error) {}
  res.json("createCategory");
};

const updateCategoryById = (req, res) => {
  try {
    // update a category by its `id` value
  } catch (error) {}
  res.json("updateCategoryById");
};

const deleteCategoryById = async (req, res) => {
  try {
    // delete a category by its `id` value
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({
      success: true,
      data: `Category with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
