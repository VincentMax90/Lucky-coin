const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const messajeRouter = require("./messaje.route");
const menuRouter = require("./menu.route");

router.use("/user", userRouter);
router.use("/messaje", messajeRouter);
router.use("/menu", menuRouter);


module.exports = router;
