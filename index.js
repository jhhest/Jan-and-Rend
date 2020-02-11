const express = require("express");
const app = express();
const db = require("./db");
const Event = require("./event/model");
const cors = require("cors");
const eventRouter = require("./event/router");

app.use(cors(), express.json(), eventRouter);

port = 4000;
app.listen(port, () =>
  console.log(`
/**
 * The events-server is listening to:${port}
 **/`)
);
