// const Express = require('express');
const express = require("express");
const { response } = require("../app");
const router = express.Router();
const Person = require("../models/Person");

// Find all
router.get("/", (request, response) => {
  Person.find({}, (err, people) => {
    if (err) {
      return;
    }
    response.send(people);
  });
});

// Find one
router.get("/:id", (request, response) => {
  Person.findById(request.params.id, (err, person) => {
    if (err) {
      return;
    }

    response.send(person);
  });

  // Modo 2
  /* Person.findOne(
    {
      _id: request.params.id,
    },
    (err, person) => {
      if (err) {
        return;
      }

      response.send(person);
    }
  ); */
});

module.exports = router;
