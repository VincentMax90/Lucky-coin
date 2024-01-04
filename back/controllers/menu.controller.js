const menuService = require("../services/menu.service")

exports.creationMenu = async (req, res) => {
  try {
    const { category, name, description,price,photo} = req.body;
    const menu = await menuService.creationMenu(
      category, name, description,price,photo
     
    );
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllMenu = async (req, res) => {
  try {
    const menu = await menuService.getAllMenu();
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
