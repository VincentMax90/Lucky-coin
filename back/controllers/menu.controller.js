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


