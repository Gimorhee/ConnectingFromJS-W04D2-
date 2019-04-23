const arg = process.argv.slice(2);
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const findPerson = (name, cb) => {
  client.query("SELECT * FROM famous_people WHERE first_name = $1::text OR last_name = $1::text", name, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    cb(err, result.rows);
  });
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  findPerson(arg, (err, result) => {
    let count = 1;

    if (err) {
      return console.error("error!", err);
    }
    console.log("Searching...");
    console.log(`Found ${result.length} person(s) by the name '${arg}'`);
    result.forEach(person => {
      console.log(`- ${count}: ${person.first_name} ${person.last_name}, born ${person.birthdate}`);
      count++;
    });
    client.end();
  });
});
