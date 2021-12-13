const { Category, Product } = require("../../models");

// api/categories endpoint

const getAllCategories = (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
  } catch (error) {}
  res.json("getAllCategories");
};

const getCategoryById = (req, res) => {
  try {
    // find one category by its `id` value
    // be sure to include its associated Products
  } catch (error) {}

  res.json("getCategoryById");
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

const deleteCategoryById = (req, res) => {
  try {
    // delete a category by its `id` value
  } catch (error) {}
  res.json("deleteCategoryById");
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
