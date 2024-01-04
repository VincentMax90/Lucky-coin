const Menu = require("../models/Menu.model");


async function creationMenu(category, name, description,price,photo) {
  try {
    
   
    const menu = await Menu.create({
      category, name, description,price,photo
    });
    return menu;
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = {
  creationMenu,
  
};

