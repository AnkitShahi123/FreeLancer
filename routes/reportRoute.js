const express = require("express");
const router = express.Router();
const works = require("../models/work");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const reportWorkController = require("../controllers/reportWorkController");
const work = new workController();

const workreport = new reportWorkController();

router.post("/work/reportWork/:id", auth.verifyUser, workreport.reportWork);

router.get(
  "/work/showMyreported",
  auth.verifyUser,
  workreport.showMyReported
);

router.delete(
  "/work/deleteMyreport/:id",
  auth.verifyUser,
  workreport.deleteMyReport
);



module.exports = router;
