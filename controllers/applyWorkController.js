const work = require("../models/work");
const applywork = require("../models/apply");
const user = require("../models/user");
const applyWorkControllers = require("../controllers/applyWorkController");

class applyWorkController {
  applywork(req, res) {
    const userid = req.user;
    const workid = req.params.id;
    const myamount = req.body.myamount;
    const workdata = new applywork({
      userid: userid,
      workid: workid,
      myamount: myamount,
    });
    workdata
      .save()
      .then(function (data) {
        res.status(201).json(data);
        console.log("applied");
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  showStatus(req, res) {
    const userid = req.user;
    const appliedid = req.params.id;
    const confirmStatus = req.params.confirmStatus;
    applywork
      .findOne({
        _id: appliedid,
      })
      .then(function (data) {
        res.status(200).json(data.confirmStatus);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  showMyApplied(req, res) {
    const userid = req.user;
    var arr = [];
    applywork
      .find({
        userid: userid,
      })
      .populate("userid")
      .populate("workid")
      .then(function (data) {
        res.status(200).json(data);
        console.log("applied is "+data.userid);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  deleteMyApplied(req, res) {
    const id = req.params.id;
    applywork
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

  showWhoApplied(req, res) {
    const workid = req.params.id;
    const userid = req.user;
    applywork
      .find({
        workid: workid,
      }).populate('userid')
      .populate('workid')
      .then(function (data) {
        res.status(200).json(data);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  approvework(req, res) {
    const confirmStatus = req.body.confirmStatus;
    const appliedid = req.params.id;
    applywork
      .updateOne({ _id: appliedid }, { confirmStatus: confirmStatus })
      .then(function (result) {
        res.status(201).json({ message: "applied status has been updated" });
        console.log("Status changed"+result.confirmStatus)
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  startWorkTimer(req, res){
    const timerStatus = req.body.timerStatus;
    const appliedid = req.params.id;
    applywork
      .updateOne({ _id: appliedid }, { timerStatus: timerStatus })
      .then(function (result) {
        res.status(201).json({ message: "Work has been started" });
        console.log("Status changed"+result.timerStatus)
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }
  
  stopWorkTimer(req, res){
    const timerStatus = req.body.timerStatus;
    const appliedid = req.params.id;
    applywork
      .updateOne({ _id: appliedid }, { timerStatus: timerStatus })
      .then(function (result) {
        res.status(201).json({ message: "Work has been stopped" });
        console.log("Status changed"+result.timerStatus)
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  // showMyStarted(req, res) {
    
  //   const userid = req.user;
  //   applywork
  //     .find({
  //       timerStatus: "Status",
  //     }).populate('userid')
  //     .populate('workid')
  //     .then(function (data) {
  //       res.status(200).json(data);
  //     })
  //     .catch(function (e) {
  //       res.status(500).json({ message: e });
  //     });
  // }

}

module.exports = applyWorkController;
