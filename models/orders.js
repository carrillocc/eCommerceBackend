"use strict";
const { Model } = require("sequelize");
// const products = require("./products");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ users, products }) {
      // define association here
      //asociation will reference users id and product id

      this.belongsTo(users, { foreignKey: "id", as: "user" });
      this.belongsTo(products, { foreignKey: "id", as: "product" });
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        userId: undefined,
        productId: undefined,
      };
    }
  }
  orders.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
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
      tableName: "orders",
      // modelName: "Orders",
      scopes: {
        includeUser: {
          include: "user",
        },
        includeProducts: {
          include: "product",
        },
      },
    }
  );
  return orders;
};
