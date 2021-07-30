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

// Create
router.post("/", (request, response) => {
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
});
