const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); //third party
const { check, validationResult } = require("express-validator");

class AuthController {
  register(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
      console.log("not registered");
    } else {
      console.log("register");

      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
      bcrypt.hash(password, 10, function (err, hash) {
        const me = new user({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: hash,
        });
        me.save()
          .then(function (Result) {
            res.status(201).json({ message: "Done", success: true });
            console.log("Status-" + 201 + ":Done");
          })
          .catch(function (e) {
            res.status(500).json({ message: e });

            console.log("Status-" + 500 + e);
          });
      });
    }
  }

  login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    user
      .findOne({ email: email })
      .then(function (userData) {
        console.log(userData);
        if (userData === null) {
          return res.status(401).json({
            message: "Inavalid Email or Password",
            success: false,
          });
          console.log("Status-" + 401 + ": Login unsucessfull");
        }
        bcrypt.compare(password, userData.password, function (err, result) {
          if (result === false) {
            return res.status(401).json({
              message: "Inavalid Email or Password",
              success: false,
            });
            console.log("Status-" + 401 + ": Login unsucessfull");
          }
          const token = jwt.sign({ userID: userData._id }, "secretkey");
          const id = userData._id;
          const useremail = userData.email;
          const firstname = userData.firstname;
          const lastname = userData.lastname;
          res.status(200).json({
            message: "Sucessfull Login ",
            token: token,
            success: true,
            id: id,
            email: useremail,
            firstName: firstname,
            lastName: lastname,
          });
          console.log("Status-" + 201 + ": Login sucessfull");
        });
      })
      .catch();
  }
}

module.exports = AuthController;
