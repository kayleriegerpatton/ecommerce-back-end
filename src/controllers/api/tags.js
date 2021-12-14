const { Tag, Product, ProductTag } = require("../../models");
const logError = require("../../utils/logger");

// api/tags endpoint

const getAllTags = async (req, res) => {
  try {
    // find all tags
    const allTags = await Tag.findAll({
      // include associated Product data
      include: [{ model: Product }],
    });
    return res.json({ success: true, allTags });
  } catch (error) {
    logError("GET tags", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const getTagById = async (req, res) => {
  try {
    // find a single tag by its `id`
    const tag = await Tag.findByPk(req.params.id, {
      // include associated Product data
      include: [{ model: Product, through: ProductTag }],
    });
    if (tag) {
      return res.json({ success: true, tag });
    }
    return res.status(404).json({
      success: false,
      error: `Tag with id ${req.params.id} does not exist.`,
    });
  } catch (error) {
    logError("GET tag by id", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
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
    // delete tag by its `id` value
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({
      success: true,
      data: `Tag with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTagById,
  deleteTagById,
};
