const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");
const profileController = require("../controllers/profileController");
const profile = new profileController();

router.get("/clientProfile",auth.verifyUser,auth.verifyClient,profile.showProfileClient);


module.exports =router;