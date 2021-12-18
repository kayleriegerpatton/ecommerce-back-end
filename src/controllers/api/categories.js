// internal imports
const { Category, Product } = require("../../models");
const logError = require("../../utils/logger");
const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

// API/CATEGORIES endpoint

const getAllCategories = async (req, res) => {
  try {
    // find all categories
    const allCategories = await Category.findAll({
      // include associated Product data
      include: [{ model: Product }],
    });
    return res.json({ success: true, allCategories });

    // server error
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
    return res.status(400).json({
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

const createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;

    // check request body contents
    if (category_name) {
      await Category.create({ category_name });

      return res.json({
        success: true,
        data: `Created new ${category_name} category.`,
      });
    }

    // missing/bad data entry in request
    return res.status(400).json({
      success: false,
      error:
        "Please read the documentation and provide the appropriate data entry.",
    });

    // server error
  } catch (error) {
    logError("POST category", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { category_name } = req.body;
    const { id } = req.params;

    // check for category id in db
    const categoryId = await Category.findByPk(id);

    // update a category by its `id` value
    if (categoryId) {
      await Category.update(category_name, {
        where: {
          id,
        },
      });

      return res.json({
        success: true,
        data: `Updated category to ${category_name}.`,
      });
    }
    return res
      .status(400)
      .json({ success: false, error: `Category with id ${id} doesn't exist.` });
  } catch (error) {
    logError("PUT category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    // check if category exists
    const category = await Category.findByPk(req.params.id);
    if (category) {
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
    }
    return res.json({
      success: false,
      error: `Category with id ${req.params.id} does not exist.`,
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
