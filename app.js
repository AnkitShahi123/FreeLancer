const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/db");
const user = require("./routes/user");
const profileRoute = require("./routes/profileRoute");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use("/images", express.static(__dirname + "/images"));
app.use(cors());
app.use(user);
app.use(profileRoute);

app.listen(89, () => {
  console.log("Server running at 89.");
});
