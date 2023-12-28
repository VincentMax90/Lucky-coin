const express = require("express");
const messajeRouter = express.Router();
const messajeController = require("../controllers/messaje.controller");

messajeRouter.post("/create", messajeController.MessajeCreate);

messajeRouter.get("/all", messajeController.getAllMessages);

messajeRouter.put("/:id/markAsRead", messajeController.markAsRead);


module.exports = messajeRouter;
