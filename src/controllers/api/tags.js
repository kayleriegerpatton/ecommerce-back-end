const { Tag, Product, ProductTag } = require("../../models");
const logError = require("../../utils/logger");

// api/tags endpoint

const getAllTags = async (req, res) => {
  try {
    // find all tags
    const allTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    return res.json({ success: true, allTags });
    // include associated Product data
  } catch (error) {
    logError("GET tags", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
  // res.json("getAllTags");
};

const getTagById = async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
  } catch (error) {}
  res.json("getTagById");
};

const createTag = async (req, res) => {
  try {
    // create a new tag
  } catch (error) {}
  res.json("createTag");
};

const updateTagById = async (req, res) => {
  try {
    // update a tag's name by its `id` value
  } catch (error) {}
  res.json("updateTagById");
};

const deleteTagById = async (req, res) => {
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
