const express = require("express");
const messajeRouter = express.Router();
const messajeController = require("../controllers/messaje.controller");


messajeRouter.post("/create", messajeController.MessajeCreate);




module.exports = messajeRouter;

