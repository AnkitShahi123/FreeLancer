const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");
const profileController = require("../controllers/profileController");
const profile = new profileController();

router.get("/allClient", profile.showAllClient);
router.get("/allFreelancer", profile.showAllFreelancer);

// router.get("/allUsers", auth.verifyUser, profile.showAllUsers);
router.delete("/deleteUser/:id",
auth.verifyUser, profile.deleteUser);

router.delete(
  "/deleteUser/:id",
  auth.verifyUser,
  profile.deleteUser
);


router.get(
  "/clientProfile",
  auth.verifyUser,
  auth.verifyClient,
  profile.showProfileClient
);
router.get(
  "/freelancerProfile",
  auth.verifyUser,
  auth.verifyFreelancer,
  profile.showProfileFreelancer
);

router.put(
  "/profile/editProfileClient/:id",
  auth.verifyUser,
  profile.editProfileClient
);

router.put(
  "/profile/editProfileFreelancer/:id",
  auth.verifyUser,
  profile.editProfileFreelancer
);

router.put(
  "/profile/editResume/:id",
  [check("resume", "You must upload a file before saving.").not().isEmpty()],
  upload.single("resume"),
  profile.editResume
);

module.exports = router;
