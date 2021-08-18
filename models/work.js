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
  skills: {
    type: String,
    required: true
  },
  vacancy: {
    type: Number,
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
  workStatus: {
    type: String,
    default: "Active",
  },
  approval:{
    type:String,
    default:"Not reviewed by admin"
  }
});

const WORK = mongoose.model("work", workSchema);
module.exports = WORK;
