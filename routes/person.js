// const Express = require('express');
const express = require("express");
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
});

// Modo 2 - Ideal para buscar registros quando há mais de um parâmetro e/ou quando não há o ID;
/* router.get("/:id", (request, response) => {
Person.findOne(
  {
    _id: request.params.id,
  },
  (err, person) => {
    if (err) {
      return;
    }

    response.send(person);
  }
);
}); */

// Create
/* router.post("/", (request, response) => {
  Person.create(
    {
      name: {
        firstname: "Alzirene",
        lastname: "Ferreira",
      },
      age: 61,
    },
    (err, person) => {
      if (err) {
        return;
      }
      response.send(person);
    }
  );
}); */

// Modo 2 - Metodo Save
router.post("/", (request, response) => {
  const person = new Person({
    name: {
      firstname: "Luiz Paulo",
      lastname: "Esteves",
    },
    age: 30,
  });

  person.save(person, (err, person) => {
    if (err) {
      return;
    }
    response.send(person);
  });
});

// Update

// Modo 1 - Encontrar apenas o que corresponde ao ID
/* router.put("/:id", (request, response) => {
  Person.findByIdAndUpdate(
    request.params.id,
    {
      name: {
        firstname: "Giselle",
        lastname: "Silveira",
      },
    },
    (err, person) => {
      if (err) {
        return;
      }

      response.send(person);
    }
  );
}); */

// Modo 2 - Atualizando pelo parâmetro passado, neste caso, o ID
router.put("/:id", (request, response) => {
  Person.findOneAndUpdate(
    {
      _id: request.params.id,
    },
    {
      name: {
        firstname: "Jorge",
        lastname: "Silveira",
      },
    },
    (err, person) => {
      if (err) {
        return;
      }

      response.send(person);
    }
  );
});

router.delete("/:id", (request, response) => {
  Person.findOneAndRemove(
    {
      _id: request.params.id,
    },
    (err, person) => {
      if (err) {
        return;
      }

      response.send(person);
    }
  );
});

module.exports = router;
