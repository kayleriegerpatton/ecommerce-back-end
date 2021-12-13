const { Tag, Product, ProductTag } = require("../../models");

// api/tags endpoint

const getAllTags = (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
  } catch (error) {}
  res.json("getAllTags");
};

const getTagById = (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
  } catch (error) {}
  res.json("getTagById");
};

const createTag = (req, res) => {
  try {
    // create a new tag
  } catch (error) {}
  res.json("createTag");
};

const updateTagById = (req, res) => {
  try {
    // update a tag's name by its `id` value
  } catch (error) {}
  res.json("updateTagById");
};

const deleteTagById = (req, res) => {
  try {
    // delete on tag by its `id` value
  } catch (error) {}
  res.json("deleteTagById");
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTagById,
  deleteTagById,
};
