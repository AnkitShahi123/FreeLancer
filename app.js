const mongoose = require("mongoose");
const express = require("express");

require('dotenv').config();

const cors = require("cors");

const db = require("./database/db");
const user = require("./routes/user");
const profileRoute = require("./routes/profileRoute");

const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use("/images", express.static(__dirname + "/images"));
app.use(cors());
app.use(user);
app.use(profileRoute);
app.use(workRoute);

app.listen(process.env.PORT||89, () => {
  console.log("Server running at 89.");
});
