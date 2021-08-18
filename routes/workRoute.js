const express = require("express");
const router = express.Router();
const works = require("../models/work");
const apply = require("../models/apply");
const report = require("../models/report");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");
const uploadvideo = require("../middleware/uploadVideo");
const workController = require("../controllers/workPostController");
const applyWorkController = require("../controllers/applyWorkController");
const saveWorkController = require("../controllers/saveWorkController");
const reportWorkController = require("../controllers/reportWorkController");
const work = new workController();
const workapply = new applyWorkController();
const worksave = new saveWorkController();
const workreport = new reportWorkController();

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

router.get("/work/showStatus/:id", auth.verifyUser, workapply.showStatus);

router.get("/work/showMyApplied", auth.verifyUser, workapply.showMyApplied);

router.delete(
  "/work/deleteMyApplied/:id",
  auth.verifyUser,
  workapply.deleteMyApplied
);

router.get(
  "/work/showMyListings",
  auth.verifyUser,
  work.showMyListings
);

router.delete(
  "/work/delete/:pid",
  auth.verifyUser,
  work.deletework
);

router.put("/work/update/:id", auth.verifyUser,work.updatework);

router.get(
  "/work/showWhoApplied/:id",
  auth.verifyUser,
  workapply.showWhoApplied
);

router.put(
  "/work/approvework/:id",
  auth.verifyUser,
  workapply.approvework
);

////////////////////////saved works routess
router.post("/work/saveWork/:id", auth.verifyUser, worksave.saveWork);

router.get(
  "/work/showMySaved",
  auth.verifyUser,
  worksave.showMySaved
);

router.delete(
  "/work/deleteMySaved/:id",
  auth.verifyUser,
  worksave.deleteMySaved
);

///////////timers
router.put(
  "/work/startworktimer/:id",
  auth.verifyUser,
  workapply.startWorkTimer
);
router.put(
  "/work/stopworktimer/:id",
  auth.verifyUser,
  workapply.stopWorkTimer
);

router.get("/work/showMyStarted", function (req, res) {
  apply
    .find(
      {timerStatus:"Started"}
    )
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
});

router.get("/work/showMyStopped", function (req, res) {
  apply
    .find(
      {timerStatus:"Stopped"}
    )
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
});

router.get("/work/showCompletedFreelancers", function (req, res) {
  apply
    .find(
      {timerStatus:"Stopped"}
    )
    .populate("userid")
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
});


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

///approve work
router.post("/work/approveThisWork/:id", auth.verifyUser, workreport.reportWork);



module.exports = router;
