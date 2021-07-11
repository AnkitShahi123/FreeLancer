const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

class AuthController {
  register(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      if (req.file == undefined) {
        console.log("file is undefined");
        return res.status();
      }
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
      const age = req.body.age;
      const address = req.body.address;
      const phone = req.body.phone;
      const path = req.file.path;
      const role = req.body.role;
      bcrypt.hash(password, 10, function (err, hash) {
        const all = new user({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: hash,
          age: age,
          address: address,
          phone: phone,
          photo: path,
          role: role,
        });
        all
          .save()
          .then(function (Result) {
            res
              .status(201)
              .json({ message: "Sucessfully Done", success: true });
            console.log("Status-" + 201 + ": Sucessfully Done");
          })
          .catch(function (e) {
            res.status(500).json({ message: e });

            console.log("Status-" + 500 + e);
          });
      });
    }
  }

  login(req, res) {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    console.log(req.body);
    user
      .findOne({ email: email })
      .then(function (userData) {
        console.log(userData);
        if (userData === null) {
          return res.status(401).json({
            message: "Inavalid Emails or Password",
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
          const role = userData.role;
          res.status(200).json({
            message: "Sucessfull Login ",
            token: token,
            success: true,
            id: id,
            email: useremail,
            firstName: firstname,
            lastName: lastname,
            role: role,
          });
          console.log("Status-" + 201 + ": Login sucessfull");
        });
      })
      .catch();
  }
}

module.exports = AuthController;
