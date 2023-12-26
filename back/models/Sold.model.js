const db = require("../config/db");
const Sequelize = require("sequelize");

class Sold extends Sequelize.Model {}

Sold.init(
  {
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    seller:{
      type:Sequelize.STRING,
      allowNull:false
    },
    table: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
    
  },
  { sequelize: db, modelName: "Sold" }
);

module.exports = Sold;
