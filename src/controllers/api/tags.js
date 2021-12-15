const { Tag, Product, ProductTag } = require("../../models");
const logError = require("../../utils/logger");

// API/TAGS endpoint

const getAllTags = async (req, res) => {
  try {
    // find all tags
    const allTags = await Tag.findAll({
      // include associated Product data
      include: [{ model: Product }],
    });
    return res.json({ success: true, allTags });

    // server error
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
    return res.status(400).json({
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
    const { tag_name } = req.body;

    // check request body contents
    if (tag_name) {
      await Tag.create({ tag_name });
      return res.json({ success: true, data: `Created new ${tag_name} tag.` });
    }
    // missing/bad data entry in request
    return res.status(400).json({
      success: false,
      error:
        "Please read the documentation and provide the appropriate data entry.",
    });

    // server error
  } catch (error) {
    logError("POST tag", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const updateTagById = async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const { tag_name } = req.body;
    const { id } = req.params;

    // check for tag in db
    const tagId = await Tag.findByPk(id);

    if (tagId) {
      await Tag.update(tag_name, {
        where: {
          id,
        },
      });

      return res.json({
        success: true,
        data: `Updated tag to ${tag_name}.`,
      });
    }
    return res.status(400).json({
      success: false,
      error: `Tag with id ${id} doesn't exist.`,
    });
  } catch (error) {
    logError("PUT tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const deleteTagById = async (req, res) => {
  try {
    // check if tag exists
    const tag = await Tag.findByPk(req.params.id);

    if (tag) {
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
    }
    return res.json({
      success: false,
      error: `Tag with id ${req.params.id} does not exist.`,
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
