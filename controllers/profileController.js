const user = require("../models/user");

class profileController {
  showProfileClient(req, res) {
    const id = req.user;
    user
      .findOne({ _id: id })
      .then(function (data) {
        res.status(200).json(data);
        console.log(data);
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  showProfileFreelancer(req, res) {
    const id = req.user;
    user
      .findOne({ _id: id })
      .then(function (data) {
        res.status(200).json(data);
        console.log(data._id);
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

}

module.exports = profileController;
