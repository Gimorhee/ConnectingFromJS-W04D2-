const pg = require("pg");
const settings = require("./settings"); // settings.json
const fName = process.argv[2];
const lName = process.argv[3];
const birthDate = process.argv[4];

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.insert({
  first_name: fName,
  last_name: lName,
  birthdate: birthDate
})
  .into('famous_people')
  .asCallback((err) => {
    if(err){
      console.log(err);
    }
    console.log(`${fName} ${lName}, born in ${birthDate} has been inserted.`);
  })
  .asCallback(() => {
    knex.destroy();
  });


