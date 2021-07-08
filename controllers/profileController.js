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

  ////edit
  editProfileFreelancer(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const address = req.body.address;
    const phone = req.body.phone;
    const projects = req.body.projects;
    const experience = req.body.experience;
    const userbio = req.body.userbio;
    const id = req.params.id;
    user
      .findOneAndUpdate(
        { _id: id },
        {
          firstname: firstname,
          lastname: lastname,
          age: age,
          address: address,
          phone: phone,
          userbio: userbio,
          projects: projects,
          experience: experience,
        }
      )
      .then(function (data) {
        res
          .status(200)
          .json({ success: true, message: "Updated Sucessfully", data });
        console.log("Updated successfully");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  editResume(req, res) {
    if (req.file == undefined) {
      return res.status();
    }
    const resume = req.file.path;
    const id = req.params.id;
    user
      .findByIdAndUpdate(
        { _id: id },
        {
          resume: resume,
        }
      )

      .then(function (result) {
        res
          .status(200)
          .json({ message: "Resume has been updated sucessfully" });
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }
}

module.exports = profileController;
