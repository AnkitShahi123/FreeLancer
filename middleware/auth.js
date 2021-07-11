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

