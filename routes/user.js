const express = require("express");
const router = express.Router();
const user = require("../models/user");
const tokenVerification = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController");

const auth = new authController();
const token = tokenVerification.verifyUser;

//adding register api
router.post("/register/add",
auth.register);


module.exports = router;