const { Product, Category, Tag, ProductTag } = require("../../models");
const logError = require("../../utils/logger");
const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

// API/PRODUCTS endpoint

const getAllProducts = async (req, res) => {
  try {
    // find all products
    const allProducts = await Product.findAll({
      // include  associated Category and Tag data
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    return res.json({ success: true, allProducts });

    // server error
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
    return res.status(400).json({
      success: false,
      error: `Product with id ${req.params.id} does not exist.`,
    });
  } catch (error) {
    logError("GET product by id", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const createProduct = async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    const { product_name, price, stock, category_id, tagIds } = req.body;

    // check request body contents
    if (product_name && price && stock && category_id && tagIds) {
      const product = await Product.create({
        product_name,
        price,
        stock,
        category_id,
        tagIds,
      });

      // map over ids array to create id array of objects
      if (tagIds.length) {
        const productTagIdArray = tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });

        // bulk create producttag records from id objects
        await ProductTag.bulkCreate(productTagIdArray);
      }

      return res.json({ success: true, data: "Created new product." });
    }
    // req.body missing entries (bad request)
    return res.status(400).json({
      success: false,
      error:
        "Please read the documentation and provide the appropriate data entries.",
    });

    // server error
  } catch (error) {
    logError("POST product", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const updateProductById = (req, res) => {
  const { product_name, price, stock, tagIds } = req.body;

  if (!product_name || !price || !stock || !tagIds) {
    return res.status(404).json({
      success: false,
      error:
        "Please read the documentation and provide the appropriate data entry.",
    });
  }

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
    .then(() => {
      return res.json({
        success: true,
        data: `Updated category to ${product_name}.`,
      });
    })
    .catch((error) => {
      logError("PUT product by id", error.message);
      return res
        .status(500)
        .json({ success: false, error: "Failed to send response." });
    });
};

const deleteProductById = async (req, res) => {
  try {
    // check if product exists
    const product = await Product.findByPk(req.params.id);

    if (product) {
      // delete one product by its `id` value
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.json({
        success: true,
        data: `Product with id ${req.params.id} deleted.`,
      });
    }
    return res.json({
      success: false,
      error: `Product with id ${req.params.id} does not exist.`,
    });
  } catch (error) {
    logError("DELETE product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
