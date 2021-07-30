var mongoose = require("mongoose");
var User = require("./user");
var Work = require("./work");
var SCHEMA = mongoose.Schema;

const applySchema = new SCHEMA({
  userid: {
    type: SCHEMA.Types.ObjectId,
    ref: User,
  },
  workid: {
    type: SCHEMA.Types.ObjectId,
    ref: Work,
  },
  myamount:{
    type: String,
    // required: true
  },
  confirmStatus: {
    type: String,
    default: "pending",
  },
  video: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const APPLY = mongoose.model("applied", applySchema);
module.exports = APPLY;
