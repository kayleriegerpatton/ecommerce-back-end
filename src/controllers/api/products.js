const { Product, Category, Tag, ProductTag } = require("../../models");
const logError = require("../../utils/logger");

// api/products endpoint

const getAllProducts = async (req, res) => {
  try {
    // find all products
    const allProducts = await Product.findAll({
      // include  associated Category and Tag data
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    return res.json({ success: true, allProducts });
  } catch (error) {
    logError("GET products", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const getProductById = async (req, res) => {
  try {
    // find a single product by its `id`
    const product = await Product.findByPk(req.params.id, {
      // include associated Category and Tag data
      include: [
        {
          model: Category,
        },
        { model: Tag, through: ProductTag },
      ],
    });
    if (product) {
      return res.json({ success: true, product });
    }
    return res.status(404).json({
      success: false,
      error: `Product with id ${req.params.id} does not exist.`,
    });
  } catch (error) {
    logError("GET product by id", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const createProduct = (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const updateProductById = (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
};

const deleteProductById = (req, res) => {
  try {
    // delete one product by its `id` value
  } catch (error) {}
  res.json("deleteProductById");
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
