const knex = require("knex")({
  client: "pg",
  connection: {
    host: "192.168.1.64",
    port: 3330,
    database: "postgres",
    user: "postgres",
    password: "senha",
  },
});

module.exports = knex;
