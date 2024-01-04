  const db = require("../config/db");
  const Sequelize = require("sequelize");

  class Menu extends Sequelize.Model {}

  Menu.init(
    {
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true,
        },
      },
    },
    { sequelize: db, modelName: "menu" }
  );

  module.exports = Menu;
