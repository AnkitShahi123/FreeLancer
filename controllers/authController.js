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
        return res.status();
      }

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
            //success insert
            res
              .status(201)
              .json({ message: "done", success: true });
            console.log("Status-" + 201 + ": done");
          })
          .catch(function (e) {
            res.status(500).json({ message: e });

            console.log("Status-" + 500 + e);
          });
      });
    }
  }
}

module.exports = AuthController;