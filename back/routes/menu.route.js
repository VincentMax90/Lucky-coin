const express = require("express");
const menuRouter = express.Router();
const menuController = require("../controllers/menu.controller");

menuRouter.post("/creation", menuController.creationMenu);

menuRouter.get("/allMenu", );

menuRouter.put("/:id/edit",);

module.exports = menuRouter;



