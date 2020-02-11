const Sequelize = require("sequelize");
const db = new Sequelize(
  "postgres://postgres:password@localhost:5432/postgres"
);

db.sync()
  .then(() => console.log("database connected."))
  .catch(err => console.error(err));
module.exports = db;
