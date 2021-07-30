const work = require("../models/work");
const saveWork = require("../models/save");
const user = require("../models/user");
const saveWorkControllers = require("../controllers/saveWorkController");
class saveWorkController {
  saveWork(req, res) {
    const userid = req.user;
    const workid = req.params.id;
    const workdata = new saveWork({
      userid: userid,
      workid: workid,
    });
    workdata
      .save()
      .then(function (data) {
        res.status(201).json(data);
        console.log("saved");
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  

  showMySaved(req, res) {
    const userid = req.user;
    var arr = [];
    saveWork
      .find({
        userid: userid,
      })
      .populate("userid")
      .populate("workid")
      .then(function (data) {
        res.status(200).json(data);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  deleteMySaved(req, res) {
    const id = req.params.id;
    saveWork
      .deleteOne({
        _id: id,
      })
      .then(function (data) {
        res.status(200).json(data);
        console.log("deleted successfully");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  
}

module.exports = saveWorkController;
