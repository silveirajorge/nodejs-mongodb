// const Express = require('express');
const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.get("/", (request, response) => response.send("Hello"));

module.exports = router;
