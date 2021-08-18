var mongoose = require("mongoose");
var User = require("./user");
var Work = require("./work");
var SCHEMA = mongoose.Schema;

const reportSchema = new SCHEMA({
  userid: {
    type: SCHEMA.Types.ObjectId,
    ref: User,
  },
  workid: {
    type: SCHEMA.Types.ObjectId,
    ref: Work,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status:{
      type:String,
      default:"In progress"
  }
});

const REPORT = mongoose.model("reported", reportSchema);
module.exports = REPORT;
