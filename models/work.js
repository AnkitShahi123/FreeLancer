const mongoose = require("mongoose");
var User = require("./user");
const SCHEMA = mongoose.Schema;

const workSchema = new SCHEMA({
  worktitle: {
    type: String,
     required: true
  },
  worktype: {
    type: String,
    required: true
  },
  workdescription: {
    type: String,
     required: true,
  },
  requiredexperience: {
    type: String,
    required: true
  },
  estimatedprice: {
    type: String,
    required: true
  },
  photo: {
    type: String,
//    default: "user.jpg"
  },
  creator: {
    type: SCHEMA.Types.ObjectId,
    ref: User,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WORK = mongoose.model("work", workSchema);
module.exports = WORK;
