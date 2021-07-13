const express = require("express");
const router = express.Router();
const works = require("../models/work");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");
const workController = require("../controllers/workPostController");
const work = new workController();

router.post(
  "/work/add",
  upload.single("photo"),
  auth.verifyUser,
  auth.verifyClient,
  work.addWork
);

router.delete("/work/delete/:pid", auth.verifyUser, work.deletework);

router.put("/work/update/:id",auth.verifyUser, work.updatework);
module.exports = router;
