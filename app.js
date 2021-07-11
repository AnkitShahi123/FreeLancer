<<<<<<< HEAD
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/images',express.static(__dirname+'/images'));

app.use(cors());

const db = require("./database/db");
const user = require("./routes/user");

app.use(user);

app.listen(89, () => {
=======
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

app.listen(process.env.PORT, () => {
>>>>>>> 8baf73ee0d84e45cedbc36c8314e135fddc95f84
  console.log("Server running at 89.");
});
