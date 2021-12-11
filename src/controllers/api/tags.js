const { Tag, Product, ProductTag } = require("../../models");

const getAllTags = (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  res.json("getAllTags");
};

const getTagById = (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.json("getTagById");
};

const createTag = (req, res) => {
  // create a new tag
  res.json("createTag");
};

const updateTagById = (req, res) => {
  // update a tag's name by its `id` value
  res.json("updateTagById");
};

const deleteTagById = (req, res) => {
  // delete on tag by its `id` value
  res.json("deleteTagById");
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTagById,
  deleteTagById,
};
