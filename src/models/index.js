// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// ASSOCIATIONS
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  // when a product is deleted, set its id to null in category table
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_id",
  // when category is deleted, set its id as null in product table
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  // onDelete: "",
  // onUpdate: "",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  // onDelete: "",
  // onUpdate: "",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
