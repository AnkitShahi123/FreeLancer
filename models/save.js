var mongoose = require("mongoose");
var User = require("./user");
var Work = require("./work");
var SCHEMA = mongoose.Schema;

const saveSchema = new SCHEMA({
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
});

const SAVE = mongoose.model("saved", saveSchema);
module.exports = SAVE;
