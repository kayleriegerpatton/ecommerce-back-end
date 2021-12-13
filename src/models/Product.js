// external imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    validate: {
      isDecimal: true,
    },
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    validate: {
      isNumeric: true,
    },
    allowNull: false,
    defaultValue: 10,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "category",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product",
};

Product.init(attributes, options);

module.exports = Product;
