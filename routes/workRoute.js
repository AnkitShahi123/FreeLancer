const express = require("express");
const router = express.Router();
const works = require("../models/work");
const apply = require("../models/apply");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");
const uploadvideo = require("../middleware/uploadVideo");
const workController = require("../controllers/workPostController");
const applyWorkController = require("../controllers/applyWorkController");
const work = new workController();
const workapply = new applyWorkController();

router.post(
  "/work/add",
  upload.single("photo"),
  auth.verifyUser,
  auth.verifyClient,
  work.addWork
);

router.delete("/work/delete/:pid", auth.verifyUser, work.deletework);

router.put("/work/update/:id", auth.verifyUser, work.updatework);

router.get("/work/showall", function (req, res) {
  works
    .find()
    .populate("creator")
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
});

router.get("/work/showSingle/:id", work.getSinglework);

router.get("/work/search/:name", work.getSearchwork);

//////////////////////applyyy
router.post("/work/applyWork/:id", auth.verifyUser, workapply.applywork);

router.get(
  "/work/showStatus/:id",
  auth.verifyUser,
  workapply.showStatus
);




module.exports = router;
