const db = require("../config/db");
const Sequelize = require("sequelize");

class Messaje extends Sequelize.Model {}

Messaje.init(
  {
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },email: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },

    messaje: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    read: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
   
  },
  { sequelize: db, modelName: "messaje" }
);

module.exports = Messaje;
