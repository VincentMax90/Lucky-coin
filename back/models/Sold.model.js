const db = require("../config/db");
const Sequelize = require("sequelize");

class Sold extends Sequelize.Model {}

Sold.init(
  {
  },
  { sequelize: db, modelName: "Sold" }
);

module.exports = Sold;
