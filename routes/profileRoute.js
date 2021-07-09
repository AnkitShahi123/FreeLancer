const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");
const uploadPdf = require("../middleware/uploadPdf");
const profileController = require("../controllers/profileController");
const profile = new profileController();

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
  profile.editProfileClient
);


router.put(
  "/profile/editProfileFreelancer/:id",
  [
    check("projects", "Project must be entered").not().isEmpty(),
    check("experience", "Experience must be entered").not().isEmpty(),
  ],
  profile.editProfileFreelancer
);

router.put(
  "/profile/editResume/:id",
  [check("resume", "You must upload a file before saving.").not().isEmpty()],
  uploadPdf.single("resume"),
  profile.editResume
);



module.exports = router;
