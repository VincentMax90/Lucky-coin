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


async  function getAllMenu() {
  try {
    const menu = await Menu.findAll();
    return menu;
  } catch (error) {
    throw new Error(`Error retrieving menu: ${error.message}`);
  }
}


module.exports = {
  creationMenu,getAllMenu
  
};

