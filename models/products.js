"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      productTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Product title must have a name" },
          notEmpty: { msg: "Product title must not be empty" },
        },
      },

      productDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Product description must have a name" },
          notEmpty: { msg: "Product description must not be empty" },
        },
      },

      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Product price must have a price" },
          notEmpty: { msg: "Product price must not be empty" },
        },
      },
      productQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Product price must have a price" },
          notEmpty: { msg: "Product price must not be empty" },
        },
      },
      productImg: {
        type: DataTypes.BLOB,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "products",
      modelName: "products",
    }
  );
  return products;
};
