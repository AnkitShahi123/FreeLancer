const work = require("../models/work");

class workController {
  addWork(req, res) {
    if (req.file == undefined) {
      console.log("routed here");
      return res.status();
    }
    const worktitle = req.body.worktitle;
    const worktype = req.body.worktype;
    const workdescription = req.body.workdescription;
    const requiredexperience = req.body.requiredexperience;
    const estimatedprice = req.body.estimatedprice;
    const creator = req.user;
    const path = req.file.path;

    const workdata = new work({
      worktitle: worktitle,
      worktype: worktype,
      workdescription: workdescription,
      requiredexperience: requiredexperience,
      estimatedprice: estimatedprice,
      photo: path,
      creator: creator,
    });
    workdata
      .save()
      .then(function (result) {
        res.status(201).json({ message: "work has been added" });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  //to delete a work
  deletework(req, res) {
    const pid = req.params.pid;
    work
      .deleteOne({ _id: pid })
      .then(function (result) {
        res.status(200).json({ message: "work has been deleted" });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }
  updatework(req, res) {
    const worktitle = req.body.worktitle;
    const worktype = req.body.worktype;
    const workdescription = req.body.workdescription;
    const requiredexperience = req.body.requiredexperience;
    const estimatedprice = req.body.estimatedprice;
    const id = req.body.id;

    work
      .updateOne(
        { _id: id },
        {
          worktitle: worktitle,
          worktype: worktype,
          workdescription: workdescription,
          requiredexperience: requiredexperience,
          estimatedprice: estimatedprice,
        }
      )
      .then(function (result) {
        res.status(200).json({ message: "work has been updated" });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }
  
  
  getSinglework(req, res) {
    const id = req.params.id;
    work
      .findOne({ _id: id })
      .populate("creator")
      .then(function (data) {
        res.status(200).json(data);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }
}

module.exports = workController;
