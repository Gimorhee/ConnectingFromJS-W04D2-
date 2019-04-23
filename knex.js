const arg = process.argv[2];
const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.select('*').from('famous_people')
  .where('first_name', arg)
  .orWhere('last_name', arg)
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
  });