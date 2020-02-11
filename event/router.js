const { Router } = require("express");
const Event = require("./model");

const router = new Router();

/**
 * Crud endpoint /event
 */

// Create an event.
router.post("/event", (request, response, next) => {
  Event.create(request.body)
    .then(result => response.send(result))
    .catch(next);
});

// Read - Get all requests.
router.get("/event", (request, response, next) => {
  Event.findAll().then(result => response.send(result));
});

// Read - Get one request by id.
router.get("/event/:id", (request, response, next) => {
  console.log("request.body.id", request.body.id)
  Event.findByPk(request.params.id)
    .then(result => response.send(result))
    .catch(next);
});

// Update 
// http put :4000/event/1 name=changed
router.put(
  '/event/:id',
  (request, response, next) => Event
    .findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
)
// Delete
router.delete("/event/:id", (request, response, next) =>
  Event.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;
