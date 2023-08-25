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
      },

      productDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productQty: {
        type: DataTypes.INTEGER,
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
