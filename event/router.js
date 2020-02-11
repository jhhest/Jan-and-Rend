const { Router } = require("express");
const Event = require("./model");

const router = new Router();

/**
 * Crud endpoint /event
 */

router.post("/event", (request, response, next) => {
  Event.create(request.body)
  .then(result => response.send(result)).catch(next)
}
)
router.get("/event", (request, response, next) => {
  Event.findAll().then( result => response.send(result))
});

module.exports = router;
