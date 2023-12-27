const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const messajeRouter = require("./messaje.route")

router.use("/user", userRouter);
router.use("/messaje", messajeRouter)

module.exports = router;
