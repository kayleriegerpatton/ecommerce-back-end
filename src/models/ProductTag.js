const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id",
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tag",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product_tag",
};

ProductTag.init(attributes, options);

module.exports = ProductTag;
