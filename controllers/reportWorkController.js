const work = require("../models/work");
const reportWork = require("../models/report");
const user = require("../models/user");
const reportWorkControllers = require("../controllers/reportWorkController");
class reportWorkController {
  reportWork(req, res) {
    const userid = req.user;
    const workid = req.params.id;
    const workdata = new reportWork({
      userid: userid,
      workid: workid,
    });
    workdata
      .save()
      .then(function (data) {
        res.status(201).json(data);
        console.log("reported");
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  

  showMyReported(req, res) {
    const userid = req.user;
    var arr = [];
    reportWork
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

  deleteMyReport(req, res) {
    const id = req.params.id;
    reportWork
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

module.exports = reportWorkController;
