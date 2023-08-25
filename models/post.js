"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate({ users }) {
      // define association here
      this.belongsTo(users, { foreignKey: "userId", as: "user" });
    }
    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined };
    }
  }
  posts.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Include a body in the Post" },
          notEmpty: { msg: "Post body must not be empty" },
        },
      },
      userId: {
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
      tableName: "posts",
      scopes: {
        includeUser: {
          include: "user",
        },
      },
    }
  );
  return posts;
};
