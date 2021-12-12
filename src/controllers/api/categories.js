const { Category, Product } = require("../../models");

// api/categories endpoint

const getAllCategories = (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.json("getAllCategories");
};

const getCategoryById = (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.json("getCategoryById");
};

const createCategory = (req, res) => {
  // create a new category
  res.json("createCategory");
};

const updateCategoryById = (req, res) => {
  // update a category by its `id` value
  res.json("updateCategoryById");
};

const deleteCategoryById = (req, res) => {
  // delete a category by its `id` value
  res.json("deleteCategoryById");
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
