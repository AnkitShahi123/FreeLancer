const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const db = require("./database/db");

app.listen(89, () => {
  console.log("Server running at 89.");
});
