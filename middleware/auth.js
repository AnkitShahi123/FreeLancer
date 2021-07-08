const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports.verifyUser = function (req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
    console.log(token);
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodeData = jwt.verify(token, "secretkey");
    User.findOne({ _id: decodeData.userID })
      .then(function (result) {
        req.user = result;
        next();
      })
      .catch(function (err) {
        res.status(401).json({ message: err });
      });
  } catch (err) {
    res.status(401).json({ message: "Access Unauthorized" });
  }
};

module.exports.verifyAdmin = function (req, res, next) {
  if (!req.user) {
    return res.status(402).json({ message: "Unauthorized user" });
  } else if (req.user.role !== "Admin") {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  next();
};

module.exports.verifyClient = function (req, res, next) {
  if (!req.user) {
    return res.status(402).json({ message: "Unauthorized client" });
  } else if (req.user.role !== "Client") {
    return res.status(401).json({ message: "Unauthorized client" });
  }
  console.log(req.user.role);

  next();
};
module.exports.verifyFreelancer = function (req, res, next) {
  if (!req.user) {
    return res.status(402).json({ message: "Unauthorized freelancer" });
  } else if (req.user.role !== "Freelancer") {
    return res
      .status(401)
      .json({ message: "Unauthorization freelancer" });
  }

  next();
};