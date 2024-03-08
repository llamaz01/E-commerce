const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user.controller");

router.post("", userControllers.createUser);
router.get("/:id", userControllers.findUserById);

module.exports = router;